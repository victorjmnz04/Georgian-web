import Image from "next/image";
import { ParallaxMedia } from "@/components/motion/parallax-media";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { buildLocalizedHref, getDictionary, type Locale } from "@/lib/i18n";

type HomeHeroProps = {
  locale: Locale;
};

export function HomeHero({ locale }: HomeHeroProps) {
  const dictionary = getDictionary(locale);

  return (
    <section className="relative overflow-hidden border-b border-white/8 pb-20 pt-32 md:pb-24 md:pt-40">
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(181,139,66,0.16),transparent_26%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_20%)]" />
      <div className="page-shell relative space-y-12">
        <div className="grid gap-14 xl:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] xl:items-center">
          <Reveal className="space-y-10">
            <span className="inline-flex rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.34em] text-[var(--color-mist)]">
              {dictionary.home.heroEyebrow}
            </span>

            <div className="space-y-5">
              <h1 className="max-w-[11ch] font-serif text-5xl leading-[0.92] text-[var(--color-ivory)] md:text-7xl">
                {dictionary.home.heroTitle}
              </h1>
              <p className="max-w-xl text-base leading-7 text-[var(--color-silver)] md:text-lg">
                {dictionary.home.heroDescription}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={buildLocalizedHref("/collection", locale)}>
                {dictionary.home.heroPrimaryCta}
              </ButtonLink>
              <ButtonLink href={buildLocalizedHref("/about", locale)} variant="secondary">
                {dictionary.home.heroSecondaryCta}
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="xl:pl-6">
            <ParallaxMedia offset={22}>
              <div className="space-y-5">
                <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[rgba(18,20,24,0.88)] shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
                  <div className="relative aspect-[5/6]">
                    <Image
                      alt="GEORGIAN monogram hero asset"
                      className="object-cover object-top opacity-92"
                      fill
                      priority
                      sizes="(min-width: 1280px) 48vw, (min-width: 768px) 90vw, 100vw"
                      src="/brand/monogram.jpeg"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,11,0.02)_0%,rgba(7,9,11,0.58)_100%)]" />
                    <div className="absolute inset-6 rounded-[1.8rem] border border-white/10" />
                    <div className="absolute inset-x-8 bottom-8 max-w-md space-y-3">
                      <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-mist)]">
                        {dictionary.productCommon.chapterLabel}
                      </p>
                      <p className="font-serif text-3xl leading-tight text-[var(--color-ivory)] md:text-[2.6rem]">
                        {dictionary.home.imageCaption}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.42fr)]">
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                      {dictionary.home.noteEyebrow}
                    </p>
                    <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--color-silver)] md:text-base">
                      {dictionary.home.noteBody}
                    </p>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-[rgba(10,12,15,0.72)] p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                      {dictionary.home.materialCardEyebrow}
                    </p>
                    <p className="mt-4 font-serif text-2xl leading-tight text-[var(--color-ivory)]">
                      {dictionary.home.materialCardText}
                    </p>
                  </div>
                </div>
              </div>
            </ParallaxMedia>
          </Reveal>
        </div>

        <Reveal>
          <div className="grid gap-4 border-t border-white/8 pt-8 sm:grid-cols-3">
            {dictionary.heroStats.map((stat) => (
              <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.02] p-5" key={stat.label}>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                  {stat.label}
                </p>
                <p className="mt-3 font-serif text-2xl text-[var(--color-ivory)]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
