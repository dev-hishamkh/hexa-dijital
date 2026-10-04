import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp/FloatingWhatsApp";
import { servicesData } from "@/data/servicesData";
import BursaAgencyClient from "./BursaAgencyClient";

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const isTr = lang === "tr";

  const title = isTr
    ? "Bursa Dijital Ajans & Hakkımızda"
    : "Bursa Digital Agency & About Us";

  const description = isTr
    ? "İşletmenizi Bursa genelinde doğrudan yerinde ziyaret ediyor, firmanıza özel modern web siteleri, komisyonsuz sipariş sistemleri ve müşteri getiren reklam stratejileri kuruyoruz."
    : "We visit your business on-site across Bursa to engineer bespoke web platforms, commission-free ordering systems, and high-converting marketing strategies.";

  return {
    title,
    description,
    keywords: [
      "Bursa dijital ajans",
      "Bursa web tasarım şirketi",
      "Bursa yerinde web tasarım",
      "Bursa özel web yazılım",
      "Nilüfer web tasarım",
      "Osmangazi web tasarım",
      "Bursa reklam ajansı",
      "Hexa Dijital hakkında",
    ],
    openGraph: {
      title: `${title} | Hexa Dijital`,
      description,
      url: `https://hexadijital.com/${lang}/bursa-dijital-ajans`,
      siteName: "Hexa Dijital",
      locale: isTr ? "tr_TR" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://hexadijital.com/${lang}/bursa-dijital-ajans`,
      languages: {
        tr: "https://hexadijital.com/tr/bursa-dijital-ajans",
        en: "https://hexadijital.com/en/bursa-dijital-ajans",
      },
    },
  };
}

export default async function BursaDigitalAgencyPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const isTr = lang === "tr";
  const groups = servicesData[lang] || servicesData.tr;

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
            name: isTr
              ? "Bursa Dijital Ajans & Hakkımızda"
              : "Bursa Digital Agency & About Us",
            item: `https://hexadijital.com/${lang}/bursa-dijital-ajans`,
          },
        ],
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://hexadijital.com/#organization",
        name: "HEXA Dijital",
        legalName: "Hexa Dijital Web Tasarım ve Yazılım Şirketi",
        url: `https://hexadijital.com/${lang}/bursa-dijital-ajans`,
        telephone: "+905519769406",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Nilüfer / Bursa",
          addressLocality: "Bursa",
          addressRegion: "Marmara",
          postalCode: "16110",
          addressCountry: "TR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 40.215,
          longitude: 28.932,
        },
        areaServed: [
          { "@type": "City", name: "Bursa" },
          { "@type": "City", name: "Nilüfer" },
          { "@type": "City", name: "Osmangazi" },
          { "@type": "City", name: "Yıldırım" },
        ],
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
      <main style={{ minHeight: "100vh", backgroundColor: "var(--hexa-bg)" }}>
        <BursaAgencyClient groups={groups} isTr={isTr} lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </>
  );
}
