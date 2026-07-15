"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Container } from "@/components/container";
import { siteConfig } from "@/lib/metadata";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/ranked", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: siteConfig.resumeHref, label: "Resume" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/90 bg-background/85 backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="nav-link text-sm font-semibold tracking-[-0.02em] text-foreground">
            Vidhatri Hegde
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-2 text-sm text-muted">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "nav-link inline-flex rounded-full px-4 py-2 transition-colors",
                        isActive ? "bg-accent-soft text-accent-strong" : "hover:bg-white hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {isOpen ? (
          <nav aria-label="Mobile navigation" className="mt-4 border-t border-border pt-4 md:hidden">
            <ul className="grid gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "nav-link flex rounded-2xl border px-4 py-3 text-sm transition-colors",
                        isActive
                          ? "border-accent/20 bg-accent-soft text-accent-strong"
                          : "border-border bg-white text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
