import { FadeIn } from "@/components/ui/fade-in";
import type { SolutionStep } from "@/lib/content";

export function ScenarioFlow({ heading, sub, steps }: { heading: string; sub: string; steps: SolutionStep[] }) {
  return (
    <section className="px-8 py-[105px]">
      <div className="mx-auto max-w-[1160px]">
        <FadeIn className="mx-auto max-w-[620px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">How it works</p>
          <h2 className="mt-3 font-display text-[clamp(38px,4.4vw,56px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">{heading}</h2>
          <p className="mt-4 text-[15.5px] leading-[1.6] text-[#42544A]">{sub}</p>
        </FadeIn>

        <div className="relative mt-14 grid gap-0 md:grid-cols-4">
          <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-5 border-t border-dashed border-[#CFC7B4] max-[767px]:hidden" />
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 120} className="relative px-8 text-center max-[767px]:border-t max-[767px]:border-dashed max-[767px]:border-[#E8E2D1] max-[767px]:py-7 first:max-[767px]:border-t-0">
              <div className="relative z-[1] mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#CFC7B4] bg-[#F8F6EF] font-mono text-[12px] text-[#7E6F4F]">{step.number}</div>
              <h3 className="mt-6 text-[17px] font-semibold text-[#0E2A1E]">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-[260px] text-[14px] leading-[1.65] text-[#42544A]">{step.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
