import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/ui/page-hero";
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
    description: dictionary.contact.description,
    path: "/contact",
    title: dictionary.header.nav.contact,
  });
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const locale = getLocaleFromSearchParams(await searchParams);
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero
        description={dictionary.contact.heroDescription}
        eyebrow={dictionary.contact.heroEyebrow}
        stats={dictionary.contact.heroStats}
        title={dictionary.contact.heroTitle}
      />

      <section className="section-shell">
        <div className="page-shell grid gap-8 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)]">
          <Reveal>
            <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                {dictionary.contact.formEyebrow}
              </p>
              <h2 className="mt-4 font-serif text-4xl text-[var(--color-ivory)]">
                {dictionary.contact.formTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-silver)]">
                {dictionary.contact.formDescription}
              </p>
              <div className="mt-8">
                <ContactForm key={`contact-form-${locale}`} locale={locale} />
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {dictionary.contactMoments.map((item, index) => (
              <Reveal delay={index * 0.05} key={item.title}>
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-mist)]">
                    {item.eyebrow}
                  </p>
                  <p className="mt-4 font-serif text-2xl text-[var(--color-ivory)]">
                    {item.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-white/8 bg-[rgba(244,238,227,0.02)]">
        <div className="page-shell grid gap-10 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)]">
          <Reveal className="space-y-6">
            <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-mist)]">
              {dictionary.contact.newsletterEyebrow}
            </p>
            <h2 className="font-serif text-4xl leading-[0.94] text-[var(--color-ivory)] md:text-5xl">
              {dictionary.contact.newsletterTitle}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-silver)]">
              {dictionary.contact.newsletterDescription}
            </p>
            <NewsletterForm key={`contact-newsletter-${locale}`} locale={locale} />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {dictionary.socialMoodboard.map((item, index) => (
              <Reveal delay={index * 0.04} key={item.title}>
                <div className="rounded-[1.75rem] border border-white/10 bg-[rgba(8,10,12,0.56)] p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-mist)]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-silver)]">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
