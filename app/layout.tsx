import type { ReactNode } from "react";
import { Inter } from "next/font/google";

import "./globals.css";

import { SiteChrome } from "@/components/site-chrome";
import { buildMetadata } from "@/lib/metadata";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = buildMetadata();

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="page-shell">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
          >
            Skip to content
          </a>
          <SiteChrome>{children}</SiteChrome>
        </div>
      </body>
    </html>
  );
}
