import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { PageHero } from "@/components/marketing/page-hero";
import { CtaBand } from "@/components/marketing/cta-band";
import { RateCalculator } from "@/components/marketing/rate-calculator";
import { productPayments, finalCtaGeneric } from "@/lib/content";

export const metadata: Metadata = {
  title: "Payments — Collect, convert and pay out on stablecoin rails",
  description: productPayments.hero.sub,
};

export default function PaymentsPage() {
  return (
    <>
      <PageHero eyebrow="Payments" h1={productPayments.hero.h1} sub={productPayments.hero.sub} cta={productPayments.hero.cta} />

      {/* Three capabilities */}
      <Section className="bg-background-subtle">
        <div className="grid gap-6 md:grid-cols-3">
          {productPayments.capabilities.map((cap, i) => (
            <FadeIn key={cap.title} delay={i * 100} className="rounded-2xl border border-border bg-white p-8">
              <h3 className="text-xl font-semibold text-foreground">{cap.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{cap.description}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Rate transparency + calculator */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {productPayments.rateTransparency.heading}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-foreground-muted">
              {productPayments.rateTransparency.paragraph}
            </p>
          </FadeIn>
          <FadeIn delay={120}>
            <RateCalculator />
          </FadeIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-background-subtle">
        <FadeIn className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10">
            <FaqAccordion items={productPayments.faq} />
          </div>
        </FadeIn>
      </Section>

      <CtaBand heading={finalCtaGeneric.heading} sub={finalCtaGeneric.sub} cta={finalCtaGeneric.cta} />
    </>
  );
}
