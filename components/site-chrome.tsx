"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type SiteChromeProps = {
  children: ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();
  const usesLandingChrome =
    pathname === "/" ||
    pathname === "/ranked" ||
    pathname === "/projects" ||
    pathname.startsWith("/projects/");

  return (
    <>
      {usesLandingChrome ? null : <SiteHeader />}
      <main id="main-content">{children}</main>
      {usesLandingChrome ? null : <SiteFooter />}
    </>
  );
}
