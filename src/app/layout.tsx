import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Suspense } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { BrandWordmark } from "@/components/ui/brand-wordmark";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    description: siteConfig.description,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    type: "website",
    url: siteConfig.url,
  },
  title: `${siteConfig.name} | ${siteConfig.title}`,
};

function HeaderFallback() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[rgba(9,11,13,0.78)] backdrop-blur-xl">
      <div className="page-shell relative flex items-center justify-between py-5">
        <Link href="/">
          <BrandWordmark compact withEst />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {["INICIO", "COLECCIÓN", "MARCA", "COMUNIDAD"].map((item) => (
            <span className="text-xs uppercase tracking-[0.32em] text-white/56" key={item}>
              {item}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}

function FooterFallback() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/8 bg-[rgba(8,10,11,0.92)]">
      <div className="page-shell relative py-14 md:py-20">
        <div className="space-y-6">
          <BrandWordmark withEst />
          <p className="max-w-lg text-base leading-7 text-[var(--color-silver)]">
            {siteConfig.description}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className="h-full scroll-smooth" lang="es">
      <body className="min-h-full overflow-x-hidden bg-background text-foreground">
        <div className="relative flex min-h-screen flex-col">
          <Suspense fallback={<HeaderFallback />}>
            <SiteHeader />
          </Suspense>
          <main className="flex-1">{children}</main>
          <Suspense fallback={<FooterFallback />}>
            <SiteFooter />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
