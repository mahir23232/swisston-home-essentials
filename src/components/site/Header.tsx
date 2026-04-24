import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/shop",    label: "Atelier" },
  { to: "/shop",    label: "Collections" },
  { to: "/about",   label: "House" },
  { to: "/contact", label: "Concierge" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/70 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
          {/* Left: nav (desktop) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.slice(0, 2).map((l) => (
              <RouterNavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "font-mono text-[0.7rem] uppercase tracking-[0.28em] font-light transition-colors",
                    isActive ? "text-foreground" : "text-foreground/65 hover:text-foreground"
                  )
                }
              >
                {l.label}
              </RouterNavLink>
            ))}
          </nav>

          {/* Center: wordmark */}
          <Link to="/" className="flex flex-col items-center leading-none" aria-label="Swisston home">
            <span className="font-display text-[1.6rem] md:text-[1.85rem] tracking-[0.22em] font-light">
              SWISSTON
            </span>
            <span className="font-mono text-[0.55rem] uppercase tracking-[0.42em] text-muted-foreground mt-1.5">
              Home & Kitchen — Est. USA
            </span>
          </Link>

          {/* Right: nav (desktop) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 justify-end">
            {links.slice(2).map((l) => (
              <RouterNavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "font-mono text-[0.7rem] uppercase tracking-[0.28em] font-light transition-colors",
                    isActive ? "text-foreground" : "text-foreground/65 hover:text-foreground"
                  )
                }
              >
                {l.label}
              </RouterNavLink>
            ))}
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className="font-mono text-[0.7rem] uppercase tracking-[0.28em] font-light border-b border-foreground/40 hover:border-foreground transition-colors pb-0.5"
            >
              Amazon
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden justify-self-end p-2 -mr-2 col-start-3"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container flex flex-col gap-5 py-8 border-t border-border/60 mt-3">
          {links.map((l) => (
            <RouterNavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "font-mono text-xs uppercase tracking-[0.28em] font-light",
                  isActive ? "text-foreground" : "text-foreground/70"
                )
              }
            >
              {l.label}
            </RouterNavLink>
          ))}
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono text-xs uppercase tracking-[0.28em] font-light text-accent"
          >
            Amazon →
          </a>
        </nav>
      </div>
    </header>
  );
};
