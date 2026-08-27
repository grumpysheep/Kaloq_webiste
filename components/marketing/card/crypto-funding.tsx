"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { productCard } from "@/lib/content";

function WalletIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7E6F4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7E6F4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function Doodles() {
  return (
    <>
      <svg aria-hidden="true" className="absolute left-[34px] top-[60px]" width="46" height="46" viewBox="0 0 46 46" fill="none" stroke="#BEDB00" strokeWidth="2.4" strokeLinejoin="round">
        <path d="M14 12 30 6l10 8-16 6z" />
        <path d="M14 12v14l10 9V21z" />
        <path d="M40 14v13l-16 7" />
      </svg>
      <svg aria-hidden="true" className="absolute right-[60px] top-[110px]" width="32" height="32" viewBox="0 0 34 34" fill="none" stroke="#A3926C" strokeWidth="3">
        <ellipse cx="17" cy="17" rx="10" ry="13" transform="rotate(14 17 17)" />
      </svg>
      <svg aria-hidden="true" className="absolute bottom-[170px] right-10" width="28" height="28" viewBox="0 0 30 30" fill="none" stroke="#2F6B4E" strokeWidth="2.4" strokeLinejoin="round">
        <path d="M15 3l3.4 8.6L27 15l-8.6 3.4L15 27l-3.4-8.6L3 15l8.6-3.4z" />
      </svg>
      <svg aria-hidden="true" className="absolute bottom-20 left-[52px]" width="38" height="38" viewBox="0 0 40 40" fill="none" stroke="#BEDB00" strokeWidth="2.4" strokeLinejoin="round">
        <path d="M10 14 24 9l8 6-14 5z" />
        <path d="M10 14v10l8 7v-11z" />
      </svg>
    </>
  );
}

function Pipe({ delayed = false }: { delayed?: boolean }) {
  return (
    <div className="relative mx-auto h-16 w-0 border-l-[1.5px] border-dashed border-[#BFB18D]">
      <i
        aria-hidden="true"
        className={`not-italic absolute -left-[5px] top-0 block h-[9px] w-[9px] animate-[kq-flow-v_3.4s_linear_infinite] rounded-full border-[1.5px] border-[#4A4234] bg-lime ${
          delayed ? "[animation-delay:1.7s]" : ""
        }`}
      />
    </div>
  );
}

export function CryptoFunding() {
  const { funding } = productCard;
  const { language } = useLanguage();
  const [active, setActive] = useState(0);
  const manualRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!manualRef.current) setActive((i) => (i + 1) % funding.steps.length);
    }, 3500);
    return () => clearInterval(id);
  }, [funding.steps.length]);

  function select(i: number) {
    manualRef.current = true;
    setActive(i);
  }

  const nodeClass = (i: number) =>
    `relative rounded-2xl bg-white/90 p-4 px-5 shadow-[0_8px_24px_rgba(92,80,58,.1)] transition-[box-shadow,transform] duration-[400ms] ease-in-out ${
      active === i ? "scale-[1.03] shadow-[0_16px_40px_rgba(92,80,58,.2)] outline outline-2 outline-lime" : ""
    }`;

  return (
    <section className="px-8 py-[100px]">
      <div className="mx-auto grid max-w-[1160px] grid-cols-[1fr_1.2fr] items-center gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-12">
        <div className="flex h-[620px] flex-col max-[900px]:h-auto">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">{funding.eyebrow}</p>
            <h2 className="mt-3 max-w-[420px] font-display text-[clamp(38px,4.4vw,48px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">
            {language === "zh" ? funding.heading.trimEnd() : funding.heading}
            <em className="bg-[linear-gradient(transparent_68%,#DBFC00_68%)] px-[3px] not-italic italic">{funding.headingAccent}</em>
          </h2>
            <p className="mt-[18px] max-w-[420px] text-[15.5px] leading-[1.6] text-[#42544A]">{funding.copy}</p>
          </div>

          <div className="mt-auto max-w-[420px] max-[900px]:mt-10">
            {funding.steps.map((step, i) => {
              const isActive = i === active;
              return (
                <div
                  key={step.number}
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
                  <div className="flex items-baseline gap-2.5">
                    <span
                      aria-hidden="true"
                      className={`h-[7px] w-[7px] flex-none rounded-full border border-[#1B4533] bg-lime transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <div className="min-w-0">
                      <span className="mr-2 font-mono text-[12.5px] text-[#7E6F4F]">{step.number}</span>
                      <span className={`text-[15px] transition-colors duration-300 ${isActive ? "font-semibold text-[#0E2A1E]" : "font-medium text-[#7A8378]"}`}>
                        {step.title}
                      </span>
                      <div
                        className="overflow-hidden text-[13.5px] leading-[1.55] text-[#42544A] transition-[max-height,opacity,margin-top] duration-[400ms] ease-in-out"
                        style={isActive ? { maxHeight: 80, opacity: 1, marginTop: 5 } : { maxHeight: 0, opacity: 0, marginTop: 0 }}
                      >
                        {step.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="border-t border-[#E8E2D1]" />
            <a
              href={funding.cta.href}
              className="mt-[26px] inline-block rounded-full bg-[#1B4533] px-7 py-[13px] text-[15px] font-semibold text-white transition-colors hover:bg-[#0E2A1E]"
            >
              {funding.cta.label}
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-[620px] w-[560px] max-w-full">
          <Doodles />
          <div className="absolute left-1/2 top-1/2 flex w-[320px] -translate-x-1/2 -translate-y-1/2 flex-col">
            <div className={nodeClass(0)}>
              <div className="flex items-center gap-3">
                <WalletIcon />
                <div className="flex-1">
                  <div className="text-sm font-semibold">{funding.flow.wallet.title}</div>
                  <div className="font-mono text-[12.5px] text-[#7A8378]">{funding.flow.wallet.sub}</div>
                </div>
                <div className="font-mono text-sm">{funding.flow.wallet.amount}</div>
              </div>
              <div className="mt-2.5 border-t border-[#E8E2D1] pt-2.5 text-xs text-[#7A8378]">{funding.flow.wallet.caption}</div>
            </div>

            <Pipe />

            <div className={nodeClass(1)}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">{funding.flow.balance.title}</div>
                  <div className="text-xs text-[#7A8378]">{funding.flow.balance.sub}</div>
                </div>
                <div className="font-mono text-[22px] text-[#26221A]">{funding.flow.balance.amount}</div>
              </div>
              <span className="absolute -right-2.5 -top-[13px] animate-[cap-toast_6.8s_infinite] whitespace-nowrap rounded-full bg-lime px-[11px] py-1 text-xs font-semibold text-[#0E2A1E]">
                {funding.flow.balance.toast}
              </span>
              <div className="mt-2.5 border-t border-[#E8E2D1] pt-2.5 text-xs text-[#7A8378]">{funding.flow.balance.caption}</div>
            </div>

            <Pipe delayed />

            <div className={nodeClass(2)}>
              <div className="flex items-center gap-3">
                <CartIcon />
                <div className="flex-1">
                  <div className="text-sm font-semibold">{funding.flow.purchase.title}</div>
                  <div className="text-xs text-[#7A8378]">{funding.flow.purchase.sub}</div>
                </div>
                <div className="font-mono text-sm">{funding.flow.purchase.amount}</div>
              </div>
              <div className="mt-2.5 border-t border-[#E8E2D1] pt-2.5 text-xs text-[#7A8378]">{funding.flow.purchase.caption}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
