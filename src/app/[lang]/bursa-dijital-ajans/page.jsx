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
    ? "Bursa Web Tasarım & Dijital Reklam Ajansı | Hexa Dijital"
    : "Bursa Web Design & Digital Advertising Agency | Hexa Digital";

  const description = isTr
    ? "Bursa genelinde işletmenizi yerinde ziyaret ediyoruz. Hızlı açılan kurumsal web siteleri, sektörel özel yazılımlar ve masanızda yüz yüze planlanan reklam yönetimi."
    : "We visit your business on-site across Bursa. Fast-loading corporate websites, bespoke software architectures, and targeted advertising planned face-to-face.";

  return {
    title,
    description,
    keywords: [
      "Bursa web tasarım",
      "Bursa dijital ajans",
      "Bursa reklam ajansı",
      "Bursa web tasarım şirketi",
      "Bursa yerinde web tasarım",
      "Bursa özel web yazılım",
      "Nilüfer web tasarım",
      "Osmangazi web tasarım",
      "Yıldırım web tasarım",
      "Mudanya web tasarım",
      "Hexa Dijital Bursa",
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
              ? "Bursa Web Tasarım & Dijital Ajans"
              : "Bursa Web Design & Digital Agency",
            item: `https://hexadijital.com/${lang}/bursa-dijital-ajans`,
          },
        ],
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://hexadijital.com/#bursa-hub",
        name: "HEXA Dijital - Bursa Web Tasarım & Reklam Ajansı",
        legalName: "Hexa Dijital Web Tasarım ve Yazılım Şirketi",
        url: `https://hexadijital.com/${lang}/bursa-dijital-ajans`,
        telephone: "+905519769406",
        priceRange: "₺₺₺",
        currenciesAccepted: "TRY, USD, EUR",
        paymentAccepted: "Bank Transfer, Credit Card",
        hasMap: "https://maps.google.com/?q=Bursa+Nilufer+Hexa+Dijital",
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
          { "@type": "AdministrativeArea", name: "Nilüfer" },
          { "@type": "AdministrativeArea", name: "Osmangazi" },
          { "@type": "AdministrativeArea", name: "Yıldırım" },
          { "@type": "AdministrativeArea", name: "Mudanya" },
          { "@type": "AdministrativeArea", name: "İnegöl" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
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
