import productHero from "@/assets/product-2.png";
import productSpec from "@/assets/product-1.png";
import productPortrait from "@/assets/product-portrait.jpg";
import ritualMorning from "@/assets/ritual-morning.jpg";
import ritualPrep from "@/assets/ritual-prep.jpg";
import detailCream from "@/assets/detail-cream.jpg";
import dining from "@/assets/dining-scene.jpg";
import chickenShredder1 from "@/assets/chicken-shredder-1.jpeg";

/**
 * ─────────────────────────────────────────────────────────────────────
 *  SWISSTON · PRODUCT CATALOG
 * ─────────────────────────────────────────────────────────────────────
 *  Single source of truth. Editing this file updates the entire site.
 *
 *  TO ADD AN IMAGE
 *  1. Drop file in src/assets/
 *  2. Import at top of this file
 *  3. Add it to the product's `images: [...]` array
 *
 *  TO POINT TO AMAZON
 *  Replace `amazonUrl` with the full listing URL.
 * ─────────────────────────────────────────────────────────────────────
 */

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  collection: string;        // e.g. "The Morning Ritual"
  price: string;
  ritualLine: string;        // a single editorial sentence used on cards & PDP

  amazonUrl: string;
  amazonAsin?: string;

  images: string[];

  summary: string;
  description: string[];
  highlights: string[];

  features: string[];
  materials: string;
  dimensions: string;
  capacity: string;
  inBox: string[];

  manualRating?: number;
  manualReviewCount?: number;
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "professional-cream-whipper-500ml",
    name: "The Whipper, N°01",
    tagline: "A morning ritual, perfected.",
    category: "Kitchen Atelier",
    collection: "The Morning Ritual",
    price: "$49",
    ritualLine: "For the cup of coffee that becomes a small daily ceremony.",

    amazonUrl: "#",
    amazonAsin: "",

    images: [
      productPortrait,
      productHero,
      ritualMorning,
      productSpec,
      detailCream,
      dining,
    ],

    summary:
      "A precision-built cream whipper in matte ink, weighted to feel inevitable in the hand. Built for the slow, considered rituals that shape a beautiful morning.",

    description: [
      "Some objects belong in a drawer. Others earn a place on the counter. The Whipper, N°01 is built for the second category — a sculptural piece of kitchen equipment, weighted with intention, finished by hand.",
      "It transforms cold cream into restaurant-grade peaks in seconds. Espresso becomes a quiet ceremony. A weekend brunch becomes something worth photographing. The mechanism is reinforced, the seal is medical-grade, and the body is heavy-gauge stainless — engineered to perform identically on the thousandth use as on the first.",
      "Designed in our Texas studio, finished to a matte ink that grows more beautiful with age. Made for the kind of kitchen where small things are taken seriously.",
    ],

    highlights: [
      "Hand-finished matte ink stainless body",
      "Restaurant-grade peaks in under thirty seconds",
      "Three precision-machined decorating tips included",
      "Built for daily use over decades, not seasons",
    ],

    features: [
      "Heavy-gauge 304 stainless steel construction",
      "0.5L capacity — service for four to six",
      "Three precision-machined stainless tips",
      "Reinforced lever with non-slip ergonomic grip",
      "Medical-grade silicone head seal",
      "Dishwasher-safe components",
      "Compatible with standard N₂O chargers (sold separately)",
    ],
    materials: "Matte ink stainless steel · Food-grade silicone",
    dimensions: "31.5 cm (h) · 8.2 cm (Ø)",
    capacity: "0.5 L",
    inBox: [
      "Whipper body",
      "Charger holder",
      "Three stainless decorating tips",
      "Dust cap",
      "Cleaning brush",
      "Linen-bound use guide",
    ],

    manualRating: 4.8,
    manualReviewCount: 1284,
  },

  {
    id: "p2",
    slug: "artisan-cream-whipper-ivory",
    name: "The Whipper, N°02 — Ivory",
    tagline: "The same instrument, in a quieter voice.",
    category: "Kitchen Atelier",
    collection: "The Morning Ritual",
    price: "$54",
    ritualLine: "A softer counterpart for kitchens cast in bone, oak, and light.",

    amazonUrl: "#",
    amazonAsin: "",

    images: [
      productHero,
      ritualMorning,
      dining,
      detailCream,
    ],

    summary:
      "The flagship whipper, finished by hand in soft ivory. A quieter object for kitchens of stone, oak, and light.",

    description: [
      "An edition for the kitchen that prefers stillness. The Ivory whipper carries the same engineering as N°01 — the same heavy-gauge body, the same reinforced mechanism — finished in a hand-applied powder coating that softens its presence on the counter.",
      "It is a piece designed to disappear into a thoughtfully composed room, then to do its work without ceremony when it is asked.",
    ],

    highlights: [
      "Hand-applied ivory powder finish",
      "Identical engineering to the flagship N°01",
      "A quieter object for considered interiors",
    ],

    features: [
      "Hand-applied powder coating",
      "0.5L capacity",
      "Three stainless decorating tips",
      "Reinforced lever mechanism",
      "Hand-wash to preserve the finish",
    ],
    materials: "Powder-coated stainless steel · Food-grade silicone",
    dimensions: "31.5 cm (h) · 8.2 cm (Ø)",
    capacity: "0.5 L",
    inBox: [
      "Whipper body",
      "Charger holder",
      "Three stainless decorating tips",
      "Dust cap",
      "Cleaning brush",
    ],

    manualRating: 4.7,
    manualReviewCount: 642,
  },

  {
    id: "p3",
    slug: "signature-decorating-tips-set",
    name: "The Tips, Set of Three",
    tagline: "Three finishes. A lifetime of small flourishes.",
    category: "Atelier Accessories",
    collection: "The Morning Ritual",
    price: "$18",
    ritualLine: "The small details that turn cooking into a craft.",

    amazonUrl: "#",
    amazonAsin: "",

    images: [
      productSpec,
      productHero,
      detailCream,
    ],

    summary:
      "A trio of precision-machined stainless tips — straight, star, and tulip — for the kitchen that takes presentation seriously.",

    description: [
      "Each tip is machined from a single piece of 304 stainless, polished to a soft mirror finish, and engineered to fit any standard whipper. Small instruments for the part of cooking that is closer to drawing than to chemistry.",
      "Stored in a linen pouch that quietly belongs in a drawer of well-kept things.",
    ],

    highlights: [
      "Surgical-grade 304 stainless",
      "Three professional finishes",
      "Universal whipper compatibility",
    ],

    features: [
      "Three precision-machined tips",
      "Surgical-grade stainless",
      "Universal whipper fit",
      "Dishwasher safe",
      "Linen storage pouch included",
    ],
    materials: "304 stainless steel · Linen",
    dimensions: "Standard whipper compatible",
    capacity: "—",
    inBox: ["Straight tip", "Star tip", "Tulip tip", "Linen pouch"],

    manualRating: 4.9,
    manualReviewCount: 318,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
