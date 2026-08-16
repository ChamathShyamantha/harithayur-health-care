import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Product } from "@/types";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/motion/Reveal";

export function ProductDetail({ product }: { product: Product }) {
  return (
    <section className="py-12 md:py-20">
      <Container>
        <Link
          href="/products"
          className="focus-ring mb-10 inline-flex items-center gap-2 rounded-soft py-2 text-[0.8125rem] text-text-muted transition-colors duration-200 hover:text-botanical"
        >
          <ArrowLeft size={15} aria-hidden />
          All remedies
        </Link>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="relative aspect-4/5 w-full overflow-hidden shape-arch bg-sage-deep lg:sticky lg:top-24">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 92vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-12 lg:col-span-6">
            <Reveal className="flex flex-col items-start gap-5">
              <span className="eyebrow">{product.category}</span>
              <h1 className="display text-[clamp(2.25rem,4.5vw,3.5rem)] text-forest-deep">
                {product.name}
              </h1>
              <p className="max-w-[48ch] text-[0.9375rem] leading-relaxed text-text-muted md:text-base">
                {product.description}
              </p>
              <WhatsAppButton
                label="Consult & Get a Quote"
                message={`Hello Harithayur, I would like to consult about the ${product.name}.`}
                className="mt-2"
              />
            </Reveal>

            <Reveal className="flex flex-col gap-4">
              <h2 className="display text-2xl text-forest-deep">Key benefits</h2>
              <ul className="flex flex-col">
                {product.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="border-t border-sage-line py-3.5 text-sm text-text-dark"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="flex flex-col gap-4">
              <h2 className="display text-2xl text-forest-deep">Ingredients</h2>
              <p className="text-sm leading-relaxed text-text-muted">
                {product.ingredients.join(", ")}.
              </p>
            </Reveal>

            <Reveal className="flex flex-col gap-4">
              <h2 className="display text-2xl text-forest-deep">How to use</h2>
              <ol className="flex flex-col gap-4">
                {product.howToUse.map((step) => (
                  <li
                    key={step}
                    className="flex gap-4 border-t border-sage-line pt-3.5 text-sm text-text-dark"
                  >
                    {step}
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="rounded-soft border border-border-subtle bg-sage-deep p-7 md:p-9">
              <h2 className="display mb-3 text-2xl text-forest-deep">
                Ayurvedic philosophy
              </h2>
              <p className="text-sm leading-relaxed text-text-muted">
                {product.philosophy}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
