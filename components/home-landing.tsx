"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BarChart3,
  Briefcase,
  Code2,
  ExternalLink,
  FileText,
  GraduationCap,
  Mail,
  Plane,
  Users,
} from "lucide-react";

import { PortfolioTopBar } from "@/components/portfolio-top-bar";

const words = [
  { text: "curiosity", background: "bg-rose-100", foreground: "text-rose-900" },
  { text: "hustle", background: "bg-emerald-100", foreground: "text-emerald-950" },
  { text: "empathy", background: "bg-sky-100", foreground: "text-sky-950" },
  { text: "data", background: "bg-amber-100", foreground: "text-amber-950" },
  { text: "chai", background: "bg-lime-100", foreground: "text-lime-950" },
] as const;

const heroIcons = [
  { icon: Briefcase, background: "bg-sky-100", border: "border-sky-500", color: "text-sky-900", delay: "0ms" },
  { icon: Code2, background: "bg-emerald-100", border: "border-emerald-500", color: "text-emerald-900", delay: "300ms" },
  { icon: BarChart3, background: "bg-orange-100", border: "border-orange-500", color: "text-orange-900", delay: "600ms" },
  { icon: Users, background: "bg-rose-100", border: "border-rose-500", color: "text-rose-900", delay: "900ms" },
  { icon: Plane, background: "bg-violet-100", border: "border-violet-500", color: "text-violet-900", delay: "1200ms" },
  {
    icon: GraduationCap,
    background: "bg-amber-100",
    border: "border-amber-500",
    color: "text-amber-900",
    delay: "1500ms",
  },
] as const;

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
    href: "https://www.linkedin.com/in/TODO",
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
    href: "/resume.pdf",
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
    <div className="min-h-screen overflow-hidden bg-white">
      <h2 className="sr-only">
        Landing page with a two column hero, about text on the left and floating avatar animation on the right,
        ending in a get in touch card section
      </h2>

      <PortfolioTopBar activeTab="experience" contactHref="#get-in-touch" />

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
              I&apos;m a computer science student who likes turning messy ideas into clear plans. I&apos;ve worked across
              engineering, research, and leadership, and I&apos;m happiest connecting people and solving the problem
              underneath the problem.
            </p>
            <p className="text-lg text-slate-500 sm:text-xl">Penn State CS → Cornell MEM</p>
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

            return (
              <div
                key={item.delay}
                className={`floating-circle flex h-[92px] w-[92px] items-center justify-center rounded-full border-[3px] sm:h-[110px] sm:w-[110px] ${item.background} ${item.border}`}
                style={{ animationDelay: item.delay }}
              >
                <Icon className={`h-9 w-9 sm:h-10 sm:w-10 ${item.color}`} aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </div>

      <div id="get-in-touch" className="bg-stone-50 px-6 py-9 sm:py-12">
        <div className="mx-auto max-w-site">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">Get in touch</h2>
            <a href="#top" className="text-xs text-muted">
              Back to top
            </a>
          </div>

          <p className="mb-5 max-w-[520px] text-sm leading-7 text-muted">
            Graduating May 2026 and starting a Master&apos;s at Cornell this fall. Open to PM, TPM, and AI/data product roles
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
                  className="surface-link rounded-xl border border-border bg-white p-4 shadow-none"
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
