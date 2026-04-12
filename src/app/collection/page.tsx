import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { CollectionProductTile } from "@/components/ui/collection-product-tile";
import { getDictionary, getLocaleFromSearchParams } from "@/lib/i18n";
import {
  buildCollectionHref,
  getCollectionCategories,
  getCollectionDisplayProducts,
  getProducts,
  getSortOptions,
  sortProducts,
  type CollectionDisplayProduct,
  type SortOption,
} from "@/lib/site-data";
import { buildMetadata } from "@/lib/metadata";

type SearchParams = Promise<{
  category?: string | string[];
  lang?: string | string[];
  sort?: string | string[];
}>;

function getSingleValue(value: string | string[] | undefined) {
  return typeof value === "string" ? value : undefined;
}

function getDisplaySequence(items: CollectionDisplayProduct[], length: number) {
  if (!items.length) {
    return [];
  }

  return Array.from({ length }, (_, index) => items[index % items.length]);
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const locale = getLocaleFromSearchParams(await searchParams);
  const dictionary = getDictionary(locale);

  return buildMetadata({
    description: dictionary.collection.description,
    path: "/collection",
    title: dictionary.header.nav.collection,
  });
}

export default async function CollectionPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const resolvedSearchParams = await searchParams;
  const locale = getLocaleFromSearchParams(resolvedSearchParams);
  const dictionary = getDictionary(locale);
  const collectionCategories = getCollectionCategories(locale);
  const localizedSortOptions = getSortOptions(locale);
  const catalogueProducts = getProducts(locale);
  const activeCategory = getSingleValue(resolvedSearchParams.category) ?? "all";
  const requestedSort = getSingleValue(resolvedSearchParams.sort);
  const activeSort = localizedSortOptions.some((option) => option.value === requestedSort)
    ? (requestedSort as SortOption)
    : "featured";

  const filteredProducts =
    activeCategory === "all"
      ? catalogueProducts
      : catalogueProducts.filter((product) => product.category === activeCategory);

  const visibleProducts = sortProducts(
    filteredProducts.length ? filteredProducts : catalogueProducts,
    activeSort,
  );

  const displayItems = getCollectionDisplayProducts(visibleProducts);
  const showcaseItems = getDisplaySequence(displayItems, Math.max(16, displayItems.length));

  return (
    <>
      {/* Filters Section */}
      <section className="border-b border-white/8 pb-6 pt-28 md:pt-36">
        <div className="page-shell">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                  {dictionary.collection.filterByCategory}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.24em] transition-all ${
                      activeCategory === "all"
                        ? "border-[var(--color-gold)] bg-white/[0.08] text-[var(--color-ivory)]"
                        : "border-white/10 bg-transparent text-white/60 hover:border-white/20 hover:text-white"
                    }`}
                    href={buildCollectionHref("all", activeSort, locale)}
                  >
                    {dictionary.collection.allPieces}
                  </Link>
                  {collectionCategories.map((category) => (
                    <Link
                      className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.24em] transition-all ${
                        activeCategory === category.id
                          ? "border-[var(--color-gold)] bg-white/[0.08] text-[var(--color-ivory)]"
                          : "border-white/10 bg-transparent text-white/60 hover:border-white/20 hover:text-white"
                      }`}
                      href={buildCollectionHref(category.id, activeSort, locale)}
                      key={category.id}
                    >
                      {category.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                  {dictionary.collection.sortCollection}
                </p>
                <div className="flex flex-wrap gap-3">
                  {localizedSortOptions.map((option) => (
                    <Link
                      className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.24em] transition-all ${
                        activeSort === option.value
                          ? "border-[var(--color-gold)] bg-white/[0.08] text-[var(--color-ivory)]"
                          : "border-white/10 bg-transparent text-white/60 hover:border-white/20 hover:text-white"
                      }`}
                      href={buildCollectionHref(activeCategory, option.value, locale)}
                      key={option.value}
                    >
                      {option.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-[#f1ece3] text-[var(--color-ink)]">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-px bg-black/8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {showcaseItems.map((item, index) => (
              <Reveal delay={index * 0.02} key={item.id}>
                <CollectionProductTile
                  aspect="portrait"
                  item={item}
                  locale={locale}
                  priority={index < 4}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
