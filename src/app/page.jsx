import Header from "@/components/layout/Header/Header";
import Hero from "@/components/sections/Hero/Hero";
import SelectedWorks from "@/components/sections/SelectedWorks/SelectedWorks";
import Manifesto from "@/components/sections/Manifesto/Manifesto";
import ServicesIndex from "@/components/sections/ServicesIndex/ServicesIndex";
import Process from "@/components/sections/Process/Process";
import FAQ from "@/components/sections/FAQ/FAQ";
import Footer from "@/components/layout/Footer/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp/FloatingWhatsApp";

export const metadata = {
  title: "Hexa Dijital | Yazılım, Tasarım & Reklam Ajansı",
  description:
    "İşletmelere sadece güzel görünen değil, sahada çalışan sistemler kuruyoruz. Hızlı kurumsal siteler, işinizi kolaylaştıran yazılımlar ve gerçek müşteri getiren reklamlar.",
  keywords: [
    // Marka & Ana Çatı
    "Hexa Dijital",
    "web yazılım ajansı",
    "kurumsal web tasarım",
    "dijital reklam ajansı",
    "mobil uygulama geliştirme",

    // GSC Verilerinde En Çok Satan Yerel Hizmetler
    "bursa web tasarım",
    "bursa özel yazılım",
    "bursa logo tasarımı",
    "bursa kurumsal kimlik",
    "bursa sosyal medya ajansı",
    "bursa ürün çekimi",
    "local seo bursa",

    // B2B & Saha Otomasyonları
    "bayi sipariş sistemi",
    "komisyonsuz sipariş sistemi",
    "işletme otomasyonu",
    "google haritalar ilk sıra",
  ],
  alternates: {
    canonical: "https://hexadijital.com",
  },
  openGraph: {
    title: "Hexa Dijital | Yazılım, Tasarım & Reklam Ajansı",
    description:
      "İşletmelere sadece güzel görünen değil, sahada çalışan sistemler kuruyoruz. Hızlı kurumsal siteler, işinizi kolaylaştıran yazılımlar ve gerçek müşteri getiren reklamlar.",
    url: "https://hexadijital.com",
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
        alt: "Hexa Dijital - Yazılım, Tasarım ve Reklam Ajansı",
      },
    ],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://hexadijital.com/#organization",
        name: "HEXA Dijital",
        legalName: "Hexa Dijital Web Tasarım ve Yazılım Şirketi",
        alternateName: [
          "Hexa Dijital",
          "Hexa Dijital Bursa",
          "Hexa Dijital Yazılım Ajansı",
          "Hexa Web Tasarım",
          "Hexa Digital",
        ],
        image: "https://hexadijital.com/logo.svg",
        url: "https://hexadijital.com",
        telephone: "+905519769406",
        priceRange: "₺₺₺",
        currenciesAccepted: "TRY, USD, EUR",
        paymentAccepted: "Bank Transfer, Credit Card",
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
        hasMap: "https://maps.google.com/?q=Bursa+Nilufer+Hexa+Dijital",
        areaServed: [
          { "@type": "Country", name: "Türkiye" },
          { "@type": "City", name: "Bursa" },
          { "@type": "AdministrativeArea", name: "Nilüfer" },
          { "@type": "AdministrativeArea", name: "Osmangazi" },
          { "@type": "AdministrativeArea", name: "Yıldırım" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://hexadijital.com/#website",
        url: "https://hexadijital.com",
        name: "Hexa Dijital",
        publisher: {
          "@id": "https://hexadijital.com/#organization",
        },
        inLanguage: "tr-TR",
      },
    ],
  };

  return (
    <>
      <script
        id="schema-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />
      <Header lang="tr" />
      <main>
        <Hero lang="tr" />
        <SelectedWorks lang="tr" />
        <Manifesto lang="tr" />
        <ServicesIndex lang="tr" />
        <Process lang="tr" />
        <FAQ lang="tr" />
      </main>
      <Footer lang="tr" />
      <FloatingWhatsApp lang="tr" />
    </>
  );
}
