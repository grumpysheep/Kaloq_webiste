// Single source of truth for all site copy.
// Every unverified real-world fact is marked with a `[TODO: ...]` placeholder —
// see CONTENT-TODO.md for the full list before this ships.
// Structured to make a future locale (e.g. `content.zh.ts`) a drop-in sibling.

export const site = {
  name: "Kaloq",
  domain: "[TODO: production domain]",
  description:
    "Stablecoin-funded corporate cards and payment rails for global businesses.",
  loginUrl: "#", // [TODO: app login URL]
};

export type NavLink = { label: string; href: string };
export type NavDropdownItem = { label: string; description: string; href: string };

export const nav = {
  products: [
    {
      label: "Kaloq Card",
      description: "Stablecoin-funded corporate cards on global card networks",
      href: "/products/card",
    },
    {
      label: "Payments",
      description: "Stablecoin collection, conversion and fiat offramp",
      href: "/products/payments",
    },
  ] satisfies NavDropdownItem[],
  solutions: [
    {
      label: "For Crypto Companies",
      description: "Spend on-chain treasury on real-world expenses",
      href: "/solutions/crypto-companies",
    },
    {
      label: "For Cross-Border Trade",
      description: "Settle international suppliers without SWIFT friction",
      href: "/solutions/cross-border-trade",
    },
    {
      label: "For Global Teams",
      description: "Pay contractors and teams worldwide in stablecoins",
      href: "/solutions/global-teams",
    },
  ] satisfies NavDropdownItem[],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],
  pricing: { label: "Why Kaloq", href: "#why-kaloq" } satisfies NavLink,
  security: { label: "Security", href: "/compliance" } satisfies NavLink,
  login: { label: "Log in", href: site.loginUrl },
  demo: { label: "Get started", href: "/contact" },
};

export const footer = {
  columns: [
    {
      heading: "Products",
      links: [
        { label: "Kaloq Card", href: "/products/card" },
        { label: "Payments", href: "/products/payments" },
      ] as NavLink[],
    },
    {
      heading: "Solutions",
      links: [
        { label: "For Crypto Companies", href: "/solutions/crypto-companies" },
        { label: "For Cross-Border Trade", href: "/solutions/cross-border-trade" },
        { label: "For Global Teams", href: "/solutions/global-teams" },
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
        { label: "Compliance & Licenses", href: "/compliance" },
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
    copyright: "© 2026 Kaloq. All rights reserved.",
  },
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
  trustBar: {
    items: [
      "USDC · USDT supported",
      "Spend anywhere cards are accepted",
      "[TODO: supported regions/corridors]",
    ],
    logos: ["[TODO: Partner logo]", "[TODO: Partner logo]", "[TODO: Partner logo]", "[TODO: Partner logo]", "[TODO: Partner logo]"],
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
        description: "Stablecoin-funded corporate cards on global card networks.",
        bullets: ["Virtual & physical cards", "Multi-currency spend", "Team controls & limits"],
        href: "/products/card",
      },
      {
        title: "Payments",
        description: "Collect, convert and pay out on stablecoin rails.",
        bullets: ["Collect stablecoins", "Offramp to fiat", "Transparent FX"],
        href: "/products/payments",
      },
    ],
  },
  audience: {
    heading: "Built for your use case",
    tiles: [
      {
        title: "Crypto Companies",
        pain: "Spend on-chain treasury on real SaaS, travel and ad bills — without routing through an exchange.",
        href: "/solutions/crypto-companies",
      },
      {
        title: "Cross-Border Trade",
        pain: "Settle international suppliers in minutes, not days, without SWIFT fees or intermediary banks.",
        href: "/solutions/cross-border-trade",
      },
      {
        title: "Global Teams",
        pain: "Pay contractors worldwide in stablecoins — they choose card spend or local payout.",
        href: "/solutions/global-teams",
      },
    ],
  },
  transparency: {
    heading: "Pricing you can see before you sign.",
    paragraph:
      "No hidden FX markup. No unilateral repricing. Every fee is published, so you know what you're paying before you commit.",
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
  finalCta: {
    heading: "Talk to our team.",
    sub: "Soft-launch access for selected partners.",
    cta: { label: "Book a Demo", href: "/contact" },
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
    h1: "The corporate card funded by stablecoins.",
    sub: "Spend USDC and USDT balances anywhere cards are accepted.",
    cta: { label: "Book a Demo", href: "/contact" },
  },
  features: [
    {
      title: "Virtual cards, instant issue",
      description: "Create a new card in seconds and start spending immediately.",
    },
    {
      title: "Physical cards",
      description: "[TODO: availability] — order physical cards for your team.",
    },
    {
      title: "Spend controls & team limits",
      description: "Set per-card and per-team limits, and freeze a card instantly.",
    },
    {
      title: "Real-time transaction feed",
      description: "See every transaction as it happens, with exports for your books.",
    },
    {
      title: "Multi-BIN support",
      description: "[TODO: confirm public wording]",
    },
  ],
  funding: {
    heading: "How funding works",
    steps: [
      { title: "Top up with stablecoins", description: "Send USDC or USDT to your Kaloq balance." },
      {
        title: "Kaloq converts at a rate shown before you confirm",
        description: "Conversion happens the moment you top up — never after you've spent.",
      },
      { title: "Balance loads onto your card", description: "Spend immediately on virtual or physical cards." },
    ],
    note: "Conversion happens at top-up. The rate is always shown before you confirm.",
  },
  faq: [
    {
      question: "Which stablecoins and chains are supported?",
      answer: "[TODO: confirm supported stablecoins and chains]",
    },
    {
      question: "What KYB information do I need to provide?",
      answer:
        "Standard business verification: incorporation documents, ownership information and [TODO: full KYB requirement list].",
    },
    {
      question: "How fast does my balance settle?",
      answer: "[TODO: settlement timing]",
    },
    {
      question: "What happens if my card balance goes negative?",
      answer: "[TODO: final negative balance policy]",
    },
    {
      question: "Which regions are supported?",
      answer: "[TODO: supported regions]",
    },
  ] satisfies FaqItem[],
  fees: [
    { label: "Issuance fee", value: "[TODO]", note: "Charged once when a new card is created." },
    { label: "Monthly fee", value: "[TODO]", note: "Per active card, billed monthly." },
    { label: "International spend / FX", value: "[TODO]", note: "Applied on transactions outside your home currency." },
  ] satisfies FeeRow[],
};

// ---------------------------------------------------------------------------
// Products — Payments
// ---------------------------------------------------------------------------

export const productPayments = {
  hero: {
    h1: "Collect, convert and pay out — on stablecoin rails.",
    sub: "For businesses invoicing or paying globally.",
    cta: { label: "Book a Demo", href: "/contact" },
  },
  capabilities: [
    {
      title: "Collect",
      description: "Generate stablecoin invoices and deposit addresses your customers can pay directly.",
    },
    {
      title: "Convert",
      description: "Transparent FX with a published markup — see the rate before you commit.",
    },
    {
      title: "Pay out",
      description: "Send fiat to bank accounts in [TODO: supported corridors].",
    },
  ],
  rateTransparency: {
    heading: "Rates you can see up front",
    paragraph:
      "Every conversion carries a single published markup over the reference mid-market rate. No spread hidden inside the exchange rate, no surprise deduction after the fact.",
    calculator: {
      heading: "Estimate a payout",
      disclaimer: "Illustrative rates — not final pricing.",
      corridors: [
        { label: "USDC → USD (US bank account)", rate: 0.01 },
        { label: "USDC → EUR (SEPA)", rate: 0.012 },
        { label: "USDT → MXN", rate: 0.015 },
        { label: "USDT → PHP", rate: 0.015 },
      ],
    },
  },
  faq: [
    { question: "Which stablecoins can I collect?", answer: "[TODO: confirm supported stablecoins]" },
    {
      question: "How is the conversion rate determined?",
      answer: "A published markup over the reference mid-market rate. [TODO: confirm markup]",
    },
    { question: "Which corridors are supported for payout?", answer: "[TODO: supported corridors]" },
    { question: "How long do payouts take?", answer: "[TODO: settlement timing]" },
    { question: "Is there a minimum or maximum transaction size?", answer: "[TODO: transaction limits]" },
  ] satisfies FaqItem[],
  fees: [
    { label: "Deposit", value: "[TODO]", note: "Applied when stablecoins are received into your Kaloq balance." },
    { label: "Conversion markup", value: "[TODO]", note: "Applied on top of the reference mid-market rate." },
    { label: "Offramp fee (per corridor)", value: "[TODO]", note: "Varies by destination country and currency." },
  ] satisfies FeeRow[],
};

// ---------------------------------------------------------------------------
// Solutions (shared template)
// ---------------------------------------------------------------------------

export type SolutionFeature = { title: string; description: string };

export const solutions = {
  cryptoCompanies: {
    slug: "crypto-companies",
    heading: "For Crypto Companies",
    hero: {
      h1: "Spend your treasury without leaving the chain.",
      sub: "Turn on-chain balances into real-world spend — no exchange detour.",
    },
    painPoints: [
      "Moving funds through an exchange just to pay a vendor",
      "Treasury sits in stablecoins while bills need fiat",
      "Card programs that don't understand crypto-native businesses",
    ],
    solutionIntro: "Kaloq lets your treasury pay the bills directly.",
    features: [
      { title: "Kaloq Card", description: "Spend stablecoin balances directly — no offramp required first." },
      { title: "Payments", description: "Offramp to fiat when a vendor needs a bank transfer instead." },
      { title: "Real-time visibility", description: "Track every transaction against your treasury in one dashboard." },
    ] satisfies SolutionFeature[],
    caseStudy: {
      quote: "[TODO: customer quote]",
      attribution: "[TODO: Name, Title, Company]",
    },
  },
  crossBorderTrade: {
    slug: "cross-border-trade",
    heading: "For Cross-Border Trade",
    hero: {
      h1: "Settle suppliers in minutes, not days.",
      sub: "Pay international suppliers without routing through SWIFT and correspondent banks.",
    },
    painPoints: [
      "Payments stuck for days in correspondent bank chains",
      "Wire fees and FX spread eating into margins",
      "No visibility into where a payment actually is",
    ],
    solutionIntro: "Kaloq settles supplier payments on stablecoin rails, with fiat payout on the other end.",
    features: [
      { title: "Payments", description: "Collect, convert and pay out without an intermediary bank chain." },
      { title: "Transparent FX", description: "One published markup — see the cost before you send." },
      { title: "Real-time tracking", description: "Know exactly where a payment is, from send to settlement." },
    ] satisfies SolutionFeature[],
    disclaimerNote: "[TODO: verify claims legally reviewable]",
    caseStudy: {
      quote: "[TODO: customer quote]",
      attribution: "[TODO: Name, Title, Company]",
    },
  },
  globalTeams: {
    slug: "global-teams",
    heading: "For Global Teams",
    hero: {
      h1: "Pay your global team in stablecoins.",
      sub: "Contractors and teams choose card spend or a local payout — whichever works for them.",
    },
    painPoints: [
      "Juggling several payout providers across countries",
      "Contractors waiting days to access their pay",
      "Manual reconciliation across payroll and finance tools",
    ],
    solutionIntro: "Kaloq gives every contractor a single, flexible way to get paid.",
    features: [
      { title: "Payments", description: "Pay out to stablecoin wallets or local bank accounts from one place." },
      { title: "Kaloq Card", description: "Recipients can spend directly instead of cashing out." },
      { title: "Real-time visibility", description: "See payout status and history without chasing anyone." },
    ] satisfies SolutionFeature[],
    caseStudy: {
      quote: "[TODO: customer quote]",
      attribution: "[TODO: Name, Title, Company]",
    },
  },
};

export const solutionsList = [solutions.cryptoCompanies, solutions.crossBorderTrade, solutions.globalTeams];

// ---------------------------------------------------------------------------
// Pricing
// ---------------------------------------------------------------------------

export const pricing = {
  h1: "Transparent pricing.",
  intro: "Published rates. Volume pricing available for qualifying businesses.",
  groups: [
    {
      heading: "Card",
      rows: [
        { label: "Issuance fee", value: "[TODO]", note: "Charged once when a new card is created." },
        { label: "Monthly fee", value: "[TODO]", note: "Per active card, billed monthly." },
        { label: "Domestic spend", value: "[TODO]", note: "Transactions in your home currency." },
        { label: "International spend / FX", value: "[TODO]", note: "Applied on transactions outside your home currency." },
        { label: "ATM withdrawal", value: "[TODO]", note: "Per withdrawal, in addition to any ATM operator fee." },
      ] satisfies FeeRow[],
    },
    {
      heading: "Payments",
      rows: [
        { label: "Deposit", value: "[TODO]", note: "Applied when stablecoins are received into your balance." },
        { label: "Conversion markup", value: "[TODO]", note: "Applied on top of the reference mid-market rate." },
        { label: "Offramp fee (per corridor)", value: "[TODO]", note: "Varies by destination country and currency." },
      ] satisfies FeeRow[],
    },
  ],
  volumePricing: {
    heading: "Volume pricing",
    paragraph: "Higher volume? Talk to us about custom pricing for your business.",
    cta: { label: "Book a Demo", href: "/contact" },
  },
  noSurprises: {
    heading: "No surprises",
    items: [
      "No unilateral repricing without [TODO: notice period] notice",
      "No hidden FX spread",
      "Fee changes announced in advance",
    ],
  },
  faq: [
    { question: "Is there a monthly fee?", answer: "[TODO: confirm monthly fee structure]" },
    { question: "How does volume pricing work?", answer: "[TODO: volume pricing thresholds]" },
    {
      question: "Are there any hidden fees?",
      answer: "No. Every fee is listed on this page. [TODO: confirm completeness]",
    },
  ] satisfies FaqItem[],
};

// ---------------------------------------------------------------------------
// Compliance
// ---------------------------------------------------------------------------

export const compliance = {
  h1: "Compliance & Licenses.",
  registrations: {
    heading: "Registrations",
    rows: [
      {
        jurisdiction: "[TODO: jurisdiction]",
        type: "[TODO: registration type]",
        number: "[TODO: registration number]",
      },
    ],
  },
  amlProgram: {
    heading: "AML/CTF program",
    paragraph:
      "Kaloq maintains a risk-based AML/CTF program, including know-your-business and know-your-customer verification, sanctions screening, and ongoing transaction monitoring. [TODO: verify program description with compliance team]",
  },
  restrictedJurisdictions: {
    heading: "Restricted jurisdictions",
    statement: "Kaloq does not offer services in certain jurisdictions.",
    list: ["[TODO: final restricted jurisdictions list]"],
  },
  contact: "For due-diligence inquiries, contact [TODO: compliance email].",
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
