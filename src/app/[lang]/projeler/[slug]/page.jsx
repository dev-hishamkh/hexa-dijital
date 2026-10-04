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
    ? `${project.title} · Başarı Hikayesi & Vaka Analizi`
    : `${project.title} · Case Study & Proven Impact`;

  return {
    title: metaTitle,
    description: project.heroLead.slice(0, 158),
    openGraph: {
      title: `${metaTitle} | Hexa Dijital`,
      description: project.heroLead.slice(0, 158),
      url: `https://hexadijital.com/${lang}/projeler/${project.slug}`,
      siteName: "Hexa Dijital",
      locale: isTr ? "tr_TR" : "en_US",
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const slug = resolvedParams?.slug;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header lang={lang} />
      <ProjectDetailClient project={project} lang={lang} />
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </>
  );
}
