import { productGlobalAccount } from "@/lib/content";

const ICONS = ["$", "◎", "↔", "•"];

export function AccountBenefits() {
  return <section className="px-8 py-24"><div className="mx-auto grid max-w-[1160px] grid-cols-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">{productGlobalAccount.benefits.map((benefit, i) => <div key={benefit.title} className={`px-9 first:pl-0 last:pr-0 max-[900px]:px-6 max-[560px]:px-0 ${i > 0 ? "border-l border-dashed border-[#E6DFCC] max-[900px]:border-l-0 max-[560px]:mt-8 max-[560px]:border-t max-[560px]:pt-8" : ""}`}><span className="font-display text-2xl text-[#2F6B4E]">{ICONS[i]}</span><h3 className="mt-3.5 text-[16.5px] font-semibold text-foreground">{benefit.title}</h3><p className="mt-3.5 text-[14.5px] leading-[1.7] text-[#42544A]">{benefit.description}</p></div>)}</div></section>;
}
