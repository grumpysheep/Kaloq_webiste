import type { Metadata } from "next";
import { LegalDocument } from "@/components/marketing/legal-document";
import { legal } from "@/lib/content";

export const metadata: Metadata = { title: legal.terms.title };

export default function TermsPage() {
  return <LegalDocument doc={legal.terms} />;
}
