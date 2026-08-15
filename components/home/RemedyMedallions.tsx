import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";
import { Product } from "@/types";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/**
 * Remedies as medallions. The product photographs are square with the bottle
 * centred, so a circular crop loses nothing and gains the page's motif. Each one
 * carries a turning rim, and they rise in sequence as the row scrolls in.
 */
export function RemedyMedallions({ products }: { products: Product[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <li
          key={product.slug}
          className="medallion group flex flex-col items-center text-center"
          style={{ "--medallion-from": `${index * 7}%` } as CSSProperties}
        >
          <Link
            href={`/products/${product.slug}`}
            tabIndex={-1}
            aria-hidden
            className="relative block aspect-square w-full max-w-[19rem]"
          >
            <svg
              viewBox="0 0 300 300"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden
            >
              <circle
                cx="150"
                cy="150"
                r="147"
                fill="none"
                stroke="var(--color-sage-line)"
                strokeWidth="1"
              />
              <circle
                className="ring-spin-slow"
                cx="150"
                cy="150"
                r="139"
                fill="none"
                stroke="var(--color-botanical)"
                strokeWidth="1"
                strokeDasharray="1.5 10"
                opacity="0.55"
              />
            </svg>

            <div className="absolute inset-[7%] overflow-hidden rounded-full bg-sage-deep">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 1024px) 26vw, (min-width: 640px) 44vw, 84vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
              />
            </div>
          </Link>

          <span className="eyebrow mt-8 rounded-pill bg-wood/10 px-3 py-1.5 text-wood">
            {product.category}
          </span>

          <h3 className="display mt-4 text-2xl text-forest-deep md:text-[1.75rem]">
            <Link
              href={`/products/${product.slug}`}
              className="focus-ring rounded-pill transition-colors duration-200 hover:text-botanical"
            >
              {product.name}
            </Link>
          </h3>

          <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-text-muted">
            {product.description}
          </p>

          <WhatsAppButton
            label="Consult & Get a Quote"
            message={`Hello Harithayur, I would like to consult about the ${product.name}.`}
            className="mt-6"
          />
        </li>
      ))}
    </ul>
  );
}
