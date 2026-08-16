import { Product } from "@/types";
import { ProductCard } from "@/components/products/ProductCard";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Asymmetric by construction: the first remedy leads at full height, the rest stack
 * beside it. Cell count always matches item count, so the grid never shows a gap.
 */
export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-start gap-5 rounded-plush border border-border-subtle bg-sage-deep px-6 py-14 sm:px-8 sm:py-16">
        <h3 className="display text-3xl text-forest-deep">No remedies to show yet</h3>
        <p className="max-w-[46ch] text-sm leading-relaxed text-text-muted">
          Our formulations are being prepared. Message our Ayurvedic experts and
          they will guide you to what suits you.
        </p>
        <WhatsAppButton label="Consult on WhatsApp" />
      </div>
    );
  }

  const [lead, ...rest] = products;

  return (
    <div className="grid gap-4 lg:grid-cols-12">
      <Reveal className="lg:col-span-7">
        <ProductCard product={lead} variant="tall" />
      </Reveal>

      {rest.length > 0 ? (
        // Rows stretch so the stack matches the lead card's height rather than
        // leaving a void beside it.
        <div
          className="grid gap-4 lg:col-span-5"
          style={{ gridTemplateRows: `repeat(${rest.length}, minmax(0, 1fr))` }}
        >
          {rest.map((product, index) => (
            <Reveal key={product.slug} delay={0.08 + index * 0.08} className="h-full">
              <ProductCard product={product} variant="wide" />
            </Reveal>
          ))}
        </div>
      ) : null}
    </div>
  );
}
