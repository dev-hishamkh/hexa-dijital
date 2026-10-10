import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp/FloatingWhatsApp";
import { servicesData } from "@/data/servicesData";
import BursaAgencyClient from "./BursaAgencyClient";

export const metadata = {
  title: "Bursa Yazılım, Tasarım & Reklam Ajansı | Hexa Dijital",
  description:
    "Bursa'daki işletmelere sahada çalışan çözümler: Hızlı web siteleri, işi çözen özel yazılımlar, akılda kalıcı tasarımlar ve doğrudan müşteri getiren reklamlar.",
  keywords: [
    // Ana Yerel Çatı
    "bursa web tasarım",
    "bursa yazılım ajansı",
    "bursa reklam ajansı",
    "bursa dijital ajans",
    "bursa özel yazılım",

    // GSC Verilerinde Öne Çıkanlar
    "bursa web siteleri",
    "bursa logo tasarımı",
    "bursa kurumsal kimlik",
    "bursa sosyal medya ajansı",
    "local seo bursa",
    "bursa web sitesi yapan firmalar",
    "bursa toptan sipariş sistemi",
    "bursa işletme otomasyonu",
    "bursa google ads",
    "bursa meta reklamları",
    "bursa google yorum yönetimi",
    "bursa dükkan giydirme",

    // Bursa'nın Tüm İlçeleri
    "nilüfer web tasarım",
    "osmangazi web tasarım",
    "yıldırım web tasarım",
    "mudanya web tasarım",
    "gemlik seo",
    "inegöl web tasarım",
    "orhangazi web tasarım",
    "karacabey web tasarım",
    "mustafakemalpaşa web tasarım",
    "gürsu web tasarım",
    "kestel web tasarım",
    "yenişehir web tasarım",
    "iznik web tasarım",
    "orhaneli web tasarım",
    "keles web tasarım",
    "büyükorhan web tasarım",
    "harmancık web tasarım",
  ],
  alternates: {
    canonical: "https://hexadijital.com/bursa-dijital-ajans",
  },
  openGraph: {
    title: "Bursa Yazılım, Tasarım & Reklam Ajansı | Hexa Dijital",
    description:
      "Bursa'daki işletmelere sahada çalışan çözümler: Hızlı web siteleri, işi çözen özel yazılımlar, akılda kalıcı tasarımlar ve doğrudan müşteri getiren reklamlar.",
    url: "https://hexadijital.com/bursa-dijital-ajans",
    siteName: "Hexa Dijital",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://hexadijital.com/home/background.webp",
        secureUrl: "https://hexadijital.com/home/background.webp",
        width: 1200,
        height: 630,
        type: "image/webp",
        alt: "Hexa Dijital Bursa - Yazılım, Tasarım ve Reklam Ajansı",
      },
    ],
  },
};
export default function BursaDigitalAgencyPage() {
  const groups = servicesData.tr;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: "https://hexadijital.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Bursa Web Tasarım & Dijital Ajans",
            item: "https://hexadijital.com/bursa-dijital-ajans",
          },
        ],
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://hexadijital.com/#bursa-hub",
        name: "HEXA Dijital - Bursa Web Tasarım & Reklam Ajansı",
        legalName: "Hexa Dijital Web Tasarım ve Yazılım Şirketi",
        url: "https://hexadijital.com/bursa-dijital-ajans",
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
          { "@type": "AdministrativeArea", name: "Gemlik" },
          { "@type": "AdministrativeArea", name: "İnegöl" },
          { "@type": "AdministrativeArea", name: "Gürsu" },
          { "@type": "AdministrativeArea", name: "Kestel" },
          { "@type": "AdministrativeArea", name: "Orhangazi" },
          { "@type": "AdministrativeArea", name: "Karacabey" },
          { "@type": "AdministrativeArea", name: "Mustafakemalpaşa" },
          { "@type": "AdministrativeArea", name: "Yenişehir" },
          { "@type": "AdministrativeArea", name: "İznik" },
          { "@type": "AdministrativeArea", name: "Orhaneli" },
          { "@type": "AdministrativeArea", name: "Keles" },
          { "@type": "AdministrativeArea", name: "Büyükorhan" },
          { "@type": "AdministrativeArea", name: "Harmancık" },
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
        id="schema-bursa"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />
      <Header lang="tr" />
      <main style={{ minHeight: "100vh", backgroundColor: "var(--hexa-bg)" }}>
        <BursaAgencyClient groups={groups} isTr={true} lang="tr" />
      </main>
      <Footer lang="tr" />
      <FloatingWhatsApp lang="tr" />
    </>
  );
}
