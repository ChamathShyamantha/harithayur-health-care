import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-28 md:py-40">
      <Container>
        <div className="flex max-w-xl flex-col items-start gap-6">
          <p className="display text-[clamp(4rem,12vw,9rem)] leading-none text-forest/15">
            404
          </p>
          <h1 className="display text-[clamp(2rem,4vw,3rem)] text-forest-deep">
            This page has been moved
          </h1>
          <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-text-muted">
            The page you are looking for no longer exists at this address. The
            remedies and the writing are both still here.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="/" variant="primary">
              Back to Home
            </Button>
            <Button href="/products" variant="secondary">
              Explore Remedies
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
