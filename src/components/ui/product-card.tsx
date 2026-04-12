import Link from "next/link";
import { buildLocalizedHref, type Locale } from "@/lib/i18n";
import { type Product, formatPrice } from "@/lib/site-data";
import { ProductVisual } from "@/components/ui/product-visual";

type ProductCardProps = {
  locale: Locale;
  priority?: boolean;
  product: Product;
};

export function ProductCard({ locale, priority = false, product }: ProductCardProps) {
  return (
    <article className="group">
      <Link className="block space-y-5" href={buildLocalizedHref(`/product/${product.slug}`, locale)}>
        <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
          <ProductVisual aspect="portrait" locale={locale} priority={priority} product={product} />
        </div>

        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="font-serif text-xl text-[var(--color-ivory)]">{product.name}</p>
            <p className="text-sm text-[var(--color-silver)]">
              {formatPrice(product.price, locale)}
            </p>
          </div>

          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50 transition-transform duration-500 group-hover:translate-x-1">
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
