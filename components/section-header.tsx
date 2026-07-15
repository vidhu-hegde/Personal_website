type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl space-y-3 ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="text-xs font-medium tracking-[0.16em] text-accent uppercase">{eyebrow}</p>
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">{title}</h2>
        {description ? <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p> : null}
      </div>
    </div>
  );
}
