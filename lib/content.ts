// Single source of truth for all site copy.
// Every unverified real-world fact is marked with a `[TODO: ...]` placeholder —
// see CONTENT-TODO.md for the full list before this ships.
// Structured to make a future locale (e.g. `content.zh.ts`) a drop-in sibling.

export const site = {
  name: "Kaloq",
  domain: "[TODO: production domain]",
  description:
    "Personal accounts for moving between local currency and stablecoins.",
  loginUrl: "#", // [TODO: app login URL]
};

export type NavLink = { label: string; href: string };
export type NavDropdownItem = { label: string; description: string; href: string };

export const nav = {
  products: [
    {
      label: "Kaloq Card",
      description: "A personal card for supported digital-asset balances",
      href: "/products/card",
    },
    {
      label: "Global Account",
      description: "Move between local currency and stablecoins from one account",
      href: "/products/payments",
    },
  ] satisfies NavDropdownItem[],
  solutions: [
    {
      label: "For Stablecoin Earners",
      description: "Turn on-chain income into everyday spending",
      href: "/solutions/stablecoin-earners",
    },
    {
      label: "For Cross-border Living",
      description: "Keep a dollar balance while you spend locally",
      href: "/solutions/cross-border-living",
    },
    {
      label: "For Dollar Balance Holders",
      description: "Hold dollar value and spend only what you need",
      href: "/solutions/dollar-balance-holders",
    },
    {
      label: "For Global Online Spending",
      description: "Use your stablecoin balance for global online purchases",
      href: "/solutions/global-online-spending",
    },
  ] satisfies NavDropdownItem[],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],
  pricing: { label: "Pricing", href: "/pricing" } satisfies NavLink,
  login: { label: "Log in", href: site.loginUrl },
  demo: { label: "Get started", href: "/contact" },
};

export const footer = {
  columns: [
    {
      heading: "Products",
      links: [
        { label: "Kaloq Card", href: "/products/card" },
        { label: "Global Account", href: "/products/payments" },
      ] as NavLink[],
    },
    {
      heading: "Solutions",
      links: [
        { label: "For Stablecoin Earners", href: "/solutions/stablecoin-earners" },
        { label: "For Cross-border Living", href: "/solutions/cross-border-living" },
        { label: "For Dollar Balance Holders", href: "/solutions/dollar-balance-holders" },
        { label: "For Global Online Spending", href: "/solutions/global-online-spending" },
      ] as NavLink[],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Pricing", href: "/pricing" },
        { label: "Contact", href: "/contact" },
      ] as NavLink[],
    },
    {
      heading: "Legal",
      links: [
        { label: "Terms of Service", href: "/legal/terms" },
        { label: "Privacy Policy", href: "/legal/privacy" },
        { label: "AML/CTF Statement", href: "/legal/aml-statement" },
        { label: "Prohibited Jurisdictions", href: "/legal/prohibited-jurisdictions" },
      ] as NavLink[],
    },
  ],
  legalBlock: {
    entity: "[TODO: Full registered legal entity name], [TODO: registered address]",
    msb:
      "Kaloq is registered as a Money Services Business with FinCEN, registration number [TODO: MSB number].",
    issuer:
      "Card services are provided through licensed partner institutions. [TODO: issuer/BIN sponsor disclosure line]",
    notBank: "Kaloq is not a bank. Stablecoin balances are not FDIC insured.",
    copyright: "© 2026 Kaloq, Inc.",
  },
  tagline: "Make your stablecoins spendable. Spend with a card, hold in global accounts, settle at internet speed.",
  social: { label: "X / Twitter", href: "#" }, // [TODO: X/Twitter URL]
};

// ---------------------------------------------------------------------------
// Home
// ---------------------------------------------------------------------------

export const home = {
  hero: {
    h1Line1: "Make your stablecoins",
    h1Accent: "spendable",
    sub: "Spend with a card, hold in global accounts, settle at internet speed.",
    emailPlaceholder: "Enter your work email",
    submitLabel: "Get started free",
    successMessage: "You're on the list — check your inbox.",
  },
  // [TODO: legal/compliance review] — MSB/SOC2/custody/reserves claims below are unverified marketing
  // copy from the design handoff; confirm exact wording and figures with compliance before shipping.
  trustBand: {
    heading: "Built on ",
    headingAccent: "trust",
    pillars: [
      { figure: "MSB", accent: true, label: "Licensed", body: "US registered, VASP across the EU." },
      { figure: "SOC 2", accent: false, label: "Audited", body: "Type II, continuous security audits." },
      { figure: "100%", accent: false, label: "Custody", body: "Qualified, regulated custodians." },
      { figure: "1:1", accent: true, label: "Reserves", body: "Attested monthly by independent auditors." },
    ],
    partnersLabel: "Custody & banking partners",
  },
  howItWorks: {
    heading: "How it works",
    steps: [
      {
        number: "01",
        title: "Fund your account with stablecoins",
        description: "Deposit USDC or USDT from any supported wallet or exchange.",
      },
      {
        number: "02",
        title: "Kaloq converts at transparent rates",
        description: "See the exact rate before you confirm — no hidden markup.",
      },
      {
        number: "03",
        title: "Spend on cards or pay out to bank accounts worldwide",
        description: "Use your balance on the Kaloq Card or send it to a bank account.",
      },
    ],
  },
  products: {
    heading: "One balance. Two ways to use it.",
    items: [
      {
        title: "Kaloq Card",
        description: "A personal card for supported digital-asset balances.",
        bullets: ["Everyday purchases", "Online and in-store", "Balance visibility"],
        href: "/products/card",
      },
      {
        title: "Payments",
        description: "Move between local currency and stablecoins from one account.",
        bullets: ["On-ramp from your bank", "Off-ramp to your bank", "See every step"],
        href: "/products/payments",
      },
    ],
  },
  audience: {
    heading: "Built for your everyday",
    tiles: [
      {
        title: "Stablecoin Earners",
        pain: "Turn on-chain income into travel, subscriptions, shopping and everyday spending.",
        href: "/solutions/stablecoin-earners",
      },
      {
        title: "Cross-border Living",
        pain: "Keep a dollar balance while you live, work or travel across borders.",
        href: "/solutions/cross-border-living",
      },
      {
        title: "Dollar Balance Holders",
        pain: "Hold supported dollar stablecoins, then spend only what everyday life needs.",
        href: "/solutions/dollar-balance-holders",
      },
      {
        title: "Global Online Spending",
        pain: "Use your supported stablecoin balance for eligible subscriptions, software and global online purchases.",
        href: "/solutions/global-online-spending",
      },
    ],
  },
  transparency: {
    heading: "Pricing you can see before you sign.",
    paragraph:
      "Indicative fees are shown up front, with final costs confirmed in-app before you commit.",
    rows: [
      { label: "Card issuance", value: "[TODO: value]" },
      { label: "International spend", value: "[TODO: value]" },
      { label: "Bank payout", value: "[TODO: value]" },
    ],
    cta: { label: "See full pricing →", href: "/pricing" },
  },
  whyKaloq: {
    heading: "Why finance teams choose Kaloq",
    columns: [
      {
        title: "Fast onboarding",
        description: "Get approved and start spending in [TODO: onboarding time].",
      },
      {
        title: "Real-time visibility",
        description: "A live dashboard, transaction feed and exports — always up to date.",
      },
      {
        title: "Human support",
        description: "Reach a real person through [TODO: support channel/SLA].",
      },
    ],
  },
  // [TODO: real signup/sales URLs] — both CTAs currently point at /contact.
  readyCta: {
    heading: "Ready to ",
    headingAccent: "spend",
    sub: "Open your account in minutes. Free to start.",
    primaryCta: { label: "Get started free", href: "/contact" },
    secondaryCta: { label: "Talk to sales", href: "/contact" },
  },
};

// ---------------------------------------------------------------------------
// Shared FAQ / fee-table / CTA types
// ---------------------------------------------------------------------------

export type FaqItem = { question: string; answer: string };
export type FeeRow = { label: string; value: string; note: string };

export const finalCtaGeneric = {
  heading: "Talk to our team.",
  sub: "Soft-launch access for selected partners.",
  cta: { label: "Book a Demo", href: "/contact" },
};

// ---------------------------------------------------------------------------
// Products — Card
// ---------------------------------------------------------------------------

export const productCard = {
  hero: {
    eyebrow: "Kaloq Card",
    h1Line1: "Your crypto, ready for",
    h1Line2: "everyday",
    h1Accent: "spending",
    sub: "Fund your card with supported digital assets and use it for everyday purchases — online, in stores, and while traveling.",
    primaryCta: { label: "Get your card", href: "/contact" },
    secondaryCta: { label: "Learn more", href: "#everyday-spending" },
    card: { pan: "5312 4420 8890 4242", holder: "K. HOLDER", expiry: "09/29" },
    compliance: "Kaloq Card is issued by licensed, regulated partners.",
  },
  benefits: [
    { title: "Spend with confidence", description: "Use your card for everyday purchases with reliable transaction processing." },
    { title: "Manage everything in real time", description: "View transactions, manage your balance, and control your card directly from the app." },
    { title: "Fund with crypto", description: "Add funds using supported stablecoins or digital assets without a complicated payment process." },
    { title: "Use it around the world", description: "Pay online and in stores across supported countries, currencies, and merchant categories." },
  ],
  everyday: {
    eyebrow: "Everyday spending",
    heading: "One card for the way you ",
    headingAccent: "spend",
    copy: "From subscriptions and online shopping to dining, travel, and daily purchases, use one card for more of your everyday spending.",
    categories: [
      { title: "Online shopping", description: "Pay for products and services across supported online merchants." },
      { title: "Subscriptions", description: "Manage entertainment, software, gaming, and other recurring payments." },
      { title: "Travel", description: "Use your card for flights, hotels, transportation, and purchases abroad." },
      { title: "Daily purchases", description: "Pay for dining, shopping, and other eligible in-store expenses." },
    ],
    app: {
      cardLabel: "Kaloq ··4242",
      freezeLabel: "Freeze",
      balanceLabel: "Available balance",
      balance: "$2,485.00",
      viewAllLabel: "View all transactions",
      transactions: [
        { day: "Today", name: "Blue Bottle Coffee", sub: "8:42 AM · Contactless", category: 3, amount: "−$4.50" },
        { name: "Aurora Books", sub: "Pending · aurorabooks.com", category: 0, amount: "−$62.00" },
        { day: "Yesterday", name: "Streamly", sub: "Subscription · renews Aug 1", category: 1, amount: "−$9.99" },
        { name: "Green Valley Market", sub: "6:18 PM · Oakland, CA", category: 3, amount: "−$23.10" },
        { day: "July 18", name: "AeroVista · LIS → MEX", sub: "Foreign transaction · EUR 386.40", category: 2, amount: "−$418.20" },
        { name: "Hotel Casa Verde", sub: "2 nights · MXN 3,780.00", category: 2, amount: "−$210.00" },
        { name: "Aurora Books", sub: "Refund posted", category: 0, amount: "+$12.40", refund: true },
      ],
    },
  },
  funding: {
    eyebrow: "Crypto funding",
    heading: "From crypto balance to everyday ",
    headingAccent: "purchases",
    copy: "Start spending in three simple steps — no complicated payment process.",
    steps: [
      { number: "01", title: "Apply for your card", description: "Create an account and complete the required identity verification." },
      { number: "02", title: "Add funds", description: "Fund your card with supported digital assets." },
      { number: "03", title: "Start spending", description: "Use your card for eligible online and in-store purchases." },
    ],
    cta: { label: "Get your card", href: "/contact" },
    flow: {
      wallet: {
        title: "Your wallet",
        sub: "0x8f…c3d2",
        amount: "500 USDC",
        caption: "Add funds easily — transfer supported assets into your card balance.",
      },
      balance: {
        title: "Card balance",
        sub: "Ready to spend",
        amount: "$2,485.00",
        toast: "+500 USDC added",
        caption: "View your available balance before making a purchase.",
      },
      purchase: {
        title: "Everyday purchase",
        sub: "Blue Bottle Coffee",
        amount: "−$4.50",
        caption: "Track funding, payments, refunds, and status in one place.",
      },
    },
  },
  // [TODO: legal/compliance review] — country/currency/merchant coverage figures below are
  // unverified placeholder numbers from the design handoff; confirm with legal/compliance before shipping.
  global: {
    eyebrow: "Global use",
    heading: "Made for spending across ",
    headingAccent: "borders",
    copy: "Use your card across supported markets and currencies, whether you are shopping online, traveling, or making everyday purchases.",
    stats: [
      { value: "150+", label: "Countries & regions", description: "Supported markets, online and in-store." },
      { value: "40+", label: "Transaction currencies", description: "With real-time currency conversion." },
      { value: "Online", label: "And in-store", description: "Across supported merchant categories." },
      { value: "Wallets", label: "Supported digital wallets", description: "Contactless and mobile payments where available." },
    ],
    safeLine: "Accepted at millions of supported merchants worldwide.",
  },
  controls: {
    eyebrow: "Card controls",
    heading: "Your card, always under your ",
    headingAccent: "control",
    copy: "Manage your card and monitor spending directly from the app. Try the switch.",
    card: { last4: "4242", expiry: "09/29" },
    toastApproved: "Blue Bottle Coffee −$4.50 · Approved",
    toastDeclined: "Transaction declined · Card frozen",
    frozenBadge: "Frozen",
    activeLabel: "Card active",
    frozenLabel: "Card frozen",
    features: [
      { title: "Real-time notifications", description: "Receive updates whenever a card transaction occurs." },
      { title: "Freeze and unfreeze", description: "Temporarily freeze your card and reactivate it when you are ready." },
      { title: "Pay with your phone", description: "Add your card to supported digital wallets for contactless payments." },
      { title: "Security, built in", description: "Identity verification, transaction monitoring, and secure account access." },
    ],
  },
  // [TODO: legal/compliance review] — every fee value below is an unverified placeholder from the
  // design handoff; confirm final pricing with legal/compliance before shipping.
  fees: {
    heading: "Clear and transparent ",
    headingAccent: "fees",
    copy: "View the complete fee schedule before applying for or using your card.",
    rows: [
      { label: "Virtual card application", value: "Free" },
      { label: "Physical card delivery", value: "$8.00" },
      { label: "Card funding", value: "0.9%" },
      { label: "Transaction fee", value: "Free" },
      { label: "Foreign exchange", value: "1.2%" },
      { label: "ATM withdrawal", value: "2% · min $3" },
      { label: "Card replacement", value: "$8.00" },
    ],
    moreLink: { label: "View the full fee schedule", href: "/pricing" },
  },
  faq: [
    {
      question: "Who can apply for the card?",
      answer: "The card is available to users in supported regions who are 18 or older and complete identity verification during signup.",
    },
    {
      question: "Which digital assets can I use to fund my card?",
      answer: "You can fund your card with supported stablecoins and digital assets across supported networks. The full list is available in the app.",
    },
    {
      question: "Where can I use the card?",
      answer: "Online and in stores at millions of supported merchants worldwide, across supported countries and merchant categories.",
    },
    {
      question: "Are there any spending limits?",
      answer: "Per-transaction, daily, and monthly limits apply and vary by region and verification level. You can view your limits in the app.",
    },
    {
      question: "How long does card approval take?",
      answer: "Virtual cards are typically issued within minutes of approval. Physical cards arrive within 7–14 business days.",
    },
    {
      question: "What should I do if my card is lost?",
      answer: "Freeze your card instantly from the app, then cancel it and order a replacement. Your balance stays safe in your account.",
    },
  ] satisfies FaqItem[],
  faqMoreLink: { label: "View all questions", href: "#" }, // [TODO: link to a full FAQ page once one exists]
  closer: {
    heading: "Make your crypto ",
    headingAccent: "spendable",
    copy: "Apply for your card, add supported digital assets, and start spending online and in stores.",
    primaryCta: { label: "Get your card", href: "/contact" },
    secondaryLink: { label: "Check availability", href: "/contact" },
  },
};

// ---------------------------------------------------------------------------
// Products — Payments
// ---------------------------------------------------------------------------

export const productPayments = {
  hero: {
    eyebrow: "Kaloq Global Account",
    h1Line1: "Your money,",
    h1Line2: "on and",
    h1Accent: "off chain",
    sub: "Hold supported local currencies and stablecoins in one account. Move funds between your bank account and wallet when you need.",
    primaryCta: { label: "Get started", href: "/contact" },
    secondaryCta: { label: "See how it works", href: "#how-it-works" },
    compliance: "Supported currencies, assets, and availability vary by region.",
  },
  benefits: [
    {
      title: "Hold fiat and stablecoins",
      description: "Keep both sides of your money visible in one personal account.",
    },
    {
      title: "Move money in from your bank",
      description: "Add local currency through the supported transfer method shown in your account.",
    },
    {
      title: "Convert between balances",
      description: "Move between supported local currencies and stablecoins when you are ready.",
    },
    {
      title: "Send to your bank or wallet",
      description: "Choose where your money goes next and follow the transfer status in one place.",
    },
  ],
  flow: {
    eyebrow: "How it works",
    heading: "One account. Two directions.",
    sub: "Move in from your bank, move out to your wallet, or take the reverse path when you need to come back to local currency.",
    modes: {
      on: {
        label: "On-ramp",
        title: "From local currency to stablecoins",
        steps: [
          { number: "01", title: "Add local currency", description: "Transfer from your supported bank account." },
          { number: "02", title: "Convert in Kaloq", description: "Review the conversion details before confirming." },
          { number: "03", title: "Send to your wallet", description: "Move supported stablecoins when they are ready." },
        ],
      },
      off: {
        label: "Off-ramp",
        title: "From stablecoins to local currency",
        steps: [
          { number: "01", title: "Send stablecoins", description: "Transfer supported assets from your wallet." },
          { number: "02", title: "Convert in Kaloq", description: "Review the conversion details before confirming." },
          { number: "03", title: "Move to your bank", description: "Send local currency through the supported payout method." },
        ],
      },
    },
  },
  account: {
    eyebrow: "Your Global Account",
    heading: "Keep both sides of your money in one place.",
    copy: "View your fiat and stablecoin balances, follow every transfer, and decide when to convert or move funds.",
    balanceLabel: "Total balance",
    balance: "$2,485.00",
    balances: [
      { label: "Fiat balance", value: "$1,985.00", tone: "sand" },
      { label: "Stablecoin balance", value: "500 USDC", tone: "lime" },
    ],
    activity: [
      { label: "Bank transfer", detail: "Local currency added", value: "+$500.00", status: "Complete" },
      { label: "Wallet transfer", detail: "Stablecoins received", value: "+500 USDC", status: "Complete" },
      { label: "Conversion", detail: "Balance movement", value: "In review", status: "Review" },
    ],
  },
  review: {
    eyebrow: "Before you move",
    heading: "See the details before you confirm.",
    copy: "Review the source, destination, asset, network, and final amount before confirming a transfer.",
    rows: [
      { label: "You send", value: "Your selected amount" },
      { label: "From", value: "Bank account or wallet" },
      { label: "To", value: "Wallet or bank account" },
      { label: "Status", value: "Ready for review" },
    ],
  },
  cardBridge: {
    eyebrow: "More ways to use your balance",
    heading: "From your account to everyday spending.",
    copy: "Eligible balances can also be used with the Kaloq Card for supported online and in-store purchases.",
    cta: { label: "Explore Kaloq Card", href: "/products/card" },
  },
  faq: [
    {
      question: "What is a Kaloq Global Account?",
      answer: "It is a personal account for holding supported local currencies and stablecoins, then moving between your bank account and wallet.",
    },
    {
      question: "How do I add money from my bank account?",
      answer: "Use the supported transfer method and account details shown in Kaloq. Availability depends on your region and account status.",
    },
    {
      question: "How do I send stablecoins from my wallet?",
      answer: "Choose the supported asset and network shown in your account, then transfer from your wallet and follow the status in Kaloq.",
    },
    {
      question: "Which currencies, assets, and networks are supported?",
      answer: "Support varies by region and can change over time. Your account shows the currencies, assets, and networks currently available to you.",
    },
    {
      question: "Can I withdraw money to my bank account?",
      answer: "Bank transfers are available where supported. Review the destination and availability shown in your account before confirming.",
    },
    {
      question: "Is Kaloq a bank?",
      answer: "No. Kaloq is not a bank. Account availability, custody, and transfer services are provided through applicable partners and supported regions.",
    },
  ] satisfies FaqItem[],
  closer: {
    heading: "Move money on and off chain.",
    sub: "Hold, convert, and move supported currencies and stablecoins from one account.",
    cta: { label: "Get started", href: "/contact" },
  },
};

// ---------------------------------------------------------------------------
// Solutions (shared template)
// ---------------------------------------------------------------------------

export type SolutionFeature = { title: string; description: string };
export type SolutionStep = { number: string; title: string; description: string };

const personalSolutionFaq = [
  { question: "What can I use Kaloq for?", answer: "Kaloq helps you move supported assets from your wallet into a balance you can use with the Kaloq Card for eligible everyday purchases." },
  { question: "Which assets and networks are supported?", answer: "Support varies by region and account. Your Kaloq account shows the assets and networks currently available to you." },
  { question: "Where can I use the Kaloq Card?", answer: "Use the card for supported online, in-store, and travel purchases. Availability depends on your region and merchant category." },
  { question: "Can I see my balance and transactions?", answer: "Yes. Your account shows available balance, card activity, and transfer status in one place." },
];

const sharedStablecoinFlow = [
  { number: "01", title: "Start with supported stablecoins", description: "Keep supported USDT or USDC in your personal wallet." },
  { number: "02", title: "Move funds into Kaloq", description: "Transfer funds into Kaloq and review the available balance." },
  { number: "03", title: "Pay with the Kaloq Card", description: "Use the card for eligible online, in-store, and travel purchases." },
  { number: "04", title: "The merchant receives fiat", description: "Stablecoins are converted in the card flow; merchants receive ordinary local currency." },
] satisfies SolutionStep[];

const solutionFaq = [
  ...personalSolutionFaq,
  { question: "Does the merchant receive crypto?", answer: "No. In the card transaction flow, supported stablecoins are converted and the merchant receives ordinary fiat currency." },
  { question: "What checks apply?", answer: "KYC, transaction monitoring, source-of-funds review, and restrictions for certain regions or high-risk merchants may apply." },
] satisfies FaqItem[];

export const solutions = {
  stablecoinEarners: {
    slug: "stablecoin-earners",
    heading: "For Stablecoin Earners",
    hero: { h1: "Turn on-chain income into everyday spending.", sub: "If you earn in supported USDT or USDC, move it into Kaloq and use the Kaloq Card for travel, subscriptions, shopping, and everyday expenses.", primaryCta: { label: "Get your card", href: "/contact" }, secondaryCta: { label: "Explore Kaloq Card", href: "/products/card" }, image: "/images/use-cases/hero-landscape.jpg", imageAlt: "A warm editorial landscape representing income that moves with you", objectPosition: "38% center" },
    painPoints: ["Your income arrives on-chain, but daily life still expects a card.", "Selling on an exchange and withdrawing to a bank adds extra steps before you can spend.", "You want to see what moved before your balance becomes a purchase."],
    solutionIntro: "A direct path from supported on-chain income to the things you buy.",
    features: [
      { title: "Use the balance you already earn", description: "Start with supported USDT or USDC in your personal wallet." },
      { title: "Pay for real life", description: "Use the Kaloq Card for software, subscriptions, travel, shopping, and everyday expenses." },
      { title: "Keep activity visible", description: "Review your balance, card activity, and transfer status in one place." },
    ] satisfies SolutionFeature[],
    flow: { heading: "From on-chain income to a real purchase.", sub: "Move supported funds into Kaloq, then let the card handle the payment flow.", steps: sharedStablecoinFlow },
    faq: solutionFaq,
  },
  crossBorderLiving: {
    slug: "cross-border-living",
    heading: "For Cross-border Living",
    hero: { h1: "Keep a dollar balance. Spend in local currency.", sub: "Hold supported dollar stablecoins and use the Kaloq Card for eligible expenses as you live, work, or travel across borders.", primaryCta: { label: "Get your card", href: "/contact" }, secondaryCta: { label: "See pricing", href: "/pricing" }, image: "/images/use-cases/hero-landscape.jpg", imageAlt: "A warm landscape representing life across borders", objectPosition: "78% center" },
    painPoints: ["Your balance can travel with you while your expenses change country by country.", "Travel, accommodation, transport, restaurants, and online tools still need a usable card.", "A cross-border card is not automatically cheaper; funding, conversion, FX, cross-border, and ATM costs all matter."],
    solutionIntro: "One personal spending flow for the places your life takes you.",
    features: [
      { title: "Stay ready across borders", description: "Keep supported dollar stablecoins available for eligible local spending." },
      { title: "Cover the moving parts", description: "Use the Kaloq Card for travel, accommodation, transport, restaurants, and online tools." },
      { title: "Understand the total cost", description: "Review current indicative fees and confirm the final cost before you spend." },
    ] satisfies SolutionFeature[],
    flow: { heading: "Keep the same balance as life moves.", sub: "Your wallet balance starts the flow; the card completes it in local spending.", steps: sharedStablecoinFlow },
    faq: solutionFaq,
  },
  dollarBalanceHolders: {
    slug: "dollar-balance-holders",
    heading: "For Dollar Balance Holders",
    hero: { h1: "Hold dollar value. Spend in local currency.", sub: "Keep supported dollar stablecoins in your wallet, then move funds into Kaloq when everyday expenses arise.", primaryCta: { label: "Get your card", href: "/contact" }, secondaryCta: { label: "Explore Kaloq Card", href: "/products/card" }, image: "/images/use-cases/halftone-orb.jpg", imageAlt: "A soft halftone orb representing a dollar balance", objectPosition: "center" },
    painPoints: ["You want to hold a dollar-denominated balance while local expenses continue every day.", "A wallet can hold value, but groceries, transport and subscriptions still need a card.", "You need a clear view of what you move into spending and what remains available."],
    solutionIntro: "Keep dollar value connected to the moments you need to spend.",
    features: [
      { title: "Keep value in dollars", description: "Hold supported dollar stablecoins until an eligible expense comes up." },
      { title: "Spend on demand", description: "Move only what you need into Kaloq and use the Kaloq Card for eligible local purchases." },
      { title: "Follow every step", description: "See balances, card activity, and transfer status before and after you spend." },
    ] satisfies SolutionFeature[],
    flow: { heading: "From dollar balance to local purchase.", sub: "Keep supported dollar stablecoins ready, then connect them to everyday spending when you choose.", steps: sharedStablecoinFlow },
    faq: solutionFaq,
  },
  globalOnlineSpending: {
    slug: "global-online-spending",
    heading: "For Global Online Spending",
    hero: { h1: "Use your stablecoin balance for global online spending.", sub: "Move supported USDT or USDC into Kaloq and use the Kaloq Card for eligible subscriptions, software, shopping, travel bookings, and other international online purchases.", primaryCta: { label: "Get your card", href: "/contact" }, secondaryCta: { label: "Explore Kaloq Card", href: "/products/card" }, image: "/images/use-cases/texture-sky.jpg", imageAlt: "A pale textured sky representing global online access", objectPosition: "center" },
    painPoints: ["Your stablecoin balance is ready, but many online services still expect a card.", "International subscriptions, software and shopping can fail when your local card or payment route is not supported.", "You want to know what moved into a purchase and what remains in your balance."],
    solutionIntro: "Bring the balance you hold into the online services you use.",
    features: [
      { title: "Pay for global services", description: "Use the Kaloq Card for eligible subscriptions, software, shopping and travel bookings." },
      { title: "Keep your balance visible", description: "Review your balance, card activity and transfer status in one place." },
      { title: "Know what is supported", description: "Payment availability depends on your region, merchant category and card verification requirements." },
    ] satisfies SolutionFeature[],
    flow: { heading: "From stablecoin balance to online checkout.", sub: "Move supported funds into Kaloq, then use the card for eligible global online purchases.", steps: sharedStablecoinFlow },
    faq: solutionFaq,
  },
};

export const solutionsList = [solutions.stablecoinEarners, solutions.crossBorderLiving, solutions.dollarBalanceHolders, solutions.globalOnlineSpending];

// ---------------------------------------------------------------------------
// Pricing
// ---------------------------------------------------------------------------

export const pricing = {
  h1: "Simple fees, shown clearly.",
  intro: "Understand the possible cost of funding, spending, converting, and withdrawing before you use your card.",
  indicativeLabel: "Indicative — pending final confirmation",
  groups: [
    {
      heading: "Kaloq Card",
      rows: [
        { label: "Virtual card application", value: "Free", note: "Indicative rate for a virtual card application." },
        { label: "Physical card delivery", value: "$8.00", note: "Indicative delivery charge for a physical card." },
        { label: "Card funding", value: "0.9%", note: "Indicative rate when funding your card balance." },
        { label: "Card transaction", value: "Free", note: "Indicative card transaction fee." },
        { label: "Foreign exchange", value: "1.2%", note: "Indicative FX rate when conversion applies." },
        { label: "ATM withdrawal", value: "2% · minimum $3", note: "Indicative rate; the ATM operator may charge separately." },
        { label: "Card replacement", value: "$8.00", note: "Indicative replacement charge." },
      ] satisfies FeeRow[],
    },
  ],
  costFactors: {
    heading: "What affects the total cost",
    items: [
      "Blockchain network fees when funds move on-chain.",
      "Stablecoin funding or conversion fees.",
      "Foreign-exchange markup and cross-border transaction fees.",
      "Additional fees charged by an ATM operator.",
      "The final rate shown in-app and in the formal fee schedule at confirmation.",
    ],
  },
  faq: [
    { question: "Are these fees final?", answer: "No. The figures on this page are indicative and pending final confirmation. Check the in-app confirmation page and formal fee schedule before using the card." },
    { question: "How does foreign exchange affect the total?", answer: "An indicative FX rate may apply when a transaction requires conversion. The final amount depends on the currencies and route involved." },
    { question: "Can an ATM charge more?", answer: "Yes. An ATM operator may add its own fee on top of Kaloq's indicative withdrawal rate." },
    { question: "Is card funding charged?", answer: "The current indicative card funding rate is 0.9%. Funding method, supported asset, network, and region can affect the final cost." },
    { question: "Do fees vary by region?", answer: "They can. Availability, supported assets, conversion routes, and applicable fees depend on your region and account." },
  ] satisfies FaqItem[],
};

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export const about = {
  h1: "About Kaloq",
  mission:
    "We're making stablecoin payments usable for real businesses — safely. Kaloq combines the speed of stablecoins with the controls and support a finance team expects.",
  parentRelationship: "Kaloq is part of the [TODO: how much FMG to disclose] family of companies.",
  team: {
    heading: "Team",
    members: [
      { name: "[TODO: name]", role: "[TODO: role]", bio: "[TODO: one-line background]" },
      { name: "[TODO: name]", role: "[TODO: role]", bio: "[TODO: one-line background]" },
      { name: "[TODO: name]", role: "[TODO: role]", bio: "[TODO: one-line background]" },
      { name: "[TODO: name]", role: "[TODO: role]", bio: "[TODO: one-line background]" },
    ],
  },
  contact: {
    heading: "Get in touch",
    paragraph: "Have a question before you book a call?",
    cta: { label: "Contact us", href: "/contact" },
  },
};

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

export const contact = {
  h1: "Book a demo.",
  sub: "Tell us about your business and we'll set up time to talk.",
  form: {
    endpoint: "[TODO: form endpoint / email]",
    fields: {
      name: { label: "Name", placeholder: "Jane Cooper" },
      email: { label: "Work email", placeholder: "jane@company.com" },
      company: { label: "Company", placeholder: "Company name" },
      useCase: {
        label: "Use case",
        options: ["Card", "Payments", "Both"],
      },
      volume: {
        label: "Monthly volume",
        options: [
          "[TODO: confirm range] Under $50k",
          "[TODO: confirm range] $50k–$250k",
          "[TODO: confirm range] $250k–$1M",
          "[TODO: confirm range] $1M+",
        ],
      },
      message: { label: "Message", placeholder: "Tell us a bit about what you need." },
    },
    submitLabel: "Book a Demo",
    successHeading: "Thanks — we've got it.",
    successBody: "Someone from our team will reach out shortly.",
  },
  whatHappensNext: {
    heading: "What happens next",
    items: [
      "We reply within [TODO: confirm SLA] 1 business day.",
      "A 30-minute intro call.",
      "Sandbox / soft-launch access for qualified partners.",
    ],
  },
};

// ---------------------------------------------------------------------------
// Legal document pages
// ---------------------------------------------------------------------------

export type LegalSection = { heading: string; body: string };
export type LegalDoc = { title: string; lastUpdated: string; intro: string; sections: LegalSection[] };

export const legal: Record<"terms" | "privacy" | "amlStatement" | "prohibitedJurisdictions", LegalDoc> = {
  terms: {
    title: "Terms of Service",
    lastUpdated: "[TODO: date]",
    intro: "[TODO: legal copy]",
    sections: [
      { heading: "1. Introduction", body: "[TODO: legal copy]" },
      { heading: "2. Eligibility", body: "[TODO: legal copy]" },
      { heading: "3. Account Terms", body: "[TODO: legal copy]" },
      { heading: "4. Fees", body: "[TODO: legal copy]" },
      { heading: "5. Prohibited Uses", body: "[TODO: legal copy]" },
      { heading: "6. Liability", body: "[TODO: legal copy]" },
      { heading: "7. Governing Law", body: "[TODO: legal copy]" },
      { heading: "8. Changes to These Terms", body: "[TODO: legal copy]" },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "[TODO: date]",
    intro: "[TODO: legal copy]",
    sections: [
      { heading: "1. Information We Collect", body: "[TODO: legal copy]" },
      { heading: "2. How We Use Information", body: "[TODO: legal copy]" },
      { heading: "3. Data Sharing", body: "[TODO: legal copy]" },
      { heading: "4. Data Retention", body: "[TODO: legal copy]" },
      { heading: "5. Your Rights", body: "[TODO: legal copy]" },
      { heading: "6. Security", body: "[TODO: legal copy]" },
      { heading: "7. Contact", body: "[TODO: legal copy]" },
    ],
  },
  amlStatement: {
    title: "AML/CTF Statement",
    lastUpdated: "[TODO: date]",
    intro: "[TODO: legal copy]",
    sections: [
      { heading: "1. Program Overview", body: "[TODO: legal copy]" },
      { heading: "2. Customer Due Diligence", body: "[TODO: legal copy]" },
      { heading: "3. Sanctions Screening", body: "[TODO: legal copy]" },
      { heading: "4. Transaction Monitoring", body: "[TODO: legal copy]" },
      { heading: "5. Reporting Obligations", body: "[TODO: legal copy]" },
    ],
  },
  prohibitedJurisdictions: {
    title: "Prohibited Jurisdictions",
    lastUpdated: "[TODO: date]",
    intro:
      "Kaloq does not offer services to persons or businesses located in, or resident in, the jurisdictions listed below.",
    sections: [{ heading: "Restricted list", body: "[TODO: final list]" }],
  },
};
