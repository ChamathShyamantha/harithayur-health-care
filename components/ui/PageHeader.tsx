import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageHeader({
  eyebrow,
  heading,
  subheading,
  description,
  children,
}: {
  eyebrow?: string;
  heading: ReactNode;
  subheading?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-20">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          {eyebrow ? (
            <span className="eyebrow text-botanical">{eyebrow}</span>
          ) : null}
          <h1 className="font-serif text-5xl leading-[1.1] text-forest-deep md:text-6xl">
            {heading}
          </h1>
          {subheading ? (
            <p className="font-serif text-2xl italic text-botanical md:text-3xl">
              {subheading}
            </p>
          ) : null}
          {description ? (
            <p className="max-w-[55ch] text-base leading-relaxed text-text-muted md:text-lg">
              {description}
            </p>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
