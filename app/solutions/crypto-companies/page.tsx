import type { Metadata } from "next";
import { SolutionTemplate } from "@/components/marketing/solution-template";
import { solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "For Crypto Companies",
  description: solutions.cryptoCompanies.hero.sub,
};

export default function CryptoCompaniesPage() {
  return <SolutionTemplate solution={solutions.cryptoCompanies} />;
}
