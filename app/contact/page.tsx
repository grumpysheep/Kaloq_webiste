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
      <div className="mx-auto max-w-2xl">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">{contact.h1}</h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-foreground-muted">{contact.sub}</p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
