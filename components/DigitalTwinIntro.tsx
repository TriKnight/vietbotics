import React from "react";
import type { Lang } from "@/data/applications";
import { DIGITAL_TWIN_VIDEO, digitalTwinBenefits, digitalTwinCopy } from "@/data/applicationsPage";
import SectionHeader from "./SectionHeader";

const DigitalTwinIntro = ({ lang }: { lang: Lang }) => {
  const copy = digitalTwinCopy[lang];

  return (
    <section id="digital-twin" className="w-full py-20 scroll-mt-28">
      <SectionHeader eyebrow={copy.eyebrow} heading={copy.heading} />

      <figure className="mx-auto max-w-6xl">
        {/* Split-screen source: simulation on the left half, the physical robot on the right */}
        <div className="relative overflow-hidden rounded-2xl border border-line/10 bg-black aspect-[1280/504] shadow-xl dark:shadow-none">
          <video
            src={DIGITAL_TWIN_VIDEO.src}
            poster={DIGITAL_TWIN_VIDEO.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
          <span className="absolute left-3 top-3 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[11px] sm:text-xs font-medium text-neutral-100">
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-yellow-400 align-middle" aria-hidden />
            {copy.simLabel}
          </span>
          <span className="absolute left-[calc(48%+0.75rem)] top-3 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[11px] sm:text-xs font-medium text-neutral-100">
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 align-middle" aria-hidden />
            {copy.realLabel}
          </span>
        </div>
        <figcaption className="mt-3 text-center text-sm text-subtle">{copy.caption}</figcaption>
      </figure>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
        <p className="font-display text-xl md:text-2xl font-semibold leading-snug tracking-[-0.01em] text-ink text-balance">
          {copy.lead}
        </p>
        <p className="text-body text-base md:text-lg leading-relaxed">{copy.body}</p>
      </div>

      <div className="mt-24">
        <SectionHeader eyebrow={copy.benefitsEyebrow} heading={copy.benefitsHeading} subheading={copy.benefitsSubheading} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-line/10 bg-line/10">
          {digitalTwinBenefits.map(({ icon: Icon, title, description }) => (
            <div key={title.en} className="bg-page p-8 hover:bg-surface transition-colors">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
                <Icon size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">{title[lang]}</h3>
              <p className="text-body leading-relaxed text-sm md:text-base">{description[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalTwinIntro;
