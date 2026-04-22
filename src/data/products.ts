import productHero from "@/assets/product-2.png";
import productSpec from "@/assets/product-1.png";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";
import detailCream from "@/assets/detail-cream.jpg";

/**
 * ─────────────────────────────────────────────────────────────────────
 *  SWISSTON PRODUCT CATALOG
 * ─────────────────────────────────────────────────────────────────────
 *  This is the single source of truth for every product on the site.
 *  Edit this file to update content — no other files need to change.
 *
 *  HOW TO EDIT:
 *  • images[]           — add up to 6 images (first one = main card image)
 *  • amazonUrl          — paste your Amazon listing URL
 *  • amazonAsin         — optional, used later for live rating sync
 *  • description        — long-form product story (multi-paragraph)
 *  • highlights[]       — 3–5 short "what makes it different" points
 *  • features[]         — bullet specs shown on product page
 *  • All other fields are self-explanatory
 *
 *  TO ADD A NEW IMAGE:
 *  1. Place the file in src/assets/
 *  2. Import it at the top of this file (see imports above)
 *  3. Add it to the product's `images: [...]` array
 * ─────────────────────────────────────────────────────────────────────
 */

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  price: string;

  // Amazon
  amazonUrl: string;          // ← paste full Amazon listing URL
  amazonAsin?: string;        // ← optional, e.g. "B0CXXXXXXX" (for live rating sync later)

  // Media — up to 6 images recommended
  images: string[];

  // Copy
  summary: string;            // short intro paragraph
  description: string[];      // long-form, each entry = one paragraph
  highlights: string[];       // 3–5 short headline benefits

  // Specs
  features: string[];
  materials: string;
  dimensions: string;
  capacity: string;
  inBox: string[];

  // Optional manually-set rating (used until live sync is wired)
  manualRating?: number;      // e.g. 4.7
  manualReviewCount?: number; // e.g. 1284
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "professional-cream-whipper-500ml",
    name: "Professional Cream Whipper",
    tagline: "Crafted for the modern kitchen.",
    category: "Kitchen Essentials",
    price: "$49.00",

    amazonUrl: "#", // ← REPLACE with your Amazon listing URL
    amazonAsin: "", // ← Optional: paste the ASIN (10-char product ID)

    images: [
      productHero,
      lifestyle1,
      productSpec,
      detailCream,
      lifestyle2,
      // Add more images here — up to 6 recommended
    ],

    summary:
      "A precision-engineered whipper that turns fresh cream into silken peaks in seconds. Designed in matte black stainless steel, built for everyday excellence.",

    description: [
      "The Swisston Professional Cream Whipper is built for those who treat the kitchen as a craft. Each unit is precision-machined from heavy-gauge stainless steel and finished by hand, designed to feel as considered in your grip as it looks on your counter.",
      "From morning coffee to weekend entertaining, it transforms fresh cream, mousses, and infusions into restaurant-quality results in seconds — with a clean, dependable mechanism that performs the same way on the thousandth use as it did on the first.",
      "Replace the description in src/data/products.ts with your own copy whenever you're ready. Each paragraph here renders independently for a clean editorial layout.",
    ],

    highlights: [
      "Heavy-gauge stainless steel construction",
      "Restaurant-quality results in under 30 seconds",
      "Three professional decorating tips included",
      "Engineered for years of daily use",
    ],

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

    manualRating: 4.8,
    manualReviewCount: 1284,
  },

  {
    id: "p2",
    slug: "artisan-cream-whipper-ivory",
    name: "Artisan Cream Whipper — Ivory",
    tagline: "Quiet luxury for the everyday host.",
    category: "Kitchen Essentials",
    price: "$54.00",

    amazonUrl: "#",
    amazonAsin: "",

    images: [
      productHero,
      lifestyle1,
      lifestyle2,
      detailCream,
    ],

    summary:
      "A refined edition of our signature whipper, finished in soft ivory. Designed to feel as beautiful on the counter as it does in the hand.",

    description: [
      "Replace this description with your own product story. Each item in the array becomes one paragraph on the product page.",
      "The Ivory edition is finished in a hand-applied powder coating that gives the whipper a soft, matte texture — beautiful enough to live on your counter, refined enough to feel like a piece of considered design.",
    ],

    highlights: [
      "Hand-finished powder coating",
      "Soft ivory tone for a calmer kitchen palette",
      "Same engineering as our flagship whipper",
    ],

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

    manualRating: 4.7,
    manualReviewCount: 642,
  },

  {
    id: "p3",
    slug: "signature-decorating-tips-set",
    name: "Signature Decorating Tips Set",
    tagline: "Three finishes. Endless possibilities.",
    category: "Accessories",
    price: "$18.00",

    amazonUrl: "#",
    amazonAsin: "",

    images: [
      productSpec,
      productHero,
      detailCream,
    ],

    summary:
      "A trio of professionally machined stainless steel tips — straight, star, and tulip — designed to deliver flawless finishes every time.",

    description: [
      "Replace this description with your own copy. Use multiple paragraphs to tell the full story — what the product does, who it's for, and why it's worth owning.",
      "Each tip is precision-machined from a single piece of 304-grade stainless steel, polished to a mirror finish, and engineered to fit any standard whipper.",
    ],

    highlights: [
      "Surgical-grade 304 stainless steel",
      "Three professional finishes in one set",
      "Universal whipper compatibility",
    ],

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

    manualRating: 4.9,
    manualReviewCount: 318,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
