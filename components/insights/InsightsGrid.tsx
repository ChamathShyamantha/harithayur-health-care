import { Article } from "@/types";
import { InsightCard } from "@/components/insights/InsightCard";

export function InsightsGrid({ articles }: { articles: Article[] }) {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      {articles.map((article) => (
        <InsightCard key={article.slug} article={article} />
      ))}
    </div>
  );
}
