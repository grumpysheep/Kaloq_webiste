import { productCard } from "@/lib/content";

const ICONS = [
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="3" />
    <path d="M12 18h.01" />
  </svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
  </svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>,
];

export function BenefitsRow() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto grid max-w-[1160px] grid-cols-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
        {productCard.benefits.map((benefit, i) => (
          <div
            key={benefit.title}
            className={`px-9 first:pl-0 last:pr-0 max-[900px]:px-6 max-[900px]:first:pl-0 max-[560px]:px-0 ${
              i > 0 ? "border-l border-dashed border-[#E6DFCC] max-[900px]:border-l-0 max-[560px]:mt-8 max-[560px]:pt-8 max-[560px]:border-t max-[560px]:border-dashed" : ""
            } ${i === 2 ? "max-[900px]:border-l max-[900px]:mt-8 max-[900px]:pt-8 max-[900px]:border-t max-[900px]:border-dashed" : ""}`}
          >
            <span className="text-[#2F6B4E]">{ICONS[i]}</span>
            <h3 className="mt-3.5 text-[16.5px] font-semibold leading-[1.35] tracking-[-0.01em] text-foreground">{benefit.title}</h3>
            <p className="mt-3.5 text-[14.5px] leading-[1.7] text-[#42544A]">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
