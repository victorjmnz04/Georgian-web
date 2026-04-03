import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";

type MetadataInput = {
  description?: string;
  path?: string;
  title?: string;
};

export function buildMetadata({
  description = siteConfig.description,
  path = "/",
  title,
}: MetadataInput = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | ${siteConfig.title}`;
  const canonical = new URL(path, siteConfig.url).toString();

  return {
    alternates: {
      canonical,
    },
    description,
    openGraph: {
      description,
      siteName: siteConfig.name,
      title: pageTitle,
      type: "website",
      url: canonical,
    },
    title: pageTitle,
    twitter: {
      card: "summary_large_image",
      description,
      title: pageTitle,
    },
  };
}
