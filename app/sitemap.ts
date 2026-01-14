// app/sitemap.ts
import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getProductsByLocale } from "@/lib/data/products";
import { getProjectsByLocale } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maze-group.com";

  // Define all static routes
  const routes = ["", "/all-product", "/all-projects", "/welcome"];

  // Generate sitemap entries for static routes
  const staticEntries: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
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

  // Generate sitemap entries for product pages
  const products = getProductsByLocale('en'); // Get products from one locale
  const productEntries: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    products.map((product) => ({
      url: `${baseUrl}/${locale}/catalog/${product.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${baseUrl}/${l}/catalog/${product.id}`])
        ),
      },
    }))
  );

  // Generate sitemap entries for project pages
  const projects = getProjectsByLocale('en'); // Get projects from one locale
  const projectEntries: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${baseUrl}/${locale}/project-detail/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${baseUrl}/${l}/project-detail/${project.id}`])
        ),
      },
    }))
  );

  return [...staticEntries, ...productEntries, ...projectEntries];
}
