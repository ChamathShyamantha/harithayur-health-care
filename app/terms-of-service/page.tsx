import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of the ${siteConfig.name} website.`,
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader heading="Terms of Service" />
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-6 text-sm leading-relaxed text-text-muted">
            <p>
              By using the {siteConfig.name} website, you agree to consult
              our Ayurvedic experts before beginning any new remedy. Our
              content is educational and does not replace professional
              medical advice.
            </p>
            <p>
              Full terms will be published here as our consultation and
              ordering services go live. For questions, contact us at{" "}
              {siteConfig.contact.email}.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
