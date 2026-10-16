import React from "react";
import Image from "next/image";
import type { Lang } from "@/data/applications";
import { localeHref } from "@/data/home";
import { NewsArticle, formatNewsDate, newsCategories, newsCopy } from "@/data/news";

export const NewsMeta = ({ article, lang }: { article: NewsArticle; lang: Lang }) => (
  <p className="text-xs uppercase tracking-[0.15em] text-subtle">
    <span className="text-gray-700 dark:text-brand">{newsCategories[article.category][lang]}</span>
    <span aria-hidden> · </span>
    <time dateTime={article.date}>{formatNewsDate(article, lang)}</time>
  </p>
);

const NewsCard = ({ article, lang }: { article: NewsArticle; lang: Lang }) => {
  const cover = article.images[0];

  return (
    <a
      href={localeHref(lang, `/news/${article.slug}`)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line/10 bg-surface transition-colors hover:border-line/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-line/5">
        <Image
          src={cover.src}
          alt={article.event}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <NewsMeta article={article} lang={lang} />
        <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink text-balance group-hover:text-brand transition-colors">
          {article.title[lang]}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-body">{article.summary[lang]}</p>
        <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-cta dark:text-brand">
          {newsCopy[lang].readMore}
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </a>
  );
};

export default NewsCard;
