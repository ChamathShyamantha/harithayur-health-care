import Link from "next/link";
import { ReactNode } from "react";
import { ButtonVine } from "@/components/ui/ButtonVine";

type ButtonVariant = "primary" | "secondary" | "onDark";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
  external?: boolean;
}

// --vine-ink is the tendril's colour, picked per variant rather than inherited:
// currentColor would put a white vine on the dark button, and the point of the
// motif is that it reads as a plant.
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-forest text-warm-white hover:bg-forest-deep shadow-[0_6px_20px_rgba(18,59,34,0.18)] hover:shadow-[0_10px_28px_rgba(18,59,34,0.26)] [--vine-ink:var(--color-lichen)]",
  secondary:
    "border border-border-subtle bg-warm-white/70 text-forest-deep hover:border-botanical hover:text-forest [--vine-ink:var(--color-botanical)]",
  // For the forest-green panels.
  onDark:
    "surface-dark bg-warm-white text-forest-deep hover:bg-sage-deep [--vine-ink:var(--color-botanical)]",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
  external = false,
}: ButtonProps) {
  // isolate matters: the tendril sits at negative z-index so it paints above the
  // button's own background but below the label, and the stacking context keeps
  // it from escaping upward into the page the way a bare -z-10 would.
  const classes = `focus-ring has-vine relative isolate inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-pill px-7 py-3.5 text-[0.8125rem] font-semibold whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${variantStyles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        <ButtonVine />
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      <ButtonVine />
      {children}
      {icon}
    </Link>
  );
}
