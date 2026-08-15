import { Article } from "@/types";

export const articles: Article[] = [
  {
    slug: "understanding-your-dosha",
    title: "Understanding Your Dosha: A Guide to Vata, Pitta, and Kapha.",
    excerpt:
      "Discover how your unique dosha can influence health, energy, digestion and overall balance.",
    image: "/assets/blog-dosha.webp",
    category: "Ayurvedic Living",
    content: [
      "In Ayurveda, every individual is shaped by a unique combination of three vital energies, or doshas: Vata, Pitta, and Kapha. Understanding your dominant dosha is the first step toward personalized wellness.",
      "Vata governs movement and is associated with creativity and quick thinking, but can lead to anxiety and irregular digestion when imbalanced. Pitta governs transformation, fueling metabolism and sharp intellect, but can manifest as irritability or inflammation in excess. Kapha governs structure and stability, offering strength and calm, but can lead to sluggishness when out of balance.",
      "By recognizing your dosha, you can make intentional choices in diet, daily routine, and lifestyle that restore equilibrium, the foundation of authentic Ayurvedic wellness.",
    ],
  },
  {
    slug: "hela-wedakama-monsoon",
    title: "The Healing Power of Traditional Hela Wedakama in the Monsoon Season.",
    excerpt:
      "Explore time-honored Sri Lankan healing practices that support immunity, digestion and overall wellness during the rainy season.",
    image: "/assets/blog-hela-wedakama.webp",
    category: "Herbal Wisdom",
    content: [
      "Hela Wedakama, Sri Lanka's indigenous system of traditional medicine, offers time-tested wisdom for navigating the monsoon season, when the body is most vulnerable to imbalance.",
      "Traditional healers turn to warming herbs, root decoctions, and mindful dietary adjustments to strengthen digestion and immunity as humidity rises. Practices such as herbal steam therapy and warm oil massage are used to maintain circulation and ease seasonal fatigue.",
      "These centuries-old remedies, rooted in Sri Lankan heritage, remain a trusted guide for supporting the body naturally through seasonal transitions.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
