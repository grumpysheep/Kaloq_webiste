import Link from "next/link";
import { productGlobalAccount } from "@/lib/content";

export function CardBridge() {
  const { cardBridge } = productGlobalAccount;
  return <section className="px-8 py-[105px]"><div className="mx-auto max-w-[1160px] overflow-hidden rounded-[32px] bg-[#E9E5D7] px-12 py-16 max-[640px]:px-7"><div className="max-w-[650px]"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">{cardBridge.eyebrow}</p><h2 className="mt-3 max-w-[570px] font-display text-[clamp(38px,4.4vw,50px)] font-normal leading-[1.06] text-[#0E2A1E]">{cardBridge.heading}</h2><p className="mt-[18px] max-w-[560px] text-[15.5px] leading-[1.6] text-[#42544A]">{cardBridge.copy}</p><Link href={cardBridge.cta.href} className="mt-7 inline-flex rounded-full bg-[#1B4533] px-7 py-[13px] text-[15px] font-semibold text-white hover:bg-[#0E2A1E]">{cardBridge.cta.label}</Link></div></div></section>;
}
