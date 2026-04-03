import type { Metadata } from "next";
import { BrandManifesto } from "@/components/sections/brand-manifesto";
import { CommunityInvite } from "@/components/sections/community-invite";
import { FeaturedCollection } from "@/components/sections/featured-collection";
import { HomeCategoryShowcase } from "@/components/sections/home-category-showcase";
import { HomeHero } from "@/components/sections/home-hero";
import { MaterialVision } from "@/components/sections/material-vision";
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
  const metadata = buildMetadata({
    description: dictionary.seo.homeDescription,
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      title: dictionary.seo.homeTitle,
    },
    title: dictionary.seo.homeTitle,
    twitter: {
      ...metadata.twitter,
      title: dictionary.seo.homeTitle,
    },
  };
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const locale = getLocaleFromSearchParams(await searchParams);

  return (
    <>
      <HomeHero locale={locale} />
      <FeaturedCollection locale={locale} />
      <BrandManifesto locale={locale} />
      <HomeCategoryShowcase locale={locale} />
      <MaterialVision locale={locale} />
      <CommunityInvite locale={locale} />
    </>
  );
}
