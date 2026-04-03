import { defaultLocale, getDictionary } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/button-link";

const dictionary = getDictionary(defaultLocale);

export default function NotFound() {
  return (
    <div className="page-shell flex min-h-[70vh] items-center justify-center py-32">
      <div className="max-w-2xl space-y-6 text-center">
        <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-mist)]">
          {dictionary.notFound.eyebrow}
        </p>
        <h1 className="font-serif text-5xl leading-[0.94] text-[var(--color-ivory)] md:text-6xl">
          {dictionary.notFound.title}
        </h1>
        <p className="text-base leading-7 text-[var(--color-silver)]">
          {dictionary.notFound.body}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/collection">{dictionary.notFound.primary}</ButtonLink>
          <ButtonLink href="/" variant="secondary">
            {dictionary.notFound.secondary}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
