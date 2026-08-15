import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Product } from "@/types";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function ProductDetail({ product }: { product: Product }) {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-square w-full overflow-hidden rounded-[28px] bg-cream lg:sticky lg:top-28 lg:self-start">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="eyebrow inline-block w-fit rounded-full border border-border-subtle px-3 py-1 text-wood">
                {product.category}
              </span>
              <h1 className="font-serif text-4xl leading-tight text-forest-deep md:text-5xl">
                {product.name}
              </h1>
              <p className="text-base leading-relaxed text-text-muted md:text-lg">
                {product.description}
              </p>
              <WhatsAppButton
                label="Consult & Get a Quote"
                message={`Hello Harithayur, I would like to consult about the ${product.name}.`}
                className="w-fit"
              />
            </div>

            <div className="border-t border-border-subtle pt-8">
              <h2 className="font-serif text-2xl text-forest-deep mb-4">Key Benefits</h2>
              <ul className="flex flex-col gap-3">
                {product.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-text-dark">
                    <CheckCircle size={18} weight="fill" className="mt-0.5 shrink-0 text-botanical" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border-subtle pt-8">
              <h2 className="font-serif text-2xl text-forest-deep mb-4">Ingredients</h2>
              <ul className="flex flex-col gap-2">
                {product.ingredients.map((ingredient) => (
                  <li key={ingredient} className="flex items-start gap-3 text-sm text-text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-wood-warm" />
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border-subtle pt-8">
              <h2 className="font-serif text-2xl text-forest-deep mb-4">How to Use</h2>
              <ol className="flex flex-col gap-3">
                {product.howToUse.map((step, index) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-text-dark">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cream text-xs font-semibold text-forest">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl bg-cream/70 p-6 md:p-8">
              <h2 className="font-serif text-2xl text-forest-deep mb-3">
                Ayurvedic Philosophy
              </h2>
              <p className="text-sm leading-relaxed text-text-muted">{product.philosophy}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
