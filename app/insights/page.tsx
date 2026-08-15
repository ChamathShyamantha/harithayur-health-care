import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { InsightsGrid } from "@/components/insights/InsightsGrid";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: { absolute: "Harithayur Ayurvedic Insights" },
  description: "Ancient knowledge for modern wellness.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        heading="Ayurvedic Insights"
        subheading="Ancient knowledge for modern wellness."
      />
      <section className="pb-20 md:pb-28">
        <Container>
          <InsightsGrid articles={articles} />
        </Container>
      </section>
    </>
  );
}
