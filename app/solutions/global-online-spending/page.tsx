import type { Metadata } from "next";
import { SolutionTemplate } from "@/components/marketing/solution-template";
import { solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "For Global Online Spending",
  description: solutions.globalOnlineSpending.hero.sub,
};

export default function GlobalOnlineSpendingPage() {
  return <SolutionTemplate solution={solutions.globalOnlineSpending} />;
}
