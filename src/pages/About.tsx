import { Link } from "react-router-dom";
import galleryHero from "@/assets/gallery-hero.jpg";
import materialSteel from "@/assets/material-steel.jpg";
import ritualFlatlay from "@/assets/ritual-flatlay.jpg";

const About = () => {
  return (
    <>
      <section className="relative min-h-[80svh] flex items-end overflow-hidden border-b border-border/60">
        <div className="absolute inset-0">
          <img
            src={galleryHero}
            alt="Dark editorial kitchen"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pitch via-pitch/40 to-transparent" />
        </div>
        <div className="relative container pb-20 md:pb-28">
          <div className="flex items-center gap-4 mb-8">
            <span className="numeral text-3xl">N°III</span>
            <span className="rule-ember" />
            <span className="plaque-bone">Provenance</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl tracking-[-0.03em] leading-[0.9] max-w-4xl">
            A house built<br />
            <span className="italic text-ember">slowly,</span> on purpose.
          </h1>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="container py-32 md:py-40">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <span className="numeral text-5xl">N°I</span>
              <p className="plaque-ember mt-4">A Founder's Note</p>
            </div>
            <div className="md:col-span-8 md:col-start-5 space-y-8">
              <p className="font-serif text-xl md:text-2xl text-bone/90 leading-[1.6] dropcap">
                Swisston began in a single drawer. A kitchen we had inherited
                from my grandmother — old oak cabinets, honed stone, a faucet
                that had been there longer than anyone remembered — and a drawer
                full of plastic gadgets that did not belong.
              </p>
              <p className="font-serif text-lg text-bone/80 leading-[1.7]">
                We started Swisston to make instruments that did. Heavy in the
                hand. Quiet on the counter. Built once and left alone. We design
                in Texas, manufacture against a small set of standards we wrote
                ourselves, and ship through Amazon so the buying part is simple.
              </p>
              <p className="font-serif text-lg text-bone/80 leading-[1.7]">
                We add to the catalogue rarely. We retire pieces only when they
                no longer earn their place. We do not run sales. The price you
                see is the price the object is worth.
              </p>
              <div className="pt-6 flex items-center gap-6">
                <span className="rule-ember" />
                <p className="plaque">The Founder · Austin, Texas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 surface-pitch">
        <div className="container py-24 md:py-32">
          <div className="text-center mb-20">
            <span className="numeral text-5xl">N°II</span>
            <p className="plaque-ember mt-4">The House Codes</p>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight mt-6">
              Five things we believe.
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-10">
            {[
              ["01", "Built once.", "Heavy-gauge stainless. Reinforced mechanisms. No wear-it-out plastics."],
              ["02", "Quiet design.", "No logo on the object. The work is enough."],
              ["03", "Slow catalogue.", "Few plates, kept for years. New work added rarely."],
              ["04", "No sales.", "The price is the price. The object is worth it or it is not."],
              ["05", "True service.", "Real humans. 10-year warranty. Quiet returns."],
            ].map(([no, h, b]) => (
              <div key={no} className="border-t border-border/60 pt-6">
                <span className="numeral text-3xl">{no}</span>
                <h3 className="font-display text-2xl tracking-tight mt-4">{h}</h3>
                <p className="font-serif italic text-pewter text-sm mt-3 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 border-b border-border/60">
        <img src={materialSteel} alt="Brushed steel material study" className="w-full aspect-[4/5] object-cover" />
        <img src={ritualFlatlay} alt="Flat-lay of kitchen instruments" className="w-full aspect-[4/5] object-cover" />
      </section>

      <section>
        <div className="container py-32 text-center">
          <p className="plaque-ember mb-6">N°III · Acquire</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight max-w-3xl mx-auto leading-[0.95]">
            Begin with <span className="italic text-ember">one plate.</span>
          </h2>
          <p className="font-serif italic text-pewter text-lg mt-8 max-w-md mx-auto">
            Most houses begin with the whipper. Most stay.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link to="/shop" className="btn-bone">Enter the Index</Link>
            <Link to="/contact" className="btn-link">Trade enquiries →</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
