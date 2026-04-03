"use client";

import { AnimatePresence, motion } from "framer-motion";
import { startTransition, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  buildLocalizedHref,
  getDictionary,
  localeMeta,
  locales,
  resolveLocale,
  type Locale,
} from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const dictionary = getDictionary(locale);

  const handleSelect = (nextLocale: Locale) => {
    const params = new URLSearchParams(searchParams.toString());

    startTransition(() => {
      router.replace(
        buildLocalizedHref(pathname, nextLocale, Object.fromEntries(params.entries())),
        { scroll: false },
      );
      setIsOpen(false);
    });
  };

  return (
    <div className="relative">
      <button
        aria-expanded={isOpen}
        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--color-ivory)] transition-colors hover:border-white/20 hover:bg-white/[0.06]"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        {resolveLocale(locale)}
        <span aria-hidden="true" className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-0 top-[calc(100%+0.75rem)] z-30 min-w-52 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[rgba(8,10,12,0.96)] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            exit={{ opacity: 0, y: -8 }}
            initial={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <p className="px-3 pb-2 pt-1 text-[0.62rem] uppercase tracking-[0.3em] text-[var(--color-mist)]">
              {dictionary.header.language}
            </p>
            <div className="space-y-1">
              {locales.map((item) => {
                const active = item === locale;

                return (
                  <button
                    className={`flex w-full items-center justify-between rounded-[1rem] px-3 py-3 text-left text-sm transition-colors ${
                      active
                        ? "bg-white/[0.08] text-[var(--color-ivory)]"
                        : "text-white/72 hover:bg-white/[0.05] hover:text-white"
                    }`}
                    key={item}
                    onClick={() => handleSelect(item)}
                    type="button"
                  >
                    <span>{localeMeta[item].nativeLabel}</span>
                    <span className="text-[0.62rem] uppercase tracking-[0.24em] text-white/40">
                      {item}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
