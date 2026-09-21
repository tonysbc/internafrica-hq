import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/success" },
    sitemap: "https://www.internafricahq.org/sitemap.xml",
  };
}
