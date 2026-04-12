import Link from "next/link";
import { buildLocalizedHref, getDictionary, type Locale } from "@/lib/i18n";
import {
  formatPrice,
  getCategoryLabel,
  type CollectionDisplayProduct,
} from "@/lib/site-data";
import { ProductVisual } from "@/components/ui/product-visual";

type CollectionProductTileProps = {
  aspect?: "landscape" | "portrait" | "square";
  item: CollectionDisplayProduct;
  locale: Locale;
  priority?: boolean;
};

export function CollectionProductTile({
  aspect = "portrait",
  item,
  locale,
  priority = false,
}: CollectionProductTileProps) {
  const dictionary = getDictionary(locale);
  const { product, variantIndex } = item;

  return (
    <article className="group relative h-full bg-[linear-gradient(180deg,#faf7f0_0%,#f1ece3_100%)] text-[var(--color-ink)]">
      <Link className="flex h-full flex-col" href={buildLocalizedHref(`/product/${product.slug}`, locale)}>
        <div className="absolute right-5 top-5 z-10 text-sm text-black/34 transition-colors duration-300 group-hover:text-black/58">
          ♡
        </div>

        <div className="p-4 md:p-5">
          <ProductVisual
            aspect={aspect}
            locale={locale}
            priority={priority}
            product={product}
            showOverlayMeta={false}
            tone="light"
            variantIndex={variantIndex}
          />
        </div>

        <div className="mt-auto border-t border-black/7 px-4 pb-5 pt-4 md:px-5">
          <div className="space-y-3">
            <p className="text-[0.68rem] uppercase tracking-[0.26em] text-black/42">
              {getCategoryLabel(product.category, locale)}
            </p>
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif text-[1.4rem] leading-[1.1] text-[var(--color-ink)]">
                {product.name}
              </h3>
              <p className="whitespace-nowrap text-sm tracking-[0.12em] text-black/56">
                {formatPrice(product.price, locale)}
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <span
                  className="h-2.5 w-2.5 rounded-full border border-black/12"
                  key={color.name}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>

            <span className="text-[0.68rem] uppercase tracking-[0.28em] text-black/42 transition-transform duration-300 group-hover:translate-x-1">
              {dictionary.general.viewPiece}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
