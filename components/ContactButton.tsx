"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Lang } from "@/data/applications";
import { CONTACT_EMAIL } from "@/data/home";
import { contactFormCopy } from "@/data/contact";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-lg border border-line/15 bg-page px-3.5 py-2.5 text-sm text-ink placeholder:text-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

const ContactDialog = ({ lang, topic, onClose }: { lang: Lang; topic: string; onClose: () => void }) => {
  const copy = contactFormCopy[lang];
  const [status, setStatus] = useState<Status>("idle");
  const firstField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstField.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const fields = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, topic }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const label = (text: string, optional?: boolean) => (
    <span className="mb-1.5 block text-sm font-medium text-ink">
      {text}
      {optional ? <span className="font-normal text-subtle"> ({copy.optional})</span> : <span className="text-brand"> *</span>}
    </span>
  );

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-dialog-title"
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border border-line/10 bg-surface p-6 sm:p-8 text-left shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={copy.close}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-subtle hover:bg-line/10 hover:text-ink"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {status === "sent" ? (
          <div className="py-10 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-black">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 id="contact-dialog-title" className="font-display text-2xl font-semibold text-ink mb-2">{copy.successTitle}</h2>
            <p className="text-body mb-8">{copy.successBody}</p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-yellow-400 px-7 py-3 text-sm font-semibold text-black hover:bg-yellow-300 transition-colors"
            >
              {copy.close}
            </button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <p className="pr-10 text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-2">{topic}</p>
            <h2 id="contact-dialog-title" className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-ink mb-2">
              {copy.heading}
            </h2>
            <p className="text-body text-sm mb-6">{copy.subheading}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                {label(copy.name)}
                <input ref={firstField} name="name" required maxLength={120} autoComplete="name" className={inputClass} />
              </label>
              <label className="block">
                {label(copy.email)}
                <input name="email" type="email" required maxLength={200} autoComplete="email" className={inputClass} />
              </label>
              <label className="block">
                {label(copy.company, true)}
                <input name="company" maxLength={200} autoComplete="organization" className={inputClass} />
              </label>
              <label className="block">
                {label(copy.phone, true)}
                <input name="phone" type="tel" maxLength={50} autoComplete="tel" className={inputClass} />
              </label>
              <label className="block sm:col-span-2">
                {label(copy.message)}
                <textarea
                  name="message"
                  required
                  rows={4}
                  maxLength={5000}
                  placeholder={copy.messagePlaceholder}
                  className={`${inputClass} resize-y`}
                />
              </label>
              {/* Honeypot for spam bots, hidden from people and screen readers */}
              <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
            </div>

            {status === "error" && (
              <p role="alert" className="mt-4 rounded-lg bg-red-500/10 px-3.5 py-2.5 text-sm text-red-600 dark:text-red-400">
                {copy.error}{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-7 py-3.5 text-sm font-semibold text-black hover:bg-yellow-300 disabled:opacity-60 transition-colors"
            >
              {status === "sending" ? copy.sending : copy.submit}
              {status !== "sending" && <span aria-hidden>→</span>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// A button that opens the contact form; `topic` is shown above the form and becomes the email subject.
const ContactButton = ({
  lang,
  topic,
  className,
  children,
}: {
  lang: Lang;
  topic: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      {open && createPortal(<ContactDialog lang={lang} topic={topic} onClose={close} />, document.body)}
    </>
  );
};

export default ContactButton;
