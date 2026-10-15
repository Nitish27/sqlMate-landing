import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://sqlmate.io";
const lastModified = new Date("2026-04-13T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/support/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
