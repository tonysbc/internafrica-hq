import type { MetadataRoute } from "next";
import { programs } from "@/data/programs";

const baseUrl = "https://www.internafricahq.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/team", "/faq", "/apply"];

  return [
    ...pages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
    })),
    ...programs.map((program) => ({
      url: `${baseUrl}/programs/${program.slug}`,
      lastModified: new Date(),
    })),
  ];
}
