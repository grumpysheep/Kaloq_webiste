"use client";

import { FormEvent, useState } from "react";
import { ScrollScrubVideo } from "@/components/marketing/scroll-scrub-video";
import { home } from "@/lib/content";

const { hero } = home;

export function HomeHero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // [TODO: wire to the real waitlist/signup endpoint]
    if (email.trim().length > 3 && email.includes("@")) {
      console.log("[Kaloq waitlist signup]", { email });
      setSubmitted(true);
    }
  }

  // -mt is the header's full flow height — h-16 plus its 1px bottom border —
  // otherwise a 1px strip of the white body shows above the hero
  return (
    <section
      data-hero-overlay
      className="relative -mt-[calc(4rem+1px)] h-[330vh] min-h-[1700px] bg-[#262A1C] text-white"
    >
      <div className="sticky top-0 flex h-screen min-h-[640px] flex-col overflow-hidden pt-16">
        <ScrollScrubVideo
          src="/videos/kaloq-demo-hero-v2.m4v"
          type="video/mp4"
          speed={1}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(38,42,28,0.46)_0%,rgba(38,42,28,0.26)_34%,rgba(38,42,28,0)_52%),linear-gradient(0deg,rgba(38,42,28,0.4)_0%,rgba(38,42,28,0)_22%)]"
        />

        <div className="relative mt-[clamp(56px,9vh,96px)] flex flex-col items-center px-6 text-center">
          <h1 className="font-display text-[clamp(48px,5.7vw,82px)] font-normal leading-[1.08] tracking-[-0.015em] text-white [text-shadow:0_2px_24px_rgba(38,42,28,0.28)] [text-wrap:balance]">
            {hero.h1Line1}
            <br />
            <em className="italic text-lime">{hero.h1Accent}</em>.
          </h1>
        </div>

        <div className="relative mt-auto flex flex-col items-center gap-4 px-6 pb-[clamp(36px,6vh,52px)]">
          <p className="font-display-sans text-center text-[clamp(15px,1.3vw,18px)] leading-normal text-white/95 [text-shadow:0_1px_12px_rgba(38,42,28,0.45)]">
            {hero.sub}
          </p>

          {submitted ? (
            <div
              role="status"
              className="font-display-sans flex items-center gap-2.5 rounded-full border border-lime/40 bg-[#262A1C]/55 px-8 py-[18px] text-base font-medium leading-none text-lime backdrop-blur-md"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M5.5 9.2l2.3 2.3 4.7-4.8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {hero.successMessage}
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex max-w-full gap-2 rounded-full border border-white/28 bg-white/16 p-[7px] backdrop-blur-lg"
            >
              <label htmlFor="hero-email" className="sr-only">
                Work email
              </label>
              <input
                id="hero-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={hero.emailPlaceholder}
                className="font-display-sans w-[min(280px,42vw)] min-w-0 bg-transparent px-4 text-[15px] text-white placeholder:text-white/65 focus:outline-none"
              />
              <button
                type="submit"
                className="font-display-sans shrink-0 whitespace-nowrap rounded-full bg-lime px-6 py-3.5 text-[15px] font-semibold leading-none text-[#1B4533] transition-colors duration-150 hover:bg-lime-hover"
              >
                {hero.submitLabel}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
