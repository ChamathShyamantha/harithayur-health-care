import Image from "next/image";
import Link from "next/link";
import { Leaf } from "@phosphor-icons/react/dist/ssr";
import { Product } from "@/types";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[22px] border border-border-subtle bg-warm-white shadow-[0_8px_24px_rgba(18,59,34,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(18,59,34,0.14)]">
      <Link
        href={`/products/${product.slug}`}
        className="relative m-3 aspect-square overflow-hidden rounded-2xl bg-cream"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 32vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-warm-white/90 text-forest shadow-sm">
          <Leaf size={16} weight="duotone" />
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-3 px-6 pb-6 pt-2">
        <span className="eyebrow inline-block w-fit rounded-full border border-border-subtle px-3 py-1 text-[0.65rem] text-wood">
          {product.category}
        </span>
        <h3 className="font-serif text-2xl text-forest-deep">
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="text-sm leading-relaxed text-text-muted">{product.description}</p>

        <ul className="flex flex-col gap-1.5 pt-1">
          {product.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2 text-sm text-text-dark">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-botanical" />
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4">
          <WhatsAppButton
            label="Consult & Get a Quote"
            message={`Hello Harithayur, I would like to consult about the ${product.name}.`}
            className="w-full transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </article>
  );
}
