"use client";

import { useEffect, useRef, useState } from "react";

// Timings are ms from the moment the animation is triggered (hover / tap / key).
// Paced deliberately slow (~3.6s total) so it reads as a calm product moment,
// not a flourish — this card is meant to sit in a hover-to-play bento grid.
const TIMING = {
  travelStart: 450,
  walletArrive: 1750,
  balanceSwap: 2150,
  activityInsert: 2650,
  complete: 3400,
  reset: 320,
} as const;

const TRAVEL_DURATION = TIMING.walletArrive - TIMING.travelStart;

// Pulled from the Kaloq design system (tokens/colors.css, tokens/spacing.css):
// green-950/900 ink + lime-500 accent over warm sand neutrals, soft green-tinted shadows.
const FLOW_TOKENS = {
  brand: "#1B4533",
  reset: `${TIMING.reset}ms`,
  ease: "cubic-bezier(.22,.61,.36,1)",
} as const;

type ActivityRow = {
  name: string;
  date: string;
  amount: number;
  tag?: string;
};

const ACTIVITY_ROWS: ActivityRow[] = [
  { name: "Payroll — contractor batch", date: "Jul 14", amount: -12400 },
  { name: "USDC → USD conversion", date: "Jul 11", amount: -5000, tag: "USDC" },
  { name: "Stripe payout", date: "Jul 9", amount: 8240 },
  { name: "Global Freight Co. — Inv #2291", date: "Jul 3", amount: -2150 },
];

const NEW_ROW: ActivityRow = { name: "Funds received — bank transfer", date: "Just now", amount: 10000 };

function formatAmount(amount: number) {
  const sign = amount < 0 ? "−" : "+";
  return `${sign}$${Math.abs(amount).toLocaleString("en-US")}`;
}

function BankIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
      <path
        d="M3.5 9h17M5 9v8.5M9.7 9v8.5M14.3 9v8.5M19 9v8.5M3.5 19.5h17M12 3.5 3.5 7.8h17L12 3.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
      <path
        d="M4 7.5h14.5A1.5 1.5 0 0 1 20 9v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18V6a1.5 1.5 0 0 1 1.5-1.5H17M16 12h4v4h-4a2 2 0 1 1 0-4Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function ActivityIcon({ incoming }: { incoming: boolean }) {
  return (
    <span
      className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#F1EDE0] text-[#1B4533]"
      aria-hidden="true"
    >
      <span className="text-sm leading-none">{incoming ? "↓" : "↑"}</span>
    </span>
  );
}

export function FundingFlowDemo() {
  const [phase, setPhase] = useState(0);
  const isPlaying = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => clearTimers, []);

  const play = () => {
    if (isPlaying.current) return;
    clearTimers();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    isPlaying.current = true;
    setPhase(1);
    if (reduced) {
      setPhase(5);
      isPlaying.current = false;
      return;
    }
    timers.current.push(setTimeout(() => setPhase(2), TIMING.travelStart));
    timers.current.push(setTimeout(() => setPhase(3), TIMING.walletArrive));
    timers.current.push(setTimeout(() => setPhase(4), TIMING.balanceSwap));
    timers.current.push(setTimeout(() => setPhase(5), TIMING.activityInsert));
    timers.current.push(
      setTimeout(() => {
        isPlaying.current = false;
      }, TIMING.complete)
    );
  };

  const reset = () => {
    clearTimers();
    isPlaying.current = false;
    setPhase(0);
  };

  const onMouseEnter = () => {
    if (phase === 0) play();
  };

  const onMouseLeave = () => {
    clearTimers();
    isPlaying.current = false;
    setPhase(6);
    timers.current.push(setTimeout(reset, TIMING.reset));
  };

  const onClick = () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    reset();
    requestAnimationFrame(play);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    reset();
    requestAnimationFrame(play);
  };

  const finalState = phase >= 4 && phase !== 6;

  return (
    <section
      tabIndex={0}
      role="button"
      aria-label="Play Kaloq account funding animation"
      data-phase={phase}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className="group relative aspect-[5/4] w-full cursor-pointer overflow-hidden rounded-[1.75rem] border border-[#E8E2D1] bg-[#F1EDE0] shadow-[0_24px_64px_rgba(20,35,25,.14)] outline-none transition-transform duration-300 ease-out hover:scale-[1.005] focus-visible:ring-2 focus-visible:ring-[#1B4533] focus-visible:ring-offset-4 max-sm:aspect-[4/5]"
      style={
        {
          "--flow-brand": FLOW_TOKENS.brand,
          "--flow-reset": FLOW_TOKENS.reset,
          "--flow-ease": FLOW_TOKENS.ease,
          "--flow-travel-duration": `${TRAVEL_DURATION}ms`,
        } as React.CSSProperties
      }
    >
      <style>{`
        [data-phase="1"] .fund-bank, [data-phase="2"] .fund-bank, [data-phase="3"] .fund-bank, [data-phase="4"] .fund-bank, [data-phase="5"] .fund-bank { color:var(--flow-brand); border-color:transparent; }
        [data-phase="3"] .fund-wallet, [data-phase="4"] .fund-wallet, [data-phase="5"] .fund-wallet { color:var(--flow-brand); border-color:transparent; }
        [data-phase="1"] .bank-pulse, [data-phase="2"] .bank-pulse, [data-phase="3"] .bank-pulse, [data-phase="4"] .bank-pulse, [data-phase="5"] .bank-pulse { animation:kaloq-pulse .6s ease-out both; }
        [data-phase="3"] .wallet-pulse, [data-phase="4"] .wallet-pulse, [data-phase="5"] .wallet-pulse { animation:kaloq-pulse .6s ease-out both; }
        [data-phase="2"] .fund-line-fill, [data-phase="3"] .fund-line-fill, [data-phase="4"] .fund-line-fill, [data-phase="5"] .fund-line-fill { transform:scaleX(1); }
        [data-phase="2"] .fund-dot { opacity:1; animation:kaloq-travel var(--flow-travel-duration) var(--flow-ease) both; }
        [data-phase="2"] .fund-label, [data-phase="3"] .fund-label { opacity:1; transform:translateY(0); }
        [data-phase="4"] .balance-old, [data-phase="5"] .balance-old { opacity:0; transform:translateY(-10px); }
        [data-phase="4"] .balance-new, [data-phase="5"] .balance-new { opacity:1; transform:translateY(0); }
        [data-phase="4"] .balance-glow, [data-phase="5"] .balance-glow { animation:kaloq-highlight .7s ease-out both; }
        [data-phase="5"] .activity-insert { grid-template-rows: 1fr; opacity:1; }
        [data-phase="5"] .activity-insert-inner { transform:translateY(0); }
        [data-phase="3"] .fund-drop-fill, [data-phase="4"] .fund-drop-fill, [data-phase="5"] .fund-drop-fill { transform:scaleY(1); }
        [data-phase="3"] .fund-drop-dot { opacity:1; animation:kaloq-drop .5s var(--flow-ease) both; }
        [data-phase="6"] .fund-reset { transition-duration:var(--flow-reset)!important; }
        @keyframes kaloq-pulse { 0%{opacity:.5;transform:scale(.75)} 55%{opacity:.22} 100%{opacity:0;transform:scale(1.5)} }
        @keyframes kaloq-travel { from{left:0%} to{left:100%} }
        @keyframes kaloq-drop { from{top:0%} to{top:100%} }
        @keyframes kaloq-highlight { 0%{opacity:0} 40%{opacity:.22} 100%{opacity:0} }
        @media (prefers-reduced-motion:reduce){ .fund-reset{animation:none!important;transition:none!important} }
      `}</style>

      <div className="absolute inset-0 flex flex-col p-[clamp(1.25rem,3.5vw,2rem)]">
        {/* Bank —— straight line —— Wallet */}
        <div className="flex items-center">
          <div className="flex flex-col items-center gap-2">
            <div className="fund-bank fund-reset relative grid h-[clamp(4rem,9vw,5rem)] w-[clamp(4rem,9vw,5rem)] place-items-center rounded-2xl border border-black/[0.07] bg-white text-[#9b9d98] shadow-[0_2px_8px_rgba(20,35,25,.07),0_8px_24px_rgba(20,35,25,.06)] transition-colors duration-300">
              <span className="bank-pulse pointer-events-none absolute inset-0 rounded-2xl bg-[#DBFC00] opacity-0" />
              <BankIcon />
            </div>
            <span className="text-xs font-medium tracking-wide text-[#7A8378]">Bank</span>
          </div>

          <div className="relative mx-3 h-px flex-1 sm:mx-5">
            <div className="absolute inset-0 bg-[#CDC4A9]" />
            <div className="fund-line-fill fund-reset absolute inset-0 origin-left scale-x-0 bg-[#1B4533] transition-transform duration-[1300ms] ease-[cubic-bezier(.22,.61,.36,1)]" />
            <span className="fund-label pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[calc(100%+8px)] whitespace-nowrap text-[11px] font-medium tabular-figures text-[#42544A] opacity-0 transition-all duration-300">
              +$5,000 → 5,000 USDC
            </span>
            <span className="fund-dot absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DBFC00] opacity-0 shadow-[0_0_0_4px_rgba(219,252,0,.16)]" />
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="fund-wallet fund-reset relative grid h-[clamp(4rem,9vw,5rem)] w-[clamp(4rem,9vw,5rem)] place-items-center rounded-2xl border border-black/[0.07] bg-white text-[#9b9d98] shadow-[0_2px_8px_rgba(20,35,25,.07),0_8px_24px_rgba(20,35,25,.06)] transition-colors duration-300">
              <span className="wallet-pulse pointer-events-none absolute inset-0 rounded-2xl bg-[#DBFC00] opacity-0" />
              <WalletIcon />
            </div>
            <span className="text-xs font-medium tracking-wide text-[#7A8378]">Wallet</span>
          </div>
        </div>

        {/* Straight vertical connector from the flow line down into the account below */}
        <div className="relative flex flex-1 justify-center">
          <div className="relative w-px">
            <div className="absolute inset-0 bg-[#CDC4A9]" />
            <div className="fund-drop-fill fund-reset absolute inset-0 origin-top scale-y-0 bg-[#1B4533] transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)]" />
            <span className="fund-drop-dot absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DBFC00] opacity-0 shadow-[0_0_0_4px_rgba(219,252,0,.16)]" />
          </div>
        </div>

        {/* Account / balance card — bleeds past the frame's edges, clipped by the outer overflow-hidden */}
        <div className="relative z-10 -inset-x-[clamp(1.25rem,3.5vw,2rem)] rounded-t-[1.75rem] border border-[#E8E2D1] bg-white p-[clamp(1.25rem,4vw,2rem)] shadow-[0_4px_16px_rgba(20,35,25,.10),0_24px_64px_rgba(20,35,25,.14)]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#7A8378]">Total balance</div>
              <div className="mt-0.5 text-xs text-[#7A8378]">Global account •••• 4417</div>
            </div>
            <span className="shrink-0 rounded-full bg-[#EEF6F0] px-2.5 py-1 text-[10px] font-medium tracking-wide text-[#2F6B4E]">
              USD + USDC
            </span>
          </div>

          <div className="relative mt-2 inline-block">
            <div className="relative h-[clamp(2.25rem,6vw,3.25rem)] min-w-[clamp(10rem,24vw,14rem)] overflow-hidden">
              <div className="balance-old fund-reset absolute text-[clamp(1.9rem,6vw,3.25rem)] font-medium leading-none tracking-[-0.03em] text-[#0E2A1E] tabular-figures transition-all duration-500">
                $24,820
              </div>
              <div className="balance-new fund-reset absolute translate-y-2.5 text-[clamp(1.9rem,6vw,3.25rem)] font-medium leading-none tracking-[-0.03em] text-[#0E2A1E] tabular-figures opacity-0 transition-all duration-500">
                $34,820
              </div>
            </div>
            <span className="balance-glow pointer-events-none absolute -inset-x-3 -inset-y-2 -z-10 rounded-xl bg-[#DBFC00] opacity-0" />
          </div>

          <div className="mt-[clamp(1rem,3vw,1.5rem)] border-t border-[#ECE7D8] pt-[clamp(.75rem,2vw,1.1rem)]">
            <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#7A8378]">Recent activity</div>

            <div className="activity-insert fund-reset mt-1 grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-500 ease-out">
              <div className="activity-insert-inner min-h-0 -translate-y-2 overflow-hidden transition-transform duration-500 ease-out">
                <div className="flex items-center justify-between gap-3 rounded-xl bg-[#F5FFC2]/60 px-3 py-2.5">
                  <div className="flex items-center gap-3">
                    <ActivityIcon incoming />
                    <div>
                      <div className="text-sm font-medium text-[#0E2A1E]">{NEW_ROW.name}</div>
                      <div className="text-xs text-[#7A8378]">{NEW_ROW.date}</div>
                    </div>
                  </div>
                  <span className="shrink-0 text-sm font-semibold tabular-figures text-[#1B4533]">
                    {formatAmount(NEW_ROW.amount)}
                  </span>
                </div>
              </div>
            </div>

            <div className="-mx-1 max-h-[clamp(6.5rem,20vw,8.5rem)] overflow-hidden px-1 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
              {ACTIVITY_ROWS.map((row) => (
                <div
                  key={row.name}
                  className="flex items-center justify-between gap-3 border-b border-[#ECE7D8] py-2.5 last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <ActivityIcon incoming={row.amount > 0} />
                    <div>
                      <div className="flex items-center gap-1.5 text-sm font-medium text-[#25342C]">
                        {row.name}
                        {row.tag && (
                          <span className="rounded-full bg-[#F1EDE0] px-1.5 py-0.5 text-[9px] font-semibold tracking-wide text-[#5C503A]">
                            {row.tag}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[#7A8378]">{row.date}</div>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 text-sm font-medium tabular-figures ${row.amount > 0 ? "text-[#1B4533]" : "text-[#42544A]"}`}
                  >
                    {formatAmount(row.amount)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <span className="sr-only" aria-live="polite">
        {finalState ? "Funding complete. Total balance is $34,820." : "Total balance is $24,820."}
      </span>
    </section>
  );
}
