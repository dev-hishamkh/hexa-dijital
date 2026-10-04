import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp/FloatingWhatsApp";
import ServicesClient from "./ServicesClient";
import { servicesData } from "@/data/servicesData";

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const isTr = lang === "tr";

  const title = isTr
    ? "Hizmetlerimiz & Çözümlerimiz | Hexa Dijital"
    : "Our Services & Digital Solutions | Hexa Digital";

  const description = isTr
    ? "İşletmeniz için özel web siteleri, komisyonsuz paket servis sistemleri, Google Haritalar ilk sıra çalışmaları ve doğrudan müşteri getiren reklam yönetimi."
    : "Modern corporate websites, commission-free ordering platforms, Google Maps optimization, and targeted social media ads engineered to grow your business.";

  return {
    title,
    description,
    keywords: [
      "kurumsal web tasarım",
      "özel web yazılım",
      "komisyonsuz paket servis sistemi",
      "restoran adisyon kasa programı",
      "Google Haritalar ilk 3",
      "Instagram reklam yönetimi",
      "Google Ads yönetimi",
      "logo ve kurumsal kimlik tasarımı",
    ],
    openGraph: {
      title: `${title} | Hexa Dijital`,
      description,
      url: `https://hexadijital.com/${lang}/hizmetler`,
      siteName: "Hexa Dijital",
      locale: isTr ? "tr_TR" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://hexadijital.com/${lang}/hizmetler`,
      languages: {
        tr: "https://hexadijital.com/tr/hizmetler",
        en: "https://hexadijital.com/en/hizmetler",
      },
    },
  };
}

export default async function ServicesHubPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const isTr = lang === "tr";
  const groups = servicesData[lang] || servicesData.tr;

  const allServicesList = groups.flatMap((dept) =>
    dept.services.map((item) => ({
      "@type": "Service",
      name: item.name,
      url: `https://hexadijital.com/${lang}/hizmetler/${item.slug}`,
      category: dept.categoryTitle,
      provider: {
        "@type": "ProfessionalService",
        name: "HEXA Dijital",
        telephone: "+905519769406",
      },
      areaServed: [
        { "@type": "Country", name: "Türkiye" },
        { "@type": "AdministrativeArea", name: "Bursa" },
      ],
    })),
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: isTr ? "Ana Sayfa" : "Home",
            item: `https://hexadijital.com/${lang}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: isTr ? "Hizmetlerimiz" : "Services",
            item: `https://hexadijital.com/${lang}/hizmetler`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: isTr
          ? "Hexa Dijital Hizmet Kataloğu & Çözümler"
          : "Hexa Digital Master Service Architecture",
        numberOfItems: allServicesList.length,
        itemListElement: allServicesList.map((service, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          item: service,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang={lang} />
      <ServicesClient lang={lang} />
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </>
  );
}
