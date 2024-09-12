import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://webbro-consults.com.ng",
      lastModified: new Date(),
    },
    {
      url: "https://webbro-consults.com.ng/#about",
      lastModified: new Date(),
    },
    {
      url: "https://webbro-consults.com.ng/#contact",
      lastModified: new Date(),
    },
  ];
}
