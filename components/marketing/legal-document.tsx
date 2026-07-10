import { Container } from "@/components/ui/container";
import type { LegalDoc } from "@/lib/content";

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <Container className="max-w-2xl py-16 md:py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">{doc.title}</h1>
      <p className="mt-2 text-sm text-foreground-muted">Last updated: {doc.lastUpdated}</p>
      <p className="mt-8 text-sm leading-relaxed text-foreground">{doc.intro}</p>

      <div className="mt-10 space-y-8">
        {doc.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-base font-semibold text-foreground">{section.heading}</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{section.body}</p>
          </section>
        ))}
      </div>
    </Container>
  );
}
