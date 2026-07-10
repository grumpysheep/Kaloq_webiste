import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { PageHero } from "@/components/marketing/page-hero";
import { CaseStudyCard } from "@/components/marketing/case-study-card";
import { CtaBand } from "@/components/marketing/cta-band";
import { finalCtaGeneric, solutions } from "@/lib/content";

type Solution = (typeof solutions)[keyof typeof solutions];

export function SolutionTemplate({ solution }: { solution: Solution }) {
  return (
    <>
      <PageHero eyebrow={solution.heading} h1={solution.hero.h1} sub={solution.hero.sub} cta={finalCtaGeneric.cta} />

      {/* Sound familiar */}
      <Section className="bg-background-subtle">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Sound familiar?</h2>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {solution.painPoints.map((pain, i) => (
            <FadeIn key={pain} delay={i * 100} className="rounded-2xl border border-border bg-white p-7">
              <p className="text-sm leading-relaxed text-foreground">{pain}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* How Kaloq solves it */}
      <Section>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            How Kaloq solves it
          </h2>
          <p className="mt-4 text-base text-foreground-muted">{solution.solutionIntro}</p>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {solution.features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 100}>
              <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{feature.description}</p>
            </FadeIn>
          ))}
        </div>
        {"disclaimerNote" in solution && solution.disclaimerNote && (
          <FadeIn className="mx-auto mt-10 max-w-2xl text-center text-xs text-foreground-muted">
            {solution.disclaimerNote}
          </FadeIn>
        )}
      </Section>

      {/* Mini case */}
      <Section className="bg-background-subtle">
        <FadeIn className="mx-auto max-w-2xl">
          <CaseStudyCard quote={solution.caseStudy.quote} attribution={solution.caseStudy.attribution} />
        </FadeIn>
      </Section>

      <CtaBand heading={finalCtaGeneric.heading} sub={finalCtaGeneric.sub} cta={finalCtaGeneric.cta} />
    </>
  );
}
