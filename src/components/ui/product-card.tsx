import Link from "next/link";
import { buildLocalizedHref, getDictionary, type Locale } from "@/lib/i18n";
import { type Product } from "@/lib/site-data";
import { ProductVisual } from "@/components/ui/product-visual";
import { getCategoryLabel } from "@/lib/site-data";

type ProductCardProps = {
  locale: Locale;
  priority?: boolean;
  product: Product;
};

export function ProductCard({ locale, priority = false, product }: ProductCardProps) {
  const dictionary = getDictionary(locale);

  return (
    <article className="group">
      <Link className="block space-y-5" href={buildLocalizedHref(`/product/${product.slug}`, locale)}>
        <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
          <ProductVisual aspect="portrait" locale={locale} priority={priority} product={product} />
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)] capitalize">
              {getCategoryLabel(product.category, locale)}
            </p>
            <p className="font-serif text-2xl text-[var(--color-ivory)]">{product.name}</p>
            <p className="max-w-xl text-sm leading-6 text-[var(--color-silver)]">
              {product.description}
            </p>
          </div>

          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/66 transition-transform duration-500 group-hover:translate-x-1">
            {dictionary.general.viewPiece}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
