"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "zh";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

// The site is authored in English. Keeping the translation map here lets the
// existing editorial components stay server-rendered while the client toggle
// translates visible copy consistently across every route.
const translations: Record<string, string> = {
  "Skip to content": "跳转到主要内容",
  Products: "产品",
  Solutions: "使用场景",
  Pricing: "价格",
  "Kaloq Card": "Kaloq 卡",
  "Global Account": "全球账户",
  About: "关于我们",
  Contact: "联系我们",
  "Log in": "登录",
  "Get started": "开始使用",
  "For Stablecoin Earners": "适合稳定币收入人群",
  "For Cross-border Living": "适合跨境生活人群",
  "For Dollar Balance Holders": "适合美元余额持有人",
  "For Global Online Spending": "适合全球线上消费",
  "Turn on-chain income into everyday spending": "把链上收入变成日常消费",
  "Turn on-chain income into everyday spending.": "把链上收入变成日常消费。",
  "Keep a dollar balance. Spend in local currency.": "持有美元余额，用本地货币消费。",
  "Hold dollar value. Spend in local currency.": "持有美元价值，用本地货币消费。",
  "Use your stablecoin balance for global online spending.": "用你的稳定币余额进行全球线上消费。",
  "If you earn in supported USDT or USDC, move it into Kaloq and use the Kaloq Card for travel, subscriptions, shopping, and everyday expenses.": "如果你通过支持的 USDT 或 USDC 获得收入，可以将资金转入 Kaloq，再使用 Kaloq 卡支付旅行、订阅、购物和日常开支。",
  "Hold supported dollar stablecoins and use the Kaloq Card for eligible expenses as you live, work, or travel across borders.": "持有支持的美元稳定币，在跨境生活、工作或旅行时使用 Kaloq 卡支付符合条件的开支。",
  "Keep supported dollar stablecoins in your wallet, then move funds into Kaloq when everyday expenses arise.": "将支持的美元稳定币留在钱包中，在需要支付日常开支时再把资金转入 Kaloq。",
  "Move supported USDT or USDC into Kaloq and use the Kaloq Card for eligible subscriptions, software, shopping, travel bookings, and other international online purchases.": "将支持的 USDT 或 USDC 转入 Kaloq，使用 Kaloq 卡支付符合条件的订阅、软件、购物、旅行预订和其他国际线上消费。",
  "Get your card": "获取你的卡",
  "Explore Kaloq Card": "了解 Kaloq 卡",
  "See pricing": "查看价格",
  "Your balance should work where you spend.": "你的余额应该能在你消费的地方发挥作用。",
  "The friction": "消费中的阻力",
  "How it works": "运作方式",
  "Built for your life": "为你的生活而设计",
  "Built for the way you spend": "为你的消费方式而设计",
  "Real usage flow": "真实使用流程",
  "From your balance to a real purchase.": "从余额到真实消费。",
  "Questions": "常见问题",
  "A clearer way to spend.": "更清晰的消费方式。",
  "Keep your balance ready to spend.": "让你的余额随时可以消费。",
  "Start with your supported wallet balance and make more of everyday life.": "从支持的钱包余额开始，让日常生活更自在。",
  "Your income arrives on-chain, but daily life still expects a card.": "你的收入在链上到账，但日常生活仍然需要一张卡。",
  "Selling on an exchange and withdrawing to a bank adds extra steps before you can spend.": "先在交易所出售、再提现到银行，会增加消费前的中间步骤。",
  "You want to see what moved before your balance becomes a purchase.": "在余额变成一笔消费之前，你希望清楚看到资金去了哪里。",
  "Your balance can travel with you while your expenses change country by country.": "你的余额可以随身携带，而消费地点会随着国家变化。",
  "Travel, accommodation, transport, restaurants, and online tools still need a usable card.": "旅行、住宿、交通、餐厅和线上工具仍然需要一张可用的卡。",
  "A cross-border card is not automatically cheaper; funding, conversion, FX, cross-border, and ATM costs all matter.": "跨境卡并不一定更便宜，充值、转换、汇率、跨境交易和 ATM 费用都需要考虑。",
  "You want to hold a dollar-denominated balance while local expenses continue every day.": "你希望持有美元计价的余额，同时应对每天发生的本地开支。",
  "A wallet can hold value, but groceries, transport and subscriptions still need a card.": "钱包可以储存价值，但买菜、交通和订阅仍然需要一张卡。",
  "You need a clear view of what you move into spending and what remains available.": "你需要清楚知道转入消费的金额，以及仍然可用的余额。",
  "Your stablecoin balance is ready, but many online services still expect a card.": "你的稳定币余额已经准备好，但许多线上服务仍然需要银行卡。",
  "International subscriptions, software and shopping can fail when your local card or payment route is not supported.": "当本地银行卡或支付路径不被支持时，国际订阅、软件和购物支付可能会失败。",
  "You want to know what moved into a purchase and what remains in your balance.": "你希望知道哪部分余额变成了消费，以及还剩多少可用余额。",
  "Use the balance you already earn": "使用你已经获得的余额",
  "Pay for real life": "支付真实生活开支",
  "Keep activity visible": "让资金动态清晰可见",
  "Stay ready across borders": "跨境生活随时准备",
  "Cover the moving parts": "覆盖生活中的各项开支",
  "Understand the total cost": "了解总成本",
  "Keep value in dollars": "持有美元价值",
  "Spend on demand": "按需消费",
  "Follow every step": "跟踪每一步",
  "Pay for global services": "支付全球线上服务",
  "Keep your balance visible": "让余额清晰可见",
  "Know what is supported": "了解支持范围",
  "From on-chain income to a real purchase.": "从链上收入到真实消费。",
  "Keep supported funds ready, then connect them to everyday spending when you choose.": "准备好支持的资金，在需要时将它们连接到日常消费。",
  "From dollar balance to local purchase.": "从美元余额到本地消费。",
  "From stablecoin balance to online checkout.": "从稳定币余额到线上结账。",
  "Move supported funds into Kaloq, then use the card for eligible global online purchases.": "将支持的资金转入 Kaloq，再使用卡支付符合条件的全球线上消费。",
  "Start with supported stablecoins": "从支持的稳定币开始",
  "Move funds into Kaloq": "将资金转入 Kaloq",
  "Pay with the Kaloq Card": "使用 Kaloq 卡支付",
  "The merchant receives fiat": "商户收到法币",
  "Keep supported USDT or USDC in your personal wallet.": "将支持的 USDT 或 USDC 保存在你的个人钱包中。",
  "Transfer funds into Kaloq and review the available balance.": "将资金转入 Kaloq，并查看可用余额。",
  "Use the card for eligible online, in-store, and travel purchases.": "使用卡支付符合条件的线上、线下和旅行消费。",
  "Stablecoins are converted in the card flow; merchants receive ordinary local currency.": "稳定币会在刷卡流程中完成转换，商户收到普通本地货币。",
  "Merchants do not receive crypto directly. Supported stablecoins are converted in the card transaction flow and the merchant receives ordinary fiat currency. KYC, transaction monitoring, source-of-funds review, and restrictions for certain regions or high-risk merchants may apply.": "商户不会直接收到加密货币。支持的稳定币会在卡片交易流程中转换，商户收到普通法币。可能适用 KYC、交易监控、资金来源审查，以及特定地区或高风险商户限制。",
  "Does the merchant receive crypto?": "商户会收到加密货币吗？",
  "What checks apply?": "需要哪些审核？",
  "What can I use Kaloq for?": "Kaloq 可以用来做什么？",
  "Which assets and networks are supported?": "支持哪些资产和网络？",
  "Where can I use the Kaloq Card?": "我可以在哪里使用 Kaloq 卡？",
  "Can I see my balance and transactions?": "我可以查看余额和交易吗？",
  "Pricing you can see before you sign.": "在确认之前就能看到价格。",
  "Indicative fees are shown up front, with final costs confirmed in-app before you commit.": "费用会提前以参考值展示，最终成本将在应用内确认后确定。",
  "Simple fees, shown clearly.": "简单清晰的费用。",
  "Understand the possible cost of funding, spending, converting, and withdrawing before you use your card.": "在使用卡之前，先了解充值、消费、转换和提现可能产生的成本。",
  "Kaloq Card pricing": "Kaloq 卡价格",
  "Indicative card fees": "参考卡片费用",
  "Indicative — pending final confirmation": "参考值 — 等待最终确认",
  "Virtual card application": "虚拟卡申请",
  "Physical card delivery": "实体卡配送",
  "Card funding": "卡片充值",
  "Card transaction": "卡片交易",
  "Transaction fee": "交易费用",
  "Foreign exchange": "外汇转换",
  "ATM withdrawal": "ATM 提现",
  "Card replacement": "补卡",
  Free: "免费",
  "What affects the total cost": "哪些因素会影响总成本",
  "Before you spend": "消费前了解",
  "Ready to make your balance spendable?": "准备好让余额可以消费了吗？",
  "Start with supported stablecoins and review the final cost before you confirm.": "从支持的稳定币开始，并在确认前查看最终成本。",
  "Pricing questions": "价格常见问题",
  "Are these fees final?": "这些费用是最终费用吗？",
  "How does foreign exchange affect the total?": "外汇转换如何影响总成本？",
  "Can an ATM charge more?": "ATM 可能额外收费吗？",
  "Is card funding charged?": "卡片充值会收费吗？",
  "Do fees vary by region?": "费用会因地区而不同吗？",
  Capabilities: "核心能力",
  "Receive, convert, move, ": "接收、转换、转移、",
  "spend": "消费",
  "Receive funds from banks and wallets, instantly.": "即时接收来自银行和钱包的资金。",
  "Convert stablecoins into local currencies, seamlessly.": "顺畅地将稳定币转换为本地货币。",
  "Move money freely": "自由转移资金",
  "across global networks.": "跨越全球网络。",
  "Spend stablecoins wherever you go.": "无论走到哪里，都可以使用稳定币消费。",
  "The Card": "Kaloq 卡",
  "Get started fast. And never stop": "快速开始，持续",
  "spending": "消费",
  "Everyday spending": "日常消费",
  "One card for the way you ": "一张卡，适合你的",
  "Online shopping": "线上购物",
  Subscriptions: "订阅服务",
  Travel: "旅行",
  "Daily purchases": "日常消费",
  "Crypto funding": "加密资产充值",
  "From crypto balance to everyday ": "从加密资产余额到日常",
  purchases: "消费",
  "Global use": "全球使用",
  "Made for spending across ": "为跨境",
  borders: "消费而设计",
  "Card controls": "卡片控制",
  "Your card, always under your ": "你的卡片始终由你",
  control: "掌控",
  fees: "费用",
  "Clear and transparent ": "清晰透明的",
  "Who can apply for the card?": "谁可以申请这张卡？",
  "Which digital assets can I use to fund my card?": "哪些数字资产可以用于充值？",
  "Where can I use the card?": "我可以在哪里使用这张卡？",
  "Are there any spending limits?": "有消费限额吗？",
  "How long does card approval take?": "卡片审核需要多久？",
  "What should I do if my card is lost?": "卡片丢失后该怎么办？",
  "View the full fee schedule": "查看完整费用表",
  "Make your crypto ": "让你的加密资产",
  spendable: "可以消费",
  "Your money,": "你的资金，",
  "on and": "在链上与",
  "off chain": "链下之间流动",
  "Kaloq Global Account": "Kaloq 全球账户",
  "Hold fiat and stablecoins": "同时持有法币和稳定币",
  "Move money in from your bank": "从银行转入资金",
  "Convert between balances": "在不同余额之间转换",
  "Send to your bank or wallet": "转入银行或钱包",
  "One account. Two directions.": "一个账户，双向流动。",
  "On-ramp": "入金",
  "Off-ramp": "出金",
  "Your Global Account": "你的全球账户",
  "Keep both sides of your money in one place.": "把资金的两端放在同一个地方。",
  "Before you move": "转移前确认",
  "See the details before you confirm.": "确认前查看所有细节。",
  "More ways to use your balance": "更多余额使用方式",
  "From your account to everyday spending.": "从账户余额到日常消费。",
  "A clearer way to move money.": "更清晰的资金流动方式。",
  "Move money on and off chain.": "在链上与链下之间转移资金。",
  "About Kaloq": "关于 Kaloq",
  "We're making stablecoin payments usable for real businesses — safely. Kaloq combines the speed of stablecoins with the controls and support a finance team expects.": "我们正在安全地让稳定币支付服务于真实的日常需求。Kaloq 将稳定币的速度与用户期待的控制力和支持结合起来。",
  "Book a demo.": "预约演示。",
  "Tell us about your business and we'll set up time to talk.": "告诉我们你的需求，我们会安排时间与你沟通。",
  "What happens next": "接下来会发生什么",
  "Thanks — we've got it.": "谢谢，我们已经收到。",
  "Someone from our team will reach out shortly.": "我们的团队成员会尽快与你联系。",
  "Name": "姓名",
  "Work email": "工作邮箱",
  Company: "公司",
  "Company name": "公司名称",
  "Use case": "使用场景",
  "Monthly volume": "月度金额",
  Message: "留言",
  "Tell us a bit about what you need.": "请简单介绍你的需求。",
  "Select an option": "请选择",
  Card: "卡片",
  Payments: "支付",
  Both: "两者都需要",
  "Contact us": "联系我们",
  "Terms of Service": "服务条款",
  "Privacy Policy": "隐私政策",
  "AML/CTF Statement": "AML/CTF 声明",
  "Prohibited Jurisdictions": "受限地区",
  "Last updated:": "最后更新：",
  "Built on ": "建立于",
  trust: "信任",
  "Use cases": "使用场景",
  "Built for how you ": "为你的",
  live: "生活",
  "See how": "了解更多",
};

const reverseTranslations = Object.fromEntries(Object.entries(translations).map(([en, zh]) => [zh, en]));

function normalize(value: string) {
  return value.replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
}

function translateValue(value: string, language: Language) {
  const normalized = normalize(value);
  const english = reverseTranslations[normalized] ?? normalized;
  const translated = language === "zh" ? translations[english] ?? english : english;
  if (!translated || translated === normalized) return value;
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  return `${leading}${translated}${trailing}`;
}

function translateDocument(language: Language) {
  const root = document.body;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  let node = walker.nextNode();
  while (node) {
    const parent = node.parentElement;
    if (parent && !["SCRIPT", "STYLE", "NOSCRIPT", "OPTION"].includes(parent.tagName)) {
      textNodes.push(node as Text);
    }
    node = walker.nextNode();
  }
  textNodes.forEach((textNode) => {
    const current = textNode.textContent ?? "";
    const next = translateValue(current, language);
    if (next !== current) textNode.textContent = next;
  });

  document.querySelectorAll<HTMLElement>("[placeholder], [aria-label], [title]").forEach((element) => {
    ["placeholder", "aria-label", "title"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (value) {
        const next = translateValue(value, language);
        if (next !== value) element.setAttribute(attribute, next);
      }
    });
  });
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("kaloq-language", nextLanguage);
  };

  useEffect(() => {
    const saved = window.localStorage.getItem("kaloq-language");
    if (saved !== "zh" && saved !== "en") return;
    const timer = window.setTimeout(() => setLanguageState(saved), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.language = language;
    const frame = window.requestAnimationFrame(() => translateDocument(language));
    const observer = new MutationObserver(() => translateDocument(language));
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === "en" ? "zh" : "en";
  return (
    <button
      type="button"
      aria-label={language === "en" ? "切换到中文" : "Switch to English"}
      onClick={() => setLanguage(nextLanguage)}
      className={`rounded-full border border-current/20 px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-current/10 ${className}`}
    >
      {language === "en" ? "中文" : "EN"}
    </button>
  );
}
