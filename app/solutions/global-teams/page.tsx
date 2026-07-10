import type { Metadata } from "next";
import { SolutionTemplate } from "@/components/marketing/solution-template";
import { solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "For Global Teams",
  description: solutions.globalTeams.hero.sub,
};

export default function GlobalTeamsPage() {
  return <SolutionTemplate solution={solutions.globalTeams} />;
}
