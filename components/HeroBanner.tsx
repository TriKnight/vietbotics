import React from "react";
import type { Lang } from "@/data/applications";
import { heroCopy } from "@/data/home";
import ContactButton from "./ContactButton";
import SmartVideo from "./SmartVideo";

const HeroBanner = ({ lang }: { lang: Lang }) => {
  const copy = heroCopy[lang];

  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-line/10 mt-24 md:mt-28 min-h-[640px] md:min-h-[720px] flex items-center">
      <SmartVideo
        src="/videos/web/intro"
        poster="/videos/web/posters/intro.webp"
        mode="eager"
        className="absolute inset-0 -z-20 opacity-90"
        mediaClassName="scale-[1.15]"
      />
      {/* The source video has letterbox bars baked in; scale-[1.15] crops them. A soft dark glow behind the centred text keeps it readable while the rest of the video stays bright */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,var(--hero-glow-center)_0%,var(--hero-glow-edge)_70%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-page/80 to-transparent" />

      <div className="w-full px-6 py-20 md:px-12 flex flex-col items-center text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand dark:text-yellow-300 mb-6 dark:drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
          {copy.eyebrow}
        </p>
        <h1 className="dark:drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] font-display text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-[-0.03em] text-heading-gradient pb-3">
          OpenMind Robotics
        </h1>
        <p className="dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mt-2 font-display text-xl sm:text-3xl font-semibold uppercase tracking-[0.12em] text-brand">
          {copy.tagline}
        </p>
        <p className="dark:drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] mt-6 max-w-2xl text-ink text-base md:text-lg leading-relaxed">
          {copy.subheading}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <ContactButton
            lang={lang}
            topic={copy.primaryCta}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-7 py-3.5 text-sm font-semibold text-black hover:bg-yellow-300 transition-colors"
          >
            {copy.primaryCta}
            <span aria-hidden>→</span>
          </ContactButton>
          <a
            href="#applications"
            className="inline-flex items-center justify-center rounded-lg border border-line/25 bg-surface/60 backdrop-blur px-7 py-3.5 text-sm font-semibold text-ink hover:border-line/50 hover:bg-surface/90 transition-colors"
          >
            {copy.secondaryCta}
          </a>
        </div>

        <ul className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-ink dark:drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
          {copy.pillars.map((pillar) => (
            <li key={pillar} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" aria-hidden />
              {pillar}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HeroBanner;
