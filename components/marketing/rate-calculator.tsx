"use client";

import { useMemo, useState } from "react";
import { productPayments } from "@/lib/content";

const { corridors } = productPayments.rateTransparency.calculator;

export function RateCalculator() {
  const [amount, setAmount] = useState("10000");
  const [corridorIndex, setCorridorIndex] = useState(0);

  const corridor = corridors[corridorIndex];
  const numericAmount = Number(amount) || 0;

  const { fee, payout } = useMemo(() => {
    const fee = numericAmount * corridor.rate;
    return { fee, payout: numericAmount - fee };
  }, [numericAmount, corridor.rate]);

  const format = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });

  return (
    <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium text-foreground-muted">Amount (USD)</span>
          <input
            type="number"
            min="0"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-border px-3.5 py-2.5 text-sm tabular-figures text-foreground focus-visible:outline-2 focus-visible:outline-brand"
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium text-foreground-muted">Corridor</span>
          <select
            value={corridorIndex}
            onChange={(e) => setCorridorIndex(Number(e.target.value))}
            className="mt-1.5 w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-brand"
          >
            {corridors.map((c, i) => (
              <option key={c.label} value={i}>
                {c.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-3">
        <div>
          <div className="text-xs text-foreground-muted">Markup</div>
          <div className="mt-1 tabular-figures text-lg font-semibold text-foreground">
            {(corridor.rate * 100).toFixed(2)}%
          </div>
        </div>
        <div>
          <div className="text-xs text-foreground-muted">Estimated fee</div>
          <div className="mt-1 tabular-figures text-lg font-semibold text-foreground">{format(fee)}</div>
        </div>
        <div>
          <div className="text-xs text-foreground-muted">You&apos;d receive</div>
          <div className="mt-1 tabular-figures text-lg font-semibold text-brand">{format(payout)}</div>
        </div>
      </div>

      <p className="mt-6 text-xs text-foreground-muted">
        {productPayments.rateTransparency.calculator.disclaimer}
      </p>
    </div>
  );
}
