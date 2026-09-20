import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: "https://summit.afrifoodnetwork.com", lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: "https://summit.afrifoodnetwork.com/about", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://summit.afrifoodnetwork.com/summit-2026", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://summit.afrifoodnetwork.com/speakers", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://summit.afrifoodnetwork.com/afse-2025", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://summit.afrifoodnetwork.com/united-by-food", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://summit.afrifoodnetwork.com/partner-with-us", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://summit.afrifoodnetwork.com/contact", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://summit.afrifoodnetwork.com/press", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
