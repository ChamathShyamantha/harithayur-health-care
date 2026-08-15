import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Article } from "@/types";

export function InsightCard({
  article,
  variant = "default",
}: {
  article: Article;
  variant?: "default" | "lead";
}) {
  const href = `/insights/${article.slug}`;
  const isLead = variant === "lead";

  return (
    <article className="group flex flex-col gap-6">
      {/* Presentational: the heading link below is the single tab stop for this card.
          Lead articles get the leaf cut, the rest get an arch, so a pair never reads
          as two matching tiles. */}
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden
        className={`relative overflow-hidden bg-sage-deep ${
          isLead ? "shape-leaf aspect-4/3" : "shape-arch aspect-4/5"
        }`}
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 46vw, 92vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
      </Link>

      <div className="flex flex-col items-start gap-4">
        <span className="eyebrow rounded-pill bg-sage-deep px-4 py-2">
          {article.category}
        </span>
        <h3
          className={`display text-forest-deep ${
            isLead ? "text-[clamp(1.75rem,3vw,2.5rem)]" : "text-2xl md:text-3xl"
          }`}
        >
          <Link
            href={href}
            className="focus-ring rounded-pill transition-colors duration-200 hover:text-botanical"
          >
            {article.title}
          </Link>
        </h3>
        <p className="max-w-[52ch] text-sm leading-relaxed text-text-muted">
          {article.excerpt}
        </p>
        {/* Presentational: duplicates the heading link, kept for visual affordance. */}
        <span
          aria-hidden
          className="inline-flex items-center gap-2 rounded-pill bg-sage-deep px-5 py-2.5 text-[0.8125rem] font-semibold text-forest-deep transition-all duration-200 group-hover:gap-3 group-hover:bg-forest group-hover:text-warm-white"
        >
          Read Article
          <ArrowRight size={15} />
        </span>
      </div>
    </article>
  );
}
