import type { Metadata } from "next";
import ApplicationsPage from "@/components/ApplicationsPage";
import { pageMeta } from "@/data/applicationsPage";

export const metadata: Metadata = pageMeta.en;

export default function Applications() {
  return <ApplicationsPage lang="en" />;
}
