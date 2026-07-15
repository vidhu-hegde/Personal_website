import { cn } from "@/lib/utils";

type TagPillProps = {
  label: string;
  active?: boolean;
  asButton?: boolean;
  onClick?: () => void;
};

export function TagPill({ label, active = false, asButton = false, onClick }: TagPillProps) {
  const className = cn(
    "inline-flex items-center rounded-full border px-3 py-1.5 text-sm transition-colors",
    active ? "border-accent/20 bg-accent-soft text-accent-strong" : "border-border bg-white text-muted hover:text-foreground",
  );

  if (asButton) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {label}
      </button>
    );
  }

  return <span className={className}>{label}</span>;
}
