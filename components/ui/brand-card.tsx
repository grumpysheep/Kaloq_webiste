import Image from "next/image";

type BrandCardProps = {
  alt?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function BrandCard({
  alt = "Kaloq physical card",
  className = "",
  priority = false,
  sizes = "(max-width: 640px) 92vw, 720px",
}: BrandCardProps) {
  return (
    <div
      className={`relative aspect-[2551/4045] overflow-hidden bg-[#1B4432] ${className}`}
      data-figma-node="380:2"
    >
      <div className="absolute left-1/2 top-1/2 aspect-[4045/2551] w-[158.57%] -translate-x-1/2 -translate-y-1/2 rotate-90">
        <Image
          src="/images/cards/kaloq-signature-physical-v1-front.png"
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[42.5%] w-[17.43%] bg-[#1B4432]"
        />
      </div>
    </div>
  );
}
