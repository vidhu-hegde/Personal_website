import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

type ToggleBlockProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function ToggleBlock({ title, children, defaultOpen = true }: ToggleBlockProps) {
  return (
    <details
      open={defaultOpen}
      className="group rounded-2xl border border-border bg-card p-5 shadow-card [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="toggle-summary flex cursor-pointer list-none items-center justify-between gap-4">
        <span className="text-lg font-medium tracking-[-0.02em] text-foreground">{title}</span>
        <ChevronDown className="h-5 w-5 text-muted transition-transform group-open:rotate-180" />
      </summary>
      <div className="prose-copy mt-4">{children}</div>
    </details>
  );
}
