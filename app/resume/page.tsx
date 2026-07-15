import type { Metadata } from "next";

import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { buildMetadata, siteConfig } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Resume",
  path: "/resume",
  description: "Resume page for Vidhatri Hegde with a static PDF link and contact links.",
});

export default function ResumePage() {
  return (
    <section className="py-10 sm:py-14">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Resume"
          title="Resume, links, and the one file recruiters still ask for."
          description="The current resume PDF is available directly from the project public assets."
        />

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
            <p className="text-sm font-medium tracking-[0.12em] text-accent uppercase">Download</p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
              This page links directly to the current PDF stored in <code>/public/resume.pdf</code>.
            </p>
            <div className="mt-6">
              <a href={siteConfig.resumeHref} download className="button-primary">
                Download resume PDF
              </a>
            </div>
          </article>

          <aside className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <p className="text-sm font-medium tracking-[0.12em] text-accent uppercase">Contact</p>
            <div className="mt-5 grid gap-3">
              <a href={siteConfig.linkedInHref} className="button-secondary justify-start">
                LinkedIn
              </a>
              <a href={siteConfig.emailHref} className="button-secondary justify-start">
                Email
              </a>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
