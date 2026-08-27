import Link from "next/link";
import { productCard } from "@/lib/content";

export function CloserBand() {
  const { closer } = productCard;
  return (
    <section className="bg-[#E9EFD6] px-8 py-[130px] text-center">
      <h2 className="font-display text-[clamp(42px,5vw,60px)] font-normal leading-[1.05] text-[#0E2A1E]">
            {closer.heading}
            <em className="bg-[linear-gradient(transparent_68%,#DBFC00_68%)] px-[5px] not-italic italic">{closer.headingAccent}</em>
          </h2>
      <p className="mx-auto mt-4 max-w-[520px] text-base text-[#42544A]">{closer.copy}</p>
      <div className="mt-[34px] flex items-center justify-center gap-[22px]">
        <Link
          href={closer.primaryCta.href}
          className="rounded-full bg-lime px-8 py-[15px] text-base font-semibold text-[#0E2A1E] transition-colors hover:bg-lime-hover"
        >
          {closer.primaryCta.label}
        </Link>
        <Link
          href={closer.secondaryLink.href}
          className="inline-flex items-center gap-1.5 whitespace-nowrap text-[15px] font-semibold text-[#0E2A1E] hover:text-[#1B4533]"
        >
          {closer.secondaryLink.label}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
