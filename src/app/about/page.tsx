import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary, getLocaleFromSearchParams } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

type SearchParams = Promise<{
  lang?: string | string[];
}>;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const locale = getLocaleFromSearchParams(await searchParams);
  const dictionary = getDictionary(locale);

  return buildMetadata({
    description: dictionary.about.description,
    path: "/about",
    title: dictionary.header.nav.about,
  });
}

export default async function AboutPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const locale = getLocaleFromSearchParams(await searchParams);
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero
        description={dictionary.about.heroDescription}
        eyebrow={dictionary.about.heroEyebrow}
        stats={dictionary.about.heroStats}
        title={dictionary.about.heroTitle}
      />

      <section className="section-shell">
        <div className="page-shell grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.9fr)] lg:items-start">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10">
              <div className="relative aspect-square">
                <Image
                  alt="GEORGIAN monogram"
                  className="object-cover object-center"
                  fill
                  priority
                  sizes="(min-width: 1280px) 42vw, (min-width: 768px) 90vw, 100vw"
                  src="/brand/monogram.jpeg"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,12,0.08)_0%,rgba(8,10,12,0.5)_100%)]" />
                <div className="absolute inset-6 rounded-[2rem] border border-white/10" />
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {dictionary.aboutChapters.map((chapter, index) => (
              <Reveal delay={index * 0.05} key={chapter.title}>
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                    {chapter.eyebrow}
                  </p>
                  <h2 className="mt-4 font-serif text-3xl leading-tight text-[var(--color-ivory)]">
                    {chapter.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-[var(--color-silver)]">
                    {chapter.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-white/8 bg-[rgba(244,238,227,0.02)]">
        <div className="page-shell space-y-10">
          <Reveal>
            <SectionHeading
              description={dictionary.about.principlesDescription}
              eyebrow={dictionary.about.principlesEyebrow}
              title={dictionary.about.principlesTitle}
            />
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-2">
            {dictionary.homePillars.map((pillar, index) => (
              <Reveal delay={index * 0.05} key={pillar.title}>
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-mist)]">
                    {pillar.label}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-[var(--color-ivory)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[var(--color-silver)]">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell grid gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-center">
          <Reveal className="space-y-6">
            <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-mist)]">
              {dictionary.about.futureEyebrow}
            </p>
            <h2 className="font-serif text-4xl leading-[0.94] text-[var(--color-ivory)] md:text-5xl">
              {dictionary.about.futureTitle}
            </h2>
            <p className="text-base leading-7 text-[var(--color-silver)]">
              {dictionary.about.futureDescription}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-5">
              <div className="rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(245,239,228,0.04)_0%,rgba(181,139,66,0.08)_100%)] p-7 md:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                  {dictionary.about.futureEyebrow}
                </p>
                <p className="mt-5 font-serif text-4xl leading-[0.96] text-[var(--color-ivory)]">
                  {dictionary.about.futureCardTitle}
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-mist)]">
                  {dictionary.about.futureCardEyebrow}
                </p>
                <p className="mt-4 text-sm leading-6 text-[var(--color-silver)]">
                  {dictionary.about.futureCardBody}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
