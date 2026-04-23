import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

export const ProductCard = ({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) => {
  const no = String(index + 1).padStart(2, "0");
  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block reveal"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Plaque header */}
      <div className="flex items-baseline justify-between mb-5 pb-3 border-b border-border/60">
        <span className="numeral text-3xl">N°{no}</span>
        <span className="plaque-ember">{product.collection}</span>
      </div>

      {/* The plate */}
      <div className="relative aspect-[4/5] overflow-hidden bg-graphite figure-cast">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[1200ms] group-hover:opacity-100"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-pitch/60 via-transparent to-transparent opacity-90" />

        {/* Hover plaque */}
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <span className="plaque-bone">View the plate</span>
          <span className="plaque-bone">→</span>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-6 grid grid-cols-[1fr_auto] gap-6 items-baseline">
        <div>
          <h3 className="font-display text-2xl tracking-tight leading-tight">
            {product.name}
          </h3>
          <p className="font-serif italic text-pewter text-sm mt-2 max-w-xs leading-relaxed">
            {product.ritualLine}
          </p>
        </div>
        <span className="font-mono text-xs tracking-[0.18em] text-bone whitespace-nowrap">
          {product.price}
        </span>
      </div>
    </Link>
  );
};
