import React from "react";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
// import { FiActivity, FiCpu, FiRefreshCw } from "react-icons/fi";
import type { Lang } from "@/data/applications";
import { localeHref } from "@/data/home";
import {
  AWARD_NEWS_SLUG,
  aboutAward,
  aboutCollaboration,
  // aboutDeployment,
  aboutHero,
  aboutResearch,
  aboutStats,
  aboutTechnologies,
  aboutTechnologyCopy,
  aboutVision,
  aboutWhoWeAre,
  collaborationAreas,
  // deploymentPrinciples,
  // deploymentSteps,
  expertise,
} from "@/data/about";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import SectionHeader from "./SectionHeader";
import ContactButton from "./ContactButton";

// const principleIcons = [FiActivity, FiCpu, FiRefreshCw];

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gray-700 dark:text-brand mb-4">{children}</p>
);

const Hero = ({ lang }: { lang: Lang }) => {
  const copy = aboutHero[lang];

  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-semibold tracking-[-0.03em] text-heading-gradient text-balance pb-3">
            {copy.heading}
          </h1>
          <p className="mt-4 text-body text-lg md:text-xl leading-relaxed">{copy.lead}</p>
          <p className="mt-8 inline-flex items-center gap-3 rounded-full border border-line/15 bg-surface px-5 py-2.5 text-sm font-semibold tracking-wide text-ink">
            <span className="h-2 w-2 rounded-full bg-cta dark:bg-brand" aria-hidden />
            {copy.motto}
          </p>
        </div>

        <figure className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line/10 bg-line/5">
          <Image
            src="/about-us/vgu-campus.jpg"
            alt={copy.imageCaption}
            fill
            priority
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
          <figcaption className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white">{copy.imageCaption}</figcaption>
        </figure>
      </div>

      <dl className="mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-line/10 bg-line/10">
        {aboutStats.map((stat) => (
          <div key={stat.value} className="bg-surface px-6 py-6 md:py-8">
            <dt className="sr-only">{stat.label[lang]}</dt>
            <dd className="font-display text-xl sm:text-2xl md:text-3xl whitespace-nowrap font-semibold tracking-[-0.02em] text-ink">{stat.value}</dd>
            <dd className="mt-1 text-sm text-body">{stat.label[lang]}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

const WhoWeAre = ({ lang }: { lang: Lang }) => {
  const copy = aboutWhoWeAre[lang];

  return (
    <section className="py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
        <div className="lg:col-span-3">
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-heading-gradient pb-2">{copy.heading}</h2>
          {copy.body.map((p) => (
            <p key={p} className="mt-5 text-body text-base md:text-lg leading-relaxed">{p}</p>
          ))}
        </div>
        <aside className="lg:col-span-2 flex flex-col justify-center rounded-3xl bg-cta p-8 md:p-10 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70 mb-5">{copy.missionLabel}</p>
          <p className="font-display text-xl md:text-2xl font-medium leading-snug">{copy.mission}</p>
        </aside>
      </div>
    </section>
  );
};


const Award = ({ lang }: { lang: Lang }) => {
  const copy = aboutAward[lang];

  return (
    <section className="py-16 md:py-20">
      <div className="overflow-hidden rounded-3xl border border-line/10 bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="grid gap-2 p-2 lg:grid-rows-2">
            <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden rounded-2xl">
              <Image
                src="/about-us/Qvic2026.jpg"
                alt={copy.imageAlt[0]}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/2] lg:aspect-auto overflow-hidden rounded-2xl">
              <Image
                src="/about-us/QVIC2026-2.jpg"
                alt={copy.imageAlt[1]}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 md:p-12">
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-ink">{copy.heading}</h2>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-cta dark:text-brand">{copy.award}</p>
            {copy.body.map((p) => (
              <p key={p} className="mt-5 text-body leading-relaxed">{p}</p>
            ))}
            <blockquote className="mt-8 border-l-2 border-cta dark:border-brand pl-5 font-display text-lg leading-relaxed text-ink">
              {copy.quote}
            </blockquote>
            <a
              href={localeHref(lang, `/news/${AWARD_NEWS_SLUG}`)}
              className="group mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-cta dark:text-brand"
            >
              {copy.cta}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Research = ({ lang }: { lang: Lang }) => {
  const copy = aboutResearch[lang];

  return (
    <section className="py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <figure className="order-last lg:order-first">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-line/10 bg-line/5">
            <Image
              src="/about-us/roboticslab-vgu.png"
              alt={copy.imageCaption}
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm text-subtle">{copy.imageCaption}</figcaption>
        </figure>

        <div>
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-heading-gradient pb-2">{copy.heading}</h2>
          {copy.body.map((p) => (
            <p key={p} className="mt-5 text-body leading-relaxed">{p}</p>
          ))}
          <p className="mt-8 text-sm font-semibold text-ink">{copy.expertiseLabel}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {expertise.map((item) => (
              <li key={item.en} className="rounded-full border border-line/15 bg-surface px-3.5 py-1.5 text-sm text-ink/80">
                {item[lang]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// const Deployment = ({ lang }: { lang: Lang }) => {
//   const copy = aboutDeployment[lang];

//   return (
//     <section className="py-16 md:py-20">
//       <SectionHeader eyebrow={copy.eyebrow} heading={copy.heading} subheading={copy.subheading} />

//       <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//         {deploymentSteps.map((step, i) => (
//           <li key={step.title.en} className="relative rounded-2xl border border-line/10 bg-surface p-6">
//             <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cta/10 dark:bg-brand/10 font-display text-sm font-semibold text-cta dark:text-brand">
//               {String(i + 1).padStart(2, "0")}
//             </span>
//             <h3 className="mt-5 font-display text-lg font-semibold text-ink">{step.title[lang]}</h3>
//             <p className="mt-2 text-sm text-body leading-relaxed">{step.body[lang]}</p>
//           </li>
//         ))}
//       </ol>

//       <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
//         {deploymentPrinciples.map((principle, i) => {
//           const Icon = principleIcons[i];
//           return (
//             <li key={principle.en} className="flex items-center gap-2.5 text-sm font-medium text-ink/80">
//               <Icon className="text-cta dark:text-brand" size={16} aria-hidden />
//               {principle[lang]}
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// };

const Technologies = ({ lang }: { lang: Lang }) => {
  const copy = aboutTechnologyCopy[lang];

  return (
    <section className="py-16 md:py-20">
      <SectionHeader eyebrow={copy.eyebrow} heading={copy.heading} subheading={copy.subheading} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {aboutTechnologies.map((tech) => (
          <article
            key={tech.name}
            className="group flex flex-col rounded-2xl overflow-hidden border border-line/10 bg-surface hover:border-line/25 transition-colors"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-line/5">
              <Image
                src={tech.image}
                alt={tech.name}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl md:text-2xl font-semibold tracking-[-0.01em] text-ink">{tech.name}</h3>
              <p className="mt-1 mb-3 text-sm font-medium uppercase tracking-[0.12em] text-cta dark:text-brand">{tech.subtitle[lang]}</p>
              <p className="text-body leading-relaxed">{tech.body[lang]}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const Collaboration = ({ lang }: { lang: Lang }) => {
  const copy = aboutCollaboration[lang];

  return (
    <section className="py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <div>
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-heading-gradient pb-2">{copy.heading}</h2>
          {copy.body.map((p) => (
            <p key={p} className="mt-5 text-body leading-relaxed">{p}</p>
          ))}
          <ContactButton
            lang={lang}
            topic={copy.cta}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cta px-7 py-3.5 text-sm font-semibold text-white hover:bg-cta-hover transition-colors"
          >
            {copy.cta}
            <span aria-hidden>→</span>
          </ContactButton>
        </div>

        <div className="rounded-2xl border border-line/10 bg-surface p-6 md:p-8">
          <p className="text-sm font-semibold text-ink mb-2">{copy.areasLabel}</p>
          <ul>
            {collaborationAreas.map((area) => (
              <li key={area.en} className="flex items-center gap-3 border-b border-line/10 py-4 last:border-b-0 text-ink/90">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cta/10 dark:bg-brand/10 text-cta dark:text-brand">
                  <FiCheck size={14} aria-hidden />
                </span>
                {area[lang]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Vision = ({ lang }: { lang: Lang }) => {
  const copy = aboutVision[lang];
  const motto = aboutHero[lang].motto;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Eyebrow>{copy.eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-heading-gradient text-balance pb-3">
          {copy.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-body text-base md:text-lg leading-relaxed">{copy.body}</p>
        <p className="mt-10 font-display text-xl md:text-2xl font-semibold tracking-[-0.01em] text-cta dark:text-brand">{motto}</p>
        <p className="mt-2 text-sm text-subtle">{copy.closing}</p>
      </div>
    </section>
  );
};

const AboutPage = ({ lang }: { lang: Lang }) => (
  <main className="relative bg-page flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <SiteNav lang={lang} />
      <Hero lang={lang} />
      <WhoWeAre lang={lang} />
      <Award lang={lang} />
      <Research lang={lang} />
      {/* <Deployment lang={lang} /> */}
    
      <Technologies lang={lang} />
      <Collaboration lang={lang} />
      <Vision lang={lang} />
      <SiteFooter lang={lang} />
    </div>
  </main>
);

export default AboutPage;
