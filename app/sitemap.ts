// app/sitemap.ts
import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maze-group.com";

  // Define all routes
  const routes = ["", "/all-product", "/all-projects", "/welcome"];

  // Generate sitemap entries for each locale/route combination
  const sitemapEntries: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency:
        route === "" ? ("monthly" as const) : ("weekly" as const),
      priority: route === "" ? 1 : 0.9,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${baseUrl}/${l}${route}`])
        ),
      },
    }))
  );

  return sitemapEntries;
}
