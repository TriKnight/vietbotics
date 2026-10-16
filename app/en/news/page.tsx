import type { Metadata } from "next";
import NewsPage from "@/components/NewsPage";
import { newsPageMeta } from "@/data/news";

export const metadata: Metadata = newsPageMeta.en;

export default function News() {
  return <NewsPage lang="en" />;
}
