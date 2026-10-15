"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import SectionHeader from "./SectionHeader";
import {
  Application,
  CategoryId,
  Lang,
  applications,
  applicationsCopy,
  categories,
} from "@/data/applications";

// Plays the video only while it is on screen, so six 1080p clips don't all decode at once.
const useAutoplayInView = (ref: React.RefObject<HTMLVideoElement>, src: string) => {
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [ref, src]);
};

const FeaturedApplication = ({ app, lang }: { app: Application; lang: Lang }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const copy = applicationsCopy[lang];
  const category = categories.find((c) => c.id === app.category);
  useAutoplayInView(videoRef, app.video);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
      <div className="lg:col-span-3 relative rounded-2xl overflow-hidden border border-line/10 bg-line/5 aspect-video">
        <video
          ref={videoRef}
          key={app.id}
          src={app.video}
          poster={app.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs text-neutral-100">
          {copy.simulatedNote}
        </span>
      </div>

      <div className="lg:col-span-2">
        <p className="text-xs uppercase tracking-[0.2em] text-brand mb-3">
          {copy.featuredLabel} · {category?.label[lang]}
        </p>
        <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-ink mb-4 text-balance">
          {app.title[lang]}
        </h3>
        <p className="text-body text-base md:text-lg leading-relaxed mb-6">
          {app.description[lang]}
        </p>
        <ul className="flex flex-wrap gap-2 mb-8">
          {app.features[lang].map((feature) => (
            <li
              key={feature}
              className="rounded-full border border-line/15 bg-line/5 px-3 py-1.5 text-sm text-ink/90"
            >
              {feature}
            </li>
          ))}
        </ul>
        <a
          href="#contact_us"
          className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-300 transition-colors"
        >
          {copy.cta}
          <span aria-hidden>→</span>
        </a>
      </div>
    </div>
  );
};

const ApplicationTile = ({
  app,
  lang,
  active,
  onSelect,
}: {
  app: Application;
  lang: Lang;
  active: boolean;
  onSelect: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const category = categories.find((c) => c.id === app.category);

  const play = () => videoRef.current?.play().catch(() => {});
  const stop = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <button
      type="button"
      onClick={onSelect}
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
      aria-pressed={active}
      className={cn(
        "group text-left rounded-2xl overflow-hidden border bg-surface transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400",
        active
          ? "border-yellow-400/70 shadow-[0_0_0_1px_rgba(250,204,21,0.4)]"
          : "border-line/10 hover:border-line/30"
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <video
          ref={videoRef}
          src={app.video}
          poster={app.poster}
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.15em] text-subtle mb-1.5">
          {category?.label[lang]}
        </p>
        <h4 className="text-lg font-semibold text-ink">{app.title[lang]}</h4>
      </div>
    </button>
  );
};

const Applications = ({ lang = "en" }: { lang?: Lang }) => {
  const copy = applicationsCopy[lang];
  const [filter, setFilter] = useState<CategoryId | "all">("all");
  const [selectedId, setSelectedId] = useState(applications[0].id);
  const featuredRef = useRef<HTMLDivElement>(null);

  const visible =
    filter === "all" ? applications : applications.filter((a) => a.category === filter);
  const featured = applications.find((a) => a.id === selectedId) ?? applications[0];

  const changeFilter = (id: CategoryId | "all") => {
    setFilter(id);
    const first = id === "all" ? applications[0] : applications.find((a) => a.category === id);
    if (first) setSelectedId(first.id);
  };

  const select = (id: string) => {
    setSelectedId(id);
    featuredRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="applications" className="w-full py-20 scroll-mt-28">
      <SectionHeader eyebrow={copy.eyebrow} heading={copy.heading} subheading={copy.subheading} />

      <div
        role="tablist"
        className="flex gap-2 overflow-x-auto pb-2 mb-12 md:justify-center [scrollbar-width:none]"
      >
        {categories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={filter === c.id}
            onClick={() => changeFilter(c.id)}
            className={cn(
              "shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-colors border",
              filter === c.id
                ? "bg-ink text-page border-ink"
                : "bg-transparent text-ink/80 border-line/15 hover:border-line/40 hover:text-ink"
            )}
          >
            {c.label[lang]}
          </button>
        ))}
      </div>

      <div ref={featuredRef} className="mb-16">
        <FeaturedApplication app={featured} lang={lang} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((app) => (
          <ApplicationTile
            key={app.id}
            app={app}
            lang={lang}
            active={app.id === featured.id}
            onSelect={() => select(app.id)}
          />
        ))}
      </div>

      <div className="mt-20 rounded-3xl border border-line/10 bg-surface shadow-sm dark:shadow-none p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
        <div className="flex-1">
          <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.015em] text-ink mb-3">{copy.simTitle}</h3>
          <p className="text-body text-base md:text-lg">{copy.simBody}</p>
        </div>
        <a
          href={`mailto:contact@openmindrobotics.com?subject=${encodeURIComponent(copy.simCta)}`}
          className="shrink-0 inline-flex items-center justify-center gap-2 rounded-lg border border-brand px-6 py-3 text-sm font-semibold text-brand hover:border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors"
        >
          {copy.simCta}
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
};

export default Applications;
