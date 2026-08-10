import type { Metadata } from "next";
import { SolutionTemplate } from "@/components/marketing/solution-template";
import { solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "For Cross-border Living",
  description: solutions.crossBorderLiving.hero.sub,
};

export default function CrossBorderLivingPage() {
  return <SolutionTemplate solution={solutions.crossBorderLiving} />;
}
