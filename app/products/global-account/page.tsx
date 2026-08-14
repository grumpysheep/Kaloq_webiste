import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaBand } from "@/components/marketing/cta-band";
import { GlobalAccountHero } from "@/components/marketing/global-account/global-account-hero";
import { AccountBenefits } from "@/components/marketing/global-account/account-benefits";
import { CurrencyWorkspace } from "@/components/marketing/global-account/currency-workspace";
import { AccountOverview } from "@/components/marketing/global-account/account-overview";
import { CardBridge } from "@/components/marketing/global-account/card-bridge";
import { productGlobalAccount } from "@/lib/content";

export const metadata: Metadata = {
  title: "Global Account — USD today, more currencies coming soon",
  description: productGlobalAccount.hero.sub,
};

export default function GlobalAccountPage() {
  return (
    <>
      <GlobalAccountHero />

      <div className="global-account-canvas relative">
        <AccountBenefits />
        <CurrencyWorkspace />
        <AccountOverview />
        <CardBridge />

        <Section className="px-8 pb-28 pt-16">
          <FadeIn className="mx-auto max-w-2xl">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">Questions</p>
            <h2 className="mt-3 text-center font-display text-[clamp(38px,4.4vw,50px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">A clearer way to move money.</h2>
            <div className="mt-10">
              <FaqAccordion items={productGlobalAccount.faq} />
            </div>
          </FadeIn>
        </Section>
      </div>

      <CtaBand heading={productGlobalAccount.closer.heading} sub={productGlobalAccount.closer.sub} cta={productGlobalAccount.closer.cta} />
    </>
  );
}
