import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

const categories = ["All", "Kitchen Essentials", "Accessories"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price · Low to High" },
  { value: "price-desc", label: "Price · High to Low" },
];

const priceNum = (p: string) => parseFloat(p.replace(/[^0-9.]/g, ""));

const Shop = () => {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list = category === "All" ? products : products.filter((p) => p.category === category);
    if (sort === "price-asc") list = [...list].sort((a, b) => priceNum(a.price) - priceNum(b.price));
    if (sort === "price-desc") list = [...list].sort((a, b) => priceNum(b.price) - priceNum(a.price));
    return list;
  }, [category, sort]);

  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 marble-bg border-b border-border/60">
        <div className="container text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-5">The Collection</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight">
            Refined essentials for the modern home.
          </h1>
          <p className="mt-6 text-foreground/70 max-w-xl mx-auto leading-relaxed">
            Each piece is considered, made with enduring materials, and designed
            to be used and loved every day.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="flex flex-wrap items-center justify-between gap-6 mb-14 pb-6 border-b border-border/60">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`text-xs uppercase tracking-[0.22em] font-light pb-1 border-b transition-colors ${
                  category === c
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <label className="eyebrow">Sort</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent border-b border-foreground/30 focus:border-foreground py-1.5 text-sm font-light focus:outline-none cursor-pointer"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">
            No products in this category yet.
          </p>
        )}
      </section>
    </>
  );
};

export default Shop;
