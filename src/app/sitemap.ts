import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { WORK_PROJECTS } from "@/data/work";
import { SERVICES } from "@/data/services";
import { ENGAGEMENTS } from "@/data/engagements";

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = [{ url: SITE_URL, changeFrequency: "monthly", priority: 1 }];

  const workRoutes: MetadataRoute.Sitemap = WORK_PROJECTS.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const engagementRoutes: MetadataRoute.Sitemap = ENGAGEMENTS.map((engagement) => ({
    url: `${SITE_URL}/engagement/${engagement.id}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...home, ...workRoutes, ...serviceRoutes, ...engagementRoutes];
}
