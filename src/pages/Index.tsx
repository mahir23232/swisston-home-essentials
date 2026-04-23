import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Marquee } from "@/components/site/Marquee";

import heroEstate from "@/assets/hero-estate.jpg";
import ritualMorning from "@/assets/ritual-morning.jpg";
import ritualPrep from "@/assets/ritual-prep.jpg";
import materialStudy from "@/assets/material-study.jpg";
import dining from "@/assets/dining-scene.jpg";
import productPortrait from "@/assets/product-portrait.jpg";
import detailCream from "@/assets/detail-cream.jpg";

const Index = () => {
  return (
    <>
      {/* ─────────────────────── HERO ─────────────────────── */}
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroEstate}
            alt="Honed travertine countertop in a sunlit estate kitchen with hand-rubbed white oak cabinetry"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/95" />
        </div>

        {/* Top meta */}
        <div className="absolute top-28 md:top-32 inset-x-0 z-10">
          <div className="container flex items-center justify-between">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.42em] text-foreground/60 reveal-slow">
              Volume I · MMXXV
            </p>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.42em] text-foreground/60 reveal-slow hidden sm:block">
              The Atelier Edition
            </p>
          </div>
        </div>

        <div className="relative container pb-20 md:pb-28">
          <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-12 items-end">
            <div className="md:col-span-8 reveal" style={{ animationDelay: "120ms" }}>
              <p className="eyebrow-brass mb-6">A House of Considered Kitchen Objects</p>
              <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.025em] text-foreground">
                Quiet objects,<br />
                <span className="display-italic text-foreground/85">for a kitchen that listens.</span>
              </h1>
            </div>

            <div className="md:col-span-4 reveal" style={{ animationDelay: "320ms" }}>
              <p className="text-base text-foreground/75 leading-relaxed max-w-sm md:ml-auto md:text-right">
                Heirloom-grade home & kitchen pieces, designed in Texas with the restraint of an
                Italian farmhouse and the gravity of an estate kitchen.
              </p>
              <div className="mt-8 flex md:justify-end gap-6 items-center">
                <Link to="/shop" className="btn-ghost group">
                  Enter the Atelier
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── MARQUEE — house codes ─────────────── */}
      <Marquee />

      {/* ─────────────── MANIFESTO ─────────────── */}
      <section className="surface-paper relative grain">
        <div className="container py-28 md:py-40 grid md:grid-cols-12 gap-y-12 md:gap-x-16">
          <div className="md:col-span-4">
            <p className="eyebrow mb-6">N°01 — The House Codes</p>
            <div className="rule-brass" />
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-[clamp(1.75rem,3vw,2.6rem)] leading-[1.18] tracking-[-0.015em] text-foreground/95">
              We make the kind of kitchen objects that quietly outlast everything around them —
              <span className="display-italic text-foreground"> heavy in the hand, soft in the room,</span> built for the small daily ceremonies that, taken together, become a life well lived.
            </p>
            <p className="mt-10 text-foreground/70 leading-relaxed max-w-xl">
              No trend cycles. No plastic. No noise. Each piece is engineered once, finished by hand,
              and made to perform identically on the thousandth use as on the first.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── HERO PIECE — full-bleed editorial ─────────────── */}
      <section className="bg-foreground text-background relative overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[80svh]">
          <div className="relative aspect-[4/5] md:aspect-auto">
            <img
              src={productPortrait}
              alt="The Whipper, N°01 in matte ink stainless on travertine"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 lg:px-24 py-20 md:py-32">
            <div className="max-w-md">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.42em] text-background/60 mb-6">
                The Hero Piece · N°01
              </p>
              <h2 className="font-display text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em]">
                The Whipper,<br />
                <span className="display-italic">in matte ink.</span>
              </h2>
              <div className="rule-brass my-10 opacity-80" />
              <p className="text-background/75 leading-relaxed">
                A precision-built cream whipper, weighted to feel inevitable in the hand. Made for
                the cup of coffee that becomes a small daily ceremony — and the kitchen that
                takes its rituals seriously.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link to="/product/professional-cream-whipper-500ml" className="btn-bone group">
                  Read the piece
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
                <a href="#" target="_blank" rel="noreferrer noopener" className="font-mono text-[0.7rem] uppercase tracking-[0.28em] font-light text-background/80 border-b border-background/40 hover:border-background pb-1 transition-colors inline-flex items-center gap-2">
                  Buy on Amazon <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── COLLECTION — RITUALS ─────────────── */}
      <section className="container py-28 md:py-40">
        <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-12 items-end mb-20">
          <div className="md:col-span-7">
            <p className="eyebrow-brass mb-5">N°02 — Pieces by Ritual</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.04] tracking-[-0.02em]">
              Designed around the small <span className="display-italic">ceremonies of the day.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-foreground/70 leading-relaxed">
              Each Swisston piece is built for a moment — the slow morning, the prepared lunch,
              the long table on a Sunday — not for a category in a catalogue.
            </p>
          </div>
        </div>

        {/* Ritual cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-24">
          {[
            {
              tag: "Ritual N°01",
              title: "The Slow Morning",
              copy: "Espresso, cream, the first quiet half-hour of the day.",
              img: ritualMorning,
            },
            {
              tag: "Ritual N°02",
              title: "The Prepared Kitchen",
              copy: "Hands working in linen light. A week, made calmer.",
              img: ritualPrep,
            },
          ].map((r, i) => (
            <article key={r.tag} className="reveal" style={{ animationDelay: `${i * 120}ms` }}>
              <div className="relative overflow-hidden aspect-[4/5] mb-6 group">
                <img src={r.img} alt={r.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.05]" />
                <span className="absolute top-5 left-5 font-mono text-[0.6rem] uppercase tracking-[0.32em] text-background/90 bg-foreground/30 backdrop-blur-sm px-3 py-1.5">
                  {r.tag}
                </span>
              </div>
              <h3 className="font-display text-3xl mb-2">{r.title}</h3>
              <p className="text-muted-foreground italic max-w-md">{r.copy}</p>
            </article>
          ))}
        </div>

        {/* Products belonging to the morning ritual */}
        <div className="border-t border-border/60 pt-16">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <p className="eyebrow">In this collection</p>
            <Link to="/shop" className="btn-ghost group">
              View all pieces <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── MATERIAL STUDY ─────────────── */}
      <section className="surface-stone relative grain">
        <div className="container py-28 md:py-40 grid md:grid-cols-12 gap-y-12 md:gap-x-16 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <img
              src={materialStudy}
              alt="Honed travertine meeting hand-rubbed white oak with weathered brass hardware"
              loading="lazy"
              className="w-full aspect-[16/10] object-cover figure-deep"
            />
          </div>
          <div className="md:col-span-5 order-1 md:order-2 md:pl-8">
            <p className="eyebrow-brass mb-5">N°03 — A Material Study</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em] mb-10">
              Travertine, oak, ink, and <span className="display-italic">weathered brass.</span>
            </h2>
            <div className="rule-brass mb-8" />
            <dl className="space-y-6">
              {[
                ["Stone", "Honed Italian travertine. Soft, porous, alive in light."],
                ["Wood", "Hand-rubbed white oak, finished with a hardwax oil."],
                ["Metal", "Surgical-grade stainless and unlacquered brass that ages."],
                ["Light", "Northern morning light. Always northern morning light."],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[5rem_1fr] gap-6 border-b border-foreground/15 pb-5">
                  <dt className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-foreground/60 pt-1">
                    {k}
                  </dt>
                  <dd className="text-foreground/85 leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ─────────────── FOUNDER / FOR THE HOUSE ─────────────── */}
      <section className="bg-background relative">
        <div className="container py-28 md:py-40">
          <div className="grid md:grid-cols-12 gap-y-12 md:gap-x-16">
            <div className="md:col-span-3">
              <p className="eyebrow mb-5">A note from the studio</p>
              <div className="rule-brass" />
            </div>
            <div className="md:col-span-7 md:col-start-5">
              <p className="dropcap font-display text-[1.5rem] md:text-[1.75rem] leading-[1.45] tracking-[-0.01em] text-foreground/95">
                We started Swisston with a simple, almost old-fashioned idea: that the objects
                we touch every morning should be <span className="display-italic">good company.</span> Heavy
                where they should be heavy. Quiet where they should be quiet. Made by people who
                cared what they were making, for people who notice these things.
              </p>
              <p className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.32em] text-muted-foreground">
                — The Swisston Studio · Austin, Texas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── EDITORIAL DIPTYCH ─────────────── */}
      <section className="bg-foreground text-background">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[80svh]">
            <img src={dining} alt="A long travertine table set for dinner with brass candlesticks" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-90" />
          </div>
          <div className="grid grid-rows-2">
            <div className="flex items-center px-8 md:px-16 py-20 border-b border-background/15">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.42em] text-background/55 mb-5">N°04 — For the long table</p>
                <h3 className="font-display text-3xl md:text-4xl leading-tight tracking-[-0.015em] mb-6">
                  Pieces that <span className="display-italic">earn the counter.</span>
                </h3>
                <p className="text-background/70 leading-relaxed max-w-md">
                  We design for the kitchens where things stay out — where the whipper lives next to
                  the espresso machine, and the board never goes back in the drawer.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={detailCream} alt="A piped quenelle of fresh cream" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── TRUST · IN VOICES ─────────────── */}
      <section className="surface-paper relative grain">
        <div className="container py-28 md:py-40">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="eyebrow-brass mb-5">N°05 — In Voices</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em]">
              Notes from <span className="display-italic">private kitchens.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
            {[
              {
                quote: "It feels heavier and more refined than I expected. It belongs on the counter — not in a drawer.",
                name: "Olivia M.",
                place: "Brooklyn, New York",
              },
              {
                quote: "I've owned three different whippers over the years. This is the first one that feels like a real piece of kitchen equipment.",
                name: "Daniel R.",
                place: "Austin, Texas",
              },
              {
                quote: "Beautifully made, and so simple to use. The packaging alone made it feel like a gift to myself.",
                name: "Priya S.",
                place: "San Francisco, California",
              },
            ].map((t, i) => (
              <figure key={t.name} className="reveal" style={{ animationDelay: `${i * 100}ms` }}>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-brass mb-6">
                  N°{String(i + 1).padStart(2, "0")}
                </p>
                <blockquote className="font-display text-xl md:text-[1.4rem] leading-[1.35] tracking-[-0.005em] text-foreground/90">
                  <span className="display-italic text-brass mr-1">“</span>
                  {t.quote}
                  <span className="display-italic text-brass ml-1">”</span>
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-foreground/15">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em]">{t.name}</p>
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.32em] text-muted-foreground mt-1">
                    {t.place}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── ASSURANCES ─────────────── */}
      <section className="border-y border-border/60 bg-background">
        <div className="container py-16 grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/60">
          {[
            ["Lifetime Mechanical Guarantee", "Every Swisston piece is guaranteed for life against mechanical failure."],
            ["Considered Materials", "Heavy-gauge stainless. Food-grade silicone. Linen and oak. Never plastic."],
            ["Carbon-Neutral Delivery", "Fulfilled through Amazon, with offset shipping to all fifty states."],
            ["A Concierge, Not a Helpdesk", "Real people in our Austin studio. Reach us by note, any day."],
          ].map(([t, c], i) => (
            <div key={t} className="px-0 md:px-8 py-8 md:py-0 first:pt-0 md:first:pl-0 last:pb-0 md:last:pr-0">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.32em] text-brass mb-4">
                N°{String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-display text-xl leading-snug mb-3">{t}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────── INVITATION ─────────────── */}
      <section className="relative overflow-hidden">
        <img
          src={heroEstate}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="relative container py-32 md:py-44 text-center text-background">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.42em] text-background/60 mb-6">
            An invitation
          </p>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.02] tracking-[-0.02em] max-w-3xl mx-auto">
            Bring quiet weight <span className="display-italic">into the kitchen.</span>
          </h2>
          <div className="rule-brass mx-auto my-10 opacity-80" />
          <p className="mt-2 text-background/75 max-w-md mx-auto leading-relaxed">
            Explore the full collection, or shop directly through our trusted Amazon storefront —
            with carbon-neutral delivery to every door in America.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link to="/shop" className="bg-background text-foreground px-9 py-4 font-mono text-[0.7rem] uppercase tracking-[0.28em] font-light hover:bg-background/90 transition-colors inline-flex items-center gap-3">
              Enter the Atelier
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a href="#" target="_blank" rel="noreferrer noopener" className="font-mono text-[0.7rem] uppercase tracking-[0.28em] font-light text-background border-b border-background/50 hover:border-background pb-1 transition-colors inline-flex items-center gap-2">
              Shop on Amazon <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
