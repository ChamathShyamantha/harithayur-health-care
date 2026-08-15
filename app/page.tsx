import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { BenefitsStrip } from "@/components/home/BenefitsStrip";
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

export default function HomePage() {
  return (
    <>
      <Hero />
      <BenefitsStrip />

      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Our Premium Remedies"
            heading="Curated for Your Wellness Journey"
            description="Thoughtfully crafted formulations using the finest natural ingredients."
          />
          <ProductGrid products={products} />
        </Container>
      </section>

      <section className="bg-cream/60 py-20 md:py-28">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Ayurvedic Insights"
            heading="Knowledge for a Healthier You"
          />
          <InsightsGrid articles={articles} />
        </Container>
      </section>
    </>
  );
}
