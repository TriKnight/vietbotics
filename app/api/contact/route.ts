import { NextResponse } from "next/server";

// Resend only sends from verified domains. Set RESEND_FROM (e.g. "OpenMind Robotics <website@openmindrobotics.com>")
// once openmindrobotics.com is verified in Resend; until then the shared test sender is used.
const FROM = process.env.RESEND_FROM || "OpenMind Robotics Website <onboarding@resend.dev>";
const TO = process.env.CONTACT_EMAIL || "contact@openmindrobotics.com";

const limits = { name: 120, email: 200, company: 200, phone: 50, message: 5000, topic: 200 } as const;
type Field = keyof typeof limits;

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field, so pretend success for bots
  if (typeof body.website === "string" && body.website) return NextResponse.json({ ok: true });

  const data = {} as Record<Field, string>;
  for (const key of Object.keys(limits) as Field[]) {
    const value = typeof body[key] === "string" ? (body[key] as string).trim() : "";
    data[key] = value.slice(0, limits[key]);
  }

  if (!data.name || !data.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ error: "Please provide your name, a valid email and a message" }, { status: 400 });
  }

  const topic = data.topic || "Website enquiry";
  const rows: [string, string][] = [
    ["Request", topic],
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company],
    ["Phone", data.phone],
  ];
  const html = `
    <h2 style="font-family:sans-serif">New request from openmindrobotics.com</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${rows
        .filter(([, v]) => v)
        .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td style="padding:4px 0"><b>${escapeHtml(v)}</b></td></tr>`)
        .join("")}
    </table>
    <p style="font-family:sans-serif;color:#666;margin-top:20px">Message</p>
    <p style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(data.message)}</p>`;
  const text = [...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`), "", data.message].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: data.email,
      subject: `[Website] ${topic} – ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return NextResponse.json({ error: "Could not send your message" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
