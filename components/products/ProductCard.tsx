import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/**
 * Two shapes so a product row can be composed asymmetrically rather than as N
 * identical columns. `tall` leads a section with an arch-masked image; `wide`
 * fills the remainder with a leaf-cut thumbnail.
 */
export function ProductCard({
  product,
  variant = "tall",
}: {
  product: Product;
  variant?: "tall" | "wide";
}) {
  const href = `/products/${product.slug}`;

  if (variant === "wide") {
    return (
      <article className="group grid h-full grid-cols-1 items-center gap-6 rounded-plush border border-border-subtle bg-warm-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(18,59,34,0.12)] sm:grid-cols-[minmax(0,9rem)_1fr]">
        <Link
          href={href}
          tabIndex={-1}
          aria-hidden
          className="shape-leaf relative aspect-square overflow-hidden bg-cream"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 640px) 9rem, 92vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        </Link>

        <div className="flex flex-col items-start gap-3">
          <span className="eyebrow rounded-pill bg-wood/10 px-3 py-1.5 text-wood">
            {product.category}
          </span>
          <h3 className="display text-2xl text-forest-deep">
            <Link
              href={href}
              className="focus-ring rounded-pill transition-colors duration-200 hover:text-botanical"
            >
              {product.name}
            </Link>
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-text-muted">
            {product.description}
          </p>
          <WhatsAppButton
            label="Consult & Get a Quote"
            variant="text"
            message={`Hello Harithayur, I would like to consult about the ${product.name}.`}
            className="mt-1"
          />
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col rounded-plush border border-border-subtle bg-warm-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(18,59,34,0.14)]">
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden
        className="shape-arch relative aspect-4/5 overflow-hidden bg-cream"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 48vw, 92vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </Link>

      <div className="flex flex-1 flex-col items-start gap-4 px-4 pb-3 pt-7 md:px-6">
        <span className="eyebrow rounded-pill bg-wood/10 px-3 py-1.5 text-wood">
          {product.category}
        </span>
        <h3 className="display text-3xl text-forest-deep md:text-[2.25rem]">
          <Link
            href={href}
            className="focus-ring rounded-pill transition-colors duration-200 hover:text-botanical"
          >
            {product.name}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-text-muted">
          {product.description}
        </p>

        <ul className="flex flex-wrap gap-2 pt-1">
          {product.benefits.map((benefit) => (
            <li
              key={benefit}
              className="rounded-pill bg-cream px-3.5 py-2 text-[0.8125rem] text-forest"
            >
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          <WhatsAppButton
            label="Consult & Get a Quote"
            message={`Hello Harithayur, I would like to consult about the ${product.name}.`}
          />
        </div>
      </div>
    </article>
  );
}
