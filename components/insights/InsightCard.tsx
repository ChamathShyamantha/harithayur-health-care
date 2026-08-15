import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Article } from "@/types";

export function InsightCard({ article }: { article: Article }) {
  return (
    <article className="group flex flex-col gap-5">
      <Link
        href={`/insights/${article.slug}`}
        className="relative aspect-[16/11] overflow-hidden rounded-[22px] bg-cream"
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />
      </Link>

      <div className="flex flex-col gap-3">
        <span className="eyebrow text-botanical">{article.category}</span>
        <h3 className="font-serif text-2xl leading-snug text-forest-deep md:text-[1.75rem]">
          <Link href={`/insights/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="text-sm leading-relaxed text-text-muted">{article.excerpt}</p>
        <Link
          href={`/insights/${article.slug}`}
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-forest-deep transition-all duration-200 hover:gap-3 hover:text-forest"
        >
          Read Article
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
