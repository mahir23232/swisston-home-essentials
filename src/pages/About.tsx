import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroEstate from "@/assets/hero-estate.jpg";
import materialStudy from "@/assets/material-study.jpg";
import dining from "@/assets/dining-scene.jpg";
import ritualPrep from "@/assets/ritual-prep.jpg";

const About = () => {
  return (
    <>
      <section className="surface-paper relative grain pt-40 md:pt-52 pb-20 md:pb-28 border-b border-border/60">
        <div className="container grid md:grid-cols-12 gap-y-10 md:gap-x-12 items-end">
          <div className="md:col-span-8">
            <p className="eyebrow-brass mb-6">The House</p>
            <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] tracking-[-0.025em]">
              A small house with <span className="display-italic">a long memory.</span>
            </h1>
          </div>
          <div className="md:col-span-4">
            <p className="text-foreground/70 leading-relaxed max-w-sm md:ml-auto">
              Swisston is a Texas studio making heirloom-grade kitchen objects for people who
              notice these things — and who plan to keep them for a long time.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-28 md:py-40 grid md:grid-cols-12 gap-y-12 md:gap-x-16">
        <div className="md:col-span-3">
          <p className="eyebrow mb-5">Our standing</p>
          <div className="rule-brass" />
        </div>
        <div className="md:col-span-8 md:col-start-5">
          <p className="dropcap font-display text-xl md:text-[1.4rem] leading-[1.45] text-foreground/95">
            We come from the conviction that everyday objects deserve the same care that an
            architect gives a façade. The whipper on your counter at 7am is, in its small way,
            doing the work of <span className="display-italic">setting a tone</span> — for the morning, for the
            kitchen, for the kind of life you mean to live in this house.
          </p>
          <p className="mt-8 text-foreground/75 leading-relaxed">
            So we make a small number of pieces. We engineer each one once, then refuse to
            redesign it for the sake of a season. We choose materials that age — stainless that
            patinas softly, brass that earns a hand-finish, linen that softens with washing.
            We work with one foundry in central Texas and one finishing house outside Florence,
            and we keep our catalogue small so we can keep our standards high.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <img src={materialStudy} alt="Travertine and oak" loading="lazy" className="w-full aspect-[4/3] md:aspect-[5/4] object-cover" />
        <img src={dining} alt="A long set table at golden hour" loading="lazy" className="w-full aspect-[4/3] md:aspect-[5/4] object-cover" />
      </section>

      <section className="surface-stone relative grain">
        <div className="container py-28 md:py-40">
          <div className="max-w-2xl mb-20">
            <p className="eyebrow-brass mb-5">N°02 — The Principles</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em]">
              Six rules <span className="display-italic">we keep returning to.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
            {[
              { n: "01", t: "One piece, made once.", b: "We engineer for permanence, not for a season's catalogue." },
              { n: "02", t: "Heavy in the hand.",     b: "Weight is honesty. Plastic, almost always, is not." },
              { n: "03", t: "Quiet in the room.",     b: "An object that earns the counter does not need to shout." },
              { n: "04", t: "Materials that age.",    b: "Brass patinas. Stainless softens. Linen washes well." },
              { n: "05", t: "Made by people.",        b: "One foundry in Texas. One finishing house in Italy." },
              { n: "06", t: "A small catalogue.",     b: "We would rather make ten things well than a hundred passably." },
            ].map((p) => (
              <article key={p.n} className="grid grid-cols-[3rem_1fr] gap-6">
                <span className="font-display text-2xl text-brass">{p.n}</span>
                <div>
                  <h3 className="font-display text-2xl mb-2">{p.t}</h3>
                  <p className="text-foreground/75 leading-relaxed">{p.b}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-28 md:py-40 grid md:grid-cols-12 gap-y-12 md:gap-x-16 items-center">
        <div className="md:col-span-6">
          <img src={ritualPrep} alt="Hands at work in a sunlit kitchen" loading="lazy" className="w-full aspect-[4/5] object-cover figure-deep" />
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <p className="eyebrow-brass mb-5">N°03 — Provenance</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em] mb-8">
            Designed in Austin. <span className="display-italic">Finished in Florence.</span>
          </h2>
          <div className="rule-brass mb-8" />
          <p className="text-foreground/75 leading-relaxed">
            Every Swisston piece is drawn in our Austin studio, prototyped in our Texas
            workshop, and finished by a small family-run atelier outside Florence that has been
            doing the work of polishing fine metal for four generations. Then it travels back to
            us, gets inspected by a human, and goes into a linen-wrapped box.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            That is the entire supply chain. We tell you because, in this category, that is
            unusual — and because it is the reason these pieces feel the way they feel.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={heroEstate} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="relative container py-32 md:py-44 text-center text-background">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.42em] text-background/60 mb-6">
            The next chapter
          </p>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-[-0.02em] max-w-3xl mx-auto">
            Begin with a single, <span className="display-italic">considered piece.</span>
          </h2>
          <div className="mt-12">
            <Link to="/shop" className="bg-background text-foreground px-9 py-4 font-mono text-[0.7rem] uppercase tracking-[0.28em] font-light hover:bg-background/90 transition-colors inline-flex items-center gap-3">
              Enter the Atelier <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
