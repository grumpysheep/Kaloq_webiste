"use client";

import { useState } from "react";
import { productGlobalAccount } from "@/lib/content";

export function CurrencyWorkspace() {
  const { fxWorkspace } = productGlobalAccount;
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);

  return (
    <section id="fx-workspace" className="px-5 py-[110px] sm:px-8">
      <div className="mx-auto grid max-w-[1160px] grid-cols-[1fr_1.2fr] items-center gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">
            {fxWorkspace.eyebrow}
          </p>
          <h2 className="mt-3 max-w-[450px] font-display text-[clamp(38px,4.4vw,50px)] font-normal leading-[1.06] text-[#0E2A1E]">
            {fxWorkspace.heading}
          </h2>
          <p className="mt-[18px] max-w-[430px] text-[15.5px] leading-[1.6] text-[#42544A]">
            {fxWorkspace.copy}
          </p>
        </div>

        <div className="rounded-[28px] border border-white/65 bg-white/30 p-5 shadow-[0_24px_70px_rgba(92,80,58,.10)] backdrop-blur-xl sm:p-8 max-sm:backdrop-blur-md">
          <div className="flex items-center justify-between gap-5 rounded-2xl border border-white/70 bg-white/55 p-5 shadow-[0_8px_28px_rgba(92,80,58,.06)] backdrop-blur-2xl sm:p-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.12em] text-[#7A8378]">From</div>
              <div className="mt-2 text-lg font-semibold text-[#0E2A1E]">{fxWorkspace.from}</div>
            </div>

            <span
              aria-hidden="true"
              className={`text-2xl transition-[color,transform] duration-300 ease-out ${
                selectedCurrency ? "translate-x-1 text-[#1B4533]" : "text-[#7E6F4F]"
              }`}
            >
              →
            </span>

            <div className="min-w-0 text-right">
              <div className="text-[11px] uppercase tracking-[0.12em] text-[#7A8378]">To</div>
              <div
                key={selectedCurrency ?? "empty"}
                aria-live="polite"
                className="mt-2 animate-[fx-choice-in_280ms_cubic-bezier(.22,.61,.36,1)] truncate text-lg font-semibold text-[#0E2A1E]"
              >
                {selectedCurrency ?? "Choose currency"}
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {fxWorkspace.targets.map((target) => {
              const isSelected = selectedCurrency === target;
              return (
                <button
                  key={target}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCurrency(target)}
                  className={`group flex min-h-[64px] items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left backdrop-blur-xl transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4533] ${
                    isSelected
                      ? "-translate-y-0.5 border-[#75932A]/70 bg-lime/25 shadow-[0_12px_28px_rgba(85,112,0,.13)]"
                      : "border-white/75 bg-white/45 shadow-[0_6px_20px_rgba(92,80,58,.05)] hover:-translate-y-0.5 hover:border-[#C9D99A]/80 hover:bg-white/65"
                  }`}
                >
                  <span className="font-mono text-sm text-[#0E2A1E]">
                    {target}{" "}
                    <span className="font-sans text-[10px] font-semibold text-[#557000]">
                      (Coming Soon)
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] transition-[background-color,border-color,color,transform,opacity] duration-300 ${
                      isSelected
                        ? "scale-100 border-[#557000] bg-[#557000] text-white opacity-100"
                        : "scale-90 border-[#9AA28E]/55 bg-white/35 text-transparent opacity-55 group-hover:scale-100 group-hover:opacity-85"
                    }`}
                  >
                    ✓
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-5 rounded-full border border-white/55 bg-lime/15 px-4 py-3 text-center text-sm font-semibold text-[#557000] shadow-[inset_0_1px_0_rgba(255,255,255,.45)] backdrop-blur-xl">
            No live quote yet · Coming Soon
          </div>
        </div>
      </div>
    </section>
  );
}
