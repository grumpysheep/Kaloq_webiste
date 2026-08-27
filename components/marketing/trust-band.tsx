import { home } from "@/lib/content";

export function TrustBand() {
  const { trustBand } = home;

  return (
    <section className="bg-[#1B4533] px-8 py-[72px] text-white">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid grid-cols-2 items-start gap-y-6 md:grid-cols-[1.15fr_1fr_1fr_1fr_1fr] md:gap-y-0">
          <h2 className="col-span-2 pr-0 pb-8 font-display text-[40px] font-normal leading-[1.05] tracking-[-0.01em] md:col-span-1 md:pr-10 md:pb-0">
            {trustBand.heading}
            <em className="not-italic italic text-lime">{trustBand.headingAccent}</em>
          </h2>
          {trustBand.pillars.map((pillar) => (
            <div key={pillar.label} className="border-l border-white/16 px-5 last:pr-0 md:px-6">
              <div className={`font-display text-[38px] leading-none ${pillar.accent ? "text-lime" : "text-white"}`}>
                {pillar.figure}
              </div>
              <div className="mt-3 text-sm font-semibold">{pillar.label}</div>
              <div className="mt-1 text-[12.5px] leading-[1.5] text-white/65">{pillar.body}</div>
            </div>
          ))}
        </div>

        <div className="mt-11 flex flex-wrap items-center gap-7 border-t border-white/16 pt-[22px]">
          <div className="flex-none text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
            {trustBand.partnersLabel}
          </div>
              <span className="text-sm font-semibold text-white sm:text-base">
                {trustBand.partnerName}
              </span>
        </div>
      </div>
    </section>
  );
}
