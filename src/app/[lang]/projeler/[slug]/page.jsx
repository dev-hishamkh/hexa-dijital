import { notFound } from "next/navigation";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp/FloatingWhatsApp";
import { projectsData } from "@/data/projectsData";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  const languages = ["tr", "en"];
  const params = [];

  languages.forEach((lang) => {
    projectsData.forEach((project) => {
      params.push({
        lang,
        slug: project.slug,
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const slug = resolvedParams?.slug;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Proje Bulunamadı",
    };
  }

  const isTr = lang === "tr";
  const metaTitle = isTr
    ? `${project.title} · Başarı Hikayesi | Hexa Dijital`
    : `${project.title} · Case Study | Hexa Digital`;

  const metaDesc = project.heroLead.slice(0, 158);

  return {
    title: metaTitle,
    description: metaDesc,
    keywords: [
      project.title,
      `${project.title} Bursa`,
      project.client,
      project.role,
      "web yazılım referansı",
      "Hexa Dijital başarı hikayeleri",
    ],
    openGraph: {
      title: `${metaTitle} | Hexa Dijital`,
      description: metaDesc,
      url: `https://hexadijital.com/${lang}/projeler/${project.slug}`,
      siteName: "Hexa Dijital",
      locale: isTr ? "tr_TR" : "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${metaTitle} | Hexa Dijital`,
      description: metaDesc,
    },
    alternates: {
      canonical: `https://hexadijital.com/${lang}/projeler/${project.slug}`,
      languages: {
        tr: `https://hexadijital.com/tr/projeler/${project.slug}`,
        en: `https://hexadijital.com/en/projeler/${project.slug}`,
      },
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const slug = resolvedParams?.slug;
  const isTr = lang === "tr";
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

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
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: `https://hexadijital.com/${lang}/projeler/${project.slug}`,
          },
        ],
      },
      {
        "@type": "Article",
        headline: project.title,
        description: project.heroLead,
        about: project.role,
        author: {
          "@type": "ProfessionalService",
          name: "HEXA Dijital",
          url: "https://hexadijital.com",
        },
        publisher: {
          "@type": "Organization",
          name: "Hexa Dijital",
          logo: {
            "@type": "ImageObject",
            url: "https://hexadijital.com/logo.svg",
          },
        },
        inLanguage: isTr ? "tr-TR" : "en-US",
        mainEntityOfPage: `https://hexadijital.com/${lang}/projeler/${project.slug}`,
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
      <ProjectDetailClient project={project} lang={lang} />
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </>
  );
}
