import React from "react";
import Logo from "./Logo";
import type { Lang } from "@/data/applications";
import { applications } from "@/data/applications";
import { CONTACT_EMAIL, CONTACT_PHONE, footerCopy, nav, socialLinks } from "@/data/home";

const SiteFooter = ({ lang }: { lang: Lang }) => {
  const copy = footerCopy[lang];
  const socials = socialLinks.filter((s) => s.href);

  return (
    <footer id="contact_us" className="w-full pt-20 scroll-mt-28">
      <div className="rounded-3xl border border-line/10 bg-surface shadow-sm dark:shadow-none p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
        <div className="flex-1">
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-heading-gradient pb-2">
            {copy.ctaTitle}
          </h2>
          <p className="text-body text-base md:text-lg">{copy.ctaBody}</p>
        </div>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(copy.ctaButton)}`}
          className="shrink-0 inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-7 py-3.5 text-sm font-semibold text-black hover:bg-yellow-300 transition-colors"
        >
          {copy.ctaButton}
          <span aria-hidden>→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo id="footer-logo" className="h-14 w-auto mb-5 text-ink" />
          <p className="text-body leading-relaxed max-w-sm">{copy.about}</p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xs uppercase tracking-[0.2em] text-subtle mb-4">{copy.company}</h3>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-ink/80 hover:text-brand transition-colors">
                  {item.label[lang]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs uppercase tracking-[0.2em] text-subtle mb-4">{copy.applications}</h3>
          <ul className="space-y-3">
            {applications.map((app) => (
              <li key={app.id}>
                <a href="#applications" className="text-ink/80 hover:text-brand transition-colors">
                  {app.title[lang]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs uppercase tracking-[0.2em] text-subtle mb-4">{copy.contact}</h3>
          <address className="not-italic space-y-3 text-ink/80">
            <p className="leading-relaxed">{copy.address}</p>
            <p>
              <a href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`} className="hover:text-brand transition-colors">
                {CONTACT_PHONE}
              </a>
            </p>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-brand transition-colors">
                {CONTACT_EMAIL}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-4 border-t border-line/10 py-8 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} OpenMind Robotics. {copy.rights}
        </p>
        {socials.length > 0 && (
          <ul className="flex gap-6">
            {socials.map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
};

export default SiteFooter;
