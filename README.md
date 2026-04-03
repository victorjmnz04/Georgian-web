# GEORGIAN

Premium fashion website for GEORGIAN, built as a scalable Next.js storefront foundation with strong editorial art direction, reusable UI, and refined motion.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Routes

- `/`
- `/collection`
- `/product/[slug]`
- `/about`
- `/contact`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run build
```

## Structure

```text
src/
  app/               Routes, metadata files, sitemap, OG image
  components/
    forms/           Newsletter, contact, product interaction
    layout/          Header and footer
    motion/          Scroll reveal, parallax, page transition
    sections/        Home page composition
    ui/              Shared visual components
  lib/               Brand data and metadata helpers
public/
  brand/             Provided logo and label assets
```

## Notes

- Product content is mocked in `src/lib/site-data.ts`.
- The visual system is prepared to scale into a real e-commerce backend.
- Brand imagery used in the experience lives in `public/brand`.
