import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ProductGrid } from "@/components/products/ProductGrid";
import { PreparationLadder } from "@/components/products/PreparationLadder";
import { NoCheckout } from "@/components/products/NoCheckout";
import { ConsultBand } from "@/components/home/ConsultBand";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: { absolute: "Harithayur Ayurvedic Remedies | Pure. Natural. Effective." },
  description:
    "Explore our curated collection of Ayurvedic remedies, thoughtfully crafted with natural ingredients. Consultation-led, never a checkout.",
};

/**
 * Catalogue first, then the two things a catalogue cannot say for itself: how the
 * remedies are made, and why there is no checkout. Layout families in order with no
 * repeats — header, card grid, sequence strip, offset editorial pair, closing panel.
 */
export default function ProductsPage() {
  return (
    <>
      <PageHeader
        heading="Our Remedies"
        subheading="Pure. Natural. Effective."
        description="Thoughtfully crafted formulations using the finest natural ingredients to support your wellness journey. Three at a time, so each one gets the attention it needs."
      />
      {/* PLACEHOLDER ART — see image-prompts/14-remedy-shelf.md.
          The file in place is a flat sage gradient, sized correctly so the layout
          is final; drop the real photograph in at the same path to replace it. */}
      <section className="pb-16 md:pb-20">
        <Container>
          <div className="shape-capsule relative aspect-16/9 w-full overflow-hidden bg-sage-deep md:aspect-21/9">
            <Image
              src="/assets/remedy-shelf.webp"
              alt="The three Harithayur remedies on a pale wooden apothecary shelf"
              fill
              priority
              sizes="100vw"
              className="img-settle-load object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-sage-line pb-20 md:pb-28">
        <Container>
          <ProductGrid products={products} />
        </Container>
      </section>

      <PreparationLadder />
      <NoCheckout />
      <ConsultBand />
    </>
  );
}
