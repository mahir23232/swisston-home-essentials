import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

export const ProductCard = ({ product, index = 0 }: { product: Product; index?: number }) => {
  return (
    <Link
      to={`/product/${product.slug}`}
      className={cn(
        "group block fade-up",
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative overflow-hidden bg-secondary aspect-[4/5] mb-5">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain p-8 transition-transform duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <span className="absolute top-4 left-4 eyebrow text-[0.6rem] text-foreground/60">
          {product.category}
        </span>
        <span className="absolute bottom-4 right-4 inline-flex items-center justify-center h-9 w-9 rounded-full bg-background/0 group-hover:bg-background border border-foreground/0 group-hover:border-foreground/20 transition-all duration-500">
          <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </span>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl leading-tight">{product.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{product.tagline}</p>
        </div>
        <span className="text-sm font-light tracking-wide whitespace-nowrap pt-1">
          {product.price}
        </span>
      </div>
    </Link>
  );
};
