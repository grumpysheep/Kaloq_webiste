import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FeeTable } from "@/components/ui/fee-table";
import { PageHero } from "@/components/marketing/page-hero";
import { CardMock } from "@/components/marketing/card-mock";
import { CtaBand } from "@/components/marketing/cta-band";
import Link from "next/link";
import { productCard, finalCtaGeneric } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kaloq Card — Stablecoin-funded corporate cards",
  description: productCard.hero.sub,
};

export default function CardPage() {
  return (
    <>
      <PageHero eyebrow="Kaloq Card" h1={productCard.hero.h1} sub={productCard.hero.sub} cta={productCard.hero.cta}>
        <FadeIn delay={150} className="mx-auto mt-14 max-w-sm">
          <CardMock />
        </FadeIn>
      </PageHero>

      {/* Feature grid */}
      <Section className="bg-background-subtle">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCard.features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 80} className="rounded-2xl border border-border bg-white p-7">
              <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{feature.description}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* How funding works */}
      <Section>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {productCard.funding.heading}
          </h2>
        </FadeIn>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {productCard.funding.steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 100} className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-tint text-sm font-semibold text-brand">
                {i + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.description}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-background-subtle p-6 text-center text-sm text-foreground-muted">
          {productCard.funding.note}
        </FadeIn>
      </Section>

      {/* Fees preview */}
      <Section className="bg-background-subtle">
        <div className="mx-auto max-w-2xl">
          <FadeIn>
            <h2 className="text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Fees, at a glance
            </h2>
            <div className="mt-10">
              <FeeTable rows={productCard.fees} />
            </div>
            <p className="mt-6 text-center text-sm">
              <Link href="/pricing" className="font-medium text-brand hover:text-brand-hover">
                See full pricing →
              </Link>
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <FadeIn className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10">
            <FaqAccordion items={productCard.faq} />
          </div>
        </FadeIn>
      </Section>

      <CtaBand heading={finalCtaGeneric.heading} sub={finalCtaGeneric.sub} cta={finalCtaGeneric.cta} />
    </>
  );
}
