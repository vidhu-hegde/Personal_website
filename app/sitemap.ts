import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { siteConfig } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/ranked", "/projects", "/about", "/resume"];

  return [
    ...routes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified: new Date(project.sortDate),
    })),
  ];
}
