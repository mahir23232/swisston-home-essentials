import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, ChevronLeft, ChevronRight, Star, Plus, Minus, ShieldCheck, Truck, Package } from "lucide-react";
import { getProduct, products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

const ProductPage = () => {
  const { slug } = useParams();
  const product = getProduct(slug || "");
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [showSticky, setShowSticky] = useState(false);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setActive(0);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  useEffect(() => {
    const onScroll = () => {
      if (!ctaRef.current) return;
      const r = ctaRef.current.getBoundingClientRect();
      setShowSticky(r.bottom < 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const related = useMemo(
    () => products.filter((p) => p.id !== product?.id).slice(0, 3),
    [product]
  );

  if (!product) {
    return (
      <section className="container pt-40 pb-32 text-center">
        <p className="eyebrow mb-6">Not Found</p>
        <h1 className="font-display text-5xl mb-6">This piece could not be located.</h1>
        <Link to="/shop" className="btn-ghost">Return to the atelier</Link>
      </section>
    );
  }

  const next = () => setActive((i) => (i + 1) % product.images.length);
  const prev = () => setActive((i) => (i - 1 + product.images.length) % product.images.length);

  return (
    <>
      <div className="container pt-32 md:pt-36 pb-6">
        <nav className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground flex items-center gap-3 flex-wrap">
          <Link to="/" className="hover:text-foreground transition-colors">Swisston</Link>
          <span>·</span>
          <Link to="/shop" className="hover:text-foreground transition-colors">Atelier</Link>
          <span>·</span>
          <span className="text-foreground/60 truncate">{product.collection}</span>
        </nav>
      </div>

      <section className="container pb-20 md:pb-28">
        <div className="grid md:grid-cols-12 gap-y-12 md:gap-x-16">
          <div className="md:col-span-7">
            <div className="relative bg-secondary aspect-[4/5] overflow-hidden group">
              <img
                src={product.images[active]}
                alt={`${product.name} — view ${active + 1}`}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
              />
              <span className="absolute top-5 left-5 font-mono text-[0.6rem] uppercase tracking-[0.32em] text-foreground/55">
                {product.collection}
              </span>
              <span className="absolute top-5 right-5 font-mono text-[0.6rem] uppercase tracking-[0.32em] text-foreground/55">
                {String(active + 1).padStart(2, "0")} / {String(product.images.length).padStart(2, "0")}
              </span>

              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 inline-flex items-center justify-center bg-background/0 hover:bg-background/90 border border-foreground/0 hover:border-foreground/20 transition-all"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 inline-flex items-center justify-center bg-background/0 hover:bg-background/90 border border-foreground/0 hover:border-foreground/20 transition-all"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>

            {product.images.length > 1 && (
              <div className="grid grid-cols-6 gap-3 mt-3">
                {product.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`relative aspect-square bg-secondary overflow-hidden transition-all ${
                      active === i ? "ring-1 ring-foreground" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="md:col-span-5 md:pl-4 lg:pl-8" ref={ctaRef}>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-brass mb-5">
              {product.collection}
            </p>
            <h1 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em]">
              {product.name}
            </h1>
            <p className="mt-3 font-display italic text-xl text-foreground/65">{product.tagline}</p>

            {product.manualRating && (
              <div className="mt-6 flex items-center gap-3 flex-wrap">
                <div className="flex gap-0.5 text-brass">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${i < Math.round(product.manualRating!) ? "fill-current" : ""}`}
                      strokeWidth={1}
                    />
                  ))}
                </div>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                  {product.manualRating.toFixed(1)} · {product.manualReviewCount?.toLocaleString()} reviews
                </span>
              </div>
            )}

            <div className="rule-brass my-8" />

            <p className="text-foreground/80 leading-relaxed">{product.summary}</p>

            {product.highlights?.length > 0 && (
              <ul className="mt-8 space-y-3">
                {product.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-foreground/85">
                    <span className="text-brass font-display italic mt-0.5">✦</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-10 pt-8 border-t border-border/60 flex items-center justify-between">
              <div>
                <p className="eyebrow mb-2">Price</p>
                <p className="font-display text-3xl">{product.price}</p>
              </div>
              <div>
                <p className="eyebrow mb-2 text-right">Quantity</p>
                <div className="flex items-center border border-border">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease" className="h-10 w-10 inline-flex items-center justify-center hover:bg-secondary transition-colors">
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="w-10 text-center font-mono text-sm">{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)} aria-label="Increase" className="h-10 w-10 inline-flex items-center justify-center hover:bg-secondary transition-colors">
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>

            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 w-full btn-ink justify-between group"
            >
              <span>Order on Amazon</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.32em] text-muted-foreground text-center">
              Fulfilled by Amazon · Free Prime delivery
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-border/60">
              {[
                { i: ShieldCheck, t: "Lifetime", s: "Mechanical guarantee" },
                { i: Truck,       t: "Free", s: "Prime delivery" },
                { i: Package,     t: "Linen", s: "Gift-ready packaging" },
              ].map(({ i: Icon, t, s }) => (
                <div key={t} className="text-center">
                  <Icon className="h-4 w-4 mx-auto text-brass mb-3" strokeWidth={1.25} />
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em]">{t}</p>
                  <p className="font-mono text-[0.55rem] uppercase tracking-[0.32em] text-muted-foreground mt-1">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="surface-paper grain relative">
        <div className="container py-24 md:py-32 grid md:grid-cols-12 gap-y-10 md:gap-x-16">
          <div className="md:col-span-3">
            <p className="eyebrow-brass mb-5">The Piece</p>
            <div className="rule-brass" />
          </div>
          <div className="md:col-span-7 md:col-start-5 space-y-7">
            {product.description.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "dropcap font-display text-xl md:text-[1.4rem] leading-[1.45] tracking-[-0.005em] text-foreground/95"
                    : "text-foreground/75 leading-relaxed"
                }
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-y-12 md:gap-x-16">
          <div className="md:col-span-4">
            <p className="eyebrow-brass mb-5">N°02</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em]">
              The <span className="display-italic">specification.</span>
            </h2>
            <div className="rule-brass mt-8" />
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
              {[
                ["Materials",   product.materials],
                ["Dimensions",  product.dimensions],
                ["Capacity",    product.capacity],
                ["Collection",  product.collection],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-border/60 pb-4">
                  <dt className="font-mono text-[0.6rem] uppercase tracking-[0.32em] text-muted-foreground mb-2">{k}</dt>
                  <dd className="text-foreground/90">{v}</dd>
                </div>
              ))}
            </dl>

            {product.features?.length > 0 && (
              <div className="mt-12">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.32em] text-muted-foreground mb-5">Features</p>
                <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-sm text-foreground/85">
                  {product.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="text-brass font-display italic">·</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.inBox?.length > 0 && (
              <div className="mt-12">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.32em] text-muted-foreground mb-5">In the box</p>
                <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-sm text-foreground/85">
                  {product.inBox.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="text-brass font-display italic">·</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background">
        <div className="container py-24 md:py-32">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="eyebrow-brass mb-4">Continue the collection</p>
              <h2 className="font-display text-3xl md:text-4xl">Other pieces from the house</h2>
            </div>
            <Link to="/shop" className="btn-ghost">View all</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div
        className={`fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-xl border-t border-border transition-transform duration-500 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="container flex items-center justify-between gap-6 py-4">
          <div className="flex items-center gap-4 min-w-0">
            <img src={product.images[0]} alt="" className="h-12 w-12 object-cover bg-secondary shrink-0" />
            <div className="min-w-0">
              <p className="font-display text-base truncate">{product.name}</p>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">{product.price}</p>
            </div>
          </div>
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-ink shrink-0"
          >
            <span className="hidden sm:inline">Order on Amazon</span>
            <span className="sm:hidden">Buy</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
