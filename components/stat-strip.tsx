type StatStripProps = {
  stats: {
    totalProjects: number;
    categories: number;
    averageScore: number;
  };
};

const items = [
  { key: "totalProjects", label: "Projects" },
  { key: "categories", label: "Categories" },
  { key: "averageScore", label: "Average self-score" },
] as const;

export function StatStrip({ stats }: StatStripProps) {
  return (
    <div className="grid gap-3 rounded-2xl border border-border bg-card p-4 shadow-card sm:grid-cols-3 sm:p-5">
      {items.map((item) => (
        <div key={item.key} className="rounded-xl border border-border/80 bg-background px-4 py-4">
          <p className="text-sm text-muted">{item.label}</p>
          <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-foreground">
            {item.key === "averageScore" ? `${stats[item.key].toFixed(1)}/10` : stats[item.key]}
          </p>
        </div>
      ))}
    </div>
  );
}
