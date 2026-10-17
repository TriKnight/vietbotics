import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";
import { aboutPageMeta } from "@/data/about";

export const metadata: Metadata = aboutPageMeta.vn;

export default function About() {
  return <AboutPage lang="vn" />;
}
