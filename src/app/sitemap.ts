import type { MetadataRoute } from "next";
import { plugins } from "@/data/plugins";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, priority: 1 },
    ...plugins.map((p) => ({
      url: `${site.url}/plugins/${p.slug}`,
      priority: 0.9,
    })),
  ];
}
