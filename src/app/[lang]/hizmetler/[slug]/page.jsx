import { notFound } from "next/navigation";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp/FloatingWhatsApp";
import { servicesData } from "@/data/servicesData";
import { getServiceDetailData } from "@/data/serviceDetailData";
import ServiceDetailClient from "./ServiceDetailClient";

export async function generateStaticParams() {
  const languages = ["tr", "en"];
  const params = [];

  languages.forEach((lang) => {
    const groups = servicesData[lang] || servicesData.tr;
    groups.forEach((dept) => {
      dept.services.forEach((service) => {
        params.push({
          lang,
          slug: service.slug,
        });
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const slug = resolvedParams?.slug;
  const data = getServiceDetailData(slug, lang);

  if (!data) {
    return {
      title: "Hizmet Bulunamadı | Hexa Dijital",
    };
  }

  const isTr = lang === "tr";
  const metaTitle = `${data.title} | Hexa Dijital`;
  const metaDesc = data.leadText.slice(0, 158);

  return {
    title: metaTitle,
    description: metaDesc,
    keywords: [
      data.name,
      `${data.name} Bursa`,
      "Bursa web tasarım",
      "Bursa özel web yazılım",
      data.departmentTitle,
      "Hexa Dijital",
    ],
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: `https://hexadijital.com/${lang}/hizmetler/${data.slug}`,
      siteName: "Hexa Dijital",
      locale: isTr ? "tr_TR" : "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDesc,
    },
    alternates: {
      canonical: `https://hexadijital.com/${lang}/hizmetler/${data.slug}`,
      languages: {
        tr: `https://hexadijital.com/tr/hizmetler/${data.slug}`,
        en: `https://hexadijital.com/en/hizmetler/${data.slug}`,
      },
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const slug = resolvedParams?.slug;
  const isTr = lang === "tr";

  const data = getServiceDetailData(slug, lang);

  if (!data) {
    notFound();
  }

  const relatedServices = data.relatedSlugs
    .map((rSlug) => getServiceDetailData(rSlug, lang))
    .filter(Boolean);

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
          {
            "@type": "ListItem",
            position: 3,
            name: data.title,
            item: `https://hexadijital.com/${lang}/hizmetler/${data.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        name: data.title,
        description: data.leadText,
        category: data.departmentTitle,
        provider: {
          "@type": "ProfessionalService",
          name: "HEXA Dijital",
          telephone: "+905519769406",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Nilüfer",
            addressLocality: "Bursa",
            addressCountry: "TR",
          },
        },
        areaServed: [
          { "@type": "City", name: "Bursa" },
          { "@type": "Country", name: "Türkiye" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: data.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    isTr
      ? `Merhaba Hexa Dijital, "${data.title}" hizmetiniz hakkında bilgi ve teklif almak istiyorum.`
      : `Hello Hexa Digital, I would like to inquire about "${data.title}".`,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang={lang} />
      <ServiceDetailClient
        data={data}
        relatedServices={relatedServices}
        lang={lang}
        whatsappMessage={whatsappMessage}
      />
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </>
  );
}
