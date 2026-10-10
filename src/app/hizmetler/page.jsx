import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp/FloatingWhatsApp";
import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Hizmetlerimiz & Çözümlerimiz | Hexa Dijital",
  description:
    "İşletmeniz için modern kurumsal web siteleri, sektörel özel yazılımlar, Google Haritalar ilk sıra çalışmaları ve doğrudan müşteri getiren reklam yönetimi.",
  keywords: [
    "kurumsal web tasarım",
    "özel web yazılım",
    "sanayi ve fabrika web sitesi",
    "klinik randevu yazılımı",
    "Google Haritalar ilk 3",
    "Instagram reklam yönetimi",
    "Google Ads yönetimi",
    "logo ve kurumsal kimlik tasarımı",
  ],
  alternates: {
    canonical: "https://hexadijital.com/hizmetler",
  },
  openGraph: {
    title: "Hizmetlerimiz & Çözümlerimiz | Hexa Dijital",
    description:
      "Modern kurumsal web siteleri, sektörel özel yazılımlar ve Google Haritalar ilk sıra çalışmaları.",
    url: "https://hexadijital.com/hizmetler",
    siteName: "Hexa Dijital",
    locale: "tr_TR",
    type: "website",
  },
};

export default function ServicesHubPage() {
  return (
    <>
      <Header lang="tr" />
      <ServicesClient lang="tr" />
      <Footer lang="tr" />
      <FloatingWhatsApp lang="tr" />
    </>
  );
}
