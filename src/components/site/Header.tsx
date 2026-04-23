import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/",        label: "Index",      no: "01" },
  { to: "/shop",    label: "The Plates", no: "02" },
  { to: "/about",   label: "Provenance", no: "03" },
  { to: "/contact", label: "Correspond", no: "04" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      {/* ── Top utility bar ─────────────────────────── */}
      <div className="fixed inset-x-0 top-0 z-40 bg-pitch/85 backdrop-blur-xl border-b border-border/60">
        <div className="container flex items-center justify-between h-12">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.32em] text-pewter">
            Vol. II — The Index · MMXXV
          </p>
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className="font-mono text-[0.6rem] uppercase tracking-[0.32em] text-bone/70 hover:text-ember transition-colors"
            >
              Order via Amazon ↗
            </a>
          </div>
          <button
            className="md:hidden p-1 -mr-1 text-bone"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* ── Vertical side rail (desktop) ────────────── */}
      <aside className="hidden lg:flex fixed left-0 top-12 bottom-0 z-30 w-16 flex-col items-center justify-between py-10 border-r border-border/60 bg-pitch/40 backdrop-blur-sm">
        <Link to="/" className="block" aria-label="Swisston home">
          <span className="vertical-mark font-mono text-[0.65rem] uppercase text-bone">
            SWISSTON · USA
          </span>
        </Link>

        <nav className="flex flex-col items-center gap-8">
          {links.map((l) => (
            <RouterNavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "vertical-mark font-mono text-[0.6rem] uppercase tracking-[0.32em] transition-colors",
                  isActive ? "text-ember" : "text-pewter hover:text-bone"
                )
              }
            >
              {l.no} · {l.label}
            </RouterNavLink>
          ))}
        </nav>

        <span className="font-mono text-[0.55rem] text-pewter rotate-180" style={{ writingMode: "vertical-rl" }}>
          EST · TX
        </span>
      </aside>

      {/* ── Mobile drawer ───────────────────────────── */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-30 bg-pitch transition-opacity duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container pt-24 pb-16 h-full flex flex-col justify-between">
          <nav className="flex flex-col gap-6">
            {links.map((l, i) => (
              <RouterNavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-baseline gap-6 group",
                    isActive ? "text-ember" : "text-bone"
                  )
                }
              >
                <span className="font-mono text-[0.7rem] tracking-[0.32em] text-pewter">
                  {l.no}
                </span>
                <span className="font-display text-5xl tracking-tight">
                  {l.label}
                </span>
              </RouterNavLink>
            ))}
          </nav>
          <div className="space-y-4 border-t border-border/60 pt-8">
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className="btn-link"
            >
              Order via Amazon ↗
            </a>
            <p className="plaque">Swisston · Home & Kitchen · USA</p>
          </div>
        </div>
      </div>
    </>
  );
};
