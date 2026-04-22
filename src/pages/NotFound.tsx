import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="min-h-[80vh] flex items-center marble-bg pt-32">
      <div className="container text-center max-w-xl mx-auto py-24">
        <p className="eyebrow mb-6">Page Not Found</p>
        <h1 className="font-serif text-7xl md:text-8xl mb-6">404</h1>
        <p className="text-foreground/70 leading-relaxed mb-10">
          The page you're looking for has moved, or perhaps never existed.
          Let us guide you back home.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-xs uppercase tracking-[0.22em] font-light hover:bg-foreground/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
