import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { ProductCard } from "@/components/ui/product-card";
import { SectionHeading } from "@/components/ui/section-heading";
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
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-end">
          <Reveal>
            <SectionHeading
              description={dictionary.home.featuredDescription}
              eyebrow={dictionary.home.featuredEyebrow}
              title={dictionary.home.featuredTitle}
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[1.05rem] border border-white/8 bg-white/[0.02] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                {dictionary.home.featuredNoteEyebrow}
              </p>
              <p className="mt-4 text-base leading-7 text-[var(--color-silver)]">
                {dictionary.home.featuredNoteBody}
              </p>
              <ButtonLink
                className="mt-6"
                href={buildLocalizedHref("/collection", locale)}
                variant="secondary"
              >
                {dictionary.home.featuredNoteCta}
              </ButtonLink>
            </div>
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
