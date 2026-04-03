import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductConfigurator } from "@/components/forms/product-configurator";
import { Reveal } from "@/components/motion/reveal";
import { ProductCard } from "@/components/ui/product-card";
import { ProductGallery } from "@/components/ui/product-gallery";
import { buildLocalizedHref, getDictionary, getLocaleFromSearchParams } from "@/lib/i18n";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/lib/site-data";
import { buildMetadata } from "@/lib/metadata";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string | string[] }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = getLocaleFromSearchParams(await searchParams);
  const dictionary = getDictionary(locale);
  const product = getProductBySlug(slug, locale);

  if (!product) {
    return buildMetadata({
      description: dictionary.notFound.body,
      path: `/product/${slug}`,
      title: dictionary.notFound.eyebrow,
    });
  }

  return buildMetadata({
    description: product.description,
    path: `/product/${product.slug}`,
    title: product.name,
  });
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params, searchParams }: ProductPageProps) {
  const { slug } = await params;
  const locale = getLocaleFromSearchParams(await searchParams);
  const dictionary = getDictionary(locale);
  const product = getProductBySlug(slug, locale);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug, locale);

  return (
    <>
      <section className="pb-16 pt-28 md:pt-36">
        <div className="page-shell">
          <Reveal className="mb-8">
            <Link
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--color-mist)] transition-colors hover:text-white"
              href={buildLocalizedHref("/collection", locale)}
            >
              <span aria-hidden="true">←</span>
              {dictionary.general.backToCollection}
            </Link>
          </Reveal>

          <div className="grid gap-12 xl:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.55fr)]">
            <Reveal>
              <ProductGallery locale={locale} product={product} />
            </Reveal>

            <Reveal delay={0.08} className="xl:sticky xl:top-28 xl:self-start">
              <div className="space-y-6">
                <ProductConfigurator
                  key={`${locale}-${product.slug}`}
                  locale={locale}
                  product={product}
                />

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
                  <div className="space-y-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                        {dictionary.general.productDetails}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[var(--color-silver)]">
                        {product.fit}
                      </p>
                    </div>

                    <ul className="space-y-3 border-t border-white/8 pt-5 text-sm leading-6 text-[var(--color-silver)]">
                      {product.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>

                    <div className="border-t border-white/8 pt-5">
                      <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                        {dictionary.general.delivery}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[var(--color-silver)]">
                        {dictionary.product.deliveryCopy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell border-t border-white/8">
        <div className="page-shell space-y-10">
          <Reveal className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-mist)]">
              {dictionary.general.relatedEyebrow}
            </p>
            <h2 className="font-serif text-4xl leading-[0.94] text-[var(--color-ivory)] md:text-5xl">
              {dictionary.general.relatedTitle}
            </h2>
          </Reveal>

          <div className="grid gap-8 xl:grid-cols-3">
            {relatedProducts.map((relatedProduct, index) => (
              <Reveal delay={index * 0.05} key={relatedProduct.slug}>
                <ProductCard locale={locale} priority={index === 0} product={relatedProduct} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
