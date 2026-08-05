import { BarChart3, BookOpenText, Briefcase, Code2, FolderGit2, Lightbulb, Users } from "lucide-react";

import type { Project } from "@/content/projects";
import type { ProjectTag } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

const projectAccent: Record<ProjectTag, string> = {
  PM: "text-sky-900 bg-sky-100 border-sky-500/30",
  Research: "text-violet-900 bg-violet-100 border-violet-500/30",
  Technical: "text-emerald-900 bg-emerald-100 border-emerald-500/30",
  Leadership: "text-rose-900 bg-rose-100 border-rose-500/30",
};

function ProjectIcon({ category }: { category: ProjectTag }) {
  const className = `h-[18px] w-[18px] ${projectAccent[category].split(" ")[0]}`;

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

export function ProjectCard({ project }: ProjectCardProps) {
  const githubLink = project.links?.find((link) => /github/i.test(link.label) || /github\.com/i.test(link.url));
  const substackLink = project.links?.find((link) => /substack/i.test(link.label) || /substack\.com/i.test(link.url));
  const primaryTag = project.tags[0];
  const iconBadgeClass = `flex h-7 w-7 items-center justify-center rounded-full border ${projectAccent[primaryTag]}`;

  return (
    <article className="relative rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="flex items-start gap-3 pr-8">
        <div className="flex items-start gap-3">
          <div
            className={`mt-0.5 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border ${projectAccent[primaryTag]}`}
          >
            <ProjectIcon category={primaryTag} />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-foreground sm:text-2xl">{project.title}</h2>
            <p className="max-w-xl text-sm leading-6 text-muted sm:text-base">{project.oneLiner}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
        {githubLink ? (
          <a
            href={githubLink.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-accent/30 hover:text-accent"
          >
            <span className={iconBadgeClass}>
              <FolderGit2 className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            GitHub
          </a>
        ) : null}

        {substackLink ? (
          <a
            href={substackLink.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-accent/30 hover:text-accent"
          >
            <span className={iconBadgeClass}>
              <BookOpenText className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            Substack
          </a>
        ) : null}
      </div>
    </article>
  );
}
