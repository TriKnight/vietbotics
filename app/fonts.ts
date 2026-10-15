import { Inter } from "next/font/google";

// Fallback for the Apple-style heading font: Apple devices render SF Pro (see `font-display`
// in tailwind.config.ts); everyone else gets Inter, the closest freely licensed match.
export const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});
