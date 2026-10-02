import Header from "@/components/layout/Header/Header";
import Hero from "@/components/sections/Hero/Hero";

// Statik Export için zorunlu olan dil parametreleri (Hatanın çözümü)
export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const isTr = lang === "tr";

  return {
    title: isTr
      ? "Bursa Web Tasarım & Web Yazılım Ajansı | Hexa Dijital"
      : "Bursa Web Design & Software Agency | Hexa Dijital",
    description: isTr
      ? "Bursa kurumsal web tasarım, özel web yazılım ve SEO ajansı. Hızlı, Google Haritalarda ilk 3 odaklı ve yüksek dönüşüm sağlayan modern web siteleri üretiyoruz."
      : "Bursa web design, custom development, and SEO agency. We craft high-speed, conversion-driven web architectures.",
    alternates: {
      canonical: `https://hexadijital.com/${lang}`,
      languages: {
        tr: "https://hexadijital.com/tr",
        en: "https://hexadijital.com/en",
      },
    },
  };
}

export default async function HomePage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Hexa Dijital",
    image: "https://hexadijital.com/og-image.jpg",
    url: `https://hexadijital.com/${lang}`,
    telephone: "+905000000000",
    priceRange: "₺₺₺",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nilüfer",
      addressLocality: "Bursa",
      postalCode: "16110",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.215,
      longitude: 28.932,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.instagram.com/hexadijital",
      "https://www.linkedin.com/company/hexadijital",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang={lang} />
      <main>
        <Hero lang={lang} />
      </main>
    </>
  );
}
