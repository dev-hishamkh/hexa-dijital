import { servicesData } from "@/data/servicesData";
import { projectsData } from "@/data/projectsData";

export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://hexadijital.com";
  const currentDate = new Date().toISOString();
  const sitemapEntries = [];

  // 1. Çekirdek Rotalar
  const coreRoutes = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/bursa-dijital-ajans", priority: 0.95, changeFrequency: "weekly" },
    { path: "/hizmetler", priority: 0.9, changeFrequency: "weekly" },
    { path: "/projeler", priority: 0.85, changeFrequency: "weekly" },
    { path: "/iletisim", priority: 0.85, changeFrequency: "monthly" },
  ];

  coreRoutes.forEach(({ path, priority, changeFrequency }) => {
    ["tr", "en"].forEach((lang) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${path}`,
        lastModified: currentDate,
        changeFrequency,
        priority,
        alternates: {
          languages: {
            tr: `${baseUrl}/tr${path}`,
            en: `${baseUrl}/en${path}`,
          },
        },
      });
    });
  });

  // 2. 24 Mikro Hizmet Sayfası
  const services = servicesData.tr.flatMap((dept) => dept.services);

  services.forEach((service) => {
    ["tr", "en"].forEach((lang) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/hizmetler/${service.slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.8,
        alternates: {
          languages: {
            tr: `${baseUrl}/tr/hizmetler/${service.slug}`,
            en: `${baseUrl}/en/hizmetler/${service.slug}`,
          },
        },
      });
    });
  });

  // 3. 6 Proje Detay Vaka Sayfası
  projectsData.forEach((project) => {
    ["tr", "en"].forEach((lang) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/projeler/${project.slug}`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.75,
        alternates: {
          languages: {
            tr: `${baseUrl}/tr/projeler/${project.slug}`,
            en: `${baseUrl}/en/projeler/${project.slug}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
