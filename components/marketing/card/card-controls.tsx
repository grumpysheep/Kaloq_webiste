"use client";

import { useState } from "react";
import { productCard } from "@/lib/content";

function ContactlessIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(60,50,40,.6)" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M8.5 8.5a5 5 0 0 1 0 7" />
      <path d="M12 5.5a9 9 0 0 1 0 13" />
      <path d="M15.5 2.5a13 13 0 0 1 0 19" />
    </svg>
  );
}

function FreezeIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

const FEATURE_ICONS = [
  <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>,
  <FreezeIcon key="1" className="h-5 w-5" />,
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="3" />
    <path d="M12 18h.01" />
  </svg>,
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  </svg>,
];

export function CardControls() {
  const { controls } = productCard;
  const [frozen, setFrozen] = useState(false);

  return (
    <section className="px-8 py-[110px] text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">{controls.eyebrow}</p>
      <h2 className="mt-3 font-display text-[clamp(38px,4.4vw,48px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">
        {controls.heading}
        <em className="bg-[linear-gradient(transparent_68%,#DBFC00_68%)] px-[3px] not-italic italic">{controls.headingAccent}</em>.
      </h2>
      <p className="mx-auto mt-[18px] max-w-[460px] text-[15.5px] leading-[1.6] text-[#42544A]">{controls.copy}</p>

      <div className="relative mx-auto mt-[52px] w-[420px] max-w-full">
        <div
          className={`relative h-[264px] w-full overflow-hidden rounded-[22px] shadow-[0_30px_70px_rgba(92,80,58,.24)] transition-[filter,opacity] duration-[450ms] ease-in-out ${
            frozen ? "opacity-60 grayscale-[.92]" : ""
          }`}
        >
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(118deg,#FBE7C6_0%,#F6BC96_22%,#EF9484_44%,#EFB1D0_62%,#F4D9A6_84%,#FBF3DC_100%)]" />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(100deg,rgba(255,255,255,.6)_6%,rgba(255,255,255,0)_34%,rgba(255,255,255,.32)_52%,rgba(255,255,255,0)_74%)]" />
          <div className="relative flex h-full flex-col p-[26px_28px] text-left">
            <div className="flex items-start justify-between">
              <span className="inline-flex items-center gap-0.5 text-lg font-extrabold tracking-tight text-brand">
                Kaloq
                <span aria-hidden="true" className="inline-block h-1.5 w-1.5 translate-y-1.5 rounded-full bg-lime" />
              </span>
              <ContactlessIcon />
            </div>
            <div className="mt-auto flex items-baseline justify-between">
              <span className="font-mono text-sm tracking-[2.4px] text-[#0E2A1E]">·· {controls.card.last4}</span>
              <span className="font-mono text-[11.5px] text-[#42544A]">{controls.card.expiry}</span>
            </div>
          </div>
          <div
            className={`absolute left-1/2 top-3.5 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-[#0E2A1E] px-4 py-1.5 text-xs font-semibold text-white transition-opacity duration-[350ms] ${
              frozen ? "opacity-100" : "opacity-0"
            }`}
          >
            <FreezeIcon />
            {controls.frozenBadge}
          </div>
        </div>

        <div
          className={`absolute -top-[18px] -right-10 whitespace-nowrap rounded-full border px-4 py-[9px] text-[12.5px] font-semibold shadow-[0_12px_30px_rgba(92,80,58,.22)] transition-colors duration-[350ms] ${
            frozen ? "border-[#CDC4A9] bg-white text-[#42544A]" : "border-transparent bg-lime text-[#0E2A1E]"
          }`}
        >
          {frozen ? controls.toastDeclined : controls.toastApproved}
        </div>

        <button
          type="button"
          onClick={() => setFrozen((f) => !f)}
          className="mx-auto mt-[30px] flex select-none items-center gap-3 rounded-full"
          aria-pressed={frozen}
        >
          <span className={`relative h-[30px] w-[52px] rounded-full transition-colors duration-300 ${frozen ? "bg-[#0E2A1E]" : "bg-[#D5CBAF]"}`}>
            <i
              aria-hidden="true"
              className={`not-italic absolute top-[3px] block h-6 w-6 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,.2)] transition-[left] duration-300 ease-in-out ${
                frozen ? "left-[25px]" : "left-[3px]"
              }`}
            />
          </span>
          <span className="text-[15px] font-semibold text-foreground">{frozen ? controls.frozenLabel : controls.activeLabel}</span>
        </button>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1160px] grid-cols-4 text-left max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
        {controls.features.map((feature, i) => (
          <div
            key={feature.title}
            className={`px-8 first:pl-0 last:pr-0 max-[900px]:px-5 max-[900px]:first:pl-0 max-[560px]:px-0 ${
              i > 0 ? "border-l border-dashed border-[#E6DFCC] max-[900px]:border-l-0 max-[560px]:mt-7 max-[560px]:border-t max-[560px]:border-dashed max-[560px]:pt-7" : ""
            } ${i === 2 ? "max-[900px]:mt-7 max-[900px]:border-l max-[900px]:border-t max-[900px]:border-dashed max-[900px]:pt-7" : ""}`}
          >
            <span className="text-[#2F6B4E]">{FEATURE_ICONS[i]}</span>
            <h4 className="mt-3 text-[14.5px] font-semibold text-foreground">{feature.title}</h4>
            <p className="mt-1 text-[13px] leading-[1.6] text-[#42544A]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
