import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, Truck, Heart, Star } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import heroImg from "@/assets/hero-lifestyle.jpg";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";
import detailCream from "@/assets/detail-cream.jpg";

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Swisston cream whipper resting on a marble countertop"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />

        <div className="relative container pb-24 md:pb-32 pt-40">
          <div className="max-w-2xl fade-up">
            <p className="eyebrow mb-6">Swisston · Home & Kitchen USA</p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight">
              Refined essentials,<br />
              <em className="not-italic text-foreground/80">crafted for everyday living.</em>
            </h1>
            <p className="mt-8 text-base md:text-lg text-foreground/70 max-w-lg leading-relaxed">
              Premium home and kitchen pieces designed with quiet confidence —
              where elegance meets the practical rituals of the modern home.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-xs uppercase tracking-[0.22em] font-light hover:bg-foreground/90 transition-all duration-500"
              >
                Explore the Collection
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                className="link-elegant text-xs uppercase tracking-[0.22em] font-light"
              >
                Shop on Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border/60 bg-background">
        <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Sparkles, label: "Premium Quality", sub: "Considered materials" },
            { icon: Heart, label: "Crafted for Everyday", sub: "Designed to be used" },
            { icon: ShieldCheck, label: "Trusted by Customers", sub: "Rated on Amazon" },
            { icon: Truck, label: "Reliable Delivery", sub: "Fulfilled by Amazon" },
          ].map((v) => (
            <div key={v.label} className="flex items-center gap-4">
              <v.icon className="h-5 w-5 text-accent shrink-0" strokeWidth={1.25} />
              <div>
                <p className="text-sm font-medium tracking-wide">{v.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{v.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container py-28 md:py-40">
        <div className="flex items-end justify-between mb-16 md:mb-20 gap-8 flex-wrap">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">The Collection</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Pieces designed to be lived with.
            </h2>
          </div>
          <Link to="/shop" className="link-elegant text-xs uppercase tracking-[0.22em]">
            View All
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="stone-bg">
        <div className="container py-28 md:py-40 grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="md:col-span-5">
            <img
              src={lifestyle2}
              alt="Modern kitchen with marble island"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover shadow-elegant"
            />
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow mb-4">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-xl">
              A quieter kind of luxury — built for the everyday.
            </h2>
            <div className="hairline my-8" />
            <p className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-xl">
              Swisston Home & Kitchen USA was founded on a simple belief: the objects we use
              every day deserve the same care and intention as the spaces they live in.
            </p>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-xl">
              Each piece is considered — from the materials we choose to the way it feels in your hand.
              We design for the modern home: refined, dependable, and made to last beyond passing trends.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 link-elegant text-xs uppercase tracking-[0.22em]"
            >
              Read Our Story <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY SWISSTON */}
      <section className="container py-28 md:py-40">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="eyebrow mb-4">Why Swisston</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Considered in every detail.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-14 max-w-5xl mx-auto">
          {[
            {
              n: "01",
              title: "Material First",
              body: "We choose enduring materials — stainless steel, food-grade silicone, finishes that age gracefully — so every piece earns its place in your home.",
            },
            {
              n: "02",
              title: "Designed to Last",
              body: "Tools that perform without compromise. Reinforced mechanisms, precise engineering, and finishes built to endure daily use.",
            },
            {
              n: "03",
              title: "Quietly Beautiful",
              body: "Refined silhouettes that complement the modern kitchen. Function-led design that doesn't shout — it simply belongs.",
            },
          ].map((b) => (
            <div key={b.n}>
              <span className="font-serif text-3xl text-accent">{b.n}</span>
              <div className="hairline my-5" />
              <h3 className="font-serif text-2xl mb-3">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EDITORIAL / LIFESTYLE */}
      <section className="bg-background">
        <div className="container py-28 md:py-40 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <p className="eyebrow">In the Home</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Elevate the rituals of everyday.
            </h2>
            <div className="hairline" />
            <p className="text-foreground/75 leading-relaxed max-w-md">
              Morning coffee. A weekend brunch. A quiet evening dessert.
              Our pieces are made for the small moments that shape a beautiful life at home.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 link-elegant text-xs uppercase tracking-[0.22em]"
            >
              Shop on Amazon <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <img
              src={lifestyle1}
              alt="Editorial flat lay with cream whipper"
              loading="lazy"
              className="w-full aspect-[3/4] object-cover"
            />
            <img
              src={detailCream}
              alt="Beautifully piped whipped cream"
              loading="lazy"
              className="w-full aspect-[3/4] object-cover mt-10"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 border-y border-border/60">
        <div className="container py-28 md:py-32">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="eyebrow mb-4">Customer Reflections</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Loved in homes across America.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "It feels heavier and more refined than I expected. It looks beautiful left out on the counter — exactly what I wanted.",
                name: "Olivia M.",
                place: "Brooklyn, NY",
              },
              {
                quote:
                  "I've owned three different whippers over the years. This is the first one that feels like a real piece of kitchen equipment.",
                name: "Daniel R.",
                place: "Austin, TX",
              },
              {
                quote:
                  "Beautifully made, and so simple to use. The packaging alone made it feel like a gift to myself.",
                name: "Priya S.",
                place: "San Francisco, CA",
              },
            ].map((t) => (
              <figure key={t.name} className="bg-background p-10 shadow-soft">
                <div className="flex gap-1 mb-6 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="font-serif text-xl leading-snug text-foreground/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t.name} · {t.place}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <img
          src={lifestyle2}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/55" />
        <div className="relative container py-32 md:py-44 text-center text-background">
          <p className="eyebrow text-background/70 mb-5">Discover Swisston</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto">
            Bring quiet elegance into your kitchen.
          </h2>
          <p className="mt-6 text-background/80 max-w-lg mx-auto leading-relaxed">
            Explore the full collection, or shop directly through our trusted Amazon storefront.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link
              to="/shop"
              className="bg-background text-foreground px-8 py-4 text-xs uppercase tracking-[0.22em] font-light hover:bg-background/90 transition-colors"
            >
              Explore Collection
            </Link>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className="text-xs uppercase tracking-[0.22em] font-light border-b border-background/60 hover:border-background pb-1 transition-colors"
            >
              Shop on Amazon →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
