import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { TrustBand } from "@/components/home/TrustBand";
import { BenefitsStrip } from "@/components/home/BenefitsStrip";
import { HeritageBand } from "@/components/home/HeritageBand";
import { ConsultBand } from "@/components/home/ConsultBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/products/ProductGrid";
import { InsightsGrid } from "@/components/insights/InsightsGrid";
import { products } from "@/data/products";
import { articles } from "@/data/articles";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name} | ${siteConfig.tagline}` },
  description: siteConfig.description,
};

/**
 * Layout families in order, no repeats: asymmetric hero, hairline credential band,
 * bento, asymmetric product feature, full-bleed media, offset editorial pair,
 * accent closing band. Two eyebrows across seven sections.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBand />
      <BenefitsStrip />

      <section className="border-b border-border-subtle py-20 md:py-28">
        <Container className="flex flex-col gap-14 md:gap-20">
          <SectionHeading
            eyebrow="Our Remedies"
            heading="Curated for your wellness journey"
            description="Thoughtfully crafted formulations using the finest natural ingredients, each one made to be matched to a person rather than sold off a shelf."
          />
          <ProductGrid products={products} />
        </Container>
      </section>

      <HeritageBand />

      <section className="border-b border-border-subtle py-20 md:py-28">
        <Container className="flex flex-col gap-14 md:gap-20">
          <SectionHeading
            eyebrow="Insights"
            heading="Knowledge for a healthier you"
          />
          <InsightsGrid articles={articles} />
        </Container>
      </section>

      <ConsultBand />
    </>
  );
}
