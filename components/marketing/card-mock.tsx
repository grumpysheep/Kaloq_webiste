export function CardMock({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 340 214"
        role="img"
        aria-label="Illustrative Kaloq card design, not a final product render"
        className="w-full h-auto drop-shadow-xl"
      >
        <defs>
          <linearGradient id="cardGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#245a40" />
            <stop offset="100%" stopColor="#123326" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="338" height="212" rx="20" fill="url(#cardGradient)" stroke="#0c231a" strokeWidth="1" />
        <rect x="28" y="44" width="40" height="30" rx="6" fill="#d7e92a" opacity="0.9" />
        <g opacity="0.7">
          <path d="M282 40a18 18 0 0 1 0 26" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M290 32a30 30 0 0 1 0 42" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>
        <text x="28" y="128" fill="#eef4f0" fontSize="17" fontFamily="ui-monospace, monospace" letterSpacing="2">
          •••• •••• •••• 4242
        </text>
        <text x="28" y="160" fill="#c7d3cc" fontSize="10" letterSpacing="1">
          VALID THRU 00/00
        </text>
        <text x="28" y="192" fill="#ffffff" fontSize="20" fontWeight="700" letterSpacing="0.5">
          Kaloq
        </text>
        <circle cx="88" cy="187" r="2.5" fill="#d7e92a" />
      </svg>
      <p className="mt-3 text-center text-xs text-foreground-muted">
        Illustrative card design — not a final product render.
      </p>
    </div>
  );
}
