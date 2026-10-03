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

const basePath =
  process.env.NODE_ENV === "production" ? "/hexa-dijital-final" : "";

export const metadata = {
  metadataBase: new URL("https://hexadijital.com"),
  title: {
    template: "%s | Hexa Dijital - Bursa Web Tasarım & Yazılım Ajansı",
    default: "Bursa Web Tasarım & Yazılım Ajansı | Hexa Dijital",
  },
  description:
    "Hexa Dijital; Bursa merkezli, yüksek dönüşüm odaklı web tasarım, özel web yazılım ve SEO stratejileri üreten yeni nesil dijital ajanstır.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${jakarta.variable} ${newsreader.variable}`}
    >
      <head>
        <link
          rel="preload"
          href={`${basePath}/logo.svg`}
          as="image"
          type="image/svg+xml"
        />
        <script src={`${basePath}/theme.js`} />
      </head>
      {/* suppressHydrationWarning: Tarayıcı eklentilerinin (ColorZilla vb.) body'ye attribute basıp hata üretmesini engeller */}
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
