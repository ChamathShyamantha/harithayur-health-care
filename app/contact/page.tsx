import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ConsultationForm } from "@/components/contact/ConsultationForm";
import { ConsultPath } from "@/components/contact/ConsultPath";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: "Contact Harithayur | Ayurvedic Consultation" },
  description:
    "Have a question, need guidance, or want to understand which Ayurvedic remedy is right for you? Get in touch with Harithayur.",
};

const contactDetails = [
  {
    label: "WhatsApp",
    value: siteConfig.contact.whatsappDisplay,
    href: `tel:${siteConfig.contact.whatsappNumber}`,
  },
  {
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    label: "Business hours",
    value: `${siteConfig.contact.businessDays}, ${siteConfig.contact.businessHours}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        heading="Let's begin your wellness journey."
        description="Have a question, need guidance, or want to understand which Ayurvedic remedy is right for you?"
      />

      <ConsultPath />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="flex flex-col gap-10 lg:col-span-5">
              <dl className="flex flex-col">
                {contactDetails.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-1.5 border-t border-sage-line py-6"
                  >
                    <dt className="eyebrow">{item.label}</dt>
                    <dd className="display text-2xl text-forest-deep">
                      {item.href ? (
                        <a
                          href={item.href}
                          /* A phone number is the one link on this page most
                             likely to be tapped, and at 24px it was the smallest. */
                          className="focus-ring -my-1 inline-block rounded-soft py-1 transition-colors duration-200 hover:text-botanical"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="flex flex-col items-start gap-4 border-t border-sage-line pt-8">
                <p className="max-w-[38ch] text-sm leading-relaxed text-text-muted">
                  If you would rather talk it through, our practitioners answer
                  on WhatsApp during business hours.
                </p>
                <WhatsAppButton label="Consult on WhatsApp" />
              </div>
            </Reveal>

            <Reveal
              delay={0.1}
              className="rounded-soft border border-border-subtle bg-sage-deep p-6 md:p-10 lg:col-span-7"
            >
              <ConsultationForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
