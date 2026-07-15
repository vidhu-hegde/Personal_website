import { Container } from "@/components/container";
import { siteConfig } from "@/lib/metadata";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-6 text-sm text-muted md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl space-y-2">
          <p className="font-medium text-foreground">Vidhatri Hegde</p>
          <p>{siteConfig.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="nav-link rounded-full border border-border bg-white px-4 py-2 hover:border-accent/30" href={siteConfig.linkedInHref}>
            LinkedIn
          </a>
          <a className="nav-link rounded-full border border-border bg-white px-4 py-2 hover:border-accent/30" href={siteConfig.emailHref}>
            Email
          </a>
          <a className="nav-link rounded-full border border-border bg-white px-4 py-2 hover:border-accent/30" href={siteConfig.resumeHref}>
            Resume PDF
          </a>
        </div>
      </Container>
    </footer>
  );
}
