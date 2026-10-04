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
    ? "Seçkin Projelerimiz & Portföy"
    : "Featured Projects & Portfolio";

  return {
    title,
    description: isTr
      ? "Farklı sektörlerdeki işletmeler için hayata geçirdiğimiz modern web tasarım, online satış ve müşteri kazandıran dijital reklam projelerimizi inceleyin."
      : "Explore our portfolio of bespoke web platforms, online ordering systems, and high-converting digital acquisition projects.",
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

  return (
    <>
      <Header lang={lang} />
      <ProjectsClient lang={lang} />
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </>
  );
}
