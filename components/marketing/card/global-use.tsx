"use client";

import { useLanguage } from "@/components/language-provider";
import { productCard } from "@/lib/content";

export function GlobalUse() {
  const { global } = productCard;
  const { language } = useLanguage();
  return (
    <section className="px-8 py-[110px]">
      <div className="mx-auto max-w-[1160px]">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">{global.eyebrow}</p>
        <h2 className="mt-3 font-display text-[clamp(38px,4.4vw,48px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">
          {language === "zh" ? global.heading.trimEnd() : global.heading}
          <em className="bg-[linear-gradient(transparent_68%,#DBFC00_68%)] px-[3px] not-italic italic">{global.headingAccent}</em>
          {language === "zh" ? "。" : "."}
        </h2>
        <p className="mt-[18px] max-w-[560px] text-[15.5px] leading-[1.6] text-[#42544A]">{global.copy}</p>

        <div className="mt-14 grid grid-cols-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {global.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-6 first:pl-0 last:pr-0 max-[900px]:px-4 max-[900px]:first:pl-0 max-[560px]:px-0 ${
                i > 0 ? "border-l border-dashed border-[#E6DFCC] max-[900px]:border-l-0 max-[560px]:mt-6 max-[560px]:border-t max-[560px]:border-dashed max-[560px]:pt-6" : ""
              } ${i === 2 ? "max-[900px]:mt-6 max-[900px]:border-l max-[900px]:border-t max-[900px]:border-dashed max-[900px]:pt-6" : ""}`}
            >
              <div className="font-display text-[38px] leading-none text-[#1B4533]">{stat.value}</div>
              <div className="mt-3 text-sm font-semibold text-foreground">{stat.label}</div>
              <div className="mt-1 text-[12.5px] leading-[1.5] text-[#42544A]">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-[13.5px] text-[#7A8378]">{global.safeLine}</div>
      </div>
    </section>
  );
}
