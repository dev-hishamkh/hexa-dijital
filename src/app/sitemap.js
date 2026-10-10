import { servicesData } from "@/data/servicesData";
import { projectsData } from "@/data/projectsData";

export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://hexadijital.com";
  const currentDate = new Date().toISOString();
  const sitemapEntries = [];

  const coreRoutes = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/bursa-dijital-ajans", priority: 0.95, changeFrequency: "weekly" },
    { path: "/hizmetler", priority: 0.9, changeFrequency: "weekly" },
    { path: "/projeler", priority: 0.85, changeFrequency: "weekly" },
    { path: "/iletisim", priority: 0.85, changeFrequency: "monthly" },
  ];

  coreRoutes.forEach(({ path, priority, changeFrequency }) => {
    sitemapEntries.push({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency,
      priority,
    });
  });

  // 24 Mikro Hizmet
  servicesData.tr
    .flatMap((dept) => dept.services)
    .forEach((service) => {
      sitemapEntries.push({
        url: `${baseUrl}/hizmetler/${service.slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    });

  // 6 Referans Proje
  projectsData.forEach((project) => {
    sitemapEntries.push({
      url: `${baseUrl}/projeler/${project.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  });

  return sitemapEntries;
}
