import { ReactNode } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function PageHero({
  eyebrow,
  h1,
  sub,
  cta,
  children,
}: {
  eyebrow?: string;
  h1: string;
  sub: string;
  cta?: { label: string; href: string };
  children?: ReactNode;
}) {
  return (
    <Section className="pt-20 pb-16 md:pt-28">
      <FadeIn className="mx-auto max-w-3xl text-center">
        {eyebrow && (
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-brand">{eyebrow}</p>
        )}
        <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">{h1}</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-foreground-muted">{sub}</p>
        {cta && (
          <div className="mt-8">
            <Button href={cta.href} size="lg">
              {cta.label}
            </Button>
          </div>
        )}
      </FadeIn>
      {children}
    </Section>
  );
}
