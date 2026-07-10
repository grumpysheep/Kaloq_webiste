import type { Metadata } from "next";
import { LegalDocument } from "@/components/marketing/legal-document";
import { legal } from "@/lib/content";

export const metadata: Metadata = { title: legal.prohibitedJurisdictions.title };

export default function ProhibitedJurisdictionsPage() {
  return <LegalDocument doc={legal.prohibitedJurisdictions} />;
}
