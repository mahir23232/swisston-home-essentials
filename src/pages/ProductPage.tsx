import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, Minus, Plus, ShieldCheck, Truck, RefreshCw, Star, ChevronRight, ChevronLeft } from "lucide-react";
import { getProduct, products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { cn } from "@/lib/utils";

const ProductPage = () => {
  const { slug } = useParams();
  const product = slug ? getProduct(slug) : undefined;

  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    setActive(0);
    setQty(1);
  }, [slug]);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!product) return <Navigate to="/shop" replace />;

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="container pt-32 md:pt-36">
        <nav className="flex items-center gap-2 text-xs text-muted-foreground tracking-wide">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-foreground">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground/80">{product.name}</span>
        </nav>
      </div>

      {/* Gallery + Info */}
      <section className="container py-12 md:py-16 grid md:grid-cols-12 gap-10 md:gap-16">
        {/* Gallery — supports unlimited images */}
        <div className="md:col-span-7 md:sticky md:top-28 md:self-start">
          <div className="relative bg-secondary aspect-[4/5] mb-4 overflow-hidden group">
            <img
              src={product.images[active]}
              alt={`${product.name} — view ${active + 1}`}
              className="w-full h-full object-contain p-10 fade-in"
              key={active}
            />
            {product.images.length > 1 && (
              <>
                <button
                  onClick={() => setActive((a) => (a - 1 + product.images.length) % product.images.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setActive((a) => (a + 1) % product.images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-[0.2em] bg-background/70 backdrop-blur px-2 py-1 text-muted-foreground">
                  {active + 1} / {product.images.length}
                </span>
              </>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "aspect-square bg-secondary overflow-hidden border-2 transition-all",
                    active === i ? "border-foreground" : "border-transparent hover:border-foreground/30 opacity-70 hover:opacity-100"
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain p-2" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="md:col-span-5">
          <p className="eyebrow mb-3">{product.category}</p>
          <h1 className="font-serif text-4xl md:text-5xl leading-[1.05]">{product.name}</h1>
          <p className="mt-3 text-foreground/70 italic font-serif text-lg">{product.tagline}</p>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-2xl font-light tracking-wide">{product.price}</span>
            <span className="hairline" />
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="h-3 w-3 fill-accent text-accent" strokeWidth={0} />
              <Star className="h-3 w-3 fill-accent text-accent" strokeWidth={0} />
              <Star className="h-3 w-3 fill-accent text-accent" strokeWidth={0} />
              <Star className="h-3 w-3 fill-accent text-accent" strokeWidth={0} />
              <Star className="h-3 w-3 fill-accent text-accent" strokeWidth={0} />
              <span className="ml-2 tracking-wide">Trusted by Amazon customers</span>
            </span>
          </div>

          <p className="mt-8 text-foreground/80 leading-relaxed">{product.summary}</p>

          {/* Quantity + CTA */}
          <div className="mt-10 flex items-stretch gap-3">
            <div className="inline-flex items-center border border-border">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3 h-12 hover:bg-secondary transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-10 text-center text-sm tabular-nums">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="px-3 h-12 hover:bg-secondary transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex-1 inline-flex items-center justify-center gap-3 bg-foreground text-background h-12 px-8 text-xs uppercase tracking-[0.22em] font-light hover:bg-foreground/90 transition-colors"
            >
              Buy on Amazon
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Secure checkout handled by Amazon. Eligible for Prime shipping & returns.
          </p>

          {/* Trust indicators */}
          <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-border/60 text-center">
            {[
              { icon: ShieldCheck, label: "Premium\nQuality" },
              { icon: Truck, label: "Amazon\nFulfilled" },
              { icon: RefreshCw, label: "Easy\nReturns" },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-2">
                <t.icon className="h-5 w-5 text-accent" strokeWidth={1.25} />
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground whitespace-pre-line leading-tight">
                  {t.label}
                </span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="mt-12">
            <p className="eyebrow mb-4">Features</p>
            <ul className="space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-2 h-px w-4 bg-accent shrink-0" />
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div className="mt-12 grid grid-cols-2 gap-y-6 gap-x-8 pt-8 border-t border-border/60">
            <div>
              <p className="eyebrow mb-2">Materials</p>
              <p className="text-sm text-foreground/80">{product.materials}</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Dimensions</p>
              <p className="text-sm text-foreground/80">{product.dimensions}</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Capacity</p>
              <p className="text-sm text-foreground/80">{product.capacity}</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Shipping</p>
              <p className="text-sm text-foreground/80">Fulfilled by Amazon</p>
            </div>
          </div>

          {/* In the box */}
          <div className="mt-12 pt-8 border-t border-border/60">
            <p className="eyebrow mb-4">In the Box</p>
            <ul className="grid grid-cols-2 gap-y-2">
              {product.inBox.map((item) => (
                <li key={item} className="text-sm text-foreground/80">— {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-secondary/40 border-y border-border/60">
        <div className="container py-24">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow mb-3">Customer Reflections</p>
            <h2 className="font-serif text-3xl md:text-4xl">What our customers say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { q: "Beautifully built. Genuinely the nicest one I've owned.", n: "Marcus T." },
              { q: "Looks elegant on my counter and works flawlessly.", n: "Sienna K." },
              { q: "Exactly as described — premium and worth every penny.", n: "Arjun P." },
            ].map((r) => (
              <figure key={r.n} className="bg-background p-8">
                <div className="flex gap-1 mb-4 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="font-serif text-lg leading-snug">“{r.q}”</blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">{r.n}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="container py-24 md:py-32">
        <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
          <div>
            <p className="eyebrow mb-3">You may also like</p>
            <h2 className="font-serif text-3xl md:text-4xl">Considered companions</h2>
          </div>
          <Link to="/shop" className="link-elegant text-xs uppercase tracking-[0.22em]">
            View All
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {related.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* Sticky add-to-cart bar */}
      <div
        className={cn(
          "fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl transition-transform duration-500",
          showSticky ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="container py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <img src={product.images[0]} alt="" className="h-12 w-12 object-contain bg-secondary p-1 shrink-0" />
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">{product.name}</p>
              <p className="text-xs text-muted-foreground">{product.price}</p>
            </div>
          </div>
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-foreground text-background px-6 py-3 text-xs uppercase tracking-[0.22em] font-light hover:bg-foreground/90 transition-colors whitespace-nowrap"
          >
            Buy on Amazon
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
