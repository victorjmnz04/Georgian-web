"use client";

import Link from "next/link";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { BrandWordmark } from "@/components/ui/brand-wordmark";
import { buildLocalizedHref, getDictionary, getLocaleFromSearchParams } from "@/lib/i18n";
import { navLinks, socialLinks } from "@/lib/site-data";
import { useSearchParams } from "next/navigation";

export function SiteFooter() {
  const searchParams = useSearchParams();
  const locale = getLocaleFromSearchParams(Object.fromEntries(searchParams.entries()));
  const dictionary = getDictionary(locale);

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/8 bg-[rgba(8,10,11,0.92)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(181,139,66,0.65),transparent)]" />
      <div className="page-shell relative py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-6">
            <BrandWordmark withEst />
            <p className="max-w-lg text-base leading-7 text-[var(--color-silver)]">
              {dictionary.footer.description}
            </p>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-mist)]">
              {dictionary.footer.location}
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                {dictionary.footer.navigate}
              </p>
              <div className="mt-5 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    className="block text-sm text-[var(--color-silver)] transition-colors hover:text-white"
                    href={buildLocalizedHref(link.href, locale)}
                    key={link.href}
                  >
                    {dictionary.header.nav[link.label.toLowerCase() as keyof typeof dictionary.header.nav]}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                {dictionary.footer.connect}
              </p>
              <div className="mt-5 space-y-3">
                {socialLinks.map((link) => (
                  <a
                    className="block text-sm text-[var(--color-silver)] transition-colors hover:text-white"
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                {dictionary.footer.newsletter}
              </p>
              <NewsletterForm compact key={`footer-newsletter-${locale}`} locale={locale} />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-6 text-xs uppercase tracking-[0.24em] text-white/40 md:flex-row md:items-center md:justify-between">
          <span>© 2026 GEORGIAN</span>
          <div className="flex gap-4">
            <span>{dictionary.legal.privacy}</span>
            <span>{dictionary.legal.terms}</span>
            <span>{dictionary.legal.shipping}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
