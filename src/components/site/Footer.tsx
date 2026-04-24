import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="surface-ink relative overflow-hidden">
      <div className="container py-24 md:py-32">
        {/* House mark */}
        <div className="text-center mb-20">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.42em] text-background/50">
            The House of
          </p>
          <p className="font-display text-[3rem] md:text-[5rem] tracking-[0.18em] font-light mt-4 text-background">
            SWISSTON
          </p>
          <div className="rule-brass mx-auto mt-6 opacity-70" />
        </div>

        <div className="grid gap-14 md:grid-cols-12 border-t border-background/15 pt-16">
          <div className="md:col-span-4 space-y-5">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-background/50">
              Correspondence
            </p>
            <p className="font-display text-2xl leading-snug text-background/90 max-w-xs">
              A quarterly note from the studio — new pieces, recipes, and the slow life of a kitchen.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex border-b border-background/35 focus-within:border-background transition-colors max-w-sm"
            >
              <input
                type="email"
                required
                placeholder="your address"
                className="flex-1 bg-transparent py-3 text-sm text-background placeholder:text-background/45 focus:outline-none"
              />
              <button
                type="submit"
                className="font-mono text-[0.7rem] uppercase tracking-[0.28em] font-light pl-4 text-background hover:text-accent transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="md:col-span-2 md:col-start-7 space-y-5">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-background/50">
              Atelier
            </p>
            <ul className="space-y-3 text-sm text-background/80">
              <li><Link to="/shop" className="hover:text-background transition-colors">All pieces</Link></li>
              <li><Link to="/shop" className="hover:text-background transition-colors">Morning ritual</Link></li>
              <li><Link to="/shop" className="hover:text-background transition-colors">Atelier accessories</Link></li>
              <li><a href="#" className="hover:text-background transition-colors">Amazon storefront</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-5">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-background/50">
              House
            </p>
            <ul className="space-y-3 text-sm text-background/80">
              <li><Link to="/about" className="hover:text-background transition-colors">Our story</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">Concierge</Link></li>
              <li><a href="#" className="hover:text-background transition-colors">Care & guarantee</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Returns</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-5">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-background/50">
              Elsewhere
            </p>
            <ul className="space-y-3 text-sm text-background/80">
              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:text-background transition-colors">
                  <Instagram className="h-3.5 w-3.5" /> Instagram
                </a>
              </li>
              <li>
                <a href="mailto:hello@swisston.com" className="inline-flex items-center gap-2 hover:text-background transition-colors">
                  <Mail className="h-3.5 w-3.5" /> hello@swisston.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-background/15 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-background/45">
            © {new Date().getFullYear()} Swisston · Home & Kitchen, USA · All rights reserved
          </p>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-background/45">
            Designed in Texas · Made for everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};
