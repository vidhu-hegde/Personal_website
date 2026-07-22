"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Briefcase,
  Code2,
  ExternalLink,
  FileText,
  GraduationCap,
  Mail,
  Plane,
  UtensilsCrossed,
  Users,
} from "lucide-react";

import { PortfolioTopBar } from "@/components/portfolio-top-bar";
import { siteConfig } from "@/lib/metadata";

const words = [
  { text: "curiosity", background: "bg-rose-100", foreground: "text-rose-900" },
  { text: "hustle", background: "bg-emerald-100", foreground: "text-emerald-950" },
  { text: "empathy", background: "bg-sky-100", foreground: "text-sky-950" },
  { text: "data", background: "bg-amber-100", foreground: "text-amber-950" },
  { text: "matcha", background: "bg-lime-100", foreground: "text-lime-950" },
] as const;

const heroIcons = [
  {
    icon: Briefcase,
    background: "bg-sky-100",
    border: "border-sky-500",
    color: "text-sky-900",
    delay: "0ms",
    href: "/ranked",
    label: "Experience",
  },
  {
    icon: Code2,
    background: "bg-emerald-100",
    border: "border-emerald-500",
    color: "text-emerald-900",
    delay: "300ms",
    href: "https://github.com/vidhu-hegde",
    label: "GitHub",
    external: true,
  },
  {
    icon: UtensilsCrossed,
    background: "bg-orange-100",
    border: "border-orange-500",
    color: "text-orange-900",
    delay: "600ms",
    href: "https://TODO-beli-link.example.com",
    label: "Beli",
    external: true,
  },
  {
    icon: Users,
    background: "bg-rose-100",
    border: "border-rose-500",
    color: "text-rose-900",
    delay: "900ms",
    href: "https://instagram.com/TODO",
    label: "Instagram",
    external: true,
  },
  { icon: Plane, background: "bg-violet-100", border: "border-violet-500", color: "text-violet-900", delay: "1200ms" },
  {
    icon: GraduationCap,
    background: "bg-amber-100",
    border: "border-amber-500",
    color: "text-amber-900",
    delay: "1500ms",
    href: "https://www.cornell.edu",
    label: "Cornell",
    external: true,
  },
] as const;

// TODO: Replace the Beli and Instagram placeholder URLs with Vidhatri's real profile links.

const contactCards = [
  {
    label: "Email",
    value: "vhegde8767@gmail.com",
    href: "mailto:vhegde8767@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "@VidhatriHegde",
    href: "https://www.linkedin.com/in/vidhatrihegde/",
    icon: ExternalLink,
  },
  {
    label: "GitHub",
    value: "@vidhu-hegde",
    href: "https://github.com/vidhu-hegde",
    icon: Code2,
  },
  {
    label: "Resume",
    value: "View PDF",
    href: siteConfig.resumeHref,
    icon: FileText,
  },
] as const;

export function HomeLanding() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 1800);

    return () => window.clearInterval(interval);
  }, []);

  const currentWord = words[wordIndex];

  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <h2 className="sr-only">
        Landing page with a two column hero, about text on the left and floating avatar animation on the right,
        ending in a get in touch card section
      </h2>

      <PortfolioTopBar
        contactHref="#get-in-touch"
        className="bg-card"
      />

      <div className="bg-linear-to-b from-[#d8c8b8] via-[#e4d6c8] to-[#f2ebe4] dark:from-[#3a2f27] dark:via-[#2e251f] dark:to-[#1f1915]">
        <div className="mx-auto grid min-h-[calc(100vh-56px)] max-w-site gap-14 px-6 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24 xl:min-h-[calc(100vh-64px)] xl:gap-20">
          <div className="min-w-0 space-y-8">
            <div className="space-y-5">
              <p className="text-sm font-semibold tracking-[0.08em] text-sky-600 uppercase">About</p>
              <h1 className="max-w-3xl text-5xl font-medium leading-[1.04] tracking-[-0.06em] text-foreground sm:text-6xl xl:text-7xl">
                Clear plans, built with{" "}
                <span
                  className={`inline-block rounded-full px-5 py-2 transition-colors duration-300 sm:px-6 sm:py-2.5 ${currentWord.background} ${currentWord.foreground}`}
                >
                  {currentWord.text}
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-9 text-muted sm:text-xl">
                Hi! I&apos;m Vidhatri, a Computer Science/ Eng Management student who likes turning messy ideas into
                clear plans. I&apos;ve worked across engineering, research, and leadership, and I&apos;m happiest when
                I&apos;m connecting people, solving problems, and making complicated things feel a little simpler.
              </p>
              <p className="text-lg text-muted sm:text-xl">Penn State CS → Cornell MEM</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/projects" className="button-primary min-h-14 px-7 text-base">
                See my work
              </Link>
              <a href="#get-in-touch" className="button-secondary min-h-14 px-7 text-base">
                Get in touch
              </a>
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-2 justify-items-center gap-8 sm:gap-10">
            {heroIcons.map((item) => {
              const Icon = item.icon;
              const circleClassName = `floating-circle flex h-[92px] w-[92px] items-center justify-center rounded-full border-[3px] sm:h-[110px] sm:w-[110px] ${item.background} ${item.border}`;
              const iconClassName = `h-9 w-9 sm:h-10 sm:w-10 ${item.color}`;
              const label = "label" in item ? item.label : undefined;

              if ("href" in item) {
                const isExternal = "external" in item && item.external;

                return (
                  <a
                    key={item.delay}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    aria-label={item.label}
                    title={item.label}
                    className="group relative inline-flex cursor-pointer flex-col items-center"
                  >
                    <div
                      className={`${circleClassName} transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-card-hover group-focus-visible:-translate-y-1 group-focus-visible:shadow-card-hover`}
                      style={{ animationDelay: item.delay }}
                    >
                      <Icon className={iconClassName} aria-hidden="true" />
                    </div>
                    <span className="pointer-events-none absolute -bottom-8 rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground opacity-0 shadow-card transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                      {item.label}
                    </span>
                  </a>
                );
              }

              return (
                <div key={item.delay} className="relative inline-flex flex-col items-center">
                  <div className={circleClassName} style={{ animationDelay: item.delay }}>
                    <Icon className={iconClassName} aria-hidden="true" />
                  </div>
                  {label ? (
                    <span className="pointer-events-none absolute -bottom-8 rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground opacity-0 shadow-card">
                      {label}
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div id="get-in-touch" className="bg-background px-6 py-9 sm:py-12">
        <div className="mx-auto max-w-site">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">Get in touch</h2>
            <a href="#top" className="text-xs text-muted">
              Back to top
            </a>
          </div>

          <p className="mb-5 max-w-[520px] text-sm leading-7 text-muted">
            CS Grad and starting a Master&apos;s at Cornell this fall. Open to PM, TPM, and AI/data product roles
            in the meantime.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const isExternal = card.href.startsWith("http");

              return (
                <a
                  key={card.label}
                  href={card.href}
                  className="surface-link rounded-xl border border-border bg-card p-4 shadow-none"
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  <Icon className="h-5 w-5 text-sky-600" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-foreground">{card.label}</p>
                  <p className="mt-1 text-xs text-muted">{card.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
