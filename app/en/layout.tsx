import type { Metadata } from "next";
import { inter } from "../fonts";
import "../globals.css";
import { ThemeProvider } from "../provider";

export const metadata: Metadata = {
  title: "OpenMind Robotics",
  description: "ONE BRAIN, ANY ROBOTS, ANY TASKS",
  icons: {
    icon: "/logo_openmind/favicon-64.png",
    apple: "/logo_openmind/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}