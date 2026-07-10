import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: about.mission,
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-20 pb-8 md:pt-28">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">{about.h1}</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">{about.mission}</p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-foreground-muted">{about.parentRelationship}</p>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {about.team.heading}
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {about.team.members.map((member, i) => (
            <FadeIn key={i} delay={i * 80} className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-border bg-background-subtle text-xs text-foreground-muted">
                [TODO: photo]
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">{member.name}</h3>
              <p className="text-xs text-foreground-muted">{member.role}</p>
              <p className="mt-2 text-xs leading-relaxed text-foreground-muted">{member.bio}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-background-subtle">
        <FadeIn className="mx-auto flex max-w-lg flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">{about.contact.heading}</h2>
          <p className="text-base text-foreground-muted">{about.contact.paragraph}</p>
          <Button href={about.contact.cta.href} size="lg">
            {about.contact.cta.label}
          </Button>
        </FadeIn>
      </Section>
    </>
  );
}
