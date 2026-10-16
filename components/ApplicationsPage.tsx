import React from "react";
import type { Lang } from "@/data/applications";
import { pageHeroCopy, pageStats, processCopy, processSteps } from "@/data/applicationsPage";
import { CONTACT_EMAIL } from "@/data/home";
import SiteNav from "./SiteNav";
import SectionHeader from "./SectionHeader";
import DigitalTwinIntro from "./DigitalTwinIntro";
import ApplicationCatalog from "./ApplicationCatalog";
import SiteFooter from "./SiteFooter";

const PageHero = ({ lang }: { lang: Lang }) => {
  const copy = pageHeroCopy[lang];

  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-line/10 bg-surface mt-24 md:mt-28 px-6 py-16 md:px-12 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgb(var(--brand)/0.12)_0%,transparent_60%)]" />
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand mb-5">{copy.eyebrow}</p>
        <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-[-0.03em] text-heading-gradient pb-3 text-balance">
          {copy.heading}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-body text-base md:text-lg leading-relaxed">{copy.subheading}</p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(copy.primaryCta)}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-7 py-3.5 text-sm font-semibold text-black hover:bg-yellow-300 transition-colors"
          >
            {copy.primaryCta}
            <span aria-hidden>→</span>
          </a>
          <a
            href="#catalog"
            className="inline-flex items-center justify-center rounded-lg border border-line/25 px-7 py-3.5 text-sm font-semibold text-ink hover:border-line/50 transition-colors"
          >
            {copy.secondaryCta}
          </a>
        </div>
      </div>

      <dl className="mx-auto mt-16 grid max-w-5xl grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-line/10 bg-line/10">
        {pageStats.map((stat) => (
          <div key={stat.label.en} className="bg-surface px-4 py-6 text-center">
            <dt className="sr-only">{stat.label[lang]}</dt>
            <dd className="font-display text-xl sm:text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-ink whitespace-nowrap">{stat.value}</dd>
            <dd className="mt-1 text-xs md:text-sm text-subtle">{stat.label[lang]}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

const CommissioningProcess = ({ lang }: { lang: Lang }) => {
  const copy = processCopy[lang];

  return (
    <section id="process" className="w-full py-20 scroll-mt-28">
      <SectionHeader eyebrow={copy.eyebrow} heading={copy.heading} subheading={copy.subheading} />

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {processSteps.map((step, i) => (
          <li key={step.title.en} className="relative rounded-2xl border border-line/10 bg-surface p-7">
            <span className="font-display text-4xl font-semibold text-brand/80">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 font-display text-lg font-semibold text-ink mb-2">{step.title[lang]}</h3>
            <p className="text-body leading-relaxed text-sm md:text-base">{step.description[lang]}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12 flex flex-col items-center gap-3 text-center">
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(copy.cta)}`}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-7 py-3.5 text-sm font-semibold text-black hover:bg-yellow-300 transition-colors"
        >
          {copy.cta}
          <span aria-hidden>→</span>
        </a>
        <p className="text-sm text-subtle">{copy.note}</p>
      </div>
    </section>
  );
};

const ApplicationsPage = ({ lang }: { lang: Lang }) => (
  <main className="relative bg-page flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <SiteNav lang={lang} />
      <PageHero lang={lang} />
      <DigitalTwinIntro lang={lang} />
      <ApplicationCatalog lang={lang} />
      <CommissioningProcess lang={lang} />
      <SiteFooter lang={lang} />
    </div>
  </main>
);

export default ApplicationsPage;
