import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
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

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export default async function LangLayout({ children, params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${jakarta.variable} ${newsreader.variable}`}
    >
      <head>
        {/* LOGO.SVG'Yİ TELEFONDA İLK MİLİSANİYEDE ÖNBELLEĞE ALAN SİHİRLİ SATIR */}
        <link
          rel="preload"
          href={`${basePath}/logo.svg`}
          as="image"
          type="image/svg+xml"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('hexa-theme');
                  const theme = storedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
