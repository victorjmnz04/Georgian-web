import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary, type Locale } from "@/lib/i18n";
import { getMaterialVisionPanel } from "@/lib/site-data";

type MaterialVisionProps = {
  locale: Locale;
};

export function MaterialVision({ locale }: MaterialVisionProps) {
  const dictionary = getDictionary(locale);
  const panel = getMaterialVisionPanel(locale);

  return (
    <section className="section-shell">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.54fr)_minmax(0,0.46fr)] lg:items-start">
          <Reveal className="space-y-8">
            <SectionHeading
              description={dictionary.home.materialDescription}
              eyebrow={dictionary.home.materialEyebrow}
              title={dictionary.home.materialTitle}
            />

            <div className="grid gap-5">
              {dictionary.homePillars.map((pillar) => (
                <div
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5"
                  key={pillar.title}
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-mist)]">
                    {pillar.label}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-[var(--color-ivory)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-silver)]">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:pt-10">
            <div className="grid gap-5">
              <div className="rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(244,238,227,0.05)_0%,rgba(181,139,66,0.10)_100%)] p-7 md:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                  {panel.eyebrow}
                </p>
                <p className="mt-5 max-w-xl font-serif text-4xl leading-[0.96] text-[var(--color-ivory)]">
                  {panel.title}
                </p>
                <p className="mt-5 max-w-xl text-sm leading-6 text-[var(--color-silver)] md:text-base">
                  {panel.body}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {panel.highlights.map((item) => (
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5" key={item.label}>
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-mist)]">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[var(--color-silver)]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
