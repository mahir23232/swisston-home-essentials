import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 mt-32">
      <section className="container py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <p className="plaque-ember mb-6">N°V · Correspondence</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              For the considered<br />
              <span className="italic text-ember">kitchen.</span>
            </h2>
            <p className="font-serif italic text-pewter text-lg mt-8 max-w-md leading-relaxed">
              Quiet dispatches. New plates, household notes, the occasional recipe.
              Never more than once a fortnight.
            </p>
          </div>
          <form
            className="md:col-span-5 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex border-b border-bone/30 focus-within:border-ember transition-colors">
              <input
                type="email"
                required
                placeholder="your@address.com"
                className="flex-1 bg-transparent py-4 text-bone placeholder:text-pewter focus:outline-none font-serif text-lg"
              />
              <button type="submit" className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-ember pl-4">
                Subscribe →
              </button>
            </div>
            <p className="plaque">No noise. Unsubscribe in one click.</p>
          </form>
        </div>
      </section>

      <div className="rule" />

      <div className="container py-12 grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <p className="font-display text-2xl tracking-tight mb-2">Swisston</p>
          <p className="plaque">Home & Kitchen · USA</p>
        </div>
        <div>
          <p className="plaque mb-3">The House</p>
          <ul className="space-y-2 text-bone/80 font-serif">
            <li><Link to="/shop" className="hover:text-ember transition-colors">The Plates</Link></li>
            <li><Link to="/about" className="hover:text-ember transition-colors">Provenance</Link></li>
            <li><Link to="/contact" className="hover:text-ember transition-colors">Correspond</Link></li>
          </ul>
        </div>
        <div>
          <p className="plaque mb-3">Acquire</p>
          <ul className="space-y-2 text-bone/80 font-serif">
            <li><a href="#" target="_blank" rel="noreferrer noopener" className="hover:text-ember transition-colors">Amazon Storefront ↗</a></li>
            <li><Link to="/contact" className="hover:text-ember transition-colors">Trade & Hospitality</Link></li>
          </ul>
        </div>
        <div>
          <p className="plaque mb-3">Studios</p>
          <p className="font-serif text-bone/80 leading-relaxed">
            Texas, USA<br />
            Designed slowly, shipped quietly.
          </p>
        </div>
      </div>

      <div className="rule" />

      <div className="container py-6 flex flex-col md:flex-row justify-between gap-3">
        <p className="plaque">© MMXXV Swisston Home & Kitchen. All editions reserved.</p>
        <p className="plaque">Vol. II · The Index</p>
      </div>
    </footer>
  );
};
