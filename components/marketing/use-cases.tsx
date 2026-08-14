"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type GrowDirection = "left" | "right" | "both";

const USE_CASES = [
  {
    label: "Stablecoin earners",
    caption: "Turn on-chain income into travel, subscriptions, shopping and everyday spending.",
    href: "/solutions/stablecoin-earners",
    image: "/images/use-cases/stablecoin-earners.jpg",
    objectPosition: "center",
  },
  {
    label: "Cross-border living",
    caption: "Keep a dollar balance while you live, work or travel across borders.",
    href: "/solutions/cross-border-living",
    image: "/images/use-cases/cross-border-living.jpg",
    objectPosition: "center",
  },
  {
    label: "Dollar balance holders",
    caption: "Hold supported dollar stablecoins, then spend only what everyday life needs.",
    href: "/solutions/dollar-balance-holders",
    image: "/images/use-cases/dollar-balance-holders.jpg",
    objectPosition: "center",
  },
  {
    label: "Global online spending",
    caption: "Use your supported stablecoin balance for eligible subscriptions, software and global online purchases.",
    href: "/solutions/global-online-spending",
    image: "/images/use-cases/global-online-spending.jpg",
    objectPosition: "center",
  },
];

function growClasses(dir: GrowDirection | null) {
  switch (dir) {
    case "left":
      return "w-[356px] ml-[-6px] mr-0";
    case "right":
      return "w-[356px] ml-0 mr-[-6px]";
    case "both":
      return "w-[362px] ml-[-6px] mr-[-6px]";
    default:
      return "w-[350px] ml-0 mr-0";
  }
}

export function UseCases() {
  const [hover, setHover] = useState<{ index: number; dir: GrowDirection } | null>(null);
  const [page, setPage] = useState<0 | 1>(0);

  function handleEnter(index: number, e: React.MouseEvent<HTMLDivElement>) {
    if (index === 0) {
      setHover({ index, dir: "both" });
      return;
    }
    const r = e.currentTarget.getBoundingClientRect();
    const dL = Math.abs(e.clientX - r.left);
    const dR = Math.abs(r.right - e.clientX);
    const dT = Math.abs(e.clientY - r.top);
    const dB = Math.abs(r.bottom - e.clientY);
    const m = Math.min(dL, dR, dT, dB);
    const dir: GrowDirection = m === dL ? "left" : m === dR ? "right" : "both";
    setHover({ index, dir });
  }

  return (
    <section className="overflow-hidden bg-[#F8F6EF] py-[110px]">
      <div className="mx-auto mb-[52px] flex max-w-[1160px] items-end justify-between gap-6 px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">Use cases</p>
          <h2 className="mt-3 font-display text-[clamp(38px,4.4vw,58px)] font-normal leading-[1.05] tracking-[-0.01em] text-[#0E2A1E]">
            Built for how you{" "}
            <em className="bg-[linear-gradient(transparent_68%,#DBFC00_68%)] px-[3px] not-italic italic">live</em>.
          </h2>
        </div>
        <div className="flex flex-none gap-2.5">
          <button
            type="button"
            aria-label="Previous"
            disabled={page === 0}
            onClick={() => setPage(0)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#CDC4A9] bg-white text-[#0E2A1E] transition-opacity disabled:pointer-events-none disabled:opacity-35"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            disabled={page === 1}
            onClick={() => setPage(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#CDC4A9] bg-white text-[#0E2A1E] transition-opacity disabled:pointer-events-none disabled:opacity-35"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="pl-[max(32px,calc(50%-548px))]">
        <div
          className="flex w-max gap-6 transition-transform duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ transform: `translateX(${page === 0 ? 0 : -410}px)` }}
        >
          {USE_CASES.map((useCase, i) => {
            const isHovered = hover?.index === i;
            return (
              <div key={useCase.label} className="flex flex-none flex-col items-start gap-3.5">
                <div
                  onMouseEnter={(e) => handleEnter(i, e)}
                  onMouseLeave={() => setHover((h) => (h?.index === i ? null : h))}
                  className={`relative h-[450px] flex-none cursor-pointer overflow-hidden rounded-lg transition-[width,margin] duration-[350ms] ease-out ${growClasses(
                    isHovered ? hover.dir : null
                  )}`}
                >
                  <Image
                    src={useCase.image}
                    alt=""
                    fill
                    sizes="350px"
                    style={{ objectFit: "cover", objectPosition: useCase.objectPosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,42,30,0)_58%,rgba(14,42,30,.62)_100%)]" />
                  <div className="absolute bottom-[18px] left-5 text-[19px] font-bold text-white">
                    {useCase.label}
                  </div>
                </div>
                <div className="max-w-[350px] text-[15px] leading-[1.5] text-[#42544A]">{useCase.caption}</div>
                <Link
                  href={useCase.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#25573F] no-underline hover:text-[#0E2A1E]"
                >
                  See how
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
