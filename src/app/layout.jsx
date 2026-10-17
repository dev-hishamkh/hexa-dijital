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
    default: "Hexa Dijital | Yazılım, Tasarım & Reklam Ajansı",
  },
  description:
    "İşletmelere sadece güzel görünen değil, sahada çalışan sistemler kuruyoruz. Hızlı kurumsal siteler, işinizi kolaylaştıran yazılımlar ve gerçek müşteri getiren reklamlar.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico?v=6", sizes: "any" },
      { url: "/favicon-32x32.png?v=6", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=6", sizes: "16x16", type: "image/png" },
      { url: "/icon.png?v=6", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=6", sizes: "180x180", type: "image/png" },
    ],
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
