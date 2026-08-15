import { Article } from "@/types";
import { InsightCard } from "@/components/insights/InsightCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Offset editorial pair. The lead article sits larger and higher; the rest drop down
 * a step, so the section never reads as two equal tiles side by side.
 */
export function InsightsGrid({ articles }: { articles: Article[] }) {
  if (articles.length === 0) {
    return (
      <div className="flex flex-col items-start gap-5 rounded-plush border border-border-subtle bg-sage-deep px-8 py-16">
        <h3 className="display text-3xl text-forest-deep">New writing is on the way</h3>
        <p className="max-w-[46ch] text-sm leading-relaxed text-text-muted">
          Our practitioners are preparing the next set of Ayurvedic insights. In
          the meantime, explore the remedies behind the practice.
        </p>
        <Button href="/products" variant="primary">
          Explore Remedies
        </Button>
      </div>
    );
  }

  const [lead, ...rest] = articles;

  return (
    <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
      <Reveal className="lg:col-span-7">
        <InsightCard article={lead} variant="lead" />
      </Reveal>

      {rest.length > 0 ? (
        <div className="flex flex-col gap-14 lg:col-span-5 lg:pt-24">
          {rest.map((article, index) => (
            <Reveal key={article.slug} delay={0.1 + index * 0.08}>
              <InsightCard article={article} />
            </Reveal>
          ))}
        </div>
      ) : null}
    </div>
  );
}
