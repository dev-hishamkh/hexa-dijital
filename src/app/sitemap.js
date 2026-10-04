import { servicesData } from "@/data/servicesData";
import { projectsData } from "@/data/projectsData";

export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://hexadijital.com";
  const languages = ["tr", "en"];
  const sitemapEntries = [];
  const currentDate = new Date();

  // 1. Ana Statik Sayfalar
  const coreRoutes = ["", "/hizmetler", "/projeler"];

  languages.forEach((lang) => {
    coreRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: currentDate,
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1.0 : 0.9,
      });
    });
  });

  // 2. 24 Mikro Hizmet Sayfaları (Silo Landing Pages)
  languages.forEach((lang) => {
    const groups = servicesData[lang] || servicesData.tr;
    groups.forEach((dept) => {
      dept.services.forEach((service) => {
        sitemapEntries.push({
          url: `${baseUrl}/${lang}/hizmetler/${service.slug}`,
          lastModified: currentDate,
          changeFrequency: "weekly",
          priority: 0.85,
        });
      });
    });
  });

  // 3. Proje Detay Sayfaları
  languages.forEach((lang) => {
    projectsData.forEach((project) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/projeler/${project.slug}`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.75,
      });
    });
  });

  return sitemapEntries;
}
