import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";
import { aboutPageMeta } from "@/data/about";

export const metadata: Metadata = aboutPageMeta.en;

export default function About() {
  return <AboutPage lang="en" />;
}
