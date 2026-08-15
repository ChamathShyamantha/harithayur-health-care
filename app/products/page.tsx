import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ProductGrid } from "@/components/products/ProductGrid";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: { absolute: "Harithayur Ayurvedic Remedies | Pure. Natural. Effective." },
  description:
    "Explore our curated collection of Ayurvedic remedies, thoughtfully crafted with natural ingredients. Consultation-led, never a checkout.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        heading="Our Remedies"
        subheading="Pure. Natural. Effective."
        description="Thoughtfully crafted formulations using the finest natural ingredients to support your wellness journey."
      />
      <section className="pb-20 md:pb-28">
        <Container>
          <ProductGrid products={products} />
        </Container>
      </section>
    </>
  );
}
