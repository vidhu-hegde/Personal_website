import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PortfolioTopBar } from "@/components/portfolio-top-bar";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
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
  const resourceLinks = project.links ?? [];

  return (
    <section className="min-h-screen bg-background">
      <PortfolioTopBar activeTab="projects" />

      <div className="mx-auto max-w-site px-6 py-12 sm:py-16">
        <div className="space-y-8">
          <div className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
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

            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-background px-4 py-4">
                <p className="text-[11px] font-medium tracking-[0.14em] text-muted uppercase">Organization</p>
                <p className="mt-2 text-sm leading-6 text-foreground">{project.org}</p>
              </div>
              <div className="rounded-2xl border border-border bg-background px-4 py-4">
                <p className="text-[11px] font-medium tracking-[0.14em] text-muted uppercase">Timeline</p>
                <p className="mt-2 text-sm leading-6 text-foreground">{project.dateRange}</p>
              </div>
              <div className="rounded-2xl border border-accent/20 bg-accent-soft px-4 py-4 text-accent-strong">
                <p className="text-[11px] font-medium tracking-[0.14em] uppercase">Self-score</p>
                <p className="mt-2 text-3xl font-semibold tracking-[-0.05em]">{project.score.toFixed(1)}/10</p>
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

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-7">
            <p className="text-sm font-medium tracking-[0.12em] text-accent uppercase">Project overview</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">Situation and problem</h2>
            <p className="mt-4 text-base leading-8 text-muted">{project.problem}</p>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-7">
            <p className="text-sm font-medium tracking-[0.12em] text-accent uppercase">PRD / Product notes</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">Approach and product thinking</h2>
            <p className="mt-4 text-base leading-8 text-muted">{project.approach}</p>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-7">
            <p className="text-sm font-medium tracking-[0.12em] text-accent uppercase">Build details</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">What was built</h2>
            <p className="mt-4 text-base leading-8 text-muted">{project.whatBuilt}</p>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-7">
            <p className="text-sm font-medium tracking-[0.12em] text-accent uppercase">Outcome</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">Impact and reflection</h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-muted">
              <p>{project.impact}</p>
              <p>{project.reflection}</p>
            </div>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-7">
              <p className="text-sm font-medium tracking-[0.12em] text-accent uppercase">Links</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">GitHub and supporting resources</h2>
              {resourceLinks.length ? (
                <div className="mt-4 grid gap-3">
                  {resourceLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="surface-link rounded-2xl border border-border bg-background px-4 py-4 text-sm font-medium text-foreground"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-base leading-8 text-muted">
                  Add GitHub repos, PRD links, demos, or decks here when they are ready.
                </p>
              )}
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-7">
              <p className="text-sm font-medium tracking-[0.12em] text-accent uppercase">How to use this page</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">Space for the longer writeup</h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-muted">
                <p>Use this page for the deeper project story, PRD reasoning, technical decisions, and what changed over time.</p>
                <p>The goal is to keep the page readable in the same way as the rest of the site, while still leaving room for details.</p>
              </div>
            </article>
          </div>

          <div className="space-y-5">
            <SectionHeader
              eyebrow="Related"
              title="More project cards"
              description="A few adjacent projects that can branch into their own writeups."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard key={relatedProject.slug} project={relatedProject} variant="project" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
