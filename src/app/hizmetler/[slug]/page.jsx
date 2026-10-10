import { notFound } from "next/navigation";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp/FloatingWhatsApp";
import { servicesData } from "@/data/servicesData";
import { getServiceDetailData } from "@/data/serviceDetailData";
import ServiceDetailClient from "./ServiceDetailClient";

export async function generateStaticParams() {
  const groups = servicesData.tr;
  return groups.flatMap((dept) =>
    dept.services.map((service) => ({
      slug: service.slug,
    })),
  );
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const data = getServiceDetailData(slug, "tr");

  if (!data) {
    return {
      title: "Hizmet Bulunamadı",
    };
  }

  const rawTitle = data.title || data.name;
  const metaTitle = rawTitle.includes("Hexa Dijital")
    ? rawTitle
    : `${rawTitle} | Hexa Dijital`;

  const metaDesc = (data.leadText || data.summary || "").slice(0, 158);

  const ogImageUrl = data.imageUrl?.startsWith("http")
    ? data.imageUrl
    : `https://hexadijital.com${data.imageUrl}`;

  return {
    title: metaTitle,
    description: metaDesc,
    keywords: [
      data.name,
      `${data.name} Bursa`,
      `${data.name} Nilüfer`,
      `${data.name} Osmangazi`,
      "bursa web yazılım",
      "bursa dijital ajans",
      data.departmentTitle,
      "Hexa Dijital",
      "Hexa Dijital Bursa",
    ],
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: `https://hexadijital.com/hizmetler/${data.slug}`,
      siteName: "Hexa Dijital",
      locale: "tr_TR",
      type: "article",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${rawTitle} - Hexa Dijital`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDesc,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `https://hexadijital.com/hizmetler/${data.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const data = getServiceDetailData(slug, "tr");

  if (!data) {
    notFound();
  }

  const relatedServices = (data.relatedSlugs || [])
    .map((rSlug) => getServiceDetailData(rSlug, "tr"))
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
            name: "Ana Sayfa",
            item: "https://hexadijital.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Hizmetlerimiz",
            item: "https://hexadijital.com/hizmetler",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: data.title || data.name,
            item: `https://hexadijital.com/hizmetler/${data.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `https://hexadijital.com/hizmetler/${data.slug}#service`,
        name: data.title || data.name,
        description: data.leadText || data.summary,
        category: data.departmentTitle,
        provider: {
          "@type": "ProfessionalService",
          "@id": "https://hexadijital.com/#organization",
          name: "HEXA Dijital",
          telephone: "+905519769406",
          url: "https://hexadijital.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Nilüfer",
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
        },
        areaServed: [
          { "@type": "Country", name: "Türkiye" },
          { "@type": "City", name: "Bursa" },
          { "@type": "AdministrativeArea", name: "Nilüfer" },
          { "@type": "AdministrativeArea", name: "Osmangazi" },
          { "@type": "AdministrativeArea", name: "Yıldırım" },
          { "@type": "AdministrativeArea", name: "Mudanya" },
          { "@type": "AdministrativeArea", name: "Gemlik" },
          { "@type": "AdministrativeArea", name: "İnegöl" },
        ],
      },
      ...(data.faq && data.faq.length > 0
        ? [
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
          ]
        : []),
    ],
  };

  const whatsappMessage = encodeURIComponent(
    `Merhaba Hexa Dijital, "${data.title || data.name}" hizmetiniz hakkında bilgi ve teklif almak istiyorum.`,
  );

  return (
    <>
      <script
        id="schema-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />
      <Header />
      <ServiceDetailClient
        data={data}
        relatedServices={relatedServices}
        lang="tr"
        whatsappMessage={whatsappMessage}
      />
      <Footer />
      <FloatingWhatsApp lang="tr" />
    </>
  );
}
