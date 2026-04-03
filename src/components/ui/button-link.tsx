import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: "ghost" | "primary" | "secondary";
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm uppercase tracking-[0.26em] transition-all duration-500";

const variants = {
  ghost:
    "text-[var(--color-ivory)] hover:bg-white/[0.04] hover:text-white",
  primary:
    "bg-[var(--color-ivory)] text-[var(--color-ink)] shadow-[0_16px_40px_rgba(247,241,230,0.12)] hover:-translate-y-0.5 hover:bg-white",
  secondary:
    "border border-white/12 bg-white/[0.04] text-[var(--color-ivory)] backdrop-blur-sm hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]",
} as const;

export function ButtonLink({
  children,
  className = "",
  href,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link className={`${baseClasses} ${variants[variant]} ${className}`} href={href}>
      {children}
    </Link>
  );
}
