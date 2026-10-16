import React from "react";
import Image from "next/image";
import { FaBrain, FaEye } from "react-icons/fa";
import type { Lang } from "@/data/applications";
import { localeHref } from "@/data/home";
import { NewsArticle, newsArticles, newsCopy } from "@/data/news";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import NewsCard, { NewsMeta } from "./NewsCard";
import NewsGallery from "./NewsGallery";

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-ink mb-6">{children}</h2>
);

const NewsArticlePage = ({ article, lang }: { article: NewsArticle; lang: Lang }) => {
  const copy = newsCopy[lang];
  const cover = article.images[0];
  const gallery = article.images.slice(1);
  const index = newsArticles.indexOf(article);
  // The next three stories after this one, wrapping around to the newest
  const more = [1, 2, 3].map((n) => newsArticles[(index + n) % newsArticles.length]);
  const tech = [
    { icon: FaEye, name: "OM-Eye™", label: copy.eyeLabel, text: article.technology.eye[lang] },
    { icon: FaBrain, name: "OM-Brain™", label: copy.brainLabel, text: article.technology.brain[lang] },
  ];

  return (
    <main className="relative bg-page flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <SiteNav lang={lang} />

        <article className="pt-32 md:pt-40">
          <header className="mx-auto max-w-4xl">
            <a
              href={localeHref(lang, "/news")}
              className="inline-flex items-center gap-2 text-sm font-medium text-subtle hover:text-brand transition-colors"
            >
              <span aria-hidden>←</span>
              {copy.allNews}
            </a>
            <div className="mt-8">
              <NewsMeta article={article} lang={lang} />
            </div>
            <h1 className="mt-4 font-display text-3xl sm:text-5xl font-semibold tracking-[-0.03em] leading-tight text-heading-gradient pb-2 text-balance">
              {article.title[lang]}
            </h1>
            <p className="mt-5 text-sm text-subtle">
              {article.event} <span aria-hidden>·</span> {article.location[lang]}
            </p>
          </header>

          <div className="relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-line/10 bg-line/5">
            <Image
              src={cover.src}
              alt={article.event}
              width={cover.width}
              height={cover.height}
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="h-auto max-h-[640px] w-full object-cover"
            />
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <p className="font-display text-xl md:text-2xl leading-relaxed text-ink">{article.summary[lang]}</p>
            <div className="mt-6 space-y-5 text-body text-base md:text-lg leading-relaxed">
              {article.body[lang].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <section className="mt-14">
              <SubHeading>{copy.technologyHeading}</SubHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {tech.map(({ icon: Icon, name, label, text }) => (
                  <div key={name} className="rounded-2xl border border-line/10 bg-surface p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-semibold text-ink">{name}</p>
                        <p className="text-xs uppercase tracking-[0.12em] text-subtle">{label}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm md:text-base leading-relaxed text-body">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-14">
              <SubHeading>{article.highlightsHeading[lang]}</SubHeading>
              <ul className="space-y-6">
                {article.highlights.map((h) => (
                  <li key={h.title.en} className="border-l-2 border-brand/60 pl-5">
                    <h3 className="font-semibold text-ink text-lg">{h.title[lang]}</h3>
                    <p className="mt-1.5 text-body leading-relaxed">{h.body[lang]}</p>
                  </li>
                ))}
              </ul>
              {article.closing && (
                <p className="mt-8 text-body text-base md:text-lg leading-relaxed">{article.closing[lang]}</p>
              )}
            </section>

            {article.press && (
              <section className="mt-14">
                <SubHeading>{copy.pressHeading}</SubHeading>
                <ul className="divide-y divide-line/10 rounded-2xl border border-line/10 bg-surface">
                  {article.press.map((p) => (
                    <li key={p.href}>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-4 px-6 py-4 text-ink hover:text-brand transition-colors"
                      >
                        <span className="font-medium">{p.name}</span>
                        <span aria-hidden>↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {gallery.length > 0 && (
            <section className="mx-auto mt-16 max-w-5xl">
              <SubHeading>{copy.galleryHeading}</SubHeading>
              <NewsGallery images={gallery} title={article.title[lang]} lang={lang} />
            </section>
          )}
        </article>

        <section className="mt-24 border-t border-line/10 pt-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <SubHeading>{copy.moreHeading}</SubHeading>
            <a
              href={localeHref(lang, "/news")}
              className="mb-6 shrink-0 text-sm font-semibold text-cta dark:text-brand hover:underline"
            >
              {copy.viewAll} <span aria-hidden>→</span>
            </a>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {more.map((a, i) => (
              <li key={a.slug} className={i === 2 ? "sm:hidden lg:block" : undefined}>
                <NewsCard article={a} lang={lang} />
              </li>
            ))}
          </ul>
        </section>

        <SiteFooter lang={lang} />
      </div>
    </main>
  );
};

export default NewsArticlePage;
