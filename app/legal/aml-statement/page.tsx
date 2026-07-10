import type { Metadata } from "next";
import { LegalDocument } from "@/components/marketing/legal-document";
import { legal } from "@/lib/content";

export const metadata: Metadata = { title: legal.amlStatement.title };

export default function AmlStatementPage() {
  return <LegalDocument doc={legal.amlStatement} />;
}
