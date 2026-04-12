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
        <Reveal className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(245,239,228,0.04)_0%,rgba(181,139,66,0.08)_100%)]">
          <div className="flex flex-col items-center justify-center gap-8 p-10 text-center md:p-14">
            <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-mist)]">
              Newsletter
            </p>
            <h2 className="max-w-2xl font-serif text-3xl leading-[0.96] text-[var(--color-ivory)] md:text-4xl">
              {dictionary.contact.newsletterTitle}
            </h2>
            <div className="w-full max-w-md">
              <NewsletterForm key={`community-newsletter-${locale}`} locale={locale} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
