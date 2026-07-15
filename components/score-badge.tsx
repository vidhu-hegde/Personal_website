type ScoreBadgeProps = {
  score: number;
};

export function ScoreBadge({ score }: ScoreBadgeProps) {
  return (
    <div className="shrink-0 rounded-full border border-accent/20 bg-accent-soft px-3 py-2 text-right text-accent-strong">
      <div className="text-lg font-semibold leading-none tracking-[-0.04em]">{score.toFixed(1)}</div>
      <div className="text-[11px] uppercase tracking-[0.14em]">out of 10</div>
    </div>
  );
}
