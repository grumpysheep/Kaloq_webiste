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
    <>
      <Section className="pt-20 pb-12 md:pt-28">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">{pricing.h1}</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-foreground-muted">{pricing.intro}</p>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl space-y-10">
          {pricing.groups.map((group, i) => (
            <FadeIn key={group.heading} delay={i * 100}>
              <FeeTable heading={group.heading} rows={group.rows} />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Volume pricing */}
      <Section className="bg-background-subtle">
        <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {pricing.volumePricing.heading}
          </h2>
          <p className="text-base text-foreground-muted">{pricing.volumePricing.paragraph}</p>
          <Button href={pricing.volumePricing.cta.href} size="lg">
            {pricing.volumePricing.cta.label}
          </Button>
        </FadeIn>
      </Section>

      {/* No surprises */}
      <Section>
        <FadeIn className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {pricing.noSurprises.heading}
          </h2>
          <ul className="mt-8 space-y-3">
            {pricing.noSurprises.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                  <path d="M3 8.5l3 3 7-7" stroke="#1f4b36" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Section>

      {/* FAQ */}
      <Section className="bg-background-subtle">
        <FadeIn className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10">
            <FaqAccordion items={pricing.faq} />
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
