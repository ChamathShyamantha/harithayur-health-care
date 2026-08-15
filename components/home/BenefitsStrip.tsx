import { Leaf, Plant, User, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";

const benefits = [
  {
    icon: Leaf,
    title: "Holistic Healing",
    description: "Treating the root cause, not just the symptoms.",
  },
  {
    icon: User,
    title: "Personalized Care",
    description: "Every individual is unique, so is our approach.",
  },
  {
    icon: Plant,
    title: "Sustainable Wellness",
    description: "Balanced living for a healthier body, mind & soul.",
  },
  {
    icon: UsersThree,
    title: "Trusted by Thousands",
    description: "Join our community of health-conscious individuals.",
  },
];

export function BenefitsStrip() {
  return (
    <section className="bg-cream/60 py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-warm-white text-forest shadow-sm">
                <Icon size={22} />
              </span>
              <div>
                <h3 className="font-serif text-lg text-forest-deep">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
