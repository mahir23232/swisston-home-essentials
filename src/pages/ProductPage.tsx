import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { getProduct, products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

const ProductPage = () => {
  const { slug } = useParams();
  const product = getProduct(slug || "");
  const [active, setActive] = useState(0);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setActive(0), [slug]);

  if (!product) {
    return (
      <div className="container py-40 text-center">
        <p className="plaque-ember mb-4">404</p>
        <h1 className="font-display text-5xl">Plate not found.</h1>
        <Link to="/shop" className="btn-link mt-10 inline-flex">Back to the index →</Link>
      </div>
    );
  }

  const idx = products.findIndex((p) => p.id === product.id);
  const no = String(idx + 1).padStart(2, "0");
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <section className="border-b border-border/60">
        <div className="container py-10 flex items-center justify-between">
          <Link to="/shop" className="plaque hover:text-ember transition-colors">
            ← The Index
          </Link>
          <div className="flex items-center gap-6">
            <span className="numeral text-3xl">N°{no}</span>
            <span className="plaque-ember hidden md:inline">{product.collection}</span>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-7 border-r border-border/60">
            <div className="relative aspect-[4/5] bg-graphite overflow-hidden">
              <img
                src={product.images[active]}
                alt={`${product.name} — view ${active + 1}`}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setActive((a) => (a - 1 + product.images.length) % product.images.length)}
                    aria-label="Previous"
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-pitch/60 hover:bg-pitch text-bone backdrop-blur-sm transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setActive((a) => (a + 1) % product.images.length)}
                    aria-label="Next"
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-pitch/60 hover:bg-pitch text-bone backdrop-blur-sm transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <div className="absolute bottom-5 left-5">
                    <span className="font-mono text-[0.65rem] tracking-[0.2em] text-bone bg-pitch/60 backdrop-blur-sm px-3 py-1.5">
                      {String(active + 1).padStart(2, "0")} / {String(product.images.length).padStart(2, "0")}
                    </span>
                  </div>
                </>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-6 border-t border-border/60">
                {product.images.slice(0, 6).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`relative aspect-square border-r border-border/60 last:border-r-0 overflow-hidden transition-opacity ${
                      active === i ? "opacity-100" : "opacity-40 hover:opacity-80"
                    }`}
                  >
                    <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" />
                    {active === i && <div className="absolute inset-0 border-2 border-ember" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <aside className="lg:col-span-5 p-10 md:p-16 flex flex-col">
            <p className="plaque-ember mb-6">{product.collection}</p>
            <h1 className="font-display text-5xl md:text-6xl tracking-[-0.025em] leading-[0.95]">
              {product.name}
            </h1>
            <p className="font-serif italic text-pewter text-xl mt-6 leading-relaxed">
              {product.tagline}
            </p>

            {product.manualRating && (
              <div className="flex items-center gap-3 mt-8 pt-8 border-t border-border/60">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`h-3.5 w-3.5 ${
                        s <= Math.round(product.manualRating!)
                          ? "fill-ember text-ember"
                          : "text-pewter"
                      }`}
                    />
                  ))}
                </div>
                <span className="plaque">
                  {product.manualRating} · {product.manualReviewCount} verified
                </span>
              </div>
            )}

            <div className="mt-10 pt-8 border-t border-border/60">
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-display text-4xl text-bone">{product.price}</span>
                <span className="plaque">Vol. II edition</span>
              </div>
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-bone w-full"
              >
                Order via Amazon →
              </a>
              <p className="plaque mt-4 text-center">
                Fulfilled by Amazon Prime · 30-day returns
              </p>
            </div>

            {product.highlights?.length > 0 && (
              <ul className="mt-10 pt-8 border-t border-border/60 space-y-3">
                {product.highlights.map((h) => (
                  <li key={h} className="flex gap-4 font-serif text-bone/85 leading-relaxed">
                    <span className="text-ember mt-1.5">—</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </aside>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="container py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <span className="numeral text-5xl">N°I</span>
              <p className="plaque-ember mt-4">The Story</p>
            </div>
            <div className="md:col-span-8 md:col-start-5 space-y-8">
              {product.description.map((p, i) => (
                <p
                  key={i}
                  className={`font-serif text-bone/90 text-lg md:text-xl leading-[1.7] ${
                    i === 0 ? "dropcap" : ""
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 surface-pitch">
        <div className="container py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <span className="numeral text-5xl">N°II</span>
              <p className="plaque-ember mt-4">Specification</p>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <dl className="divide-y divide-border/60">
                {[
                  ["Materials", product.materials],
                  ["Dimensions", product.dimensions],
                  ["Capacity", product.capacity],
                  ["Origin", "Designed in Texas, USA"],
                  ["Warranty", "10-year mechanism warranty"],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-3 gap-6 py-5">
                    <dt className="plaque">{k}</dt>
                    <dd className="col-span-2 font-serif text-bone">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-12 pt-10 border-t border-border/60">
                <p className="plaque-ember mb-5">Features</p>
                <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
                  {product.features.map((f) => (
                    <li key={f} className="font-serif text-bone/85 leading-relaxed flex gap-3">
                      <span className="text-ember">·</span> <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 pt-10 border-t border-border/60">
                <p className="plaque-ember mb-5">In the box</p>
                <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-2">
                  {product.inBox.map((b, i) => (
                    <li key={b} className="font-serif text-bone/85 flex gap-3">
                      <span className="font-mono text-pewter text-xs pt-1.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-24 md:py-32">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="numeral text-5xl">N°III</span>
              <p className="plaque-ember mt-4">Adjacent in the Index</p>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight mt-6">
                Other plates from the house.
              </h2>
            </div>
            <Link to="/shop" className="btn-link hidden md:inline-flex">
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-20">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div
        className={`fixed bottom-0 inset-x-0 z-30 lg:pl-16 transition-transform duration-500 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-pitch/95 backdrop-blur-xl border-t border-border/80">
          <div className="container py-4 flex items-center justify-between gap-6">
            <div className="flex items-center gap-4 min-w-0">
              <img
                src={product.images[0]}
                alt=""
                className="h-12 w-12 object-cover hidden sm:block"
              />
              <div className="min-w-0">
                <p className="font-display text-lg leading-tight truncate">{product.name}</p>
                <p className="plaque truncate">N°{no} · {product.price}</p>
              </div>
            </div>
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-bone whitespace-nowrap"
            >
              Order via Amazon →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
