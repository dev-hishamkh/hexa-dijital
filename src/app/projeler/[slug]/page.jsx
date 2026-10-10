import { notFound } from "next/navigation";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp/FloatingWhatsApp";
import { projectsData } from "@/data/projectsData";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Proje Bulunamadı",
    };
  }

  const metaTitle = `${project.title} · Başarı Hikayesi | Hexa Dijital`;
  const heroLeadText =
    typeof project.heroLead === "object"
      ? project.heroLead.tr
      : project.heroLead || "";

  const roleText =
    typeof project.role === "object" ? project.role.tr : project.role || "";

  const metaDesc = heroLeadText.slice(0, 158);

  const projectImageUrl = project.imageSrc?.startsWith("http")
    ? project.imageSrc
    : `https://hexadijital.com${project.imageSrc}`;

  return {
    title: metaTitle,
    description: metaDesc,
    keywords: [
      project.title,
      `${project.title} Bursa`,
      project.client,
      roleText,
      "web yazılım referansı",
      "Hexa Dijital başarı hikayeleri",
    ],
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: `https://hexadijital.com/projeler/${project.slug}`,
      siteName: "Hexa Dijital",
      locale: "tr_TR",
      type: "article",
      images: [
        {
          url: projectImageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} - Hexa Dijital Vaka Analizi`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDesc,
      images: [projectImageUrl],
    },
    alternates: {
      canonical: `https://hexadijital.com/projeler/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const heroLeadText =
    typeof project.heroLead === "object"
      ? project.heroLead.tr
      : project.heroLead || "";

  const roleText =
    typeof project.role === "object" ? project.role.tr : project.role || "";

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
            name: "Projelerimiz",
            item: "https://hexadijital.com/projeler",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: `https://hexadijital.com/projeler/${project.slug}`,
          },
        ],
      },
      {
        "@type": "Article",
        headline: project.title,
        description: heroLeadText,
        about: roleText,
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
        inLanguage: "tr-TR",
        mainEntityOfPage: `https://hexadijital.com/projeler/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        id="schema-project"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />
      <Header lang="tr" />
      <ProjectDetailClient project={project} lang="tr" />
      <Footer lang="tr" />
      <FloatingWhatsApp lang="tr" />
    </>
  );
}
