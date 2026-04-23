import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

import galleryHero from "@/assets/gallery-hero.jpg";
import plate01 from "@/assets/plate-01.jpg";
import materialSteel from "@/assets/material-steel.jpg";
import ritualFlatlay from "@/assets/ritual-flatlay.jpg";
import plateDetail from "@/assets/plate-detail.jpg";

const Index = () => {
  return (
    <>
      {/* ─────────────────── N°00 · OVERTURE ─────────────────── */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={galleryHero}
            alt="Dark editorial kitchen with single shaft of warm light across honed stone"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover opacity-90 ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pitch/40 via-transparent to-pitch" />
          <div className="absolute inset-0 bg-gradient-to-r from-pitch/70 via-transparent to-transparent" />
        </div>

        {/* Top corners */}
        <div className="absolute top-20 inset-x-0 z-10">
          <div className="container flex items-center justify-between">
            <p className="plaque-ember reveal-fade">Vol. II — The Index</p>
            <p className="plaque hidden sm:block reveal-fade">A house of fourteen objects</p>
          </div>
        </div>

        <div className="relative container pb-20 md:pb-28 z-10">
          <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-12">
            <div className="md:col-span-9">
              <div className="flex items-center gap-4 mb-8 reveal" style={{ animationDelay: "100ms" }}>
                <span className="numeral text-2xl">N°00</span>
                <span className="rule-ember" />
                <span className="plaque-bone">Overture</span>
              </div>
              <h1
                className="font-display text-[clamp(3.2rem,9vw,9rem)] leading-[0.88] tracking-[-0.03em] text-bone reveal"
                style={{ animationDelay: "220ms" }}
              >
                Objects that <span className="italic text-ember">behave</span><br />
                like heirlooms.
              </h1>
              <p
                className="font-serif italic text-pewter text-lg md:text-xl mt-10 max-w-xl leading-relaxed reveal"
                style={{ animationDelay: "420ms" }}
              >
                Swisston is an American house of kitchen instruments — built quietly,
                weighted with intent, and made to remain on the counter long after
                the season has changed.
              </p>
              <div
                className="flex flex-wrap items-center gap-5 mt-12 reveal"
                style={{ animationDelay: "560ms" }}
              >
                <Link to="/shop" className="btn-bone">
                  Enter the Index
                </Link>
                <Link to="/about" className="btn-link">
                  The House →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom plaque */}
        <div className="absolute bottom-6 inset-x-0 z-10">
          <div className="container flex items-center justify-between">
            <p className="plaque">↓ Scroll · Index begins</p>
            <p className="plaque hidden md:block">Designed in Texas · Shipped via Amazon</p>
          </div>
        </div>
      </section>

      {/* ─────────────────── N°I · THE THESIS ─────────────────── */}
      <section className="border-t border-border/60">
        <div className="container py-32 md:py-44">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <span className="numeral text-6xl">N°I</span>
              <p className="plaque-ember mt-4">The Thesis</p>
            </div>
            <div className="md:col-span-7 md:col-start-5">
              <p className="font-serif text-3xl md:text-4xl leading-[1.3] text-bone tracking-tight">
                We make <span className="italic text-ember">few things</span>, slowly, and we keep them in
                the catalogue until they no longer deserve to be there.
              </p>
              <div className="mt-12 grid sm:grid-cols-3 gap-10 pt-10 border-t border-border/60">
                {[
                  ["Considered", "One revision a year, never a season."],
                  ["Weighted", "Heavy-gauge stainless. Built once, kept always."],
                  ["Quiet", "No logos on the object. The work speaks."],
                ].map(([h, b]) => (
                  <div key={h}>
                    <p className="plaque-ember mb-2">{h}</p>
                    <p className="font-serif text-bone/85 leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── N°II · THE INDEX ─────────────────── */}
      <section className="border-t border-border/60 surface-pitch">
        <div className="container py-24 md:py-32">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="numeral text-6xl">N°II</span>
              <p className="plaque-ember mt-4">The Index</p>
              <h2 className="font-display text-5xl md:text-6xl tracking-tight mt-6 max-w-2xl">
                Fourteen plates,<br />
                <span className="italic">arranged by ritual.</span>
              </h2>
            </div>
            <Link to="/shop" className="btn-link hidden md:inline-flex">
              View all →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <Link to="/shop" className="btn-outline-bone">
              The complete index →
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────── N°III · THE STUDY ─────────────────── */}
      <section className="border-t border-border/60">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[700px] overflow-hidden">
            <img
              src={materialSteel}
              alt="Brushed stainless steel surface in raking warm light"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="p-10 md:p-20 flex flex-col justify-center">
            <span className="numeral text-6xl">N°III</span>
            <p className="plaque-ember mt-4">A Study in Material</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mt-6 leading-tight">
              Heavy-gauge 304 stainless.<br />
              <span className="italic text-ember">Hand-finished.</span>
            </h2>
            <p className="font-serif text-pewter text-lg mt-8 leading-relaxed max-w-md">
              Every Swisston piece begins as a single billet of food-grade stainless
              and ends in a finishing room in our Texas studio. Mechanisms are
              reinforced. Seals are medical-grade. The objects are built to perform
              identically on the thousandth use as on the first.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 pt-8 border-t border-border/60 max-w-md">
              <div>
                <p className="numeral text-4xl">10y</p>
                <p className="plaque mt-2">Mechanism warranty</p>
              </div>
              <div>
                <p className="numeral text-4xl">304</p>
                <p className="plaque mt-2">Surgical-grade stainless</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── N°IV · THE RITUAL ─────────────────── */}
      <section className="border-t border-border/60">
        <div className="container py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="numeral text-6xl">N°IV</span>
            <p className="plaque-ember mt-4">A Day in the Index</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight mt-6 leading-[1.05]">
              Each plate has <span className="italic">a moment.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                no: "06:42",
                title: "Morning",
                copy: "The whipper, a cup of espresso, the rest of the house still asleep.",
                img: ritualFlatlay,
              },
              {
                no: "13:15",
                title: "Service",
                copy: "Lunch for four. The shredder, the linen, a sense of unhurried order.",
                img: plate01,
              },
              {
                no: "21:30",
                title: "Late",
                copy: "A single quenelle on a charred ceramic plate. Nothing more is needed.",
                img: plateDetail,
              },
            ].map((m, i) => (
              <article
                key={m.no}
                className="group reveal"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-graphite mb-6 figure-cast">
                  <img
                    src={m.img}
                    alt={m.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-[1.06]"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="font-mono text-xs tracking-[0.2em] text-bone bg-pitch/70 backdrop-blur-sm px-3 py-1.5">
                      {m.no}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-3xl tracking-tight">{m.title}</h3>
                <p className="font-serif italic text-pewter mt-3 leading-relaxed">{m.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── N°V · TRUST ─────────────────── */}
      <section className="border-t border-border/60 surface-pitch">
        <div className="container py-24">
          <div className="grid md:grid-cols-4 gap-10 items-start">
            {[
              ["4.8 / 5", "Across 2,200+ verified Amazon reviews"],
              ["10 yrs", "Mechanism warranty on every plate"],
              ["48 hrs", "Dispatch from Amazon Prime fulfilment"],
              ["Quiet returns", "Thirty days, no narrative required"],
            ].map(([h, b]) => (
              <div key={h} className="border-l border-border/80 pl-6">
                <p className="font-display text-3xl tracking-tight text-bone">{h}</p>
                <p className="font-serif italic text-pewter mt-3 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── N°VI · THE HOUSE ─────────────────── */}
      <section className="border-t border-border/60">
        <div className="container py-32 md:py-40">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <span className="numeral text-6xl">N°VI</span>
              <p className="plaque-ember mt-4">The House</p>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <p className="font-serif italic text-2xl md:text-3xl text-bone leading-[1.45] tracking-tight">
                "We started Swisston because the kitchens we love — old houses,
                heavy stone, oak we have known for years — deserved instruments
                that behaved the same way. Built once. Quiet. There when needed."
              </p>
              <div className="mt-10 flex items-center gap-6">
                <span className="rule-ember" />
                <p className="plaque">The Founder · Austin, Texas</p>
              </div>
              <div className="mt-12">
                <Link to="/about" className="btn-link">
                  Read the provenance →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
