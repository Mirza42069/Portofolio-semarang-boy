import type { MetadataRoute } from "next";

const baseUrl = (path: string) =>
  `https://vitram.sh${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl("/"),
      lastModified: new Date("2025-11-25"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: baseUrl("/about"),
      lastModified: new Date("2025-11-30"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: baseUrl("/projects"),
      lastModified: new Date("2025-11-30"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: baseUrl("/attribute"),
      lastModified: new Date("2025-11-30"),
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];
}
