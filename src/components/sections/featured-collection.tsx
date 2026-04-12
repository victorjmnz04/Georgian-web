import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { ProductCard } from "@/components/ui/product-card";
import { buildLocalizedHref, getDictionary, type Locale } from "@/lib/i18n";
import { getFeaturedProducts } from "@/lib/site-data";

type FeaturedCollectionProps = {
  locale: Locale;
};

export function FeaturedCollection({ locale }: FeaturedCollectionProps) {
  const dictionary = getDictionary(locale);
  const featuredProducts = getFeaturedProducts(locale);

  return (
    <section className="section-shell">
      <div className="page-shell space-y-10">
        <div className="flex items-end justify-between gap-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-mist)]">
              {dictionary.home.featuredEyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <ButtonLink
              href={buildLocalizedHref("/collection", locale)}
              variant="secondary"
            >
              {dictionary.home.featuredNoteCta}
            </ButtonLink>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.slice(0, 4).map((product, index) => (
            <Reveal delay={index * 0.06} key={product.slug}>
              <ProductCard locale={locale} priority={index === 0} product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
