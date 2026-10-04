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
    template: "%s | Hexa Dijital",
    default: "Hexa Dijital | Yazılım, Tasarım ve Reklam Ajansı",
  },
  description:
    "Hazır şablon kullanmadan, telefonda ve bilgisayarda anında açılan kurumsal web siteleri, komisyonsuz sipariş sistemleri ve doğrudan müşteri kazandıran reklam yönetimi.",
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
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
