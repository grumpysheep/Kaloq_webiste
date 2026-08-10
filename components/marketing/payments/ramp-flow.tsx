"use client";

import { useState } from "react";
import { productPayments } from "@/lib/content";

function RampNode({ title, detail, active }: { title: string; detail: string; active?: boolean }) {
  return (
    <div className={`relative rounded-2xl bg-white/90 p-4 px-5 shadow-[0_8px_24px_rgba(92,80,58,.1)] transition-[box-shadow,transform] duration-[400ms] ${active ? "scale-[1.03] shadow-[0_16px_40px_rgba(92,80,58,.18)] outline outline-2 outline-lime" : ""}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold text-[#0E2A1E]">{title}</div>
        <span className="h-2 w-2 rounded-full bg-lime" />
      </div>
      <div className="mt-2 border-t border-[#E8E2D1] pt-2.5 text-xs leading-relaxed text-[#7A8378]">{detail}</div>
    </div>
  );
}

function RampPipe({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className={`relative mx-auto h-14 w-0 border-l-[1.5px] border-dashed border-[#BFB18D] ${reverse ? "[&>i]:[animation-direction:reverse]" : ""}`}>
      <i aria-hidden="true" className="kq-ramp-dot absolute -left-[5px] top-0 block h-[9px] w-[9px] rounded-full border-[1.5px] border-[#4A4234] bg-lime" />
    </div>
  );
}

export function RampFlow() {
  const [active, setActive] = useState<"on" | "off">("on");
  const mode = productPayments.flow.modes[active];

  return (
    <section id="how-it-works" className="px-8 py-[110px]">
      <div className="mx-auto grid max-w-[1160px] grid-cols-[1fr_1.2fr] items-center gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">{productPayments.flow.eyebrow}</p>
          <h2 className="mt-3 max-w-[450px] font-display text-[clamp(38px,4.4vw,50px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">{productPayments.flow.heading}</h2>
          <p className="mt-[18px] max-w-[430px] text-[15.5px] leading-[1.6] text-[#42544A]">{productPayments.flow.sub}</p>

          <div className="mt-8 inline-flex rounded-full border border-[#DCD5C4] bg-white/60 p-1">
            {(["on", "off"] as const).map((key) => (
              <button key={key} type="button" onClick={() => setActive(key)} className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${active === key ? "bg-[#0E2A1E] text-white" : "text-[#687268] hover:text-[#0E2A1E]"}`}>
                {productPayments.flow.modes[key].label}
              </button>
            ))}
          </div>

          <div className="mt-8 max-w-[440px] border-t border-[#E8E2D1]">
            <p className="py-4 text-[15px] font-semibold text-[#0E2A1E]">{mode.title}</p>
            {mode.steps.map((step) => (
              <div key={step.number} className="flex gap-3 border-t border-[#E8E2D1] py-4">
                <span className="font-mono text-[12px] text-[#7E6F4F]">{step.number}</span>
                <div>
                  <div className="text-[15px] font-medium text-[#0E2A1E]">{step.title}</div>
                  <div className="mt-1 text-[13.5px] leading-[1.55] text-[#42544A]">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[560px] w-[560px] max-w-full items-center justify-center overflow-hidden rounded-[28px] border border-[#E8E2D1] bg-[#F4F0E5]/70 px-16 py-16 max-[560px]:px-7">
          <div aria-hidden="true" className="absolute -left-16 top-16 h-32 w-32 rounded-full border-[16px] border-lime/50" />
          <div aria-hidden="true" className="absolute -right-20 bottom-20 h-44 w-44 rounded-full border-[18px] border-[#D5CBAF]/60" />
          <div className="relative w-full max-w-[320px]">
            <RampNode title={active === "on" ? "Your bank account" : "Your wallet"} detail={active === "on" ? "Local currency" : "Supported stablecoins"} active />
            <RampPipe />
            <RampNode title="Kaloq Global Account" detail="Hold, review, and convert your balance" active />
            <RampPipe reverse />
            <RampNode title={active === "on" ? "Your wallet" : "Your bank account"} detail={active === "on" ? "Supported stablecoins" : "Local currency"} active />
          </div>
        </div>
      </div>
    </section>
  );
}
