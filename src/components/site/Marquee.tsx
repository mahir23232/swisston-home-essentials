const phrases = [
  "Designed in Texas",
  "Italian farmhouse spirit",
  "Built to outlast trends",
  "Hand-finished",
  "A house of considered objects",
  "Old-money kitchen craft",
  "Service for the everyday",
  "Made for the slow morning",
];

export const Marquee = () => {
  const items = [...phrases, ...phrases];
  return (
    <div className="overflow-hidden border-y border-border/60 surface-paper relative">
      <div className="marquee-track py-5">
        {items.map((p, i) => (
          <div key={i} className="flex items-center gap-10 px-10 shrink-0">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.42em] text-foreground/60">
              {p}
            </span>
            <span className="font-display italic text-base text-brass">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
