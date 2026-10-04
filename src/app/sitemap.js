import { servicesData } from "@/data/servicesData";
import { projectsData } from "@/data/projectsData";

export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://hexadijital.com";
  const languages = ["tr", "en"];
  const sitemapEntries = [];
  const currentDate = new Date();

  // 1. Ana Statik Sayfalar (Bursa Hub ve İletişim eklendi)
  const coreRoutes = [
    { route: "", priority: 1.0, changeFrequency: "daily" },
    {
      route: "/bursa-dijital-ajans",
      priority: 0.95,
      changeFrequency: "weekly",
    },
    { route: "/hizmetler", priority: 0.9, changeFrequency: "weekly" },
    { route: "/projeler", priority: 0.85, changeFrequency: "weekly" },
    { route: "/iletisim", priority: 0.85, changeFrequency: "monthly" },
  ];

  languages.forEach((lang) => {
    coreRoutes.forEach(({ route, priority, changeFrequency }) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: currentDate,
        changeFrequency,
        priority,
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
          priority: 0.8,
        });
      });
    });
  });

  // 3. Proje Detay Sayfaları (Vaka Analizleri)
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
