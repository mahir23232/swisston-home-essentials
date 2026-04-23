import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

const collections = ["All", "The Morning Ritual", "Atelier Accessories"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price · Low to High" },
  { value: "price-desc", label: "Price · High to Low" },
];

const priceNum = (p: string) => parseFloat(p.replace(/[^0-9.]/g, ""));

const Shop = () => {
  const [collection, setCollection] = useState("All");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list =
      collection === "All"
        ? products
        : products.filter((p) => p.collection === collection || p.category === collection);
    if (sort === "price-asc") list = [...list].sort((a, b) => priceNum(a.price) - priceNum(b.price));
    if (sort === "price-desc") list = [...list].sort((a, b) => priceNum(b.price) - priceNum(a.price));
    return list;
  }, [collection, sort]);

  return (
    <>
      {/* HERO */}
      <section className="surface-paper relative grain pt-40 pb-20 md:pt-52 md:pb-28 border-b border-border/60">
        <div className="container grid md:grid-cols-12 gap-y-10 md:gap-x-12 items-end">
          <div className="md:col-span-8">
            <p className="eyebrow-brass mb-6">The Atelier · Volume I</p>
            <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] tracking-[-0.025em]">
              Pieces composed for <span className="display-italic">a kitchen with intention.</span>
            </h1>
          </div>
          <div className="md:col-span-4">
            <p className="text-foreground/70 leading-relaxed max-w-sm md:ml-auto">
              A small, considered collection — engineered once, finished by hand, made for the
              kind of home where things stay out on the counter.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="container pt-16">
        <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-border/60">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {collections.map((c) => (
              <button
                key={c}
                onClick={() => setCollection(c)}
                className={`font-mono text-[0.7rem] uppercase tracking-[0.28em] font-light pb-1 border-b transition-colors ${
                  collection === c
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <label className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">Sort</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent border-b border-foreground/30 focus:border-foreground py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.22em] focus:outline-none cursor-pointer"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="container py-16 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">
            No pieces in this collection yet.
          </p>
        )}
      </section>
    </>
  );
};

export default Shop;
