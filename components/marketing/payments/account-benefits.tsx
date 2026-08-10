import { productPayments } from "@/lib/content";

const ICONS = [
  <svg key="balance" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18" /><path d="M7 14h3" /></svg>,
  <svg key="bank" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 10 9-6 9 6" /><path d="M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18" /></svg>,
  <svg key="convert" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 7h11l-3-3" /><path d="M17 17H6l3 3" /><path d="M18 7a6 6 0 0 1 1 3" /><path d="M6 17a6 6 0 0 1-1-3" /></svg>,
  <svg key="send" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m21 3-7.5 18-3.2-7.3L3 10.5 21 3Z" /><path d="M10.3 13.7 21 3" /></svg>,
];

export function AccountBenefits() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto grid max-w-[1160px] grid-cols-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
        {productPayments.benefits.map((benefit, i) => (
          <div key={benefit.title} className={`px-9 first:pl-0 last:pr-0 max-[900px]:px-6 max-[900px]:first:pl-0 max-[560px]:px-0 ${i > 0 ? "border-l border-dashed border-[#E6DFCC] max-[900px]:border-l-0 max-[560px]:mt-8 max-[560px]:pt-8 max-[560px]:border-t max-[560px]:border-dashed" : ""} ${i === 2 ? "max-[900px]:border-l max-[900px]:mt-8 max-[900px]:pt-8 max-[900px]:border-t max-[900px]:border-dashed" : ""}`}>
            <span className="text-[#2F6B4E]">{ICONS[i]}</span>
            <h3 className="mt-3.5 text-[16.5px] font-semibold leading-[1.35] tracking-[-0.01em] text-foreground">{benefit.title}</h3>
            <p className="mt-3.5 text-[14.5px] leading-[1.7] text-[#42544A]">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
