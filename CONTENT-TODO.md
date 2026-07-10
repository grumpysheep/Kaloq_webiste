# Content TODOs

Every unverified fact on this site is rendered as a visible `[TODO: ...]` placeholder so nothing fake ships. This file lists all of them in one place so the team can fill in real data in a single pass.

Almost everything lives in [`lib/content.ts`](lib/content.ts) — that's the single source of copy for the whole site. A handful of TODOs are hard-coded directly in a component (noted below). Line numbers refer to the current state of the repo and will drift as the file is edited — search for the bracketed text if a line number is stale.

## Global / site-wide

| Placeholder | Location | Notes |
|---|---|---|
| `[TODO: production domain]` | `lib/content.ts:8` (`site.domain`) | Not currently wired into metadata — add when a domain is confirmed. |
| `[TODO: app login URL]` | `lib/content.ts:11` (`site.loginUrl`) | Header "Log in" button currently points to `#`. |
| `[TODO: Full registered legal entity name]`, `[TODO: registered address]` | `lib/content.ts:93` (`footer.legalBlock.entity`) | Footer legal block. |
| MSB registration number | `lib/content.ts:95` (`footer.legalBlock.msb`) | "...registration number `[TODO: MSB number]`." |
| Issuer / BIN sponsor disclosure | `lib/content.ts:97` (`footer.legalBlock.issuer`) | Card-issuing partner disclosure line. |

## Home (`/`)

| Placeholder | Location |
|---|---|
| Supported regions/corridors (trust bar) | `lib/content.ts:118` |
| Partner/client logos ×5 | `lib/content.ts:120` (`home.trustBar.logos`) |
| Fee preview values ×3 (Card issuance, International spend, Bank payout) | `lib/content.ts:184-186` |
| Onboarding time | `lib/content.ts:195` |
| Support channel/SLA | `lib/content.ts:203` |

## Products — Card (`/products/card`)

| Placeholder | Location |
|---|---|
| Physical card availability | `lib/content.ts:244` |
| Multi-BIN support wording (confirm legally/publicly safe phrasing) | `lib/content.ts:256` |
| Supported stablecoins & chains | `lib/content.ts:274` |
| Full KYB requirement list | `lib/content.ts:279` |
| Settlement timing | `lib/content.ts:283` |
| Negative balance policy | `lib/content.ts:287` |
| Supported regions | `lib/content.ts:291` |
| Fee values — issuance, monthly, international spend/FX | `lib/content.ts:295-297` |

## Products — Payments (`/products/payments`)

| Placeholder | Location |
|---|---|
| Supported payout corridors | `lib/content.ts:322` |
| Supported stablecoins for collection | `lib/content.ts:341` |
| Conversion markup value | `lib/content.ts:344` |
| Supported corridors (FAQ) | `lib/content.ts:346` |
| Settlement/payout timing | `lib/content.ts:347` |
| Transaction min/max limits | `lib/content.ts:348` |
| Fee values — deposit, conversion markup, offramp per corridor | `lib/content.ts:351-353` |
| Illustrative calculator rates | `lib/content.ts:433-438` (`productPayments.rateTransparency.calculator.corridors`) — currently placeholder numbers clearly labeled "illustrative"; replace with real published rates. |

## Solutions (`/solutions/*`)

All three solution pages share the same TODO shape:

| Placeholder | Location |
|---|---|
| Customer quote + attribution — Crypto Companies | `lib/content.ts:383-384` |
| Customer quote + attribution — Cross-Border Trade | `lib/content.ts:407-408` |
| Customer quote + attribution — Global Teams | `lib/content.ts:430-431` |
| Legal review flag on SWIFT/fee-avoidance claims | `lib/content.ts:405` (`crossBorderTrade.disclaimerNote`) — get these specific claims reviewed before removing the flag. |
| "Real case study" label on quote cards | `components/marketing/case-study-card.tsx:5` — remove once real case studies replace the placeholder quotes. |

## Pricing (`/pricing`)

| Placeholder | Location |
|---|---|
| Card fees — issuance, monthly, domestic spend, international spend/FX, ATM | `lib/content.ts:449-453` |
| Payments fees — deposit, conversion markup, offramp per corridor | `lib/content.ts:459-461` |
| Repricing notice period | `lib/content.ts:473` |
| Monthly fee structure (FAQ) | `lib/content.ts:479` |
| Volume pricing thresholds (FAQ) | `lib/content.ts:480` |
| Confirm no hidden fees beyond this page (FAQ) | `lib/content.ts:483` |

## Compliance & Licenses (`/compliance`)

| Placeholder | Location |
|---|---|
| Jurisdiction / registration type / number | `lib/content.ts:498-500` |
| AML/CTF program description — verify with compliance team | `lib/content.ts:507` |
| Final restricted jurisdictions list | `lib/content.ts:512` |
| Compliance/due-diligence contact email | `lib/content.ts:514` |

## About (`/about`)

| Placeholder | Location |
|---|---|
| How much of the FMG relationship to disclose | `lib/content.ts:525` |
| Team member name/role/bio ×4 | `lib/content.ts:529-532` |
| Team member photos ×4 | `app/about/page.tsx:33` — currently a dashed placeholder circle. |

## Contact (`/contact`)

| Placeholder | Location |
|---|---|
| Form submission endpoint or destination email | `lib/content.ts:550` — form currently `console.log`s and shows a success state; wire up to a real endpoint before launch. |
| Confirm monthly-volume bucket ranges | `lib/content.ts:562-565` |
| Confirm reply-time SLA | `lib/content.ts:577` |

## Legal pages (`/legal/terms`, `/legal/privacy`, `/legal/aml-statement`, `/legal/prohibited-jurisdictions`)

All four pages are structural placeholders only — headings are set, every `lastUpdated` date and every section body reads `[TODO: legal copy]`. Do not ship without real counsel-reviewed text.

| Page | Location |
|---|---|
| Terms of Service | `lib/content.ts:592-605` |
| Privacy Policy | `lib/content.ts:607-619` |
| AML/CTF Statement | `lib/content.ts:621-631` |
| Prohibited Jurisdictions | `lib/content.ts:633-638` |

---

**Before launch:** grep the repo for `[TODO` to confirm nothing has been missed as new content is added:

```
grep -rn "\[TODO" lib/ app/ components/
```
