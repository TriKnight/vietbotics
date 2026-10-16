import React from "react";
import Image from "next/image";
import type { Lang } from "@/data/applications";
import { localeHref } from "@/data/home";
import { newsArticles, newsCopy } from "@/data/news";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import NewsCard, { NewsMeta } from "./NewsCard";

const FeaturedStory = ({ lang }: { lang: Lang }) => {
  const article = newsArticles[0];
  const copy = newsCopy[lang];

  return (
    <a
      href={localeHref(lang, `/news/${article.slug}`)}
      className="group grid grid-cols-1 lg:grid-cols-5 overflow-hidden rounded-3xl border border-line/10 bg-surface transition-colors hover:border-line/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] lg:col-span-3 overflow-hidden bg-line/5">
        <Image
          src={article.images[0].src}
          alt={article.event}
          fill
          priority
          sizes="(min-width: 1024px) 760px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-100">
          {copy.latest}
        </span>
      </div>
      <div className="lg:col-span-2 flex flex-col justify-center p-8 md:p-10">
        <NewsMeta article={article} lang={lang} />
        <h2 className="mt-4 font-display text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-ink text-balance group-hover:text-brand transition-colors">
          {article.title[lang]}
        </h2>
        <p className="mt-4 text-body leading-relaxed md:text-lg">{article.summary[lang]}</p>
        <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cta dark:text-brand">
          {copy.readMore}
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </a>
  );
};

const NewsPage = ({ lang }: { lang: Lang }) => {
  const copy = newsCopy[lang];

  return (
    <main className="relative bg-page flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <SiteNav lang={lang} />

        <header className="mx-auto max-w-3xl pt-36 md:pt-44 pb-12 md:pb-16 text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gray-700 dark:text-brand mb-5">{copy.eyebrow}</p>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-[-0.03em] text-heading-gradient pb-3">
            {copy.heading}
          </h1>
          <p className="mt-4 text-body text-base md:text-lg leading-relaxed">{copy.subheading}</p>
        </header>

        <FeaturedStory lang={lang} />

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {newsArticles.slice(1).map((article) => (
            <li key={article.slug}>
              <NewsCard article={article} lang={lang} />
            </li>
          ))}
        </ul>

        <SiteFooter lang={lang} />
      </div>
    </main>
  );
};

export default NewsPage;
