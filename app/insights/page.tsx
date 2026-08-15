import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { InsightsGrid } from "@/components/insights/InsightsGrid";
import { DayRhythm } from "@/components/insights/DayRhythm";
import { ConsultBand } from "@/components/home/ConsultBand";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: { absolute: "Harithayur Ayurvedic Insights" },
  description:
    "Ancient knowledge for modern wellness — writing from our practitioners on doshas, seasonal care and the Sri Lankan tradition of Hela Wedakama.",
};

/**
 * The writing, then the one piece of Ayurvedic knowledge that is more useful drawn
 * than written. A short archive would otherwise leave this page as a list of links,
 * and the day's rhythm is the thing a visitor can act on before they buy anything.
 */
export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        heading="Ayurvedic Insights"
        subheading="Ancient knowledge for modern wellness."
        description="Written by the practitioners who prepare the remedies, on what the tradition actually says rather than what it is usually sold as."
      />

      <section className="border-b border-sage-line pb-20 md:pb-28">
        <Container>
          <InsightsGrid articles={articles} />
        </Container>
      </section>

      <DayRhythm />
      <ConsultBand />
    </>
  );
}
