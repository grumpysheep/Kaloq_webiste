import Link from "next/link";
import { productPayments } from "@/lib/content";

export function CardBridge() {
  const { cardBridge } = productPayments;
  return (
    <section className="px-8 py-[105px]">
      <div className="mx-auto grid max-w-[1160px] grid-cols-[1fr_1.05fr] items-center gap-16 overflow-hidden rounded-[32px] bg-[#E9E5D7] px-12 py-16 max-[900px]:grid-cols-1 max-[900px]:gap-12 max-[640px]:px-7">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">{cardBridge.eyebrow}</p>
          <h2 className="mt-3 max-w-[470px] font-display text-[clamp(38px,4.4vw,50px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">{cardBridge.heading}</h2>
          <p className="mt-[18px] max-w-[430px] text-[15.5px] leading-[1.6] text-[#42544A]">{cardBridge.copy}</p>
          <Link href={cardBridge.cta.href} className="mt-7 inline-flex rounded-full bg-[#1B4533] px-7 py-[13px] text-[15px] font-semibold text-white transition-colors hover:bg-[#0E2A1E]">{cardBridge.cta.label}</Link>
        </div>

        <div className="relative flex min-h-[270px] items-center justify-center">
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[250px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[24px] border-lime/60 rotate-[-17deg]" />
          <div className="relative h-[190px] w-[305px] rotate-[-8deg] overflow-hidden rounded-[22px] bg-white shadow-[0_28px_45px_rgba(92,80,58,.25)]">
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(190deg,rgba(219,252,0,.16),transparent_50%)]" />
            <div className="relative flex h-full flex-col p-6 text-[#0E2A1E]">
              <div className="flex items-start justify-between">
                <span className="text-[20px] font-extrabold tracking-tight text-brand">Kaloq<span aria-hidden="true" className="ml-1 inline-block h-1.5 w-1.5 translate-y-2 rounded-full bg-lime" /></span>
                <span className="text-[20px] text-[#6D796D]">⌁</span>
              </div>
              <div className="mt-6 h-8 w-11 rounded-md border border-[#CDC4A9] bg-[linear-gradient(135deg,#E6DFCC,#BFB18D)]" />
              <div className="mt-auto font-mono text-[12px] tracking-[2px]">•••• 4242</div>
              <div className="mt-2 flex justify-between text-[9px] uppercase tracking-[0.12em] text-[#657066]"><span>K. HOLDER</span><span>09/29</span></div>
            </div>
          </div>
          <div className="absolute bottom-2 right-[12%] rounded-full bg-[#0E2A1E] px-4 py-2 text-[11px] font-semibold text-lime shadow-lg">Balance ready to spend</div>
        </div>
      </div>
    </section>
  );
}
