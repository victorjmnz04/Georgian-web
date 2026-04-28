import Image from "next/image";
import { ParallaxMedia } from "@/components/motion/parallax-media";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { BrandWordmark } from "@/components/ui/brand-wordmark";
import { buildLocalizedHref, getDictionary, type Locale } from "@/lib/i18n";

type HomeHeroProps = {
  locale: Locale;
};

export function HomeHero({ locale }: HomeHeroProps) {
  const dictionary = getDictionary(locale);

  return (
    <section className="relative overflow-hidden border-b border-white/8 pb-16 pt-28 md:pb-20 md:pt-36">
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(181,139,66,0.12),transparent_26%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent_20%)]" />
      <div className="page-shell relative">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] xl:items-center">
          <Reveal className="flex flex-col items-start gap-10">
            <BrandWordmark className="h-auto w-[280px] md:w-[360px]" />
            
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
            <ParallaxMedia offset={18}>
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[rgba(18,20,24,0.88)] shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    alt="GEORGIAN Chapter 01"
                    className="object-cover object-[50%_65%]"
                    fill
                    priority
                    sizes="(min-width: 1280px) 54vw, (min-width: 768px) 90vw, 100vw"
                    src="/brand/monogram.jpeg"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,11,0.02)_0%,rgba(7,9,11,0.42)_100%)]" />
                  <div className="absolute inset-5 rounded-[1.8rem] border border-white/8" />
                </div>
              </div>
            </ParallaxMedia>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
