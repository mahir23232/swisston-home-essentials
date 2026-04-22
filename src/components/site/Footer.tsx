import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="container py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4 space-y-5">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl tracking-[0.18em]">SWISSTON</span>
              <span className="eyebrow mt-1 text-[0.55rem] tracking-[0.3em]">
                Home & Kitchen · USA
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Refined essentials for the modern home. Designed with care, built to last,
              made for the way you live today.
            </p>
          </div>

          <div className="md:col-span-2 space-y-4">
            <p className="eyebrow">Shop</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shop" className="link-elegant text-foreground/80 hover:text-foreground">All Products</Link></li>
              <li><Link to="/shop" className="link-elegant text-foreground/80 hover:text-foreground">Kitchen</Link></li>
              <li><Link to="/shop" className="link-elegant text-foreground/80 hover:text-foreground">Accessories</Link></li>
              <li><a href="#" className="link-elegant text-foreground/80 hover:text-foreground">Amazon Storefront</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <p className="eyebrow">Company</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="link-elegant text-foreground/80 hover:text-foreground">Our Story</Link></li>
              <li><Link to="/contact" className="link-elegant text-foreground/80 hover:text-foreground">Contact</Link></li>
              <li><a href="#" className="link-elegant text-foreground/80 hover:text-foreground">Shipping</a></li>
              <li><a href="#" className="link-elegant text-foreground/80 hover:text-foreground">Returns</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-5">
            <p className="eyebrow">The Journal</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Be the first to receive new arrivals, considered essays on the home,
              and thoughtful offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex border-b border-foreground/40 focus-within:border-foreground transition-colors"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 bg-transparent py-3 text-sm placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="submit"
                className="text-xs uppercase tracking-[0.22em] font-light pl-4 text-foreground hover:text-accent transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} Swisston Home & Kitchen USA. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-foreground/70">
            <a href="#" aria-label="Instagram" className="hover:text-foreground transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-foreground transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="mailto:hello@swisston.com" aria-label="Email" className="hover:text-foreground transition-colors"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
