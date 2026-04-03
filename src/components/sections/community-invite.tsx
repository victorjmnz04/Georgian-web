import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Reveal } from "@/components/motion/reveal";
import { getDictionary, type Locale } from "@/lib/i18n";

type CommunityInviteProps = {
  locale: Locale;
};

export function CommunityInvite({ locale }: CommunityInviteProps) {
  const dictionary = getDictionary(locale);

  return (
    <section className="section-shell">
      <div className="page-shell">
        <Reveal className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(245,239,228,0.05)_0%,rgba(181,139,66,0.10)_100%)]">
          <div className="grid gap-10 p-8 md:p-10 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] lg:items-start">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-mist)]">
                {dictionary.home.communityEyebrow}
              </p>
              <h2 className="max-w-3xl font-serif text-4xl leading-[0.94] text-[var(--color-ivory)] md:text-5xl">
                {dictionary.home.communityTitle}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-[var(--color-silver)]">
                {dictionary.home.communityDescription}
              </p>
              <NewsletterForm key={`community-newsletter-${locale}`} locale={locale} />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {dictionary.socialMoodboard.map((item) => (
                <div
                  className="rounded-[1.75rem] border border-white/10 bg-[rgba(10,12,15,0.52)] p-5"
                  key={item.title}
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-mist)]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-silver)]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
