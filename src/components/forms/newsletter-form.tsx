"use client";

import type { FormEvent } from "react";
import { useState, useTransition } from "react";
import { getDictionary, type Locale } from "@/lib/i18n";

type NewsletterFormProps = {
  compact?: boolean;
  locale: Locale;
};

export function NewsletterForm({ compact = false, locale }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dictionary = getDictionary(locale);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    startTransition(async () => {
      try {
        const response = await fetch("/api/newsletter/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, locale }),
        });

        if (!response.ok) {
          const data = await response.json();
          setError(data.error || "Error al suscribirse");
          setSubmitted(false);
          return;
        }

        setSubmitted(true);
        setEmail("");
        setError(null);
      } catch {
        setError("Error de conexión. Por favor intenta de nuevo.");
        setSubmitted(false);
      }
    });
  };

  return (
    <form className={compact ? "space-y-3" : "space-y-4"} onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor={compact ? "footer-email" : "newsletter-email"}>
        {dictionary.forms.newsletter.placeholder}
      </label>
      <div className={compact ? "space-y-3" : "flex flex-col gap-3 sm:flex-row sm:items-center"}>
        <input
          className="w-full rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm text-[var(--color-ivory)] outline-none transition-colors placeholder:text-white/36 focus:border-[var(--color-gold)] sm:flex-1"
          id={compact ? "footer-email" : "newsletter-email"}
          onChange={(event) => {
            setEmail(event.target.value);
            if (submitted) {
              setSubmitted(false);
            }
            if (error) {
              setError(null);
            }
          }}
          placeholder={dictionary.forms.newsletter.placeholder}
          required
          type="email"
          value={email}
        />
        <button
          className="rounded-full bg-[var(--color-ivory)] px-6 py-3 text-sm uppercase tracking-[0.26em] text-[var(--color-ink)] transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-70 sm:min-w-[9rem]"
          disabled={isPending}
          type="submit"
        >
          {isPending ? dictionary.forms.newsletter.sending : dictionary.forms.newsletter.join}
        </button>
      </div>
      <p className="text-sm leading-6 text-[var(--color-silver)]">
        {error
          ? error
          : submitted
            ? dictionary.forms.newsletter.success
            : dictionary.forms.newsletter.idle}
      </p>
    </form>
  );
}
