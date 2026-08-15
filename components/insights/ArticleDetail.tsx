import Image from "next/image";
import { Article } from "@/types";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function ArticleDetail({ article }: { article: Article }) {
  return (
    <article className="pb-20 md:pb-28">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
          <span className="eyebrow text-botanical">{article.category}</span>
          <h1 className="font-serif text-4xl leading-tight text-forest-deep md:text-5xl">
            {article.title}
          </h1>
          <p className="text-base leading-relaxed text-text-muted md:text-lg">
            {article.excerpt}
          </p>
        </div>

        <div className="relative mx-auto mt-10 aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-[28px] bg-cream">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 90vw"
            className="object-cover"
          />
        </div>

        <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-6">
          {article.content?.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-text-dark">
              {paragraph}
            </p>
          ))}

          <div className="mt-6 flex flex-col items-center gap-4 rounded-3xl bg-cream/70 p-8 text-center">
            <h2 className="font-serif text-2xl text-forest-deep">
              Consult Our Ayurvedic Experts
            </h2>
            <p className="max-w-[45ch] text-sm leading-relaxed text-text-muted">
              Have questions about what you just read? Speak with our
              Ayurvedic experts for personalized guidance.
            </p>
            <WhatsAppButton label="Chat on WhatsApp" />
          </div>
        </div>
      </Container>
    </article>
  );
}
