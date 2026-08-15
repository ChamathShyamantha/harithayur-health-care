import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Enter } from "@/components/motion/Enter";

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
      <Container>
        <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-12">
          {/* Page headers sit above the fold, so they use the load entrance rather
              than a scroll reveal that would never fire. */}
          <Enter className="flex flex-col items-start gap-5 lg:col-span-7">
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
          </Enter>

          {description || children ? (
            <Enter
              delay={160}
              className="flex flex-col items-start gap-6 lg:col-span-5 lg:self-end lg:pb-2"
            >
              {description ? (
                <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-text-muted">
                  {description}
                </p>
              ) : null}
              {children}
            </Enter>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
