import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonVariant = "primary" | "outline" | "text";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  variant?: WhatsAppButtonVariant;
  className?: string;
}

const variantStyles: Record<WhatsAppButtonVariant, string> = {
  primary:
    "bg-forest text-warm-white hover:bg-forest-deep shadow-sm hover:shadow-md rounded-full px-6 py-3",
  outline:
    "bg-transparent text-forest-deep border border-forest-deep/25 hover:bg-cream rounded-full px-6 py-3",
  text: "text-forest-deep hover:text-botanical underline underline-offset-4",
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
      className={`inline-flex items-center justify-center gap-2 text-sm font-semibold whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${variantStyles[variant]} ${className}`}
    >
      <WhatsappLogo size={18} weight="fill" aria-hidden />
      {label}
    </a>
  );
}
