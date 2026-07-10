import type { Metadata } from "next";
import { LegalDocument } from "@/components/marketing/legal-document";
import { legal } from "@/lib/content";

export const metadata: Metadata = { title: legal.privacy.title };

export default function PrivacyPage() {
  return <LegalDocument doc={legal.privacy} />;
}
