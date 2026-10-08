import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp/FloatingWhatsApp";
import ContactClient from "./ContactClient";

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const isTr = lang === "tr";

  const title = isTr ? "İletişim" : "Contact";

  const description = isTr
    ? "Hexa Dijital ile iletişime geçin. Bursa'da işletmenizi yerinde ziyaret ediyor, tüm Türkiye için kesintisiz web yazılım ve reklam desteği sunuyoruz."
    : "Connect with Hexa Digital. We meet on-site across Bursa and provide seamless web software and advertising services nationwide.";

  return {
    title,
    description,
    keywords: [
      "Hexa Dijital iletişim",
      "Hexa Dijital telefon",
      "Bursa web tasarım iletişim",
      "Bursa reklam ajansı randevu",
      "Nilüfer web tasarım telefon",
    ],
    openGraph: {
      title: `${title} | Hexa Dijital`,
      description,
      url: `https://hexadijital.com/${lang}/iletisim`,
      siteName: "Hexa Dijital",
      locale: isTr ? "tr_TR" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://hexadijital.com/${lang}/iletisim`,
      languages: {
        tr: "https://hexadijital.com/tr/iletisim",
        en: "https://hexadijital.com/en/iletisim",
        "x-default": "https://hexadijital.com/tr/iletisim",
      },
    },
  };
}

export default async function ContactPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const isTr = lang === "tr";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: isTr ? "Hexa Dijital İletişim" : "Hexa Digital Contact",
    url: `https://hexadijital.com/${lang}/iletisim`,
    description: isTr
      ? "Hexa Dijital doğrudan proje hattı ve yerinde keşif masası."
      : "Hexa Digital direct project desk and on-site consultation hub.",
    mainEntity: {
      "@type": "ProfessionalService",
      name: "HEXA Dijital",
      telephone: "+905519769406",
      url: `https://hexadijital.com/${lang}`,
      areaServed: [
        { "@type": "Country", name: "Türkiye" },
        { "@type": "City", name: "Bursa" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bursa",
        addressRegion: "Nilüfer",
        addressCountry: "TR",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang={lang} />
      <ContactClient lang={lang} />
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </>
  );
}
