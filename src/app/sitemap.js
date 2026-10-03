export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://hexadijital.com";
  const languages = ["tr", "en"];

  const routes = [
    "",
    "/hizmetler",
    "/projeler",
    "/bursa-web-tasarim",
    "/bursa-web-yazilim",
    "/bursa-yerel-seo-haritalar",
    "/iletisim",
  ];

  const sitemapEntries = [];

  languages.forEach((lang) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1.0 : route.includes("bursa") ? 0.9 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
