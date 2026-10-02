export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://hexadijital.com";
  const languages = ["tr", "en"];

  const routes = [
    "",
    "/hizmetler",
    "/projeler",
    "/bursa-nilufer-web-tasarim",
    "/iletisim",
  ];

  const sitemapEntries = [];

  languages.forEach((lang) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
