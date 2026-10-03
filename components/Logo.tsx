import Image from "next/image";

export function Logo({ variant = "maroon", className }: { variant?: "maroon" | "ivory"; className?: string }) {
  return (
    <Image
      src={variant === "maroon" ? "/logo-maroon.png" : "/logo-ivory.png"}
      alt="Hotel Shivkunj — Stay Blessed, Stay With Us"
      width={600}
      height={200}
      priority
      unoptimized
      className={className}
    />
  );
}
