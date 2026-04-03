"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { BrandWordmark } from "@/components/ui/brand-wordmark";
import { buildLocalizedHref, getDictionary, getLocaleFromSearchParams } from "@/lib/i18n";
import { navLinks } from "@/lib/site-data";

const navKeyMap = {
  Brand: "about",
  Collection: "collection",
  Community: "contact",
  Home: "home",
} as const;

export function SiteHeader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { damping: 28, stiffness: 180 });
  const closeMenu = () => setIsOpen(false);
  const locale = getLocaleFromSearchParams(Object.fromEntries(searchParams.entries()));
  const dictionary = getDictionary(locale);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 28);
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const floating = pathname === "/" && !isScrolled && !isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        floating
          ? "bg-transparent"
          : "border-b border-white/8 bg-[rgba(9,11,13,0.78)] backdrop-blur-xl"
      }`}
    >
      <div className="page-shell relative flex items-center justify-between py-5">
        <Link className="relative z-20" href={buildLocalizedHref("/", locale)} onClick={closeMenu}>
          <BrandWordmark compact withEst={!floating} />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            const navKey = navKeyMap[link.label as keyof typeof navKeyMap];

            return (
              <Link
                className={`text-xs uppercase tracking-[0.32em] transition-colors ${
                  active ? "text-[var(--color-ivory)]" : "text-white/56 hover:text-white"
                }`}
                href={buildLocalizedHref(link.href, locale)}
                key={link.href}
                onClick={closeMenu}
              >
                {dictionary.header.nav[navKey]}
              </Link>
            );
          })}
          <LanguageSwitcher locale={locale} />
          <Link
            className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.28em] text-[var(--color-ivory)] transition-colors hover:border-white/20 hover:bg-white/[0.08]"
            href={buildLocalizedHref("/collection", locale)}
            onClick={closeMenu}
          >
            {dictionary.header.cta}
          </Link>
        </nav>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className="relative z-20 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-[var(--color-ivory)] lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-5 bg-current transition-transform duration-300 ${
                isOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-transform duration-300 ${
                isOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-[var(--color-gold)]"
        style={{ scaleX: progress }}
      />

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="border-t border-white/8 bg-[rgba(8,10,11,0.95)] px-6 pb-8 pt-6 backdrop-blur-xl lg:hidden"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-6">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                const navKey = navKeyMap[link.label as keyof typeof navKeyMap];

                return (
                  <Link
                    className={`block font-serif text-3xl transition-colors ${
                      active ? "text-[var(--color-ivory)]" : "text-white/70"
                    }`}
                    href={buildLocalizedHref(link.href, locale)}
                    key={link.href}
                    onClick={closeMenu}
                  >
                    {dictionary.header.nav[navKey]}
                  </Link>
                );
              })}

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                  {dictionary.header.mobileTitle}
                </p>
                <p className="mt-4 text-sm leading-6 text-[var(--color-silver)]">
                  {dictionary.header.mobileText}
                </p>
              </div>

              <LanguageSwitcher locale={locale} />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
