import type { SolutionIconName } from "@/lib/content";

type SolutionIconProps = {
  name: SolutionIconName;
  className?: string;
};

export function SolutionIcon({ name, className = "h-5 w-5" }: SolutionIconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
  };

  switch (name) {
    case "wallet":
      return <svg {...common}><path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h16v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5" /><path d="M16 13h5" /><circle cx="16" cy="13" r="1" /></svg>;
    case "transfer":
      return <svg {...common}><path d="M4 7h14" /><path d="m15 4 3 3-3 3" /><path d="M20 17H6" /><path d="m9 14-3 3 3 3" /></svg>;
    case "eye":
      return <svg {...common}><path d="M2.5 12s3.4-5 9.5-5 9.5 5 9.5 5-3.4 5-9.5 5-9.5-5-9.5-5Z" /><circle cx="12" cy="12" r="2.25" /></svg>;
    case "coins":
      return <svg {...common}><circle cx="8.5" cy="8.5" r="4.5" /><path d="M12 11.5a4.5 4.5 0 1 0 3.5 7.3" /><path d="M8.5 6.5v4M6.5 8.5h4" /></svg>;
    case "shopping-bag":
      return <svg {...common}><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>;
    case "activity":
      return <svg {...common}><path d="M3 12h4l2-5 4 10 2-5h6" /></svg>;
    case "globe":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.2 2.5 3.3 5.5 3.3 9s-1.1 6.5-3.3 9c-2.2-2.5-3.3-5.5-3.3-9S9.8 5.5 12 3Z" /></svg>;
    case "travel":
      return <svg {...common}><rect x="5" y="7" width="14" height="12" rx="2" /><path d="M9 7V5a3 3 0 0 1 6 0v2M8 12h8M9 16h.01M15 16h.01" /></svg>;
    case "receipt":
      return <svg {...common}><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" /><path d="M9 8h6M9 12h6M9 16h3" /></svg>;
    case "dollar":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 6v12M15 9.5c-.6-.7-1.5-1-2.7-1-1.5 0-2.5.7-2.5 1.8 0 2.8 5.2 1.1 5.2 4 0 1.2-1.1 2.2-2.8 2.2-1.3 0-2.3-.4-3-1.2" /></svg>;
    case "card":
      return <svg {...common}><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="M2.5 10h19M6 15h3" /></svg>;
    case "laptop":
      return <svg {...common}><rect x="4" y="4" width="16" height="11" rx="1.5" /><path d="M2 19h20M8 19h8" /></svg>;
    case "alert":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg>;
    case "shield":
      return <svg {...common}><path d="M12 3 19 6v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></svg>;
  }
}
