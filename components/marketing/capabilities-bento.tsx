import Link from "next/link";

const CONVERT_RATES = [
  { code: "MXN", value: "17.08" },
  { code: "EUR", value: "0.86" },
  { code: "PHP", value: "56.20" },
  { code: "NGN", value: "1,588" },
  { code: "BRL", value: "5.31" },
];

const CARD_BASE =
  "group relative flex min-w-0 flex-col rounded-[20px] bg-white/55 p-[30px_32px] text-inherit no-underline shadow-[0_12px_36px_rgba(92,80,58,.10)] backdrop-blur-[14px]";

function CapabilityChip() {
  return (
    <span
      aria-hidden="true"
      className="absolute right-[18px] top-[18px] flex h-8 w-8 items-center justify-center rounded-full border border-[#5C503A]/16 bg-white/55 text-[#0E2A1E] transition-[background-color,transform] duration-[180ms] ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-lime"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </svg>
    </span>
  );
}

export function CapabilitiesBento() {
  return (
    <section className="relative bg-[#F8F6EF] px-8 py-[110px] text-[15px] leading-[1.5] text-[#0E2A1E]">
      <div className="mx-auto max-w-[1160px]">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">Capabilities</p>
        <h2 className="mt-3 mb-[52px] font-display text-[clamp(38px,4.4vw,58px)] font-normal leading-[1.05] tracking-[-0.01em] text-[#0E2A1E]">
          Receive, convert, move,{" "}
          <em className="bg-[linear-gradient(transparent_68%,#DBFC00_68%)] px-[3px] not-italic italic">spend</em>
        </h2>

        <div className="relative">
          {/* Soft color blobs behind the bento */}
          <div aria-hidden="true" className="pointer-events-none absolute -left-[70px] -top-[50px] h-[340px] w-[440px] rounded-full bg-[radial-gradient(closest-side,rgba(232,161,61,.32),transparent_70%)] blur-[42px]" />
          <div aria-hidden="true" className="pointer-events-none absolute right-[-50px] top-[130px] h-[320px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(239,148,132,.26),transparent_70%)] blur-[46px]" />
          <div aria-hidden="true" className="pointer-events-none absolute bottom-[-70px] left-[30%] h-[340px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(219,252,0,.28),transparent_70%)] blur-[48px]" />

          {/* Row 1 — Receive / Convert */}
          <div className="relative grid grid-cols-[1.55fr_1fr] gap-[22px] max-[900px]:grid-cols-1">
            <Link
              href="/products/card"
              className={`${CARD_BASE} bg-[radial-gradient(620px_320px_at_100%_0%,rgba(232,196,104,.22),transparent_62%)]`}
            >
              <CapabilityChip />
              <div className="max-w-[460px] text-2xl font-semibold leading-[1.3] tracking-[-0.015em]">
                Receive funds from banks and wallets, instantly.
              </div>
              <div className="mt-[30px] flex items-center gap-4">
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/72 px-3.5 py-2.5 shadow-[0_2px_8px_rgba(92,80,58,.08)]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7E6F4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 21h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 3 3 8h18Z" />
                    </svg>
                    <div>
                      <div className="text-[13px] font-semibold">Bank transfer</div>
                      <div className="font-mono text-xs text-[#7A8378]">Chase ··4021</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/72 px-3.5 py-2.5 shadow-[0_2px_8px_rgba(92,80,58,.08)]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7E6F4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                    <div>
                      <div className="text-[13px] font-semibold">Wallet</div>
                      <div className="font-mono text-xs text-[#7A8378]">0x8f…c3d2</div>
                    </div>
                  </div>
                </div>

                <div className="relative h-0 flex-1 border-t-[1.5px] border-dashed border-[#D5CBAF]">
                  <span className="absolute -top-[5px] left-0 h-[9px] w-[9px] animate-[cap-flow_4.2s_linear_infinite] rounded-full border-[1.5px] border-[#4A4234] bg-lime" />
                  <span className="absolute -top-[5px] left-0 h-[9px] w-[9px] animate-[cap-flow_4.2s_linear_infinite] rounded-full border-[1.5px] border-[#4A4234] bg-lime [animation-delay:2.1s]" />
                </div>

                <div className="relative min-w-[180px] rounded-2xl bg-white/82 px-5 py-4 shadow-[0_10px_26px_rgba(92,80,58,.14)] backdrop-blur-[6px]">
                  <span className="absolute -right-2 -top-[14px] animate-[cap-toast_9s_infinite] rounded-full bg-lime px-[11px] py-1 text-xs font-semibold text-[#0E2A1E]">
                    +$2,500.00 received
                  </span>
                  <div className="text-xs text-[#7A8378]">Kaloq balance</div>
                  <div className="mt-1 font-mono text-[22px] text-[#26221A]">$24,180.00</div>
                </div>
              </div>
            </Link>

            <Link
              href="/products/global-account"
              className={`${CARD_BASE} bg-[radial-gradient(480px_280px_at_12%_100%,rgba(219,252,0,.18),transparent_62%)]`}
            >
              <CapabilityChip />
              <div className="pr-11 text-2xl font-semibold leading-[1.3] tracking-[-0.015em]">
                Convert stablecoins into local currencies, seamlessly.
              </div>
              <div className="mt-auto min-w-0 pt-6">
                <div className="mb-2.5 text-[13px] text-[#7A8378]">
                  <span>1 USDC →</span>
                  <span className="ml-2 rounded-full bg-[#EAF1EC] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#25573F]">Coming Soon</span>
                </div>
                <div className="overflow-hidden border-y border-[#5C503A]/12 py-3.5 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
                  <div className="flex w-max animate-[cap-marquee_22s_linear_infinite] gap-9 font-mono text-[15px] [animation-play-state:paused] group-hover:[animation-play-state:running]">
                    {[...CONVERT_RATES, ...CONVERT_RATES].map((rate, i) => (
                      <span key={i}>
                        {rate.code}&nbsp;<b>{rate.value}</b>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-3 text-[13px] font-semibold text-[#25573F]">Account-level FX · Coming Soon</div>
              </div>
            </Link>
          </div>

          {/* Row 2 — Move / Spend */}
          <div className="relative mt-[22px] grid grid-cols-[1fr_1.55fr] gap-[22px] max-[900px]:grid-cols-1">
            <Link
              href="/products/global-account"
              className={`${CARD_BASE} bg-[radial-gradient(420px_320px_at_88%_92%,rgba(232,161,61,.20),transparent_65%)]`}
            >
              <CapabilityChip />
              <div className="text-2xl font-semibold leading-[1.3] tracking-[-0.015em]">
                Move money freely
                <br />
                across global networks.
              </div>
              <div className="relative mt-3.5 h-[200px] overflow-hidden rounded-b-[14px]">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-[140px] -right-20 h-[360px] w-[360px] rounded-full opacity-70 [background-image:radial-gradient(#BFB18D_1.1px,transparent_1.4px)] [background-size:7px_7px] [mask-image:radial-gradient(circle_at_50%_50%,#000_45%,transparent_70%)]"
                />
                <svg viewBox="0 0 340 200" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
                  <path d="M30 178 Q 150 50 258 118" fill="none" stroke="#C98A2D" strokeWidth="1.1" opacity=".6" />
                  <path d="M258 118 Q 300 78 336 96" fill="none" stroke="#A3926C" strokeWidth="1" opacity=".55" />
                  <path d="M92 196 Q 200 120 258 118" fill="none" stroke="#A3926C" strokeWidth="1" opacity=".45" />
                </svg>
                <span aria-hidden="true" className="absolute left-[74.5%] top-[56%] -m-[3.5px] h-[7px] w-[7px] rounded-full bg-[#4A4234]" />
                <span aria-hidden="true" className="absolute left-[74.5%] top-[56%] -m-[13px] h-[26px] w-[26px] animate-[cap-ring_4s_ease-out_infinite] rounded-full border-[1.5px] border-[#A3926C]" />
                <div className="absolute left-3.5 top-3.5 flex items-center gap-2 rounded-lg bg-white/85 px-2.5 py-1.5 shadow-[0_4px_14px_rgba(92,80,58,.14)]">
                  <span aria-hidden="true" className="inline-block h-3 w-3 rounded-[3px] bg-[linear-gradient(135deg,#E8A13D,#EF9484)]" />
                  <span className="font-mono text-xs">
                    $654 <span className="text-[#7A8378]">USDC</span>
                  </span>
                </div>
                <div className="absolute bottom-[30px] right-2.5 flex items-center gap-2 rounded-lg bg-white/85 px-2.5 py-1.5 shadow-[0_4px_14px_rgba(92,80,58,.14)]">
                  <span aria-hidden="true" className="inline-block h-3 w-3 rounded-[3px] border border-[#BEDB00] bg-lime" />
                  <span className="font-mono text-xs">
                    $581 <span className="text-[#7A8378]">MXN</span>
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/products/card"
              className={`${CARD_BASE} bg-[radial-gradient(520px_300px_at_0%_0%,rgba(232,196,104,.18),transparent_60%),radial-gradient(420px_260px_at_100%_100%,rgba(219,252,0,.12),transparent_60%)]`}
            >
              <CapabilityChip />
              <div className="pr-11 text-2xl font-semibold leading-[1.3] tracking-[-0.015em]">
                Spend stablecoins wherever you go.
              </div>
              <div className="mt-4 flex flex-1 flex-col items-center justify-center gap-8 min-[560px]:flex-row min-[560px]:gap-14">
                <div
                  aria-hidden="true"
                  className="relative h-[142px] w-[224px] flex-none rotate-[-4deg] overflow-hidden rounded-2xl shadow-[0_18px_40px_rgba(92,80,58,.24)] transition-[rotate,translate,box-shadow] duration-[450ms] ease-[cubic-bezier(.34,1.4,.5,1)] group-hover:-translate-y-1.5 group-hover:translate-x-[46px] group-hover:rotate-[2.5deg] group-hover:shadow-[0_26px_52px_rgba(92,80,58,.30)]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(118deg,#FBE7C6_0%,#F6BC96_22%,#EF9484_44%,#EFB1D0_62%,#F4D9A6_84%,#FBF3DC_100%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(255,255,255,.6)_6%,rgba(255,255,255,0)_34%,rgba(255,255,255,.32)_52%,rgba(255,255,255,0)_74%)]" />
                  <div className="absolute inset-x-0 bottom-0 h-[52px] bg-white [clip-path:polygon(0_62%,100%_6%,100%_100%,0_100%)]" />
                  <div className="absolute right-12 top-4 h-[22px] w-[30px] rounded-[5px] border border-black/[0.14] bg-white/90">
                    <div className="absolute inset-x-0 top-2.5 border-t border-black/[0.12]" />
                    <div className="absolute inset-y-0 left-3.5 border-l border-black/[0.12]" />
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(60,50,40,.7)" strokeWidth="1.8" strokeLinecap="round" className="absolute right-6 top-[19px]">
                    <path d="M8.5 8.5a5 5 0 0 1 0 7" />
                    <path d="M12 5.5a9 9 0 0 1 0 13" />
                    <path d="M15.5 2.5a13 13 0 0 1 0 19" />
                  </svg>
                  <div className="absolute bottom-2.5 right-3.5 flex items-center gap-0.5 text-[10px] font-extrabold tracking-tight text-brand">
                    Kaloq
                    <span className="h-1 w-1 rounded-full bg-lime" />
                  </div>
                </div>

                <div className="relative flex-none">
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1.5 z-[3] -m-[18px] h-9 w-9 rounded-full border-2 border-[#BEDB00] opacity-0 group-hover:animate-[cap-ring_1s_ease-out_infinite] group-hover:opacity-100"
                  />
                  <div className="relative z-[2] h-3 w-[214px] rounded-md bg-[#4A4234]" />
                  <div className="mx-[15px] w-[184px] overflow-hidden">
                    <div className="relative animate-[cap-print_8.5s_cubic-bezier(.4,0,.2,1)_infinite] rounded-b-md bg-white/92 p-4 font-mono text-[11px] leading-[1.7] text-[#42544A] shadow-[0_8px_20px_rgba(92,80,58,.12)]">
                      <div className="font-sans text-xs font-semibold text-[#0E2A1E]">Blue Bottle Coffee</div>
                      <div className="mt-1.5 flex justify-between">
                        <span>Latte</span>
                        <span>4.20</span>
                      </div>
                      <div className="flex justify-between">
                        <span>USDC</span>
                        <span>−4.20</span>
                      </div>
                      <div className="mt-2 flex justify-between border-t border-dashed border-[#CDC4A9] pt-1.5">
                        <span>Balance</span>
                        <span>24,175.80</span>
                      </div>
                      <div className="absolute bottom-6 right-2.5 animate-[cap-stamp_8.5s_infinite] rounded border border-[#9A6A12] px-1.5 py-0.5 font-sans text-[10.5px] font-bold tracking-[0.08em] text-[#9A6A12]">
                        APPROVED
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
