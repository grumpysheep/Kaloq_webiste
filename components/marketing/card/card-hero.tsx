import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrandCard } from "@/components/ui/brand-card";
import { productCard } from "@/lib/content";

function HeroCardVisual() {
  return (
    <div className="animate-[kq-hero-card-float_7s_ease-in-out_infinite]">
      <BrandCard
        alt="Kaloq signature physical card"
        className="w-[430px] rounded-[28px] shadow-[0_60px_120px_rgba(10,25,18,.5)]"
        priority
        sizes="430px"
      />
    </div>
  );
}

export function CardHero() {
  const { hero } = productCard;
  return (
    <section
      data-hero-overlay
      className="relative -mt-[calc(4rem+1px)] h-[1300px] overflow-hidden bg-[#0E2A1E] text-center"
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
        <div className="origin-bottom scale-[0.52] sm:scale-[0.7] md:scale-[0.86] lg:scale-100">
          <HeroCardVisual />
        </div>
      </div>

      <div className="absolute bottom-[22px] left-1/2 z-[5] -translate-x-1/2 whitespace-nowrap rounded-full bg-white/50 px-5 py-2 text-[12.5px] text-[#3A3426] backdrop-blur-[8px]">
        {hero.compliance}
      </div>
    </section>
  );
}
