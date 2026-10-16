import type { Metadata } from "next";
import NewsPage from "@/components/NewsPage";
import { newsPageMeta } from "@/data/news";

export const metadata: Metadata = newsPageMeta.vn;

export default function News() {
  return <NewsPage lang="vn" />;
}
