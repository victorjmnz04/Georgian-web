"use client";

import { useState, useTransition } from "react";
import { formatLocalizedMessage, getDictionary, type Locale } from "@/lib/i18n";
import { formatPrice, type Product } from "@/lib/site-data";

type ProductConfiguratorProps = {
  locale: Locale;
  product: Product;
};

export function ProductConfigurator({ locale, product }: ProductConfiguratorProps) {
  const dictionary = getDictionary(locale);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name ?? "");
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] ?? product.sizes[0] ?? "");
  const [isPending, startTransition] = useTransition();
  const [added, setAdded] = useState(false);

  const handleAddToBag = () => {
    startTransition(() => {
      setAdded(true);
    });
  };

  return (
    <div className="space-y-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
            {product.collection}
          </p>
          <span className="font-serif text-2xl text-[var(--color-ivory)]">
            {formatPrice(product.price, locale)}
          </span>
        </div>
        <h1 className="font-serif text-4xl leading-tight text-[var(--color-ivory)] md:text-5xl">
          {product.name}
        </h1>
        <p className="text-base leading-7 text-[var(--color-silver)]">
          {product.description}
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
            {dictionary.product.colour}
          </p>
          <span className="text-sm text-white/68">{selectedColor}</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {product.colors.map((color) => {
            const active = selectedColor === color.name;

            return (
              <button
                aria-pressed={active}
                className={`rounded-full border px-4 py-3 text-sm transition-all ${
                  active
                    ? "border-[var(--color-gold)] bg-white/[0.08] text-[var(--color-ivory)]"
                    : "border-white/10 bg-transparent text-white/70 hover:border-white/20"
                }`}
                key={color.name}
                onClick={() => {
                  setSelectedColor(color.name);
                  setAdded(false);
                }}
                type="button"
              >
                <span className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full border border-white/15"
                    style={{ backgroundColor: color.hex }}
                  />
                  {color.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
            {dictionary.product.size}
          </p>
          <span className="text-sm text-white/68">
            {dictionary.product.selected}: {selectedSize}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
          {product.sizes.map((size) => {
            const active = selectedSize === size;

            return (
              <button
                aria-pressed={active}
                className={`rounded-full border px-4 py-3 text-sm uppercase tracking-[0.18em] transition-all ${
                  active
                    ? "border-[var(--color-gold)] bg-white/[0.08] text-[var(--color-ivory)]"
                    : "border-white/10 bg-transparent text-white/70 hover:border-white/20"
                }`}
                key={size}
                onClick={() => {
                  setSelectedSize(size);
                  setAdded(false);
                }}
                type="button"
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-4 border-t border-white/8 pt-6">
        <button
          className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-ivory)] px-6 py-4 text-sm uppercase tracking-[0.28em] text-[var(--color-ink)] transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-70"
          disabled={isPending}
          onClick={handleAddToBag}
          type="button"
        >
          {isPending
            ? dictionary.product.adding
            : added
              ? dictionary.product.addedToBag
              : dictionary.product.addToBag}
        </button>
        <p className="text-sm leading-6 text-[var(--color-silver)]">
          {added
            ? formatLocalizedMessage(dictionary.product.readyMessage, {
                color: selectedColor,
                name: product.name,
                size: selectedSize,
              })
            : product.story}
        </p>
      </div>
    </div>
  );
}
