import Link from "next/link";
import { Button } from "@/components/ui/button";
import { productPayments } from "@/lib/content";

function BankIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 10 9-6 9 6" />
      <path d="M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h16v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5" />
      <path d="M16 13h5" />
      <circle cx="16" cy="13" r="1" />
    </svg>
  );
}

function AccountVisual() {
  const { account } = productPayments;
  return (
    <div className="global-account-float">
      <div className="relative h-[452px] w-[720px] overflow-hidden rounded-[28px] bg-white shadow-[0_60px_120px_rgba(10,25,18,.5)]">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(190deg,rgba(219,252,0,.18)_0%,rgba(255,255,255,0)_45%)]" />
        <div aria-hidden="true" className="absolute -right-[92px] bottom-[-10px] h-[260px] w-[470px] rotate-[-18deg] rounded-[50%] border-[38px] border-lime/70" />
        <div aria-hidden="true" className="absolute -right-[48px] bottom-[46px] h-[190px] w-[350px] rotate-[-18deg] rounded-[50%] border-[18px] border-[#D5CBAF]/80" />

        <div className="relative flex h-full flex-col p-[42px_48px] text-left text-[#0E2A1E]">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1 text-[26px] font-extrabold tracking-tight text-brand">
                Kaloq
                <span aria-hidden="true" className="inline-block h-2 w-2 translate-y-2.5 rounded-full bg-lime" />
              </div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7A8378]">Global Account</div>
            </div>
            <span className="rounded-full border border-[#D7E69A] bg-[#F4F9D9] px-3 py-1.5 text-[11px] font-semibold text-[#557000]">Ready to move</span>
          </div>

          <div className="mt-7 flex items-end justify-between">
            <div>
              <div className="text-[12px] text-[#7A8378]">{account.balanceLabel}</div>
              <div className="mt-1 font-mono text-[38px] tracking-[-0.04em]">{account.balance}</div>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[#F7F4EA] px-3 py-2 text-[11px] text-[#657066]">
              <span className="h-2 w-2 rounded-full bg-lime" />
              Account overview
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {account.balances.map((balance) => (
              <div key={balance.label} className="rounded-2xl border border-[#E8E2D1] bg-white/80 p-4">
                <div className="flex items-center gap-2 text-[11px] text-[#7A8378]">
                  <span className={`h-2 w-2 rounded-full ${balance.tone === "lime" ? "bg-lime" : "bg-[#D5CBAF]"}`} />
                  {balance.label}
                </div>
                <div className="mt-2 font-mono text-[19px]">{balance.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between rounded-2xl bg-[#0E2A1E] px-5 py-4 text-white shadow-[0_14px_32px_rgba(14,42,30,.18)]">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-lime"><BankIcon /></div>
              <div>
                <div className="text-[12px] font-semibold">Bank account</div>
                <div className="mt-0.5 text-[11px] text-white/55">Local currency</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-lime" aria-hidden="true">
              <span className="h-px w-14 bg-lime/50" />
              <span className="text-xl">↔</span>
              <span className="h-px w-14 bg-lime/50" />
            </div>
            <div className="flex items-center gap-3 text-right">
              <div>
                <div className="text-[12px] font-semibold">Wallet</div>
                <div className="mt-0.5 text-[11px] text-white/55">Stablecoins</div>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime text-[#0E2A1E]"><WalletIcon /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GlobalAccountHero() {
  const { hero } = productPayments;
  return (
    <section data-hero-overlay className="relative -mt-[calc(4rem+1px)] h-[1100px] overflow-hidden bg-[#0E2A1E] text-center">
      <div aria-hidden="true" className="global-account-hero-bg absolute inset-0" />
      <div aria-hidden="true" className="global-account-hero-dots absolute inset-0 opacity-[.28]" />
      <div aria-hidden="true" className="absolute left-1/2 top-[28%] h-[460px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(219,252,0,.14),transparent_70%)] blur-[60px]" />

      <div className="relative z-[4] px-6 pt-[150px]">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">{hero.eyebrow}</p>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-[clamp(48px,5vw,64px)] font-normal leading-[1.06] tracking-[-0.01em] text-white">
          {hero.h1Line1}
          <br />
          {hero.h1Line2} <em className="not-italic italic text-lime">{hero.h1Accent}</em>
          <span className="text-white">.</span>
        </h1>
        <p className="mx-auto mt-[22px] max-w-[600px] text-lg leading-[1.55] text-white/78">{hero.sub}</p>
        <div className="mt-[30px] flex flex-wrap justify-center gap-3">
          <Button href={hero.primaryCta.href} className="bg-lime px-[30px] py-3.5 text-base font-semibold text-[#0E2A1E] hover:bg-lime-hover">
            {hero.primaryCta.label}
          </Button>
          <Link href={hero.secondaryCta.href} className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/22 bg-white/12 px-[30px] py-3.5 text-base font-semibold text-white backdrop-blur-[10px] transition-colors hover:bg-white/24">
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[84px] z-[4] flex justify-center px-4">
        <div className="origin-bottom scale-[0.46] sm:scale-[0.68] md:scale-[0.86] lg:scale-100">
          <AccountVisual />
        </div>
      </div>

      <div className="absolute bottom-[22px] left-1/2 z-[5] -translate-x-1/2 whitespace-nowrap rounded-full bg-white/50 px-5 py-2 text-[12.5px] text-[#3A3426] backdrop-blur-[8px]">
        {hero.compliance}
      </div>
    </section>
  );
}
