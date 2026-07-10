import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/marketing/contact-form";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a Demo",
  description: contact.sub,
};

export default function ContactPage() {
  return (
    <Section className="pt-20 pb-24 md:pt-28">
      <div className="grid gap-14 md:grid-cols-[1.3fr_1fr]">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">{contact.h1}</h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-foreground-muted">{contact.sub}</p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-background-subtle p-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
            {contact.whatHappensNext.heading}
          </h2>
          <ul className="mt-5 space-y-4">
            {contact.whatHappensNext.items.map((item, i) => (
              <li key={item} className="flex gap-3 text-sm text-foreground">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-tint text-xs font-semibold text-brand">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
