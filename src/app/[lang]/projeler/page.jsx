import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp/FloatingWhatsApp";
import ProjectsClient from "./ProjectsClient";

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const isTr = lang === "tr";

  const title = isTr
    ? "Projelerimiz & Referanslarımız | Hexa Dijital"
    : "Our Projects & Portfolio | Hexa Digital";

  const description = isTr
    ? "Farklı sektörlerdeki işletmeler için geliştirdiğimiz web siteleri, restoran sipariş sistemleri ve reklam çalışmalarını inceleyin."
    : "Explore our portfolio of bespoke web platforms, online ordering systems, and high-converting advertising campaigns.";

  return {
    title,
    description,
    keywords: [
      "Hexa Dijital referanslar",
      "web tasarım referansları",
      "restoran sipariş sistemi projeleri",
      "kurumsal web sitesi örnekleri",
      "Bursa web tasarım projeleri",
    ],
    openGraph: {
      title,
      description,
      url: `https://hexadijital.com/${lang}/projeler`,
      siteName: "Hexa Dijital",
      locale: isTr ? "tr_TR" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://hexadijital.com/${lang}/projeler`,
      languages: {
        tr: "https://hexadijital.com/tr/projeler",
        en: "https://hexadijital.com/en/projeler",
      },
    },
  };
}

export default async function ProjectsPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const isTr = lang === "tr";

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
            name: isTr ? "Projelerimiz" : "Portfolio",
            item: `https://hexadijital.com/${lang}/projeler`,
          },
        ],
      },
      {
        "@type": "CollectionPage",
        name: isTr
          ? "Hexa Dijital Başarı Hikayeleri & Referanslar"
          : "Hexa Digital Verified Commercial Case Studies",
        description: isTr
          ? "İşletmeler için kurduğumuz gerçek web yazılım ve büyüme projeleri."
          : "Verified commercial web systems operating live in operations.",
        url: `https://hexadijital.com/${lang}/projeler`,
        provider: {
          "@type": "ProfessionalService",
          name: "HEXA Dijital",
          telephone: "+905519769406",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bursa",
            addressCountry: "TR",
          },
        },
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
      <ProjectsClient lang={lang} />
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </>
  );
}
