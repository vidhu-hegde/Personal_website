import type { Metadata } from "next";

import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
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
    <section className="py-10 sm:py-14">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Projects"
          title="Projects and experiences, with more context than a resume bullet."
          description="This page is less about ranking and more about the shape of the work: what the problem was, how I approached it, and what changed."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {recentProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="project" />
          ))}
        </div>
      </Container>
    </section>
  );
}
