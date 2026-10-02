import Header from "@/components/layout/Header/Header";
import { projectsData } from "@/data/projectsData";

// Statik export için tüm olası dil ve slug kombinasyonlarını önceden bildiriyoruz
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
  const { lang, slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  return {
    title: project ? `${project.title} | Hexa Dijital` : "Proje Detayı",
    description: project ? project.description : "Proje detay sayfası.",
  };
}

export default async function ProjectDetailPage({ params }) {
  const { lang, slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  return (
    <>
      <Header lang={lang} />
      <main
        style={{
          paddingTop: "calc(var(--header-height) + 4rem)",
          minHeight: "100vh",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <span style={{ color: "var(--hexa-accent)", fontSize: "0.85rem" }}>
          {project?.category}
        </span>
        <h1 style={{ fontSize: "2.5rem", margin: "1rem 0" }}>
          {project?.title}
        </h1>
        <p
          style={{
            color: "var(--hexa-font-dim)",
            lineHeight: 1.6,
            fontSize: "1.1rem",
          }}
        >
          {project?.description}
        </p>
      </main>
    </>
  );
}
