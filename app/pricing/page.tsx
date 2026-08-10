import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FeeTable } from "@/components/ui/fee-table";
import { pricing } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description: pricing.intro,
};

export default function PricingPage() {
  return (
    <main className="bg-[#F8F6EF]">
      <Section className="pt-20 pb-12 md:pt-28">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">Kaloq Card pricing</p>
          <h1 className="mt-4 font-display text-[clamp(46px,5.2vw,72px)] font-normal leading-[1.04] tracking-[-0.02em] text-[#0E2A1E]">{pricing.h1}</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#42544A]">{pricing.intro}</p>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0E2A1E]">Indicative card fees</h2>
            <span className="rounded-full bg-[#EAF1EC] px-3 py-1.5 text-xs font-semibold text-[#25573F]">{pricing.indicativeLabel}</span>
          </div>
          {pricing.groups.map((group) => <FeeTable key={group.heading} heading={group.heading} rows={group.rows} />)}
        </FadeIn>
      </Section>

      <Section className="py-20">
        <FadeIn className="mx-auto max-w-3xl rounded-[28px] border border-[#E8E2D1] bg-white/65 px-7 py-9 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">Before you spend</p>
          <h2 className="mt-3 font-display text-[clamp(36px,4vw,52px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">{pricing.costFactors.heading}</h2>
          <ul className="mt-7 grid gap-4 md:grid-cols-2">
            {pricing.costFactors.items.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#42544A]"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#A5C63B]" />{item}</li>)}
          </ul>
          <p className="mt-7 border-t border-[#E8E2D1] pt-5 text-xs leading-relaxed text-[#6E756C]">Indicative figures are provided for planning only. The in-app confirmation page and formal fee schedule determine the final rate for your account, region, asset, and transaction.</p>
        </FadeIn>
      </Section>

      <Section className="px-6 py-10 md:py-16">
        <FadeIn className="mx-auto flex max-w-[1160px] flex-col items-center rounded-[32px] bg-[#E9E2D1] px-6 py-14 text-center md:py-18">
          <h2 className="font-display text-[clamp(38px,4.4vw,56px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">Ready to make your balance spendable?</h2>
          <p className="mt-4 max-w-[480px] text-[15.5px] leading-[1.6] text-[#42544A]">Start with supported stablecoins and review the final cost before you confirm.</p>
          <Button href="/contact" size="lg" className="mt-7 bg-[#1B4533] text-white hover:bg-[#0E2A1E]">Get your card</Button>
        </FadeIn>
      </Section>

      <Section className="bg-[#FAF8F1]">
        <FadeIn className="mx-auto max-w-2xl">
          <h2 className="text-center font-display text-[clamp(38px,4.4vw,54px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">Pricing questions</h2>
          <div className="mt-10"><FaqAccordion items={pricing.faq} /></div>
        </FadeIn>
      </Section>
    </main>
  );
}
