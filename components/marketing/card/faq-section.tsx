"use client";

import { useState } from "react";
import { productCard } from "@/lib/content";

export function FaqSection() {
  const { faq, faqMoreLink } = productCard;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-8 pb-[110px] pt-20">
      <div className="mx-auto max-w-[1160px] text-center">
        <h2 className="font-display text-[clamp(38px,4.4vw,48px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">
          Questions, <em className="bg-[linear-gradient(transparent_68%,#DBFC00_68%)] px-[3px] not-italic italic">answered</em>.
        </h2>

        <div className="mx-auto mt-9 max-w-[760px] text-left">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question} className="border-t border-[#E6DFCC]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className={`text-[15.5px] ${isOpen ? "font-semibold" : "font-medium"} text-foreground`}>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className={`inline-flex flex-none text-[#7E6F4F] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden text-sm leading-[1.6] text-[#42544A] transition-[max-height,opacity,padding-bottom] duration-[400ms] ease-in-out"
                  style={isOpen ? { maxHeight: 160, opacity: 1, paddingBottom: 18 } : { maxHeight: 0, opacity: 0, paddingBottom: 0 }}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
          <div className="border-t border-[#E6DFCC]" />
        </div>

        <a href={faqMoreLink.href} className="mt-6 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[#25573F] hover:text-[#0E2A1E]">
          {faqMoreLink.label}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
