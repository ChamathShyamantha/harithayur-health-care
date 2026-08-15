import { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "ashwagandha-elixir",
    name: "Harithayur Ashwagandha Elixir",
    category: "Adaptogen",
    image: "/assets/product-ashwagandha.webp",
    description:
      "A potent, natural adaptogen formulated to relieve daily stress, enhance sleep quality, and restore natural vitality.",
    benefits: [
      "Reduces Stress & Anxiety",
      "Improves Sleep Quality",
      "Boosts Energy & Vitality",
    ],
    ingredients: [
      "Organic Ashwagandha Root Extract",
      "Cold-Pressed Sesame Oil Base",
      "Wild Honey",
      "Trace Himalayan Botanicals",
    ],
    howToUse: [
      "Take one dropper (1ml) with warm water or milk.",
      "Best consumed in the evening, before rest.",
      "Consult our Ayurvedic experts for a personalized dosage.",
    ],
    philosophy:
      "Ashwagandha has been used in Ayurveda for centuries as a rasayana, a rejuvenating herb believed to restore balance between mind and body. Our elixir honors that tradition with ethically sourced root extract and traditional cold-extraction methods.",
  },
  {
    slug: "neem-turmeric-balm",
    name: "Neem & Turmeric Cleansing Balm",
    category: "Skin Care",
    image: "/assets/product-neem-turmeric.webp",
    description:
      "Pure skin purification. This traditional blend clears blemishes and promotes a radiant, healthy complexion.",
    benefits: [
      "Purifies & Detoxifies Skin",
      "Fights Acne & Blemishes",
      "Promotes Natural Glow",
    ],
    ingredients: [
      "Cold-Pressed Neem Leaf Extract",
      "Wild Turmeric Root",
      "Raw Shea Butter",
      "Sandalwood Essence",
    ],
    howToUse: [
      "Apply a small amount to clean, damp skin.",
      "Massage gently in circular motions for two minutes.",
      "Rinse with lukewarm water, morning and evening.",
    ],
    philosophy:
      "Neem and turmeric are cornerstones of traditional skin purification in Ayurvedic practice, prized for balancing the skin's natural rhythm. This balm is hand-blended using time-honored ratios passed down through generations of Hela Wedakama healers.",
  },
  {
    slug: "brahmi-mind-focus-drops",
    name: "Brahmi Mind-Focus Drops",
    category: "Mind & Focus",
    image: "/assets/product-brahmi.webp",
    description:
      "Designed to enhance mental clarity, focus, and memory retention using ethically sourced botanical extracts.",
    benefits: [
      "Enhances Focus & Clarity",
      "Supports Memory Retention",
      "Supports Cognitive Wellness",
    ],
    ingredients: [
      "Brahmi (Bacopa Monnieri) Leaf Extract",
      "Gotu Kola",
      "Cold-Pressed Coconut Oil Base",
      "Wild Basil Trace Extract",
    ],
    howToUse: [
      "Take 10-15 drops under the tongue, once daily.",
      "Best taken in the morning for sustained focus.",
      "Consult our Ayurvedic experts for a personalized routine.",
    ],
    philosophy:
      "Brahmi has long been revered in Ayurvedic tradition as a medhya rasayana, an herb for the mind. Our drops are formulated to honor that legacy, supporting clarity and calm for the demands of modern life.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
