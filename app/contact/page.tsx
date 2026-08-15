import type { Metadata } from "next";
import { Clock, Envelope, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ConsultationForm } from "@/components/contact/ConsultationForm";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: "Contact Harithayur | Ayurvedic Consultation" },
  description:
    "Have a question, need guidance, or want to understand which Ayurvedic remedy is right for you? Get in touch with Harithayur.",
};

const contactDetails = [
  {
    icon: WhatsappLogo,
    label: "WhatsApp",
    value: siteConfig.contact.whatsappDisplay,
  },
  {
    icon: Envelope,
    label: "Email",
    value: siteConfig.contact.email,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: `${siteConfig.contact.businessDays}, ${siteConfig.contact.businessHours}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        heading="Let's Begin Your Wellness Journey."
        description="Have a question, need guidance, or want to understand which Ayurvedic remedy is right for you?"
      />

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                {contactDetails.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-forest">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                        {label}
                      </p>
                      <p className="text-base text-text-dark">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-border-subtle bg-cream/60 p-6">
                <h2 className="font-serif text-xl text-forest-deep mb-1">
                  Consult Our Ayurvedic Experts
                </h2>
                <p className="text-sm text-text-muted mb-5">
                  {siteConfig.contact.whatsappDisplay}
                </p>
                <WhatsAppButton label="Chat on WhatsApp" className="w-full" />
              </div>
            </div>

            <div className="rounded-3xl border border-border-subtle bg-warm-white p-6 shadow-[0_8px_24px_rgba(18,59,34,0.06)] md:p-10">
              <ConsultationForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
