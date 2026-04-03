import { type Locale } from "@/lib/i18n";
import { formatPrice, getCategoryLabel, type Product } from "@/lib/site-data";
import { ProductDetailBoard, ProductFigure } from "@/components/ui/product-figure";

type ProductVisualProps = {
  aspect?: "landscape" | "portrait" | "square";
  locale: Locale;
  showOverlayMeta?: boolean;
  tone?: "dark" | "light";
  priority?: boolean;
  product: Product;
  variantIndex?: number;
};

const aspectMap = {
  landscape: "aspect-[16/11]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
} as const;

export function ProductVisual({
  aspect = "portrait",
  locale,
  showOverlayMeta = true,
  tone = "dark",
  product,
  variantIndex = 0,
}: ProductVisualProps) {
  const alternateIndex = (variantIndex + 1) % product.colors.length;
  const isLight = tone === "light";

  return (
    <div
      className={`group relative overflow-hidden border ${aspectMap[aspect]} ${
        isLight
          ? "rounded-[1.35rem] border-black/8 bg-[linear-gradient(180deg,#fbf8f1_0%,#f1ece3_100%)]"
          : "rounded-[1.05rem] border-white/8 bg-[linear-gradient(180deg,rgba(17,19,23,0.98)_0%,rgba(11,13,16,0.98)_100%)]"
      }`}
    >
      <div
        className={`absolute inset-0 ${
          isLight
            ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0)_22%,rgba(11,13,16,0.03)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_20%,rgba(11,13,16,0.18)_100%)]"
        }`}
      />
      {isLight ? (
        <div className="absolute inset-4 rounded-[1rem] border border-black/7" />
      ) : null}

      {showOverlayMeta ? (
        <>
          <div className="absolute left-6 top-6 z-10 flex items-center gap-3">
            <span
              className={`rounded-full border px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] ${
                isLight
                  ? "border-black/10 text-black/58"
                  : "border-white/12 text-white/70"
              }`}
            >
              {product.collection}
            </span>
            <span
              className={`hidden text-[0.65rem] uppercase tracking-[0.28em] sm:inline ${
                isLight ? "text-black/42" : "text-white/55"
              }`}
            >
              {product.colors[variantIndex]?.name ?? product.mood}
            </span>
          </div>

          <div
            className={`absolute right-6 top-6 z-10 text-xs uppercase tracking-[0.28em] ${
              isLight ? "text-black/48" : "text-white/68"
            }`}
          >
            {formatPrice(product.price, locale)}
          </div>
        </>
      ) : null}

      <div className="absolute inset-x-6 bottom-[4.3rem] top-[4.2rem] overflow-hidden">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 transition-all duration-500 ease-out group-hover:scale-[0.985] group-hover:opacity-0">
            <ProductFigure className="h-full w-full" product={product} variantIndex={variantIndex} />
          </div>
          <div className="absolute inset-0 scale-[1.02] opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100">
            <ProductDetailBoard
              className="h-full w-full"
              product={product}
              variantIndex={alternateIndex}
            />
          </div>
        </div>
      </div>

      {showOverlayMeta ? (
        <div className="absolute inset-x-5 bottom-5 z-10 flex items-end justify-between gap-4">
          <div className="space-y-2">
            <p
              className={`text-[0.65rem] uppercase tracking-[0.3em] capitalize ${
                isLight ? "text-black/48" : "text-white/58"
              }`}
            >
              {getCategoryLabel(product.category, locale)}
            </p>
            <p
              className={`max-w-[14rem] font-serif text-[1.7rem] leading-tight ${
                isLight ? "text-[var(--color-ink)]" : "text-[var(--color-ivory)]"
              }`}
            >
              {product.name}
            </p>
            <div className="flex items-center gap-2 pt-1">
              {product.colors.map((color) => (
                <span
                  className={`h-3 w-3 rounded-full border ${isLight ? "border-black/12" : "border-white/20"}`}
                  key={color.name}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
          <span
            className={`hidden text-xs uppercase tracking-[0.3em] md:block ${
              isLight ? "text-black/34" : "text-white/44"
            }`}
          >
            {product.colors[alternateIndex]?.name ?? product.mood}
          </span>
        </div>
      ) : null}
    </div>
  );
}
