import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

export const ProductCard = ({
  product,
  index = 0,
  variant = "default",
}: {
  product: Product;
  index?: number;
  variant?: "default" | "wide";
}) => {
  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block reveal"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-secondary mb-6",
          variant === "wide" ? "aspect-[5/4]" : "aspect-[4/5]"
        )}
      >
        {/* Edition number */}
        <span className="absolute top-5 left-5 font-mono text-[0.6rem] uppercase tracking-[0.32em] text-foreground/50 z-10">
          N°{String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute top-5 right-5 font-mono text-[0.6rem] uppercase tracking-[0.32em] text-foreground/50 z-10">
          {product.collection}
        </span>

        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.05]"
        />
        {/* Hover image swap */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100"
          />
        )}

        {/* Bottom hairline reveal */}
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-foreground/0 group-hover:text-foreground/80 transition-colors duration-700">
            View piece
          </span>
        </div>
      </div>

      <div className="flex items-start justify-between gap-6">
        <div className="space-y-2">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.32em] text-muted-foreground">
            {product.category}
          </p>
          <h3 className="font-display text-2xl leading-tight">{product.name}</h3>
          <p className="text-sm text-muted-foreground italic max-w-xs">
            {product.ritualLine}
          </p>
        </div>
        <span className="font-mono text-xs tracking-[0.15em] whitespace-nowrap pt-3">
          {product.price}
        </span>
      </div>
    </Link>
  );
};
