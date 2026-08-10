import { productPayments } from "@/lib/content";

function ActivityRow({ label, detail, value, status }: { label: string; detail: string; value: string; status: string }) {
  return (
    <div className="flex items-center gap-3 border-t border-[#E8E2D1] py-3.5">
      <span className={`h-2 w-2 flex-none rounded-full ${status === "Review" ? "bg-[#D5CBAF]" : "bg-lime"}`} />
      <div className="min-w-0 flex-1">
        <div className="text-[13px] font-semibold text-[#0E2A1E]">{label}</div>
        <div className="mt-0.5 truncate text-[11px] text-[#7A8378]">{detail}</div>
      </div>
      <div className="text-right">
        <div className="font-mono text-[12px] text-[#0E2A1E]">{value}</div>
        <div className="mt-0.5 text-[10px] text-[#7A8378]">{status}</div>
      </div>
    </div>
  );
}

export function AccountOverview() {
  const { account, review } = productPayments;
  return (
    <>
      <section className="px-8 py-[100px]">
        <div className="mx-auto grid max-w-[1160px] grid-cols-[1fr_1.15fr] items-center gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">{account.eyebrow}</p>
            <h2 className="mt-3 max-w-[460px] font-display text-[clamp(38px,4.4vw,50px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">{account.heading}</h2>
            <p className="mt-[18px] max-w-[430px] text-[15.5px] leading-[1.6] text-[#42544A]">{account.copy}</p>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -right-5 -top-5 h-16 w-16 rounded-full border-[10px] border-lime/60" aria-hidden="true" />
            <div className="relative rounded-[26px] bg-white/90 p-6 shadow-[0_20px_55px_rgba(92,80,58,.14)]">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[#7A8378]">{account.balanceLabel}</div>
                  <div className="mt-2 font-mono text-[30px] tracking-[-0.04em] text-[#0E2A1E]">{account.balance}</div>
                </div>
                <span className="rounded-full bg-[#F4F9D9] px-3 py-1.5 text-[10px] font-semibold text-[#557000]">Illustrative interface</span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {account.balances.map((balance) => (
                  <div key={balance.label} className="rounded-2xl border border-[#E8E2D1] bg-[#FCFBF7] p-3.5">
                    <div className="text-[11px] text-[#7A8378]">{balance.label}</div>
                    <div className="mt-2 font-mono text-[17px] text-[#0E2A1E]">{balance.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7A8378]">Recent activity</div>
              <div className="mt-1">
                {account.activity.map((activity) => <ActivityRow key={activity.label} {...activity} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-[100px]">
        <div className="mx-auto grid max-w-[1160px] grid-cols-[1.05fr_1fr] items-center gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-12">
          <div className="order-2 max-[900px]:order-1">
            <div className="relative rounded-[26px] bg-[#0E2A1E] p-7 text-white shadow-[0_24px_60px_rgba(14,42,30,.22)]">
              <div className="flex items-center justify-between border-b border-white/12 pb-5">
                <div className="text-[13px] font-semibold">Review transfer</div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/70">Illustrative interface</div>
              </div>
              <div className="mt-2">
                {review.rows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between border-b border-white/10 py-4 text-sm">
                    <span className="text-white/55">{row.label}</span>
                    <span className="max-w-[62%] text-right text-white">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-lime px-4 py-3 text-center text-sm font-semibold text-[#0E2A1E]">Review before confirming</div>
            </div>
          </div>
          <div className="order-1 max-[900px]:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">{review.eyebrow}</p>
            <h2 className="mt-3 max-w-[450px] font-display text-[clamp(38px,4.4vw,50px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">{review.heading}</h2>
            <p className="mt-[18px] max-w-[430px] text-[15.5px] leading-[1.6] text-[#42544A]">{review.copy}</p>
          </div>
        </div>
      </section>
    </>
  );
}
