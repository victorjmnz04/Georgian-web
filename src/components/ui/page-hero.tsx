import { Reveal } from "@/components/motion/reveal";

type PageHeroProps = {
  description: string;
  eyebrow: string;
  stats?: ReadonlyArray<{ label: string; value: string }>;
  title: string;
};

export function PageHero({
  description,
  eyebrow,
  stats = [],
  title,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/8 pb-16 pt-32 md:pb-20 md:pt-40">
      <div className="page-shell">
        <Reveal className="grid gap-12 xl:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] xl:items-start">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex rounded-[999px] border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-[var(--color-mist)]">
              {eyebrow}
            </span>
            <h1 className="max-w-[11ch] font-serif text-5xl leading-[0.94] text-[var(--color-ivory)] md:text-7xl">
              {title}
            </h1>
          </div>

          <div className="space-y-8 xl:pt-3">
            <p className="max-w-lg text-base leading-7 text-[var(--color-silver)] md:text-lg">
              {description}
            </p>

            {stats.length ? (
              <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                {stats.map((stat) => (
                  <div
                    className="rounded-[1rem] border border-white/10 bg-white/[0.025] p-5"
                    key={stat.label}
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-mist)]">
                      {stat.label}
                    </p>
                    <p className="mt-3 font-serif text-2xl text-[var(--color-ivory)]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
