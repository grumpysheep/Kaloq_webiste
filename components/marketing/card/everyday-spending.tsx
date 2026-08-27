"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { productCard } from "@/lib/content";

const CATEGORY_PATHS = [
  <g key="0"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></g>,
  <g key="1"><path d="m17 2 4 4-4 4" /><path d="M3 11v-1a4 4 0 0 1 4-4h14" /><path d="m7 22-4-4 4-4" /><path d="M21 13v1a4 4 0 0 1-4 4H3" /></g>,
  <g key="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" /></g>,
  <g key="3"><path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" /><line x1="6" x2="6" y1="2" y2="4" /><line x1="10" x2="10" y1="2" y2="4" /><line x1="14" x2="14" y1="2" y2="4" /></g>,
];

function CategoryIcon({ index, size }: { index: number; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {CATEGORY_PATHS[index]}
    </svg>
  );
}

function FreezeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export function EverydaySpending() {
  const { everyday } = productCard;
  const { language } = useLanguage();
  const [active, setActive] = useState(0);
  const manualRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!manualRef.current) setActive((i) => (i + 1) % everyday.categories.length);
    }, 3500);
    return () => clearInterval(id);
  }, [everyday.categories.length]);

  function select(i: number) {
    manualRef.current = true;
    setActive(i);
  }

  return (
    <section id="everyday-spending" className="px-8 py-[110px]">
      <div className="mx-auto grid max-w-[1160px] grid-cols-2 items-center gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">{everyday.eyebrow}</p>
          <h2 className="mt-3 font-display text-[40px] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">
            {language === "zh" ? everyday.heading.trimEnd() : everyday.heading}
            <em className="bg-[linear-gradient(transparent_68%,#DBFC00_68%)] px-[3px] not-italic italic">{everyday.headingAccent}</em>
          </h2>
          <p className="mb-[30px] mt-[18px] max-w-[420px] text-[15.5px] leading-[1.6] text-[#42544A]">{everyday.copy}</p>

          <div className="max-w-[440px]">
            {everyday.categories.map((category, i) => {
              const isActive = i === active;
              return (
                <div
                  key={category.title}
                  role="button"
                  tabIndex={0}
                  onClick={() => select(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      select(i);
                    }
                  }}
                  className={`cursor-pointer border-t py-3.5 transition-colors duration-300 ${isActive ? "border-[#1B4533]" : "border-[#E8E2D1]"}`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`mt-0.5 inline-flex flex-none transition-colors duration-300 ${isActive ? "text-[#1B4533]" : "text-[#A3926C]"}`}>
                      <CategoryIcon index={i} size={18} />
                    </span>
                    <div className="min-w-0">
                      <h4 className={`text-[15px] transition-colors duration-300 ${isActive ? "font-semibold text-[#0E2A1E]" : "font-medium text-[#7A8378]"}`}>
                        {category.title}
                      </h4>
                      <div
                        className="overflow-hidden text-[13.5px] leading-[1.55] text-[#42544A] transition-[max-height,opacity,margin-top] duration-[400ms] ease-in-out"
                        style={isActive ? { maxHeight: 80, opacity: 1, marginTop: 5 } : { maxHeight: 0, opacity: 0, marginTop: 0 }}
                      >
                        {category.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="border-t border-[#E8E2D1]" />
          </div>
        </div>

        <div className="mx-auto w-full max-w-[420px] rounded-[28px] border border-white/65 bg-white/72 p-[26px_26px_18px] shadow-[0_24px_60px_rgba(92,80,58,.14)] backdrop-blur-[12px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[9px]">
              <span aria-hidden="true" className="h-[22px] w-[34px] rounded-[5px] bg-[linear-gradient(118deg,#FBE7C6_0%,#F6BC96_45%,#EF9484_100%)]" />
              <span className="font-mono text-[12.5px] text-[#7A8378]">{everyday.app.cardLabel}</span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#CDC4A9] px-3 py-[5px] text-xs font-semibold text-[#42544A]">
              <FreezeIcon />
              {everyday.app.freezeLabel}
            </span>
          </div>
          <div className="mt-[18px] text-xs text-[#7A8378]">{everyday.app.balanceLabel}</div>
          <div className="mt-0.5 font-mono text-[26px] text-[#26221A]">{everyday.app.balance}</div>

          <div className="mt-1.5">
            {everyday.app.transactions.map((tx, i) => (
              <div key={`${tx.name}-${i}`}>
                {tx.day && (
                  <div className="mb-1 mt-3.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#7A8378]">{tx.day}</div>
                )}
                <div
                  className={`-mx-2.5 flex items-center gap-3 rounded-xl px-2.5 py-2 transition-[opacity,background-color] duration-[350ms] ease-in-out ${
                    tx.category === active ? "bg-[rgba(219,252,0,.14)] opacity-100" : "opacity-[.42]"
                  }`}
                >
                  <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#F1EDE0] text-[#2F6B4E]">
                    <CategoryIcon index={tx.category} size={15} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold">{tx.name}</div>
                    <div className="mt-px truncate text-xs text-[#7A8378]">{tx.sub}</div>
                  </div>
                  <span className={`font-mono text-[13.5px] ${tx.refund ? "text-[#2F6B4E]" : ""}`}>{tx.amount}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 border-t border-[#E8E2D1] pt-3.5 text-center text-[13px] font-semibold text-[#42544A]">
            {everyday.app.viewAllLabel}
          </div>
        </div>
      </div>
    </section>
  );
}
