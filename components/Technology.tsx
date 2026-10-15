import React from "react";
import Image from "next/image";
import type { Lang } from "@/data/applications";
import { technologies, technologyCopy } from "@/data/home";
import SectionHeader from "./SectionHeader";

const Technology = ({ lang }: { lang: Lang }) => {
  const copy = technologyCopy[lang];

  return (
    <section id="technology" className="w-full py-20 scroll-mt-28">
      <SectionHeader eyebrow={copy.eyebrow} heading={copy.heading} subheading={copy.subheading} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {technologies.map((tech, i) => (
          <article
            key={tech.image}
            className="group flex flex-col rounded-2xl overflow-hidden border border-line/10 bg-surface hover:border-line/25 transition-colors"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-line/5">
              <Image
                src={tech.image}
                alt={tech.title[lang]}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-brand mb-2">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-xl md:text-2xl font-semibold tracking-[-0.01em] text-ink mb-3">{tech.title[lang]}</h3>
              <p className="text-body leading-relaxed mb-5">{tech.description[lang]}</p>
              <ul className="mt-auto space-y-2 border-t border-line/10 pt-5">
                {tech.points[lang].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-ink/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Technology;
