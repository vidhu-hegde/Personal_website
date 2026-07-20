import type { Metadata } from "next";

import { PortfolioTopBar } from "@/components/portfolio-top-bar";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";
import { buildMetadata } from "@/lib/metadata";

const recentProjects = [...projects].sort((left, right) => right.sortDate.localeCompare(left.sortDate));

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  path: "/projects",
  description: "Project and experience notes from Vidhatri Hegde across PM, technical, leadership, and research work.",
});

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-background">
      <PortfolioTopBar activeTab="projects" />

      <div className="mx-auto max-w-site px-6 py-12 sm:py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.08em] text-emerald-600 uppercase">Projects</p>
            <h1 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl">
              A closer look at what I am building.
            </h1>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {recentProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} variant="project" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
