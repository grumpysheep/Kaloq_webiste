import type { Metadata } from "next";
import { FundingFlowDemo } from "@/components/marketing/funding-flow-demo";

export const metadata: Metadata = {
  title: "Funding flow motion preview",
  robots: { index: false, follow: false },
};

export default function MotionPreviewPage() {
  return (
    <div className="motion-preview -my-px min-h-screen bg-[#f3f1eb] px-4 py-12 sm:px-8 sm:py-16">
      <style>{`body:has(.motion-preview) > footer, body > header:has(+ main .motion-preview), body > a:has(~ main .motion-preview) { display: none; }`}</style>
      <div className="mx-auto w-full max-w-[1100px]">
        <p className="mb-4 pl-1 text-[11px] font-medium tracking-[0.06em] text-[#6f756f]">Hover to fund your Kaloq account</p>
        <FundingFlowDemo />
      </div>
    </div>
  );
}
