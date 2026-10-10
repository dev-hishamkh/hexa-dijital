import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp/FloatingWhatsApp";
import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Projelerimiz & Referanslarımız | Hexa Dijital",
  description:
    "Sanayiden sağlığa, inşaattan e-ticarete farklı sektörlerdeki işletmeler için geliştirdiğimiz kurumsal web siteleri ve özel yazılımları inceleyin.",
  keywords: [
    "Hexa Dijital referanslar",
    "web tasarım referansları",
    "kurumsal web sitesi örnekleri",
    "özel yazılım başarı hikayeleri",
    "Bursa web tasarım projeleri",
  ],
  alternates: {
    canonical: "https://hexadijital.com/projeler",
  },
  openGraph: {
    title: "Projelerimiz & Referanslarımız | Hexa Dijital",
    description:
      "İşletmeler için kurduğumuz gerçek web yazılım ve büyüme projeleri.",
    url: "https://hexadijital.com/projeler",
    siteName: "Hexa Dijital",
    locale: "tr_TR",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Header lang="tr" />
      <ProjectsClient lang="tr" />
      <Footer lang="tr" />
      <FloatingWhatsApp lang="tr" />
    </>
  );
}
