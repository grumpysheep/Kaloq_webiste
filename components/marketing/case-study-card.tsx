export function CaseStudyCard({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-background-subtle p-8 md:p-10">
      <span className="mb-3 inline-block text-xs font-medium uppercase tracking-wide text-foreground-muted">
        [TODO: real case study]
      </span>
      <blockquote className="text-xl font-medium leading-snug text-foreground md:text-2xl">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <p className="mt-4 text-sm text-foreground-muted">{attribution}</p>
    </div>
  );
}
