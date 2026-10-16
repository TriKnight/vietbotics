"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { cn } from "@/utils/cn";
import Logo from "./Logo";
import type { Lang } from "@/data/applications";
import { CONTACT_EMAIL, heroCopy, localeHref, nav } from "@/data/home";

const LanguageSwitch = ({ lang }: { lang: Lang }) => {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (next: Lang) => {
    if (next === lang || !pathname) return;
    const segments = pathname.split("/");
    if (["en", "vn"].includes(segments[1])) segments[1] = next;
    else segments.splice(1, 0, next);
    router.push(segments.join("/"));
  };

  return (
    <div className="flex items-center rounded-lg border border-line/15 p-0.5 text-xs font-semibold">
      {(["en", "vn"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => changeLanguage(l)}
          aria-pressed={l === lang}
          className={cn(
            "flex items-center gap-1.5 rounded-md px-2.5 py-1.5 transition-colors",
            l === lang ? "bg-line/10 text-ink" : "text-body hover:text-ink"
          )}
        >
          <Image src={`/logos/${l}.png`} alt="" width={16} height={16} />
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

const ThemeToggle = ({ lang }: { lang: Lang }) => {
  const { resolvedTheme, setTheme } = useTheme();
  // The theme is only known on the client; render a placeholder until mounted to avoid a hydration mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const label = isDark
    ? lang === "vn" ? "Chuyển sang giao diện sáng" : "Switch to light theme"
    : lang === "vn" ? "Chuyển sang giao diện tối" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-line/15 text-ink hover:bg-line/5 transition-colors"
    >
      {mounted ? isDark ? <FiSun size={18} /> : <FiMoon size={18} /> : <span className="h-[18px] w-[18px]" />}
    </button>
  );
};

const SiteNav = ({ lang }: { lang: Lang }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/10 bg-page/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-5 sm:px-10">
        <a href={`/${lang}`} className="shrink-0" aria-label="OpenMind Robotics">
          <Logo id="nav-logo" className="h-10 md:h-12 w-auto text-ink" />
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {nav.map((item) => (
            <a
              key={item.href}
              href={localeHref(lang, item.href)}
              className="text-ink/80 hover:text-brand transition-colors"
            >
              {item.label[lang]}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle lang={lang} />
          <LanguageSwitch lang={lang} />
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(heroCopy[lang].primaryCta)}`}
            className="rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-yellow-300 transition-colors"
          >
            {heroCopy[lang].primaryCta}
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle lang={lang} />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line/15 text-ink"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line/10 bg-page/95 px-5 pb-6 pt-2">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                href={localeHref(lang, item.href)}
                onClick={() => setOpen(false)}
                className="border-b border-line/5 py-3.5 text-base text-ink/90 hover:text-brand"
              >
                {item.label[lang]}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex items-center justify-between gap-4">
            <LanguageSwitch lang={lang} />
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(heroCopy[lang].primaryCta)}`}
              onClick={() => setOpen(false)}
              className="rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black"
            >
              {heroCopy[lang].primaryCta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
