import type { Metadata } from "next";
import { SolutionTemplate } from "@/components/marketing/solution-template";
import { solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "For Cross-Border Trade",
  description: solutions.crossBorderTrade.hero.sub,
};

export default function CrossBorderTradePage() {
  return <SolutionTemplate solution={solutions.crossBorderTrade} />;
}
