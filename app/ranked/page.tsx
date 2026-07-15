import type { Metadata } from "next";

import { ExperienceSection } from "@/components/experience-section";
import { PortfolioTopBar } from "@/components/portfolio-top-bar";
import { experiences } from "@/content/experiences";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Experience",
  path: "/ranked",
  description: "Experience section for Vidhatri Hegde with filterable, expandable role summaries across PM, research, technical, and leadership work.",
});

export default function RankedPage() {
  return (
    <section className="min-h-screen bg-white">
      <PortfolioTopBar activeTab="experience" />

      <div className="mx-auto max-w-site px-6 py-12 sm:py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.08em] text-sky-600 uppercase">Experience</p>
            <h1 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl">
              Roles, experiments, and leadership work that shaped how I build.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              A filterable view of the roles on my resume, expanded with the concrete work behind each line item.
            </p>
          </div>

          <ExperienceSection experiences={experiences} />
        </div>
      </div>
    </section>
  );
}
