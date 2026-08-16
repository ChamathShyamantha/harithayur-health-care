import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { TrustBand } from "@/components/home/TrustBand";
import { BenefitsStrip } from "@/components/home/BenefitsStrip";
import { HeritageBand } from "@/components/home/HeritageBand";
import { BeautyBand } from "@/components/home/BeautyBand";
import { ConsultBand } from "@/components/home/ConsultBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RemedyMedallions } from "@/components/home/RemedyMedallions";
import { DoshaWheel } from "@/components/home/DoshaWheel";
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
 * bento, turning wheel, medallion row, herbarium sheets, full-bleed media, offset
 * editorial pair, accent closing band.
 *
 * The beauty band sits with the remedies rather than after the heritage story,
 * because hair and skin is a second product range and not a second narrative.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBand />
      <BenefitsStrip />

      <DoshaWheel />

      <section className="border-b border-sage-line py-20 md:py-28">
        <Container className="flex flex-col gap-14 md:gap-20">
          <SectionHeading
            eyebrow="Our Remedies"
            heading="Curated for your wellness journey"
            description="Thoughtfully crafted formulations using the finest natural ingredients, each one made to be matched to a person rather than sold off a shelf."
          />
          <RemedyMedallions products={products} />
        </Container>
      </section>

      <BeautyBand />

      <HeritageBand />

      <section className="border-b border-sage-line py-20 md:py-28">
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
