import type { Metadata } from "next";
import { SolutionTemplate } from "@/components/marketing/solution-template";
import { solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "For Stablecoin Earners",
  description: solutions.stablecoinEarners.hero.sub,
};

export default function StablecoinEarnersPage() {
  return <SolutionTemplate solution={solutions.stablecoinEarners} />;
}
