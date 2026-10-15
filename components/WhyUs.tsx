import React from "react";
import type { Lang } from "@/data/applications";
import { reasons, whyUsCopy } from "@/data/home";
import SectionHeader from "./SectionHeader";

const WhyUs = ({ lang }: { lang: Lang }) => {
  const copy = whyUsCopy[lang];

  return (
    <section id="why_us" className="w-full py-20 scroll-mt-28">
      <SectionHeader eyebrow={copy.eyebrow} heading={copy.heading} subheading={copy.subheading} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line/10 bg-line/10">
        {reasons.map(({ icon: Icon, title, description }) => (
          <div key={title.en} className="group bg-page p-8 hover:bg-surface transition-colors">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
              <Icon size={20} />
            </div>
            <h3 className="font-display text-lg font-semibold text-ink mb-2">{title[lang]}</h3>
            <p className="text-body leading-relaxed text-sm md:text-base">{description[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
