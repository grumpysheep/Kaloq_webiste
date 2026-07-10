export function DashboardMock({ className = "" }: { className?: string }) {
  const bars = [38, 62, 45, 80, 54, 70, 48];
  const rows = [
    { label: "SaaS subscription", amount: "− $240.00" },
    { label: "Supplier payout · MXN", amount: "− $1,840.00" },
    { label: "Stablecoin top-up", amount: "+ $12,000.00" },
  ];

  return (
    <div className={className}>
      <div
        role="img"
        aria-label="Illustrative Kaloq dashboard wireframe, not final product UI"
        className="rounded-2xl border border-border bg-white p-5 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-foreground-muted">Balance</div>
            <div className="mt-1 text-2xl font-semibold tabular-figures text-foreground">$84,214.32</div>
          </div>
          <div className="h-8 w-16 rounded-full bg-brand-tint" />
        </div>

        <div className="mt-5 flex h-20 items-end gap-2">
          {bars.map((height, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-brand/80"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>

        <div className="mt-5 space-y-3 border-t border-border pt-4">
          {rows.map((row) => (
            <div key={row.label} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-foreground">
                <span className="h-6 w-6 rounded-full bg-background-subtle" />
                {row.label}
              </div>
              <span className="tabular-figures text-foreground-muted">{row.amount}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-foreground-muted">
        Illustrative dashboard wireframe — not final product UI.
      </p>
    </div>
  );
}
