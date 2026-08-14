import Link from "next/link";
import { Button } from "@/components/ui/button";
import { productCard } from "@/lib/content";

function ContactlessIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(60,50,40,.55)" strokeWidth="1.8" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M8.5 8.5a5 5 0 0 1 0 7" />
      <path d="M12 5.5a9 9 0 0 1 0 13" />
      <path d="M15.5 2.5a13 13 0 0 1 0 19" />
    </svg>
  );
}

function HeroCardVisual() {
  const { card } = productCard.hero;
  return (
    <div className="animate-[kq-hero-card-float_7s_ease-in-out_infinite]">
      <div className="relative h-[452px] w-[720px] overflow-hidden rounded-[28px] bg-white shadow-[0_60px_120px_rgba(10,25,18,.5)]">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(190deg,rgba(219,252,0,.16)_0%,rgba(255,255,255,0)_46%)]" />
        <div aria-hidden="true" className="absolute -right-[70px] bottom-20 flex gap-[26px] rotate-[-24deg]">
          <i className="block h-[210px] w-8 rounded-2xl bg-lime not-italic" />
          <i className="block h-[300px] w-8 rounded-2xl bg-lime opacity-70 not-italic" />
          <i className="block h-[170px] w-8 rounded-2xl bg-[#D5CBAF] not-italic" />
        </div>
        <div className="relative flex h-full flex-col p-[44px_48px] text-left">
          <div className="flex items-start justify-between">
            <span className="inline-flex items-center gap-1 text-[26px] font-extrabold tracking-tight text-brand">
              Kaloq
              <span aria-hidden="true" className="inline-block h-2 w-2 translate-y-2.5 rounded-full bg-lime" />
            </span>
            <ContactlessIcon />
          </div>
          <div className="mt-9 h-14 w-[76px] rounded-[10px] border border-[#CDC4A9] bg-[linear-gradient(135deg,#E6DFCC,#BFB18D)]" />
          <div className="mt-auto font-mono text-2xl tracking-[4px] text-[#0E2A1E]">{card.pan}</div>
          <div className="mt-[18px] flex justify-between font-mono text-base text-[#42544A]">
            <span>{card.holder}</span>
            <span>{card.expiry}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardHero() {
  const { hero } = productCard;
  return (
    <section
      data-hero-overlay
      className="relative -mt-[calc(4rem+1px)] h-[1100px] overflow-hidden bg-[#0E2A1E] text-center"
    >
      <div aria-hidden="true" className="card-hero-bg absolute inset-0" />
      <div aria-hidden="true" className="card-hero-dots absolute inset-0 opacity-[.28]" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[30%] h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(219,252,0,.14),transparent_70%)] blur-[60px]"
      />

      <div className="relative z-[4] px-6 pt-[150px]">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">{hero.eyebrow}</p>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-[clamp(48px,5vw,64px)] font-normal leading-[1.06] tracking-[-0.01em] text-white">
          {hero.h1Line1}
          <br />
          {hero.h1Line2} <em className="not-italic italic text-lime">{hero.h1Accent}</em>
          <span className="text-white">.</span>
        </h1>
        <p className="mx-auto mt-[22px] max-w-[560px] text-lg leading-[1.55] text-white/78">{hero.sub}</p>
        <div className="mt-[30px] flex flex-wrap justify-center gap-3">
          <Button href={hero.primaryCta.href} className="bg-lime px-[30px] py-3.5 text-base font-semibold !text-[#0E2A1E] hover:bg-lime-hover">
            {hero.primaryCta.label}
          </Button>
          <Link
            href={hero.secondaryCta.href}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/22 bg-white/12 px-[30px] py-3.5 text-base font-semibold text-white backdrop-blur-[10px] transition-colors hover:bg-white/24"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[84px] z-[4] flex justify-center px-4">
        <div className="origin-bottom scale-[0.46] sm:scale-[0.68] md:scale-[0.86] lg:scale-100">
          <HeroCardVisual />
        </div>
      </div>

      <div className="absolute bottom-[22px] left-1/2 z-[5] -translate-x-1/2 whitespace-nowrap rounded-full bg-white/50 px-5 py-2 text-[12.5px] text-[#3A3426] backdrop-blur-[8px]">
        {hero.compliance}
      </div>
    </section>
  );
}
