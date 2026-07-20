import type { Metadata } from "next";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PortfolioTopBar } from "@/components/portfolio-top-bar";
import { getProjectBySlug, projects } from "@/content/projects";
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

  const resourceLinks = project.links ?? [];
  const githubLink = resourceLinks.find((link) => /github/i.test(link.label) || /github\.com/i.test(link.url));

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
                <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                  {project.title}
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-muted">{project.oneLiner}</p>
              </div>
            </div>

            {githubLink ? (
              <a
                href={githubLink.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/30 hover:text-accent"
              >
                <FolderGit2 className="h-4 w-4" aria-hidden="true" />
                View on GitHub
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-7">
              <p className="text-sm font-medium tracking-[0.12em] text-accent uppercase">Project overview</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">Why I built it</h2>
              <p className="mt-4 text-base leading-8 text-muted">{project.problem}</p>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-7">
              <p className="text-sm font-medium tracking-[0.12em] text-accent uppercase">Approach</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">How I approached it</h2>
              <p className="mt-4 text-base leading-8 text-muted">{project.approach}</p>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-7">
              <p className="text-sm font-medium tracking-[0.12em] text-accent uppercase">Build details</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">What is in the build</h2>
              <p className="mt-4 text-base leading-8 text-muted">{project.whatBuilt}</p>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-7">
              <p className="text-sm font-medium tracking-[0.12em] text-accent uppercase">Outcome</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">What changed and what is next</h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-muted">
                <p>{project.impact}</p>
                <p>{project.reflection}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
