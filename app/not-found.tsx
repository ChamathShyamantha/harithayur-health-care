import { Leaf } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mx-auto flex max-w-lg flex-col items-center gap-5 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream text-forest">
            <Leaf size={28} />
          </span>
          <h1 className="font-serif text-4xl text-forest-deep md:text-5xl">
            Page Not Found
          </h1>
          <p className="text-base leading-relaxed text-text-muted">
            The page you are looking for may have been moved or no longer
            exists. Let&apos;s guide you back to your wellness journey.
          </p>
          <Button href="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
