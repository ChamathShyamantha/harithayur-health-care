import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonVariant = "primary" | "outline" | "text" | "onDark";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  variant?: WhatsAppButtonVariant;
  className?: string;
}

const variantStyles: Record<WhatsAppButtonVariant, string> = {
  primary:
    "bg-forest text-warm-white hover:bg-forest-deep rounded-pill px-6 py-3 shadow-[0_6px_20px_rgba(18,59,34,0.18)] hover:shadow-[0_10px_28px_rgba(18,59,34,0.26)]",
  outline:
    "border border-border-subtle bg-warm-white/70 text-forest-deep hover:border-botanical hover:text-forest rounded-pill px-6 py-3",
  // py-2 so the bare text link still carries a 36px hit area on a phone.
  text: "text-forest-deep hover:text-botanical underline underline-offset-4 decoration-1 py-2",
  onDark:
    "surface-dark bg-warm-white text-forest-deep hover:bg-sage-deep rounded-pill px-6 py-3",
};

export function WhatsAppButton({
  message,
  label = "Consult on WhatsApp",
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`focus-ring inline-flex items-center justify-center gap-2.5 text-[0.8125rem] font-semibold whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${variantStyles[variant]} ${className}`}
    >
      <WhatsappLogo size={17} weight="fill" aria-hidden />
      {label}
    </a>
  );
}
