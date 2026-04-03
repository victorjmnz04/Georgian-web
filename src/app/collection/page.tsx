import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { CollectionProductTile } from "@/components/ui/collection-product-tile";
import { EditorialFigure } from "@/components/ui/editorial-figure";
import { PageHero } from "@/components/ui/page-hero";
import { ProductDetailBoard } from "@/components/ui/product-figure";
import { ProductVisual } from "@/components/ui/product-visual";
import { buildLocalizedHref, getDictionary, getLocaleFromSearchParams } from "@/lib/i18n";
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
  const categoryLabel =
    activeCategory === "all"
      ? dictionary.collection.allPieces
      : collectionCategories.find((category) => category.id === activeCategory)?.label ??
        dictionary.collection.allPieces;

  const displayItems = getCollectionDisplayProducts(visibleProducts);
  const showcaseItems = getDisplaySequence(displayItems, Math.max(16, displayItems.length));
  const heroProduct = showcaseItems[0] ?? displayItems[0];
  const portraitProduct = showcaseItems[4] ?? heroProduct;
  const strideProduct = showcaseItems[11] ?? heroProduct;

  return (
    <>
      <PageHero
        description={dictionary.collection.description}
        eyebrow={dictionary.collection.heroEyebrow}
        stats={[
          { label: dictionary.collection.visible, value: String(showcaseItems.length) },
          { label: dictionary.collection.focus, value: categoryLabel },
          {
            label: dictionary.collection.sort,
            value:
              localizedSortOptions.find((option) => option.value === activeSort)?.label ??
              localizedSortOptions[0]?.label,
          },
        ]}
        title={dictionary.collection.title}
      />

      <section className="border-b border-white/8">
        <div className="page-shell py-7">
          <Reveal>
            <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div className="space-y-3">
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

              <div className="space-y-3">
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

      <section className="border-y border-black/6 bg-[#f1ece3] text-[var(--color-ink)]">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-px bg-black/8 md:grid-cols-4">
            {showcaseItems.slice(0, 4).map((item, index) => (
              <Reveal delay={index * 0.03} key={item.id}>
                <CollectionProductTile aspect="square" item={item} locale={locale} priority={index < 2} />
              </Reveal>
            ))}
          </div>

          <div className="grid gap-px bg-black/8 md:grid-cols-4">
            <Reveal className="md:col-span-2 md:row-span-2" delay={0.04}>
              <article className="grid h-full min-h-[34rem] bg-[#f7f3eb] md:grid-rows-[minmax(0,1fr)_auto]">
                <div className="min-h-[28rem]">
                  <EditorialFigure className="h-full w-full" palette={portraitProduct.product.palette} />
                </div>
                <div className="border-t border-black/7 px-6 py-6 md:px-8">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-black/42">
                    {portraitProduct.product.collection}
                  </p>
                  <h2 className="mt-3 max-w-xl font-serif text-4xl leading-[0.96] text-[var(--color-ink)]">
                    {portraitProduct.product.editorialNote}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-black/58">
                    {portraitProduct.product.story}
                  </p>
                  <Link
                    className="mt-6 inline-flex rounded-full border border-black/14 px-5 py-3 text-[0.72rem] uppercase tracking-[0.28em] text-black/72 transition-colors hover:border-black/28 hover:text-black"
                    href={buildLocalizedHref(`/product/${portraitProduct.product.slug}`, locale)}
                  >
                    {dictionary.general.explore}
                  </Link>
                </div>
              </article>
            </Reveal>

            {showcaseItems.slice(4, 8).map((item, index) => (
              <Reveal delay={0.08 + index * 0.03} key={item.id}>
                <CollectionProductTile
                  aspect={index < 2 ? "portrait" : "square"}
                  item={item}
                  locale={locale}
                />
              </Reveal>
            ))}
          </div>

          {heroProduct ? (
            <div className="grid gap-px bg-black/8 md:grid-cols-4">
              <Reveal className="md:col-span-4" delay={0.06}>
                <article className="bg-[#f7f3eb]">
                  <div className="grid md:grid-cols-2">
                    <div className="relative min-h-[30rem] border-b border-black/7 md:border-b-0 md:border-r">
                      <div className="absolute inset-0 p-6 md:p-8">
                        <ProductVisual
                          aspect="landscape"
                          locale={locale}
                          product={heroProduct.product}
                          showOverlayMeta={false}
                          tone="light"
                          variantIndex={heroProduct.variantIndex}
                        />
                      </div>

                      <div className="absolute inset-x-8 bottom-8 max-w-xl">
                        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-black/42">
                          {dictionary.collection.editorialEyebrow}
                        </p>
                        <h2 className="mt-3 font-serif text-4xl leading-[0.96] text-[var(--color-ink)] md:text-5xl">
                          {heroProduct.product.name}
                        </h2>
                        <p className="mt-4 max-w-xl text-base leading-7 text-black/58">
                          {heroProduct.product.description}
                        </p>
                        <Link
                          className="mt-6 inline-flex rounded-full border border-black/14 px-5 py-3 text-[0.72rem] uppercase tracking-[0.28em] text-black/72 transition-colors hover:border-black/28 hover:text-black"
                          href={buildLocalizedHref(`/product/${heroProduct.product.slug}`, locale)}
                        >
                          {dictionary.general.viewPiece}
                        </Link>
                      </div>
                    </div>

                    <div className="grid min-h-[30rem] md:grid-rows-[minmax(0,1fr)_auto]">
                      <div className="p-6 md:p-8">
                        <div className="h-full rounded-[1.2rem] border border-black/8 bg-[linear-gradient(180deg,#faf7f0_0%,#f2ece1_100%)] p-4">
                          <ProductDetailBoard
                            className="h-full w-full"
                            product={heroProduct.product}
                            variantIndex={heroProduct.variantIndex}
                          />
                        </div>
                      </div>

                      <div className="border-t border-black/7 px-6 py-6 md:px-8">
                        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-black/42">
                          {dictionary.general.materialFocus}
                        </p>
                        <p className="mt-3 max-w-xl font-serif text-3xl leading-tight text-[var(--color-ink)]">
                          {heroProduct.product.materials.join(" · ")}
                        </p>
                        <p className="mt-4 max-w-xl text-sm leading-6 text-black/58">
                          {dictionary.collection.readyBody}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
          ) : null}

          <div className="grid gap-px bg-black/8 md:grid-cols-4">
            <Reveal className="md:col-span-2" delay={0.07}>
              <article className="grid h-full min-h-[24rem] bg-[#101215] text-[var(--color-ivory)] md:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)]">
                <div className="border-b border-white/8 p-6 md:border-b-0 md:border-r md:p-8">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42">
                    {dictionary.collection.editorialEyebrow}
                  </p>
                  <h2 className="mt-4 max-w-lg font-serif text-4xl leading-[0.96] text-[var(--color-ivory)]">
                    {dictionary.collection.editorialTitle}
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-white/62">
                    {dictionary.collection.editorialBody}
                  </p>
                </div>

                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div className="space-y-4">
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42">
                      {dictionary.collection.readyEyebrow}
                    </p>
                    <p className="font-serif text-3xl leading-tight text-[var(--color-ivory)]">
                      {dictionary.collection.readyBody}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    {(heroProduct?.product.colors ?? []).map((color) => (
                      <span
                        className="h-3 w-3 rounded-full border border-white/16"
                        key={color.name}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            {showcaseItems.slice(8, 10).map((item, index) => (
              <Reveal delay={0.09 + index * 0.03} key={item.id}>
                <CollectionProductTile aspect="portrait" item={item} locale={locale} />
              </Reveal>
            ))}
          </div>

          <div className="grid gap-px bg-black/8 md:grid-cols-4">
            <Reveal className="md:col-span-2 md:row-span-2" delay={0.08}>
              <article className="grid h-full min-h-[32rem] bg-[#f8f4ec] md:grid-rows-[minmax(0,1fr)_auto]">
                <div className="min-h-[28rem]">
                  <EditorialFigure
                    className="h-full w-full"
                    kind="stride"
                    palette={strideProduct.product.palette}
                  />
                </div>

                <div className="border-t border-black/7 px-6 py-6 md:px-8">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-black/42">
                    {strideProduct.product.collection}
                  </p>
                  <h2 className="mt-3 max-w-lg font-serif text-4xl leading-[0.96] text-[var(--color-ink)]">
                    {strideProduct.product.name}
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-black/58">
                    {strideProduct.product.editorialNote}
                  </p>
                </div>
              </article>
            </Reveal>

            {showcaseItems.slice(10, 16).map((item, index) => (
              <Reveal delay={0.1 + index * 0.03} key={item.id}>
                <CollectionProductTile
                  aspect={index < 2 ? "square" : "portrait"}
                  item={item}
                  locale={locale}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
