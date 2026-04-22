import productHero from "@/assets/product-2.png";
import productSpec from "@/assets/product-1.png";
import lifestyle1 from "@/assets/lifestyle-1.jpg";

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  price: string;
  amazonUrl: string; // Replace with your real Amazon listing URLs
  images: string[];
  summary: string;
  features: string[];
  materials: string;
  dimensions: string;
  capacity: string;
  inBox: string[];
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "professional-cream-whipper-500ml",
    name: "Professional Cream Whipper",
    tagline: "Crafted for the modern kitchen.",
    category: "Kitchen Essentials",
    price: "$49.00",
    amazonUrl: "#", // ← replace with your Amazon listing URL
    images: [productHero, lifestyle1, productSpec],
    summary:
      "A precision-engineered whipper that turns fresh cream into silken peaks in seconds. Designed in matte black stainless steel, built for everyday excellence.",
    features: [
      "Heavy-gauge stainless steel construction",
      "0.5L capacity — ideal for home and entertaining",
      "Three professional stainless tips included",
      "Non-slip grip with ergonomic lever",
      "Dishwasher-safe components",
      "Compatible with standard N₂O chargers (sold separately)",
    ],
    materials: "Brushed stainless steel · Food-grade silicone seal",
    dimensions: "31.5 cm (H) × 8.2 cm (Ø)",
    capacity: "0.5 Litre",
    inBox: [
      "Cream Whipper Body",
      "Charger Holder",
      "3 × Stainless Steel Decorating Tips",
      "Dust Cap",
      "Cleaning Brush",
      "Instruction Booklet",
    ],
  },
  {
    id: "p2",
    slug: "artisan-cream-whipper-ivory",
    name: "Artisan Cream Whipper — Ivory",
    tagline: "Quiet luxury for the everyday host.",
    category: "Kitchen Essentials",
    price: "$54.00",
    amazonUrl: "#",
    images: [productHero, lifestyle1],
    summary:
      "A refined edition of our signature whipper, finished in soft ivory. Designed to feel as beautiful on the counter as it does in the hand.",
    features: [
      "Premium powder-coated finish",
      "0.5L professional capacity",
      "Three stainless decorating tips",
      "Reinforced lever mechanism",
      "Hand-wash recommended for finish",
    ],
    materials: "Powder-coated stainless steel · Food-grade silicone",
    dimensions: "31.5 cm (H) × 8.2 cm (Ø)",
    capacity: "0.5 Litre",
    inBox: [
      "Cream Whipper Body",
      "Charger Holder",
      "3 × Stainless Steel Decorating Tips",
      "Dust Cap",
      "Cleaning Brush",
    ],
  },
  {
    id: "p3",
    slug: "signature-decorating-tips-set",
    name: "Signature Decorating Tips Set",
    tagline: "Three finishes. Endless possibilities.",
    category: "Accessories",
    price: "$18.00",
    amazonUrl: "#",
    images: [productSpec, productHero],
    summary:
      "A trio of professionally machined stainless steel tips — straight, star, and tulip — designed to deliver flawless finishes every time.",
    features: [
      "Three precision-machined tips",
      "Surgical-grade stainless steel",
      "Universal fit for standard whippers",
      "Dishwasher safe",
    ],
    materials: "304 Stainless Steel",
    dimensions: "Standard whipper compatible",
    capacity: "—",
    inBox: ["Straight Tip", "Star Tip", "Tulip Tip", "Storage Pouch"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
