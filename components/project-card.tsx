import Link from "next/link";

import type { Project } from "@/content/projects";

import { ScoreBadge } from "@/components/score-badge";
import { TagPill } from "@/components/tag-pill";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  variant?: "ranked" | "project";
};

export function ProjectCard({ project, variant = "ranked" }: ProjectCardProps) {
  const hasPlaceholderCopy = Boolean(project.placeholderFields?.length);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="surface-link group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card"
    >
      <div className="flex items-start justify-between gap-5">
        <div className="space-y-3">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground sm:text-2xl">{project.title}</h3>
            <p className="text-sm text-muted">
              {project.org} · {project.dateRange}
            </p>
          </div>
          <p className="text-base leading-7 text-foreground">{project.oneLiner}</p>
        </div>
        <ScoreBadge score={project.score} />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TagPill key={tag} label={tag} />
        ))}
      </div>

      <div className={cn("mt-6 space-y-4 border-t border-border pt-5", variant === "project" ? "block" : "")}>
        <div>
          <p className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
            {variant === "project" ? "Situation" : "Hot take"}
          </p>
          <p className="mt-2 text-sm leading-6 text-muted">
            {variant === "project" ? project.problem : project.oneLiner}
          </p>
        </div>

        {hasPlaceholderCopy ? (
          <div className="rounded-xl bg-accent-soft px-3 py-2 text-xs text-accent-strong">
            Needs final copy: {project.placeholderFields?.join(", ")}
          </div>
        ) : null}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-sm text-muted">
        <span>{variant === "project" ? "Open project details" : "Open ranked notes"}</span>
        <span aria-hidden="true" className="text-accent">
          ↗
        </span>
      </div>
    </Link>
  );
}
