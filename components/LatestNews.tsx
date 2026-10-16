import React from "react";
import type { Lang } from "@/data/applications";
import { localeHref } from "@/data/home";
import { newsArticles, newsCopy } from "@/data/news";
import SectionHeader from "./SectionHeader";
import NewsCard from "./NewsCard";

const LatestNews = ({ lang }: { lang: Lang }) => {
  const copy = newsCopy[lang];

  return (
    <section id="news" className="w-full py-20 scroll-mt-28">
      <SectionHeader eyebrow={copy.eyebrow} heading={copy.homeHeading} subheading={copy.homeSubheading} />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {newsArticles.slice(0, 3).map((article, i) => (
          // Two cards fill the tablet row; the third returns with the desktop grid
          <li key={article.slug} className={i === 2 ? "sm:hidden lg:block" : undefined}>
            <NewsCard article={article} lang={lang} />
          </li>
        ))}
      </ul>

      <div className="mt-12 flex justify-center">
        <a
          href={localeHref(lang, "/news")}
          className="inline-flex items-center gap-2 rounded-lg border border-brand px-6 py-3 text-sm font-semibold text-brand hover:border-cta hover:bg-cta hover:text-white transition-colors"
        >
          {copy.viewAll}
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
};

export default LatestNews;
