import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { getDictionary, type Locale } from "@/lib/i18n";
import { buildCollectionHref, getCategoryShowcase } from "@/lib/site-data";

type HomeCategoryShowcaseProps = {
  locale: Locale;
};

export function HomeCategoryShowcase({ locale }: HomeCategoryShowcaseProps) {
  const dictionary = getDictionary(locale);
  const categoryShowcase = getCategoryShowcase(locale);

  return (
    <section className="section-shell">
      <div className="page-shell space-y-10">
        <Reveal>
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-mist)]">
              {dictionary.home.categoriesEyebrow}
            </p>
            <h2 className="font-serif text-4xl leading-[0.94] text-[var(--color-ivory)] md:text-5xl">
              {dictionary.home.categoriesTitle}
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categoryShowcase.map((category, index) => (
            <Reveal delay={index * 0.05} key={category.id}>
              <Link
                className="group block h-full rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/18 hover:bg-white/[0.05]"
                href={buildCollectionHref(category.id, "featured", locale)}
              >
                <div className="flex h-full flex-col justify-between gap-12">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-serif text-4xl text-white/24 transition-colors duration-500 group-hover:text-white/34">
                      {category.number}
                    </span>
                    <span className="text-xs uppercase tracking-[0.28em] text-[var(--color-mist)]">
                      {dictionary.general.explore}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-serif text-3xl text-[var(--color-ivory)]">
                      {category.label}
                    </h3>
                    <p className="text-sm leading-6 text-[var(--color-silver)]">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
