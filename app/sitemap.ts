import type { MetadataRoute } from "next";
import articles from "../public/articles.json";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://confus-terrain.fr",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://confus-terrain.fr/articles",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...articles.map((article) => ({
      url: `https://confus-terrain.fr/articles/${article.id}`,
      lastModified: new Date(article.publication_date),
      changeFrequency: "daily" as const,
      priority: 0.5,
    })),
  ];
}
