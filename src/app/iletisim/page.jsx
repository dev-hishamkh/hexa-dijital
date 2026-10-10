import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp/FloatingWhatsApp";
import ContactClient from "./ContactClient";

export const metadata = {
  title: "İletişim | Hexa Dijital",
  description:
    "Hexa Dijital ile iletişime geçin. Bursa'da işletmenizi yerinde ziyaret ediyor, kesintisiz web yazılım ve reklam desteği sunuyoruz.",
  keywords: [
    "Hexa Dijital iletişim",
    "Hexa Dijital telefon",
    "Bursa web tasarım iletişim",
    "Bursa reklam ajansı randevu",
    "Nilüfer web tasarım telefon",
  ],
  alternates: {
    canonical: "https://hexadijital.com/iletisim",
  },
  openGraph: {
    title: "İletişim | Hexa Dijital",
    description: "Hexa Dijital doğrudan proje hattı ve yerinde keşif masası.",
    url: "https://hexadijital.com/iletisim",
    siteName: "Hexa Dijital",
    locale: "tr_TR",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header lang="tr" />
      <ContactClient lang="tr" />
      <Footer lang="tr" />
      <FloatingWhatsApp lang="tr" />
    </>
  );
}
