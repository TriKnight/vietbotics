import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsArticlePage from "@/components/NewsArticlePage";
import { getNewsArticle, newsArticles } from "@/data/news";

export const dynamicParams = false;

export function generateStaticParams() {
  return newsArticles.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getNewsArticle(params.slug);
  if (!article) return {};
  return {
    title: `${article.title.vn} | OpenMind Robotics`,
    description: article.summary.vn,
    openGraph: { type: "article", images: [article.images[0].src] },
  };
}

export default function NewsArticle({ params }: { params: { slug: string } }) {
  const article = getNewsArticle(params.slug);
  if (!article) notFound();
  return <NewsArticlePage article={article} lang="vn" />;
}
