import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { CtaBand } from "@/components/marketing/cta-band";
import { HomeHero } from "@/components/marketing/home-hero";
import { home } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* S1 — Hero */}
      <HomeHero />

      {/* S2 — Trust bar */}
      <Section className="border-y border-border bg-background-subtle py-10 md:py-12">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center text-sm font-medium text-foreground-muted">
          {home.trustBar.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
          {home.trustBar.logos.map((logo, i) => (
            <span
              key={i}
              className="flex h-8 w-28 items-center justify-center rounded-md border border-dashed border-border text-[11px] text-foreground-muted"
            >
              {logo}
            </span>
          ))}
        </div>
      </Section>

      {/* S3 — How it works */}
      <Section id="how-it-works">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {home.howItWorks.heading}
          </h2>
        </FadeIn>
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {home.howItWorks.steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 100}>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-tint text-sm font-semibold text-brand">
                {step.number}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.description}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* S4 — Products */}
      <Section className="bg-background-subtle">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {home.products.heading}
          </h2>
        </FadeIn>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {home.products.items.map((product, i) => (
            <FadeIn key={product.title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-8">
                <h3 className="text-2xl font-semibold text-foreground">{product.title}</h3>
                <p className="mt-2 text-sm text-foreground-muted">{product.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {product.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-foreground">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                        <path d="M3 8.5l3 3 7-7" stroke="#1f4b36" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link href={product.href} className="mt-8 text-sm font-medium text-brand hover:text-brand-hover">
                  Learn more →
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* S5 — Audience split */}
      <Section>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {home.audience.heading}
          </h2>
        </FadeIn>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {home.audience.tiles.map((tile, i) => (
            <FadeIn key={tile.title} delay={i * 100}>
              <Link
                href={tile.href}
                className="group flex h-full flex-col rounded-2xl border border-border p-7 transition-colors hover:border-brand"
              >
                <h3 className="text-lg font-semibold text-foreground">{tile.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-muted">{tile.pain}</p>
                <span className="mt-6 text-sm font-medium text-brand">Explore →</span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* S6 — Transparency */}
      <Section className="bg-background-subtle">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <FadeIn>
            <Badge>Pricing</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {home.transparency.heading}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-foreground-muted">
              {home.transparency.paragraph}
            </p>
            <Link
              href={home.transparency.cta.href}
              className="mt-6 inline-block text-sm font-medium text-brand hover:text-brand-hover"
            >
              {home.transparency.cta.label}
            </Link>
          </FadeIn>
          <FadeIn delay={120} className="overflow-hidden rounded-2xl border border-border bg-white">
            {home.transparency.rows.map((row) => (
              <div key={row.label} className="flex items-center justify-between border-b border-border px-6 py-4 last:border-b-0">
                <span className="text-sm text-foreground">{row.label}</span>
                <span className="tabular-figures text-sm font-medium text-foreground-muted">{row.value}</span>
              </div>
            ))}
          </FadeIn>
        </div>
      </Section>

      {/* S7 — Why Kaloq */}
      <Section className="bg-footer text-footer-foreground">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {home.whyKaloq.heading}
          </h2>
        </FadeIn>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {home.whyKaloq.columns.map((col, i) => (
            <FadeIn key={col.title} delay={i * 100}>
              <h3 className="text-lg font-semibold text-white">{col.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-footer-foreground-muted">{col.description}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* S8 — Final CTA */}
      <CtaBand heading={home.finalCta.heading} sub={home.finalCta.sub} cta={home.finalCta.cta} />
    </>
  );
}
