import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import { SiteChrome } from "@/components/site-chrome";
import { buildMetadata } from "@/lib/metadata";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = buildMetadata();

const themeInitScript = `
(() => {
  const storageKey = "theme";
  const root = document.documentElement;
  const storedTheme = window.localStorage.getItem(storageKey);
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const theme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : systemTheme;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
})();
`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body>
        <div className="page-shell">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2"
          >
            Skip to content
          </a>
          <SiteChrome>{children}</SiteChrome>
        </div>
      </body>
    </html>
  );
}
