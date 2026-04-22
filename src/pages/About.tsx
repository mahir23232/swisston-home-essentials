import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";
import detailCream from "@/assets/detail-cream.jpg";

const About = () => {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 marble-bg border-b border-border/60">
        <div className="container max-w-3xl">
          <p className="eyebrow mb-6">Our Story</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.04]">
            A brand built on quiet confidence.
          </h1>
          <p className="mt-8 text-lg text-foreground/70 max-w-2xl leading-relaxed">
            Swisston Home & Kitchen USA exists for people who believe the everyday
            deserves more care. We design refined, dependable pieces that elevate
            the small rituals that make a house feel like home.
          </p>
        </div>
      </section>

      <section className="container py-24 md:py-32 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="md:col-span-5">
          <img src={lifestyle2} alt="" loading="lazy" className="w-full aspect-[4/5] object-cover shadow-elegant" />
        </div>
        <div className="md:col-span-7">
          <p className="eyebrow mb-4">The Vision</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-lg">
            Beautifully made things, made for the way you actually live.
          </h2>
          <div className="hairline my-8" />
          <p className="text-foreground/75 leading-relaxed max-w-xl">
            We started Swisston because we couldn't find home and kitchen products that felt
            considered enough for the spaces we were building. Most options were either cheaply
            made or unnecessarily expensive. We wanted a third path — premium, functional, and
            honestly priced.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed max-w-xl">
            Every piece in our collection is shaped by the same question:
            <em className="font-serif"> would we want to live with this every day?</em>
          </p>
        </div>
      </section>

      <section className="bg-secondary/50 border-y border-border/60">
        <div className="container py-24 md:py-32">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <p className="eyebrow mb-3">What We Stand For</p>
            <h2 className="font-serif text-4xl md:text-5xl">Our principles</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-14 max-w-5xl mx-auto">
            {[
              { n: "01", t: "Considered Design", b: "We design with restraint. Every line, finish, and detail earns its place." },
              { n: "02", t: "Honest Materials", b: "Stainless steel. Food-grade silicone. Materials that endure and age beautifully." },
              { n: "03", t: "Built to Last", b: "We design for years of use, not seasons. Quality that justifies itself over time." },
              { n: "04", t: "Quiet Confidence", b: "We don't shout. Our products speak through how they feel and how they perform." },
              { n: "05", t: "Customer First", b: "Trust is everything. We stand behind every piece we make and every customer we serve." },
              { n: "06", t: "Modern Living", b: "Designed for the home today — refined, practical, and beautifully understated." },
            ].map((p) => (
              <div key={p.n}>
                <span className="font-serif text-3xl text-accent">{p.n}</span>
                <div className="hairline my-5" />
                <h3 className="font-serif text-2xl mb-3">{p.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
        <img src={lifestyle1} alt="" loading="lazy" className="w-full aspect-[4/5] object-cover" />
        <div>
          <p className="eyebrow mb-4">A Promise</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Elegance, made for the everyday.
          </h2>
          <div className="hairline my-8" />
          <p className="text-foreground/75 leading-relaxed">
            We believe luxury isn't about excess — it's about intention.
            It's choosing fewer things, but better ones. It's the calm confidence
            of knowing the things in your home are made to last, made with care,
            and made to be used.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            That's the standard we hold ourselves to. And it's the promise we
            make to every Swisston customer.
          </p>
          <Link
            to="/shop"
            className="mt-10 inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-xs uppercase tracking-[0.22em] font-light hover:bg-foreground/90 transition-colors"
          >
            Explore the Collection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
