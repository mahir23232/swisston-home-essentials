import { useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

const collections = ["All", ...Array.from(new Set(products.map((p) => p.collection)))];

const Shop = () => {
  const [collection, setCollection] = useState("All");

  const list = collection === "All"
    ? products
    : products.filter((p) => p.collection === collection);

  return (
    <>
      <section className="border-b border-border/60">
        <div className="container py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <span className="numeral text-3xl">N°II</span>
                <span className="rule-ember" />
                <span className="plaque-bone">The Plates</span>
              </div>
              <h1 className="font-display text-6xl md:text-8xl tracking-[-0.03em] leading-[0.92]">
                The complete<br />
                <span className="italic text-ember">index.</span>
              </h1>
            </div>
            <div className="md:col-span-5">
              <p className="font-serif italic text-pewter text-lg leading-relaxed">
                Every plate currently in production. Each is built once and held
                in the catalogue until it no longer deserves to be there. Order
                quietly via Amazon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 sticky top-12 z-20 bg-pitch/80 backdrop-blur-xl">
        <div className="container py-5 flex items-center justify-between gap-6 overflow-x-auto">
          <div className="flex items-center gap-8">
            {collections.map((c) => (
              <button
                key={c}
                onClick={() => setCollection(c)}
                className={`font-mono text-[0.65rem] uppercase tracking-[0.32em] whitespace-nowrap transition-colors ${
                  collection === c ? "text-ember" : "text-pewter hover:text-bone"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="plaque whitespace-nowrap hidden md:block">
            {String(list.length).padStart(2, "0")} plates
          </p>
        </div>
      </section>

      <section>
        <div className="container py-20 md:py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {list.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
