import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "onDark";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-forest text-warm-white hover:bg-forest-deep shadow-[0_6px_20px_rgba(18,59,34,0.18)] hover:shadow-[0_10px_28px_rgba(18,59,34,0.26)]",
  secondary:
    "border border-border-subtle bg-warm-white/70 text-forest-deep hover:border-botanical hover:text-forest",
  // For the forest-green panels.
  onDark:
    "surface-dark bg-warm-white text-forest-deep hover:bg-cream",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `focus-ring inline-flex items-center justify-center gap-2.5 rounded-pill px-7 py-3.5 text-[0.8125rem] font-semibold whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${variantStyles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
