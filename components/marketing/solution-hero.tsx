import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type SolutionHeroData = {
  heading: string;
  hero: {
    h1: string;
    sub: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    image: string;
    imageAlt: string;
    objectPosition: string;
  };
};

function WalletIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h16v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5" />
      <path d="M16 13h5" />
      <circle cx="16" cy="13" r="1" />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M2.5 10h19" />
      <path d="M6 15h3" />
    </svg>
  );
}

function BalancePanel() {
  return (
    <div className="absolute bottom-8 left-1/2 w-[min(390px,calc(100%-32px))] -translate-x-1/2 rounded-[24px] border border-white/75 bg-[#FFFEFA]/90 p-5 text-[#0E2A1E] shadow-[0_22px_50px_rgba(75,65,42,.18)] backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7A8378]">Kaloq balance</div>
          <div className="mt-1 font-mono text-[25px] tracking-[-0.04em]">Ready to spend</div>
        </div>
        <span className="rounded-full bg-[#F4F9D9] px-3 py-1.5 text-[10px] font-semibold text-[#557000]">Illustrative flow</span>
      </div>
      <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <div className="rounded-2xl border border-[#E8E2D1] bg-white/75 p-3">
          <div className="flex items-center gap-2 text-[#557000]"><WalletIcon /><span className="text-[11px] font-semibold text-[#0E2A1E]">Your wallet</span></div>
          <div className="mt-2 text-[11px] text-[#7A8378]">Supported assets</div>
        </div>
        <span className="text-lg text-[#7E6F4F]" aria-hidden="true">→</span>
        <div className="rounded-2xl border border-[#E8E2D1] bg-[#F7F4EA] p-3">
          <div className="flex items-center gap-2 text-[#557000]"><CardIcon /><span className="text-[11px] font-semibold text-[#0E2A1E]">Kaloq Card</span></div>
          <div className="mt-2 text-[11px] text-[#7A8378]">Everyday spending</div>
        </div>
      </div>
    </div>
  );
}

export function SolutionHero({ solution }: { solution: SolutionHeroData }) {
  return (
    <section className="solution-light-hero overflow-hidden border-b border-[#E8E2D1]">
      <div className="mx-auto grid min-h-[690px] max-w-[1200px] grid-cols-[.95fr_1.05fr] items-center gap-14 px-6 py-20 md:px-8 md:py-24 max-[900px]:grid-cols-1 max-[900px]:gap-12 max-[900px]:py-16">
        <div className="max-w-[560px]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">{solution.heading}</p>
          <h1 className="mt-4 max-w-[600px] font-display text-[clamp(46px,5.2vw,72px)] font-normal leading-[1.04] tracking-[-0.02em] text-[#0E2A1E]">
            {solution.hero.h1}
          </h1>
          <p className="mt-6 max-w-[520px] text-[17px] leading-[1.6] text-[#42544A]">{solution.hero.sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={solution.hero.primaryCta.href} size="lg" className="bg-[#1B4533] text-white hover:bg-[#0E2A1E]">{solution.hero.primaryCta.label}</Button>
            <Link href={solution.hero.secondaryCta.href} className="inline-flex items-center justify-center rounded-full border border-[#CFC7B4] bg-white/55 px-6 py-3.5 text-base font-semibold text-[#1B4533] transition-colors hover:border-[#1B4533] hover:bg-white">{solution.hero.secondaryCta.label}</Link>
          </div>
        </div>

        <div className="relative mx-auto h-[540px] w-full max-w-[560px] overflow-hidden rounded-[30px] bg-[#E9E2D1] shadow-[0_28px_70px_rgba(92,80,58,.14)]">
          <Image src={solution.hero.image} alt={solution.hero.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 560px" style={{ objectFit: "cover", objectPosition: solution.hero.objectPosition }} />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,244,234,.08)_12%,rgba(247,244,234,.06)_42%,rgba(247,244,234,.74)_100%)]" />
          <div aria-hidden="true" className="absolute left-8 top-8 h-24 w-24 rounded-full border-[14px] border-white/45" />
          <div aria-hidden="true" className="absolute right-[-30px] top-24 h-44 w-44 rounded-full border-[18px] border-[#DBFC00]/35" />
          <BalancePanel />
        </div>
      </div>
    </section>
  );
}
