import { productGlobalAccount } from "@/lib/content";

export function AccountOverview() {
  const { account } = productGlobalAccount;
  return (
    <section id="usd-account" className="px-8 py-[100px]">
      <div className="mx-auto grid max-w-[1160px] grid-cols-[minmax(0,.85fr)_minmax(0,1.35fr)] items-center gap-20 max-[900px]:grid-cols-1 max-[900px]:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">{account.eyebrow}</p>
          <h2 className="mt-3 max-w-[460px] font-display text-[clamp(38px,4.4vw,50px)] font-normal leading-[1.06] text-[#0E2A1E]">{account.heading}</h2>
          <p className="mt-[18px] max-w-[430px] text-[15.5px] leading-[1.6] text-[#42544A]">{account.copy}</p>
        </div>

        <div className="min-w-0 rounded-[26px] bg-white/90 p-6 shadow-[0_20px_55px_rgba(92,80,58,.14)]">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[#7A8378]">{account.balanceLabel}</div>
              <div className="mt-2 font-mono text-[30px] text-[#0E2A1E]">{account.balance}</div>
            </div>
            <span className="rounded-full bg-[#F4F9D9] px-3 py-1.5 text-[10px] font-semibold text-[#557000]">USD Available</span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {account.balances.map((balance) => (
              <div key={balance.label} className="min-w-0 overflow-hidden rounded-2xl border border-[#E8E2D1] bg-[#FCFBF7] p-3">
                <div className="flex min-w-0 flex-wrap items-baseline gap-x-1 text-[11px] leading-[1.2] text-[#7A8378]">
                  <span className="shrink-0">{balance.label}</span>
                  {balance.status !== "Available" && <span className="min-w-0 text-[9px] font-semibold text-[#557000]">(Coming Soon)</span>}
                </div>
                <div className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap font-mono text-[clamp(11px,1vw,15px)] tracking-[-0.04em] text-[#0E2A1E]">{balance.value}</div>
                {balance.status === "Available" && <div className="mt-1 text-[9px] font-semibold text-[#557000]">Available</div>}
              </div>
            ))}
          </div>

          <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7A8378]">Activity</div>
          {account.activity.map((item) => (
            <div key={item.label} className="flex items-center gap-3 border-t border-[#E8E2D1] py-3.5">
              <span className={`h-2 w-2 rounded-full ${item.status === "Coming Soon" ? "bg-[#D5CBAF]" : "bg-lime"}`} />
              <div className="min-w-0 flex-1">
                <div className="text-[13px] font-semibold text-[#0E2A1E]">{item.label}</div>
                <div className="text-[11px] text-[#7A8378]">{item.detail}</div>
              </div>
              <div className="text-right">
                <div className="font-mono text-[12px] text-[#0E2A1E]">{item.value}</div>
                <div className="text-[10px] text-[#7A8378]">{item.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
