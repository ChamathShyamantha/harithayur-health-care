import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Blob } from "@/components/ui/Blob";
import { Reveal } from "@/components/motion/Reveal";

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
    <section className="relative isolate overflow-hidden pt-14 pb-16 md:pt-20 md:pb-24">
      <Blob
        variant="b"
        className="-left-40 -top-32 h-[32rem] w-[32rem] bg-warm-white"
      />

      <Container>
        <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-12">
          <Reveal className="flex flex-col items-start gap-5 lg:col-span-7">
            {eyebrow ? (
              <span className="eyebrow rounded-pill bg-sage-deep px-4 py-2">
                {eyebrow}
              </span>
            ) : null}
            <h1 className="display text-[clamp(2.5rem,5vw,4.25rem)] text-forest-deep">
              {heading}
            </h1>
            {subheading ? (
              <p className="display pb-1 text-[clamp(1.5rem,2.4vw,2rem)] italic text-botanical">
                {subheading}
              </p>
            ) : null}
          </Reveal>

          {description || children ? (
            <Reveal
              delay={0.12}
              className="flex flex-col items-start gap-6 lg:col-span-5 lg:self-end lg:pb-2"
            >
              {description ? (
                <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-text-muted">
                  {description}
                </p>
              ) : null}
              {children}
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
