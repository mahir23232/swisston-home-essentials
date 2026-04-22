import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "Our Story" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="group flex flex-col leading-none" aria-label="Swisston home">
          <span className="font-serif text-2xl tracking-[0.18em] text-foreground">
            SWISSTON
          </span>
          <span className="eyebrow mt-1 text-[0.55rem] tracking-[0.3em]">
            Home & Kitchen · USA
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <RouterNavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "link-elegant text-xs uppercase tracking-[0.22em] font-light transition-colors",
                  isActive ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                )
              }
            >
              {l.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            className="text-xs uppercase tracking-[0.22em] font-light border-b border-foreground/40 hover:border-foreground transition-colors pb-0.5"
          >
            Shop on Amazon
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container flex flex-col gap-5 py-8 border-t border-border/60 mt-3">
          {links.map((l) => (
            <RouterNavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm uppercase tracking-[0.2em] font-light",
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
            className="text-sm uppercase tracking-[0.2em] font-light text-accent"
          >
            Shop on Amazon →
          </a>
        </nav>
      </div>
    </header>
  );
};
