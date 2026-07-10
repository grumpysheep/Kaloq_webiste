import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-0.5 text-2xl font-extrabold tracking-tight text-brand ${className}`}
      aria-label="Kaloq home"
    >
      Kaloq
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime translate-y-2" aria-hidden="true" />
    </Link>
  );
}
