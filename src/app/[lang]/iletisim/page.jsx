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

  const title = isTr ? "İletişim & Proje Masası" : "Contact & Project Desk";

  const description = isTr
    ? "Hexa Dijital ile iletişime geçin. Bursa genelinde işletmenizi doğrudan yerinde ziyaret ediyor; web yazılım, sipariş sistemleri ve dijital büyüme projelerinizi masanızda planlıyoruz."
    : "Connect with Hexa Digital. We meet on-site across Bursa to plan bespoke web software, ordering automation, and performance marketing directly at your table.";

  return {
    title,
    description,
    keywords: [
      "Hexa Dijital iletişim",
      "Bursa web tasarım iletişim",
      "Bursa dijital ajans telefon",
      "Bursa yazılım şirketi adres",
      "Nilüfer web tasarım randevu",
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
      ? "Hexa Dijital doğrudan proje hattı ve Bursa geneli yerinde keşif masası."
      : "Hexa Digital direct project desk and on-site consultation hub.",
    mainEntity: {
      "@type": "ProfessionalService",
      name: "HEXA Dijital",
      telephone: "+905519769406",
      url: `https://hexadijital.com/${lang}`,
      areaServed: "Bursa",
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
