// app/robots.ts
import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://maze-group.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/_vercel/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
