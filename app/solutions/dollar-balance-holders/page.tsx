import type { Metadata } from "next";
import { SolutionTemplate } from "@/components/marketing/solution-template";
import { solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "For Dollar Balance Holders",
  description: solutions.dollarBalanceHolders.hero.sub,
};

export default function DollarBalanceHoldersPage() {
  return <SolutionTemplate solution={solutions.dollarBalanceHolders} />;
}
