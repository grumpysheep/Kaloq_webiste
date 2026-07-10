import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { compliance } from "@/lib/content";

export const metadata: Metadata = {
  title: "Compliance & Licenses",
  description: "Registrations, AML/CTF program overview and restricted jurisdictions for Kaloq.",
};

export default function CompliancePage() {
  return (
    <Container className="max-w-2xl py-16 md:py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">{compliance.h1}</h1>

      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
          {compliance.registrations.heading}
        </h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-background-subtle text-xs uppercase tracking-wide text-foreground-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Jurisdiction</th>
                <th className="px-4 py-3 font-medium">Registration type</th>
                <th className="px-4 py-3 font-medium">Number</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {compliance.registrations.rows.map((row, i) => (
                <tr key={i}>
                  <td className="px-4 py-3 text-foreground">{row.jurisdiction}</td>
                  <td className="px-4 py-3 text-foreground">{row.type}</td>
                  <td className="px-4 py-3 text-foreground">{row.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
          {compliance.amlProgram.heading}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground">{compliance.amlProgram.paragraph}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
          {compliance.restrictedJurisdictions.heading}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground">
          {compliance.restrictedJurisdictions.statement}
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-sm font-medium text-brand">View list</summary>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground-muted">
            {compliance.restrictedJurisdictions.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      </section>

      <section className="mt-10 border-t border-border pt-8">
        <p className="text-sm text-foreground-muted">{compliance.contact}</p>
      </section>
    </Container>
  );
}
