import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Article } from "@/types";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/motion/Reveal";
import { RainyHero } from "@/components/insights/RainyHero";

export function ArticleDetail({ article }: { article: Article }) {
  return (
    <article className="pb-20 md:pb-28">
      <Container>
        <Link
          href="/insights"
          className="focus-ring mb-10 inline-flex items-center gap-2 rounded-soft py-2 text-[0.8125rem] text-text-muted transition-colors duration-200 hover:text-botanical"
        >
          <ArrowLeft size={15} aria-hidden />
          All insights
        </Link>

        <Reveal className="flex flex-col items-start gap-5">
          <span className="eyebrow">{article.category}</span>
          {/* The measure lives on the h1, not the wrapper. `ch` resolves against the
              element's own font-size, so 20ch on a 16px wrapper was capping the
              title at roughly 190px wide. */}
          <h1 className="display max-w-[20ch] text-[clamp(2.25rem,5vw,4rem)] text-forest-deep">
            {article.title}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12">
            {/* The monsoon piece gets rain on its hero, because that is what the
                article is about. Every other article gets the plain image. */}
            {article.slug === "hela-wedakama-monsoon" ? (
              <RainyHero src={article.image} />
            ) : (
              <div className="relative aspect-16/9 w-full overflow-hidden shape-arch bg-sage-deep">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  sizes="100vw"
                  className="img-settle object-cover"
                />
              </div>
            )}
          </div>
        </Reveal>

        {/* Measure capped for reading; the intro sits larger to open the piece. */}
        <div className="mt-14 max-w-[68ch]">
          <p className="display mb-10 text-[clamp(1.25rem,2.2vw,1.75rem)] leading-snug text-forest-deep">
            {article.excerpt}
          </p>

          <div className="flex flex-col gap-6">
            {article.content?.map((paragraph, index) => (
              <p
                key={index}
                className="text-[1.0625rem] leading-[1.75] text-text-dark"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start gap-4 border-t border-sage-line pt-10">
            <h2 className="display text-2xl text-forest-deep">
              Questions about what you just read?
            </h2>
            <p className="max-w-[48ch] text-sm leading-relaxed text-text-muted">
              Our practitioners will read your situation properly and tell you
              what actually applies to you.
            </p>
            <WhatsAppButton label="Consult on WhatsApp" />
          </div>
        </div>
      </Container>
    </article>
  );
}
