import Image from "next/image";
import { getDictionary, type Locale } from "@/lib/i18n";
import { type Product } from "@/lib/site-data";
import { ProductVisual } from "@/components/ui/product-visual";

type ProductGalleryProps = {
  locale: Locale;
  product: Product;
};

export function ProductGallery({ locale, product }: ProductGalleryProps) {
  const dictionary = getDictionary(locale);
  const secondaryAsset =
    product.asset === "labels" ? "/brand/monogram.jpeg" : "/brand/labels.jpeg";

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.72fr)]">
      <ProductVisual aspect="portrait" locale={locale} priority product={product} tone="light" />

      <div className="grid gap-5">
        <div className="relative aspect-[16/11] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[rgba(243,238,229,0.04)]">
          <Image
            alt={`${product.name} brand texture`}
            className="object-cover opacity-82"
            fill
            priority
            sizes="(min-width: 1280px) 26vw, (min-width: 768px) 44vw, 100vw"
            src={secondaryAsset}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,11,0.15)_0%,rgba(7,9,11,0.65)_100%)]" />
          <div className="absolute inset-x-6 bottom-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
              {dictionary.general.storytelling}
            </p>
            <p className="mt-3 max-w-md font-serif text-2xl leading-tight text-[var(--color-ivory)]">
              {product.editorialNote}
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
              {dictionary.product.colour}
            </p>
            <div className="mt-6 flex gap-3">
              {product.colors.map((color) => (
                <div className="space-y-3" key={color.name}>
                  <span
                    className="block h-12 w-12 rounded-full border border-white/12"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="block text-xs uppercase tracking-[0.24em] text-white/68">
                    {color.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
              {dictionary.general.materialFocus}
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--color-silver)]">
              {product.materials.map((material) => (
                <li key={material}>{material}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
