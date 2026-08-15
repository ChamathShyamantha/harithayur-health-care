import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects your information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader heading="Privacy Policy" />
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-6 text-sm leading-relaxed text-text-muted">
            <p>
              {siteConfig.name} respects your privacy. This page will outline
              how we collect, use, and safeguard your personal information
              once our consultation and contact services are connected to a
              live backend.
            </p>
            <p>
              For any questions about your data in the meantime, please reach
              out to us at {siteConfig.contact.email}.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
