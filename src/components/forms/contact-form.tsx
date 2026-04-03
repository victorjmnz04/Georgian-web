"use client";

import type { FormEvent } from "react";
import { useState, useTransition } from "react";
import { getDictionary, type Locale } from "@/lib/i18n";

type ContactFormProps = {
  locale: Locale;
};

export function ContactForm({ locale }: ContactFormProps) {
  const dictionary = getDictionary(locale);
  const defaultSubject = dictionary.forms.contact.defaultSubject;
  const createInitialValues = () => ({
    email: "",
    message: "",
    name: "",
    subject: defaultSubject,
  });
  const [values, setValues] = useState(createInitialValues);
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof ReturnType<typeof createInitialValues>, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    startTransition(() => {
      setSubmitted(true);
      setValues(createInitialValues());
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="rounded-[1.5rem] border border-white/12 bg-white/[0.03] px-5 py-4 text-sm text-[var(--color-ivory)] outline-none transition-colors placeholder:text-white/36 focus:border-[var(--color-gold)]"
          onChange={(event) => updateField("name", event.target.value)}
          placeholder={dictionary.forms.contact.namePlaceholder}
          required
          type="text"
          value={values.name}
        />
        <input
          className="rounded-[1.5rem] border border-white/12 bg-white/[0.03] px-5 py-4 text-sm text-[var(--color-ivory)] outline-none transition-colors placeholder:text-white/36 focus:border-[var(--color-gold)]"
          onChange={(event) => updateField("email", event.target.value)}
          placeholder={dictionary.forms.contact.emailPlaceholder}
          required
          type="email"
          value={values.email}
        />
      </div>

      <input
        className="w-full rounded-[1.5rem] border border-white/12 bg-white/[0.03] px-5 py-4 text-sm text-[var(--color-ivory)] outline-none transition-colors placeholder:text-white/36 focus:border-[var(--color-gold)]"
        onChange={(event) => updateField("subject", event.target.value)}
        placeholder={dictionary.forms.contact.subjectPlaceholder}
        required
        type="text"
        value={values.subject}
      />

      <textarea
        className="min-h-40 w-full rounded-[1.5rem] border border-white/12 bg-white/[0.03] px-5 py-4 text-sm text-[var(--color-ivory)] outline-none transition-colors placeholder:text-white/36 focus:border-[var(--color-gold)]"
        onChange={(event) => updateField("message", event.target.value)}
        placeholder={dictionary.forms.contact.messagePlaceholder}
        required
        value={values.message}
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-ivory)] px-6 py-3 text-sm uppercase tracking-[0.26em] text-[var(--color-ink)] transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-70"
          disabled={isPending}
          type="submit"
        >
          {isPending ? dictionary.forms.contact.sending : dictionary.forms.contact.submit}
        </button>
        <p className="text-sm leading-6 text-[var(--color-silver)]">
          {submitted
            ? dictionary.forms.contact.successReply
            : dictionary.forms.contact.idleReply}
        </p>
      </div>
    </form>
  );
}
