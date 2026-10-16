"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/utils/cn";
import SectionHeader from "./SectionHeader";
import { useAutoplayInView } from "./Applications";
import { Application, CategoryId, Lang, applications, categories } from "@/data/applications";
import { catalogCopy } from "@/data/applicationsPage";
import { CONTACT_EMAIL } from "@/data/home";

const ApplicationRow = ({ app, lang, index }: { app: Application; lang: Lang; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const copy = catalogCopy[lang];
  const category = categories.find((c) => c.id === app.category);
  useAutoplayInView(videoRef, app.video);

  return (
    <article
      id={app.id}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center scroll-mt-28"
    >
      <div
        className={cn(
          "relative rounded-2xl overflow-hidden border border-line/10 bg-line/5 aspect-video",
          index % 2 === 1 && "lg:order-2"
        )}
      >
        <video
          ref={videoRef}
          src={app.video}
          poster={app.poster}
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs text-neutral-100">
          {copy.videoBadge}
        </span>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-brand mb-3">
          {String(index + 1).padStart(2, "0")} · {category?.label[lang]}
        </p>
        <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-ink mb-4 text-balance">
          {app.title[lang]}
        </h3>
        <p className="text-body text-base md:text-lg leading-relaxed mb-6">{app.description[lang]}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
          {app.features[lang].map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm md:text-base text-ink/90">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" aria-hidden />
              {feature}
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${copy.cta}: ${app.title[lang]}`)}`}
          className="inline-flex items-center gap-2 rounded-lg border border-brand px-6 py-3 text-sm font-semibold text-brand hover:border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors"
        >
          {copy.cta}
          <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
};

const ApplicationCatalog = ({ lang }: { lang: Lang }) => {
  const copy = catalogCopy[lang];
  const [filter, setFilter] = useState<CategoryId | "all">("all");
  const visible = filter === "all" ? applications : applications.filter((a) => a.category === filter);

  return (
    <section id="catalog" className="w-full py-20 scroll-mt-28">
      <SectionHeader eyebrow={copy.eyebrow} heading={copy.heading} subheading={copy.subheading} />

      <div
        role="tablist"
        className="sticky top-16 md:top-20 z-30 -mx-5 sm:mx-0 mb-14 flex gap-2 overflow-x-auto bg-page/85 backdrop-blur-md px-5 sm:px-0 py-3 md:justify-center [scrollbar-width:none]"
      >
        {categories.map((c) => {
          const count = c.id === "all" ? applications.length : applications.filter((a) => a.category === c.id).length;
          return (
            <button
              key={c.id}
              role="tab"
              aria-selected={filter === c.id}
              onClick={() => setFilter(c.id)}
              className={cn(
                "shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-colors border",
                filter === c.id
                  ? "bg-ink text-page border-ink"
                  : "bg-transparent text-ink/80 border-line/15 hover:border-line/40 hover:text-ink"
              )}
            >
              {c.label[lang]} <span className="opacity-60">({count})</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-20 md:gap-28">
        {visible.map((app, i) => (
          <ApplicationRow key={app.id} app={app} lang={lang} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ApplicationCatalog;
