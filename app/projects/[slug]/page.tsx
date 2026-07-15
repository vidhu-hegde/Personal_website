import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { ToggleBlock } from "@/components/toggle-block";
import { getProjectBySlug, getRelatedProjects, projects } from "@/content/projects";
import { buildMetadata } from "@/lib/metadata";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildMetadata({ title: "Project", path: `/projects/${slug}` });
  }

  return buildMetadata({
    title: project.title,
    path: `/projects/${project.slug}`,
    description: project.oneLiner,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project);

  return (
    <section className="py-10 sm:py-14">
      <Container className="space-y-8">
        <div className="space-y-6 rounded-[28px] border border-border bg-white p-6 shadow-card sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <Link href="/projects" className="text-sm text-accent hover:text-accent-strong">
                ← Back to projects
              </Link>
              <div className="space-y-2">
                <p className="text-sm text-muted">
                  {project.org} · {project.dateRange}
                </p>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                  {project.title}
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-muted">{project.oneLiner}</p>
              </div>
            </div>
            <div className="rounded-2xl border border-accent/20 bg-accent-soft px-4 py-3 text-accent-strong">
              <p className="text-sm">Self-score</p>
              <p className="text-3xl font-semibold tracking-[-0.05em]">{project.score.toFixed(1)}/10</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted">
                {tag}
              </span>
            ))}
          </div>

          {project.placeholderFields?.length ? (
            <div className="rounded-2xl border border-accent/20 bg-accent-soft px-4 py-4 text-sm text-accent-strong">
              Placeholder fields still to finalize: {project.placeholderFields.join(", ")}
            </div>
          ) : null}
        </div>

        <div className="space-y-4">
          <ToggleBlock title="Situation / Problem">
            <p>{project.problem}</p>
          </ToggleBlock>
          <ToggleBlock title="My approach">
            <p>{project.approach}</p>
          </ToggleBlock>
          <ToggleBlock title="What I built" defaultOpen={false}>
            <p>{project.whatBuilt}</p>
          </ToggleBlock>
          <ToggleBlock title="Impact / outcome" defaultOpen={false}>
            <p>{project.impact}</p>
          </ToggleBlock>
          <ToggleBlock title="Reflection — what I would do differently" defaultOpen={false}>
            <p>{project.reflection}</p>
          </ToggleBlock>
          <ToggleBlock title="Links" defaultOpen={false}>
            {project.links?.length ? (
              <ul className="space-y-3">
                {project.links.map((link) => (
                  <li key={link.url}>
                    <a href={link.url} target="_blank" rel="noreferrer" className="text-accent hover:text-accent-strong">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>[Placeholder] Add live demo, GitHub, slide deck, or supporting links if applicable.</p>
            )}
          </ToggleBlock>
        </div>

        <div className="space-y-5">
          <SectionHeader
            eyebrow="Related"
            title="Related projects"
            description="A few adjacent projects connected by role, method, or tag."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relatedProjects.map((relatedProject) => (
              <ProjectCard key={relatedProject.slug} project={relatedProject} variant="project" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
