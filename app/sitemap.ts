import type { MetadataRoute } from "next";
import { RESOURCES } from "./resources/resources-data";

const SITE_URL = "https://growthisbusiness.com";

// Once the pages listed in README.md ("Adding future service pages" /
// "Adding future industry pages") exist, add their routes here.
// Resource articles are pulled from resources-data.ts automatically —
// no manual edit needed here when a new one is published.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const resourceRoutes: MetadataRoute.Sitemap = RESOURCES.map((r) => ({
    url: `${SITE_URL}/resources/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/assessment`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/workforce-training`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...resourceRoutes,
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
