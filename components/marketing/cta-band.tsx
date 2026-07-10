import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function CtaBand({
  heading,
  sub,
  cta,
}: {
  heading: string;
  sub: string;
  cta: { label: string; href: string };
}) {
  return (
    <Section>
      <FadeIn className="flex flex-col items-center gap-5 rounded-3xl border border-border bg-background-subtle px-6 py-16 text-center md:py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{heading}</h2>
        <p className="max-w-md text-base text-foreground-muted">{sub}</p>
        <Button href={cta.href} size="lg" className="mt-2">
          {cta.label}
        </Button>
      </FadeIn>
    </Section>
  );
}
