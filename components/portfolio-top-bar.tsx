import Link from "next/link";
import { Briefcase, Lightbulb, Mail } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/metadata";
import { cn } from "@/lib/utils";

type PortfolioTopBarProps = {
  activeTab?: "experience" | "projects" | "contact";
  contactHref?: string;
  className?: string;
};

const quickLinks = [
  { key: "experience", label: "Experience", href: "/ranked", icon: Briefcase, color: "text-sky-600" },
  { key: "projects", label: "Projects", href: "/projects", icon: Lightbulb, color: "text-emerald-600" },
  { key: "contact", label: "Contact", href: "/#get-in-touch", icon: Mail, color: "text-orange-600" },
] as const;

export function PortfolioTopBar({
  activeTab,
  contactHref = "/#get-in-touch",
  className,
}: PortfolioTopBarProps) {
  return (
    <div className={cn("w-full border-b border-border", className)}>
      <div className="mx-auto flex max-w-site flex-col gap-1.5 px-5 py-1.5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="text-sm font-medium text-foreground sm:text-[15px]">
          Vidhatri Hegde
        </Link>

        <div className="flex flex-wrap gap-3 sm:gap-5">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.key;
            const href = item.key === "contact" ? contactHref : item.href;

            return (
              <Link
                key={item.label}
                href={href}
                className={cn(
                  "inline-grid min-h-9 place-items-center gap-0.5 border-b-2 border-transparent py-0.5 text-center leading-none",
                  isActive ? "border-sky-500" : "",
                )}
              >
                <Icon className={`h-4 w-4 ${item.color}`} aria-hidden="true" />
                <span className={`text-[11px] leading-none font-medium ${isActive ? "text-foreground" : "text-muted"}`}>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5 self-start lg:self-auto">
          <ThemeToggle />
          <a href={siteConfig.resumeHref} className="button-primary h-7 px-3 text-xs sm:text-sm">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
