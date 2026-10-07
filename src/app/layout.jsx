import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import "@/styles/globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport = {
  themeColor: "#0A0E17",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL("https://hexadijital.com"),
  title: {
    template: "%s | Hexa Dijital",
    default: "Hexa Dijital | Kurumsal Web Tasarım, Yazılım ve Reklam Ajansı",
  },
  description:
    "Bursa merkezli kurumsal web tasarım, sektöre özel web yazılımları ve doğrudan müşteri kazandıran dijital reklam yönetimi şirketi.",
  keywords: [
    "Bursa web tasarım",
    "Bursa dijital ajans",
    "Bursa reklam ajansı",
    "özel web yazılım",
    "kurumsal web sitesi",
  ],
  other: {
    "facebook-domain-verification": "4184ufn214t3spzhjleqzncfsqcp64",
  },
  openGraph: {
    title: "Hexa Dijital | Kurumsal Web Tasarım, Yazılım ve Reklam Ajansı",
    description:
      "Bursa merkezli kurumsal web tasarım, sektöre özel web yazılımları ve doğrudan müşteri kazandıran dijital reklam yönetimi şirketi.",
    url: "https://hexadijital.com",
    siteName: "Hexa Dijital",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://hexadijital.com/home/background.webp",
        secureUrl: "https://hexadijital.com/home/background.webp",
        width: 1200,
        height: 630,
        type: "image/webp",
        alt: "Hexa Dijital - Kurumsal Web Tasarım, Yazılım ve Reklam Ajansı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hexa Dijital | Kurumsal Web Tasarım, Yazılım ve Reklam Ajansı",
    description:
      "Bursa merkezli kurumsal web tasarım, sektöre özel web yazılımları ve doğrudan müşteri kazandıran dijital reklam yönetimi şirketi.",
    images: ["https://hexadijital.com/home/background.webp"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${jakarta.variable} ${newsreader.variable}`}
    >
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
