"use client";

import { BarChart3, Briefcase, ChevronRight, Code2, Lightbulb, Users } from "lucide-react";
import { useState } from "react";

import type { Experience } from "@/content/experiences";
import type { ProjectTag } from "@/content/projects";

const filters: Array<"All" | ProjectTag> = ["All", "PM", "Research", "Technical", "Leadership"];

const filterAccent: Record<ProjectTag, string> = {
  PM: "text-sky-900 bg-sky-100 border-sky-500/30",
  Research: "text-violet-900 bg-violet-100 border-violet-500/30",
  Technical: "text-emerald-900 bg-emerald-100 border-emerald-500/30",
  Leadership: "text-rose-900 bg-rose-100 border-rose-500/30",
};

function ExperienceIcon({ category }: { category: ProjectTag }) {
  const className = `h-[18px] w-[18px] ${filterAccent[category].split(" ")[0]}`;

  switch (category) {
    case "PM":
      return <Briefcase className={className} aria-hidden="true" />;
    case "Research":
      return <BarChart3 className={className} aria-hidden="true" />;
    case "Technical":
      return <Code2 className={className} aria-hidden="true" />;
    case "Leadership":
      return <Users className={className} aria-hidden="true" />;
    default:
      return <Lightbulb className={className} aria-hidden="true" />;
  }
}

export function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectTag>("All");
  const [openSlug, setOpenSlug] = useState<string | null>(experiences[0]?.slug ?? null);

  const visibleExperiences = experiences.filter((experience) =>
    activeFilter === "All" ? true : experience.categories.includes(activeFilter),
  );

  return (
    <div className="space-y-5">
      <h2 className="sr-only">Experience section with filterable, expandable cards for each role from the resume</h2>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          const activeClass =
            filter === "All"
              ? "border-foreground bg-foreground text-white"
              : `${filterAccent[filter]} border`;
          const inactiveClass =
            filter === "All"
              ? "border-border bg-background text-foreground"
              : "border-border bg-white text-muted hover:text-foreground";

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${isActive ? activeClass : inactiveClass}`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-3">
        {visibleExperiences.map((experience) => {
          const isOpen = openSlug === experience.slug;
          const primaryCategory = experience.categories[0];

          return (
            <article
              key={experience.slug}
              className="rounded-2xl border border-border bg-white px-5 py-4 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <button
                type="button"
                onClick={() => setOpenSlug((current) => (current === experience.slug ? null : experience.slug))}
                className="flex w-full items-start gap-4 text-left"
                aria-expanded={isOpen}
              >
                <div
                  className={`mt-0.5 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border ${filterAccent[primaryCategory]}`}
                >
                  <ExperienceIcon category={primaryCategory} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-medium text-foreground sm:text-base">
                    {experience.role} · {experience.org}
                  </p>
                  <p className="mt-1 text-xs text-muted sm:text-sm">{experience.dateRange}</p>
                </div>

                <ChevronRight
                  className={`mt-1 h-4 w-4 shrink-0 text-muted transition-transform ${isOpen ? "rotate-90" : ""}`}
                  aria-hidden="true"
                />
              </button>

              <p className="ml-[58px] mt-3 text-sm leading-6 text-muted sm:text-[15px]">{experience.summary}</p>

              {isOpen ? (
                <div className="ml-[58px] mt-4">
                  <ul className="space-y-2 pl-4 text-sm leading-6 text-muted sm:text-[15px]">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
