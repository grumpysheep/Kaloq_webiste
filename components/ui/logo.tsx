import Image from "next/image";
import Link from "next/link";

export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Kaloq home"
    >
      <Image
        src={variant === "light" ? "/images/kaloq-logo-light.png" : "/images/kaloq-logo-dark.png"}
        alt="Kaloq"
        width={116}
        height={40}
        priority
        className="h-8 w-auto"
      />
    </Link>
  );
}
