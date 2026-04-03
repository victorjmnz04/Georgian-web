import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { buildLocalizedHref, getDictionary, type Locale } from "@/lib/i18n";
import { getManifestoLines, getManifestoPanel } from "@/lib/site-data";

type BrandManifestoProps = {
  locale: Locale;
};

export function BrandManifesto({ locale }: BrandManifestoProps) {
  const dictionary = getDictionary(locale);
  const manifestoLines = getManifestoLines(locale);
  const panel = getManifestoPanel(locale);

  return (
    <section className="section-shell border-y border-white/8 bg-[rgba(244,238,227,0.02)]">
      <div className="page-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-start">
          <Reveal className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-mist)]">
                {dictionary.home.manifestoEyebrow}
              </p>
              <h2 className="max-w-3xl font-serif text-4xl leading-[0.94] text-[var(--color-ivory)] md:text-6xl">
                {dictionary.home.manifestoTitle}
              </h2>
            </div>

            <div className="space-y-4">
              {manifestoLines.map((line) => (
                <div
                  className="flex gap-4 border-t border-white/8 py-4 text-base leading-7 text-[var(--color-silver)]"
                  key={line}
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-gold)]" />
                  <p>{line}</p>
                </div>
              ))}
            </div>

            <ButtonLink href={buildLocalizedHref("/about", locale)} variant="secondary">
              {dictionary.home.manifestoButton}
            </ButtonLink>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.03] p-7 md:p-8">
              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-mist)]">
                    {panel.eyebrow}
                  </p>
                  <p className="mt-4 max-w-md font-serif text-3xl leading-tight text-[var(--color-ivory)]">
                    {panel.title}
                  </p>
                </div>

                <div className="space-y-5 border-t border-white/8 pt-6">
                  {panel.sections.map((section) => (
                    <div className="grid gap-2 md:grid-cols-[120px_minmax(0,1fr)]" key={section.label}>
                      <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-mist)]">
                        {section.label}
                      </p>
                      <p className="text-sm leading-6 text-[var(--color-silver)]">
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
