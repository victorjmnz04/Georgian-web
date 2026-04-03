import type { MetadataRoute } from "next";
import { products, siteConfig } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = ["", "/collection", "/about", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      changeFrequency: "weekly" as const,
      lastModified: new Date(),
      priority: route === "" ? 1 : 0.8,
      url: `${base}${route || "/"}`,
    })),
    ...products.map((product) => ({
      changeFrequency: "weekly" as const,
      lastModified: new Date(),
      priority: 0.7,
      url: `${base}/product/${product.slug}`,
    })),
  ];
}
