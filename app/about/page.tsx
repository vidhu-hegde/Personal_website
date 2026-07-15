import type { Metadata } from "next";

import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { TagPill } from "@/components/tag-pill";
import { buildMetadata } from "@/lib/metadata";

const skillGroups = {
  Technical: ["Python", "C++", "SQL", "IoT dashboards", "Data analysis", "ThingsBoard", "Figma"],
  PM: ["Roadmapping", "Sprint planning", "Stakeholder alignment", "Prioritization", "Documentation"],
  Research: ["Prompt evaluation", "Qualitative synthesis", "Survey analysis", "Experiment design"],
};

export const metadata: Metadata = buildMetadata({
  title: "About",
  path: "/about",
  description: "About Vidhatri Hegde, including background, education, skills, and the kind of work she is moving toward.",
});

export default function AboutPage() {
  return (
    <section className="py-10 sm:py-14">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="About"
          title="Technical enough to work with engineers, structured enough to keep projects moving, and curious enough to enjoy the messy middle."
          description="I am building toward product management by working on projects where technical constraints, user needs, and team coordination all matter at once."
        />

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
            <div className="space-y-5 prose-copy">
              <p>
                I study computer science at Penn State and I am heading to Cornell University for the Master of
                Engineering Management program. The throughline in my work is not one industry or one tool. It is the
                kind of problem where people need structure, clarity, and follow-through before anything useful can
                happen.
              </p>
              <p>
                That has pulled me into research operations, systems projects, cross-functional coordination, and
                leadership roles where the real job is often translating between technical detail and practical action.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <p className="text-sm font-medium tracking-[0.12em] text-accent uppercase">Education timeline</p>
            <div className="mt-5 space-y-5">
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="font-medium text-foreground">Penn State University</p>
                <p className="mt-1 text-sm text-muted">
                  B.S. Computer Science, minors in Engineering Leadership Development and Mathematics
                </p>
                <p className="mt-2 text-sm text-muted">May 2026</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="font-medium text-foreground">Cornell University</p>
                <p className="mt-1 text-sm text-muted">Master of Engineering Management</p>
                <p className="mt-2 text-sm text-muted">August 2026-May 2027</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {Object.entries(skillGroups).map(([group, skills]) => (
            <article key={group} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <p className="text-sm font-medium tracking-[0.12em] text-accent uppercase">{group}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <TagPill key={skill} label={skill} />
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
          <p className="text-sm font-medium tracking-[0.12em] text-accent uppercase">Outside work</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
            Outside project work, I am drawn to food, travel, and Bollywood for basically the same reason I like good
            product work: they are all about experience, texture, and noticing what makes something feel coherent to
            other people.
          </p>
        </div>
      </Container>
    </section>
  );
}
