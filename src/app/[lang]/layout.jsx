import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "@/styles/globals.css";

// Modern Keskin Sans-Serif Fontu
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

// İkonik Editoryal İtalik Serif Fontu (inspire & convert / Vision)
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://hexadijital.com"),
  title: {
    template: "%s | Hexa Dijital - Bursa Web Tasarım & Yazılım Ajansı",
    default: "Bursa Web Tasarım & Yazılım Ajansı | Hexa Dijital",
  },
  description:
    "Hexa Dijital; Bursa merkezli, yüksek dönüşüm odaklı web tasarım, özel web yazılım ve SEO stratejileri üreten yeni nesil dijital ajanstır.",
  alternates: {
    languages: {
      tr: "/tr",
      en: "/en",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
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
