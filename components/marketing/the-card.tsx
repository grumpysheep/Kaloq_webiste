"use client";

import { useEffect, useRef, useState } from "react";
import { BrandCard } from "@/components/ui/brand-card";

const STEPS = [
  {
    title: "Issue your card instantly",
    body: "A virtual card the moment you sign up. No paperwork, no waiting.",
  },
  {
    title: "Add it to Apple Pay or Google Pay",
    body: "Tap your phone anywhere cards are accepted — 150+ countries.",
  },
  {
    title: "Spend stablecoins, settle instantly",
    body: "USDC leaves your balance. The merchant gets paid in their currency.",
  },
];

function PayCard() {
  return (
    <div className="absolute left-1/2 top-1/2 w-[350px] max-w-[72%] -translate-x-1/2 -translate-y-1/2 animate-[card-float_6s_ease-in-out_infinite]">
      <BrandCard
        alt="Kaloq signature physical card"
        className="w-full rounded-[20px] border border-white/15 shadow-[0_40px_80px_rgba(10,25,18,.3)]"
        sizes="(max-width: 640px) 72vw, 350px"
      />
    </div>
  );
}

function VideoStage() {
  return (
    <div className="relative h-[640px] w-[560px] max-[900px]:mx-auto">
      {/* TODO: replace mock with transparent product video — display 560×640, deliver 1120×1280 @2x
          as autoplaying/looping/muted <video> with WebM (VP9+alpha) and HEVC .mov (alpha, Safari) sources. */}
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" stroke="var(--lime-hover)" strokeWidth="2.4" strokeLinejoin="round" className="absolute left-[52px] top-[78px]" aria-hidden="true">
        <path d="M14 12 30 6l10 8-16 6z" />
        <path d="M14 12v14l10 9V21z" />
        <path d="M40 14v13l-16 7" />
      </svg>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#fff" strokeWidth="3" className="absolute right-24 top-16" aria-hidden="true">
        <ellipse cx="17" cy="17" rx="10" ry="13" transform="rotate(14 17 17)" />
      </svg>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="#2F6B4E" strokeWidth="2.4" strokeLinejoin="round" className="absolute right-[52px] top-[210px]" aria-hidden="true">
        <path d="M15 3l3.4 8.6L27 15l-8.6 3.4L15 27l-3.4-8.6L3 15l8.6-3.4z" />
      </svg>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--lime-hover)" strokeWidth="2.4" strokeLinejoin="round" className="absolute left-[84px] bottom-[150px]" aria-hidden="true">
        <path d="M10 14 24 9l8 6-14 5z" />
        <path d="M10 14v10l8 7v-11z" />
      </svg>
      <svg width="30" height="30" viewBox="0 0 34 34" fill="none" stroke="#fff" strokeWidth="3" className="absolute left-[120px] top-[250px]" aria-hidden="true">
        <ellipse cx="17" cy="17" rx="9" ry="12" transform="rotate(-10 17 17)" />
      </svg>
      <PayCard />
    </div>
  );
}

export function TheCard() {
  const [active, setActive] = useState(0);
  const manualRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!manualRef.current) {
        setActive((i) => (i + 1) % STEPS.length);
      }
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="border-y border-[#E8E2D1] bg-[#FCFBF7] px-8 py-[90px]">
      <div className="mx-auto grid max-w-[1160px] grid-cols-[1fr_1.25fr] items-center gap-14 max-[900px]:grid-cols-1">
        <div className="flex h-[640px] flex-col max-[900px]:h-auto">
          <h2 className="mt-16 font-display text-[38px] font-normal leading-[1.1] tracking-[-0.01em] text-[#0E2A1E] max-[900px]:mt-0">
            Get started fast. And never stop{" "}
            <em className="bg-[linear-gradient(transparent_68%,#DBFC00_68%)] px-[3px] not-italic italic">
              spending
            </em>
            .
          </h2>

          <div className="mt-auto max-w-[400px] max-[900px]:mt-10">
            {STEPS.map((step, i) => {
              const isActive = i === active;
              return (
                <div
                  key={step.title}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    manualRef.current = true;
                    setActive(i);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      manualRef.current = true;
                      setActive(i);
                    }
                  }}
                  className={`cursor-pointer border-t py-3.5 transition-colors duration-300 ${
                    isActive ? "border-[#1B4533]" : "border-[#E8E2D1]"
                  }`}
                >
                  <div className="flex items-baseline gap-2.5">
                    <span
                      aria-hidden="true"
                      className={`h-[7px] w-[7px] flex-none rounded-full border border-[#1B4533] bg-lime transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <div>
                      <div
                        className={`text-[15px] transition-colors duration-300 ${
                          isActive ? "font-semibold text-[#0E2A1E]" : "font-medium text-[#7A8378]"
                        }`}
                      >
                        {step.title}
                      </div>
                      <div
                        className="overflow-hidden text-[13.5px] leading-[1.55] text-[#42544A] transition-[max-height,opacity,margin-top] duration-[400ms] ease-in-out"
                        style={
                          isActive
                            ? { maxHeight: 80, opacity: 1, marginTop: 5 }
                            : { maxHeight: 0, opacity: 0, marginTop: 0 }
                        }
                      >
                        {step.body}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="border-t border-[#E8E2D1]" />
          </div>
        </div>

        <div className="flex justify-center">
          <VideoStage />
        </div>
      </div>
    </section>
  );
}
