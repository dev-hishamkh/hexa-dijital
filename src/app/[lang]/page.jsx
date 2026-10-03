import Header from "@/components/layout/Header/Header";
import Hero from "@/components/sections/Hero/Hero";
import SelectedWorks from "@/components/sections/SelectedWorks/SelectedWorks";
import Manifesto from "@/components/sections/Manifesto/Manifesto";
import ServicesIndex from "@/components/sections/ServicesIndex/ServicesIndex";
import Process from "@/components/sections/Process/Process";
import FAQ from "@/components/sections/FAQ/FAQ";
import Footer from "@/components/layout/Footer/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp/FloatingWhatsApp";
import { dictionary } from "@/data/dictionary";

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const dict = dictionary[lang]?.seo || dictionary.tr.seo;

  return {
    title: dict.metaTitle,
    description: dict.metaDesc,
    keywords: [
      "Bursa web tasarım",
      "Bursa web yazılım",
      "Bursa web yazılım şirketi",
      "Bursa kurumsal web tasarım",
      "Bursa SEO ajansı",
      "Bursa Google Haritalar ilk 3",
      "Nilüfer web tasarım",
      "Osmangazi web tasarım",
      "Yıldırım web tasarım",
      "Mudanya web tasarım",
      "İnegöl web tasarım",
      "Özel web yazılım Bursa",
      "Next.js web geliştirme",
      "Restoran QR sipariş adisyon yazılımı",
    ],
    openGraph: {
      title: dict.metaTitle,
      description: dict.metaDesc,
      url: `https://hexadijital.com/${lang}`,
      siteName: "Hexa Dijital",
      locale: lang === "tr" ? "tr_TR" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://hexadijital.com/${lang}`,
      languages: {
        tr: "https://hexadijital.com/tr",
        en: "https://hexadijital.com/en",
      },
    },
  };
}

export default async function HomePage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const isTr = lang === "tr";

  // Google Arama Sonuçlarında Akordeon Kutucuklar (Rich Snippets) Çıkaran SSS Listesi
  const faqSchemaData = isTr
    ? [
        {
          q: "Bursa'da diğer web tasarım ajanslarından farkınız nedir, neden özel kodlama?",
          a: "Bursa'daki çoğu ajans hazır WordPress temalarını kopyalayıp onlarca hantal eklentiyle sitenizi yavaşlatır. Biz Next.js ile sıfırdan, temiz kodla mimari kuruyoruz. Siteniz 0.8 saniyenin altında açılır, Google Core Web Vitals testlerinde 100 puan alır ve rakiplerinizin önüne doğrudan geçer.",
        },
        {
          q: "Google Haritalar ve Bursa yerel aramalarında ilk 3 sıraya nasıl çıkarıyorsunuz?",
          a: "Sadece Nilüfer değil; Osmangazi, Yıldırım, İnegöl ve sanayi bölgelerindeki yerel arama sinyallerini haritanıza işliyoruz. Doğru JSON-LD yapılandırılmış verileri, yerel yetki backlinkleri ve sayfa açılış hızıyla algoritmanın aradığı tüm kriterleri sağlayarak ilk 3 sırayı kilitliyoruz.",
        },
        {
          q: "Proje fiyatlandırması nasıl yapılıyor, sonradan sürpriz ek masraf çıkar mı?",
          a: "Hayır. İşin kapsamı, kullanılacak teknolojiler ve teslim tarihi noter geçerliliğinde resmi sözleşmeyle belirlenir. Onaylanan teklif dışında teslimat anında veya sonrasında hiçbir gizli masrafla karşılaşmazsınız.",
        },
        {
          q: "Sitenin içeriklerini, görsellerini ve ürünlerini kendimiz güncelleyebilir miyiz?",
          a: "Elbette. Kod bilmenize gerek kalmadan menülerinizi, yazılarınızı, referanslarınızı ve fiyatlarınızı saniyeler içinde güncelleyebileceğiniz son derece sade, hızlı ve güvenli bir yönetim paneli entegre ediyoruz.",
        },
        {
          q: "Tüm kaynak kodlar, alan adı ve verilerin mülkiyeti kime ait oluyor?",
          a: "Tüm kaynak kodlar, lisanslar, alan adı (domain) ve bulut veritabanı doğrudan sizin adınıza tescil edilir. Hexa Dijital olarak sizi kendimize bağımlı kılmayız; mülkiyet %100 şirketinize aittir.",
        },
        {
          q: "Mevcut sitemizi yenilerken Google sıralamalarımızı ve trafiğimizi kaybeder miyiz?",
          a: "Asla. Mevcut sitenizdeki tüm URL otoritesini ve indekslenmiş sayfaları 301 yönlendirme protokolüyle sıfır kayıpla yeni altyapıya aktarıyoruz. Trafiğiniz kesilmez, aksine hız arttığı için sıralamalarınız yükselir.",
        },
      ]
    : [
        {
          q: "What differentiates you from other web design agencies in Bursa?",
          a: "Most agencies resell slow WordPress templates packed with bloated plugins. We build sub-second custom web systems on Next.js from scratch, hitting 100/100 Core Web Vitals and securing unfair competitive edges.",
        },
        {
          q: "How do you achieve top-3 rankings on Google Maps and regional search?",
          a: "We engineer precise schema markup, geographic relevance signals across Bursa's commercial corridors, and lightning-fast load times that satisfy Google's primary ranking signals.",
        },
        {
          q: "What is your pricing policy, are there hidden unexpected fees?",
          a: "None. All deliverables, timelines, and budgets are codified in transparent, legally binding contracts. The approved scope is the final invoice.",
        },
        {
          q: "Can our team update content, media, and services independently?",
          a: "Yes. We integrate lightweight, intuitive management dashboards allowing your non-technical personnel to update content, pricing, and case studies instantly.",
        },
        {
          q: "Who retains ownership of the source code, domain, and data?",
          a: "You retain 100% intellectual property, domain registration, and database ownership. We create no proprietary lock-ins.",
        },
        {
          q: "Can we migrate our existing site without losing SEO rankings?",
          a: "Yes. We execute meticulous 301 mapping and semantic URL transfer protocols to ensure zero traffic drop during migration.",
        },
      ];

  // Google İşletme Profilimizle %100 Uyumlu Zengin Yerel SEO JSON-LD Şeması
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://hexadijital.com/#organization",
        name: "HEXA Dijital",
        legalName: "Hexa Dijital Web Tasarım ve Yazılım Şirketi",
        alternateName: "Hexa Dijital Bursa",
        image: "https://hexadijital.com/logo.svg",
        url: `https://hexadijital.com/${lang}`,
        telephone: "+905519769406",
        priceRange: "₺₺₺",
        currenciesAccepted: "TRY, USD, EUR",
        paymentAccepted: "Bank Transfer, Credit Card",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Nilüfer / Bursa",
          addressLocality: "Bursa",
          addressRegion: "Marmara",
          postalCode: "16110",
          addressCountry: "TR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 40.215,
          longitude: 28.932,
        },
        // Tüm Bursa ve çevre ilçelerini kapsayan servis alanı
        areaServed: [
          { "@type": "AdministrativeArea", name: "Bursa" },
          { "@type": "City", name: "Nilüfer" },
          { "@type": "City", name: "Osmangazi" },
          { "@type": "City", name: "Yıldırım" },
          { "@type": "City", name: "Mudanya" },
          { "@type": "City", name: "İnegöl" },
          { "@type": "City", name: "Gemlik" },
          { "@type": "City", name: "Karacabey" },
          { "@type": "City", name: "Mustafakemalpaşa" },
        ],
        // Google Profilimizdeki Çalışma Saatleri: Haftanın her günü 09:00 - 17:00
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "09:00",
            closes: "17:00",
          },
        ],
        // Google Profilimizdeki 5.0 Yıldız ve 5 Gerçek Müşteri Değerlendirmesi
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "5",
          bestRating: "5",
          worstRating: "1",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Hexa Dijital Hizmet Mimarisi",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Bursa Kurumsal Web Tasarım",
                description:
                  "Sub-second açılış hızına sahip özel kodlanmış modern kurumsal web platformları.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Özel Web Yazılımı & Portal Geliştirme",
                description:
                  "ERP entegrasyonlu, veritabanı yönetimli, B2B ve sektörel özel web yazılımları.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Google Haritalar İlk 3 & Yerel SEO Dominasyonu",
                description:
                  "Bursa yerel aramalarında ilk 3 sıra hakimiyeti ve müşteri akışı motoru.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Restoran QR Menü & Sipariş Otomasyonu",
                description:
                  "Sıfır komisyonlu paket servis, QR menü ve adisyon entegrasyonu.",
              },
            },
          ],
        },
        sameAs: [
          "https://www.instagram.com/hexadijital",
          "https://www.facebook.com/hexadijitall",
          "https://www.youtube.com/@HEXADijital",
          "https://www.tiktok.com/@hexadijital",
          "https://x.com/hexadijital",
        ],
      },
      // GOOGLE ZENGİN ARAMA SONUCU: AKORDEON SSS ŞEMASI (FAQPage)
      {
        "@type": "FAQPage",
        "@id": `https://hexadijital.com/${lang}/#faq`,
        mainEntity: faqSchemaData.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": "https://hexadijital.com/#website",
        url: "https://hexadijital.com",
        name: "Hexa Dijital",
        publisher: {
          "@id": "https://hexadijital.com/#organization",
        },
        inLanguage: ["tr-TR", "en-US"],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang={lang} />
      <main>
        <Hero lang={lang} />
        <SelectedWorks lang={lang} />
        <Manifesto lang={lang} />
        <ServicesIndex lang={lang} />
        <Process lang={lang} />
        <FAQ lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </>
  );
}
