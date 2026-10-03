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
    ? "Web Tasarım, Özel Yazılım & Dijital Büyüme Sistemleri | Hexa Dijital"
    : "Bespoke Web Design, Software & Growth Media Services | Hexa Digital";

  const description = isTr
    ? "Bursa geneli ve Türkiye genelindeki işletmeler için 0.8s açılan kurumsal web siteleri, sıfır komisyonlu sipariş otomasyonları, Google Haritalar ilk 3 yerel SEO ve büyüme reklamları mimarisi."
    : "Sub-second corporate web platforms, commission-free ordering systems, Google Maps dominance, and growth media engineered across Bursa and Turkey.";

  return {
    title,
    description,
    keywords: [
      "Bursa web tasarım",
      "Bursa özel web yazılım",
      "kurumsal web siteleri",
      "restoran QR kodlu menü",
      "komisyonsuz paket servis sitesi",
      "adisyon ve kasa programı",
      "yapay zeka müşteri asistanı",
      "Google Haritalar 1. sıra SEO",
      "Instagram Facebook reklam yönetimi",
      "Bursa logo ve kurumsal kimlik tasarımı",
    ],
    openGraph: {
      title,
      description,
      url: `https://hexadijital.com/${lang}/hizmetler`,
      siteName: "Hexa Dijital",
      locale: lang === "tr" ? "tr_TR" : "en_US",
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

  // TÜM 24 MİKRO HİZMETİ VE 5 DEPARTMANI İÇEREN KAPSAMLI SCHEMA.ORG GRAFİĞİ
  const allServicesList = servicesData.flatMap((dept) =>
    dept.subCategories[0].items.map((item) => ({
      "@type": "Service",
      name: item.name,
      url: `https://hexadijital.com/${lang}/hizmetler/${item.slug}`,
      category: dept.title,
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
          ? "Hexa Dijital Hizmet Kataloğu & Dijital Çözümler"
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
