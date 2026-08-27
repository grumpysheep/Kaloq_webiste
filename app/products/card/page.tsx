import type { Metadata } from "next";
import { CardHero } from "@/components/marketing/card/card-hero";
import { BenefitsRow } from "@/components/marketing/card/benefits-row";
import { EverydaySpending } from "@/components/marketing/card/everyday-spending";
import { CryptoFunding } from "@/components/marketing/card/crypto-funding";
import { GlobalUse } from "@/components/marketing/card/global-use";
import { CardControls } from "@/components/marketing/card/card-controls";
import { FeesSection } from "@/components/marketing/card/fees-section";
import { FaqSection } from "@/components/marketing/card/faq-section";
import { CloserBand } from "@/components/marketing/card/closer-band";
import { productCard } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kaloq Card — Everyday spending, funded by supported digital assets",
  description: productCard.hero.sub,
};

export default function CardPage() {
  return (
    <>
      <CardHero />

      {/* One continuous canvas from below the hero to the FAQ — sections inside are transparent,
          so there are no hard seams between them. The closer band + footer own their own color. */}
      <div className="card-canvas relative">
        <BenefitsRow />
        <EverydaySpending />
        <CryptoFunding />
        <GlobalUse />
        <CardControls />
        <FeesSection />
        <FaqSection />
      </div>

      <CloserBand />
    </>
  );
}
