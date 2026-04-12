import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Reveal } from "@/components/motion/reveal";
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
      {/* Newsletter Section */}
      <section className="border-b border-white/8 pb-16 pt-28 md:pb-20 md:pt-36">
        <div className="page-shell">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-mist)]">
              Newsletter
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-[0.96] text-[var(--color-ivory)] md:text-5xl">
              {dictionary.contact.newsletterTitle}
            </h1>
            <div className="mt-8">
              <NewsletterForm key={`contact-newsletter-${locale}`} locale={locale} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-shell">
        <div className="page-shell">
          <Reveal className="mx-auto max-w-2xl">
            <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.03] p-6 md:p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                {dictionary.contact.formEyebrow}
              </p>
              <h2 className="mt-4 font-serif text-3xl text-[var(--color-ivory)] md:text-4xl">
                {dictionary.contact.formTitle}
              </h2>
              <div className="mt-8">
                <ContactForm key={`contact-form-${locale}`} locale={locale} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
