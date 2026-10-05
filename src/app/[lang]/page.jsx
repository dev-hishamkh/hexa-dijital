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
  const isTr = lang === "tr";

  return {
    title: {
      absolute: dict.metaTitle,
    },
    description: dict.metaDesc,
    keywords: [
      "Bursa web tasarım",
      "Bursa kurumsal web sitesi",
      "Bursa yazılım şirketi",
      "Bursa reklam ajansı",
      "Nilüfer web tasarım",
      "Osmangazi web tasarım",
      "Yıldırım web tasarım",
      "Mudanya web tasarım",
      "İnegöl web tasarım",
      "kurumsal web tasarım ajansı",
      "özel web yazılım Türkiye",
      "fabrika ve sanayi web siteleri",
      "klinik ve diş hekimi randevu sistemi",
      "restoran adisyon ve sipariş yazılımı",
      "Google Haritalar ilk sıra",
      "Google Ads reklam yönetimi",
      "Hexa Dijital",
      "Hexa Dijital Bursa",
    ],
    openGraph: {
      title: dict.metaTitle,
      description: dict.metaDesc,
      url: `https://hexadijital.com/${lang}`,
      siteName: "Hexa Dijital",
      locale: isTr ? "tr_TR" : "en_US",
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
      title: dict.metaTitle,
      description: dict.metaDesc,
      images: ["https://hexadijital.com/home/background.webp"],
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

  const faqSchemaData = isTr
    ? [
        {
          q: "Hexa Dijital nerede bulunuyor ve Bursa dışındaki işletmelerle süreç nasıl işliyor?",
          a: "Hexa Dijital merkez ofisi Bursa Nilüfer'dedir. Bursa genelindeki tüm işletmeleri doğrudan yerinde ziyaret edip masasında yüz yüze görüşüyoruz. İstanbul, Ankara, İzmir dahil olmak üzere Türkiye'nin tüm şehirlerindeki firmalarla ise online toplantılar (Google Meet/Zoom), resmi sözleşme ve kurumsal fatura ile aynı hız ve kalitede çalışıyoruz.",
        },
        {
          q: "Hangi sektörlere web tasarım, yazılım ve reklam hizmeti veriyorsunuz?",
          a: "Her sektöre özel altyapı kuruyoruz: Sanayi ve fabrikalar, inşaat ve mimarlık ofisleri, sağlık klinikleri ve diş hekimleri, restoran ve kafeler, avukatlık büroları, e-ticaret satıcıları, oto servisler ve yerel hizmet işletmeleri.",
        },
        {
          q: "Diğer web tasarım ajanslarından farkınız nedir, neden özel kodlama?",
          a: "Piyasadaki çoğu ajans hazır WordPress şablonlarını kopyalayıp onlarca hantal eklentiyle sitenizi yavaşlatır. Biz sıfırdan, temiz kodla site kuruyoruz. Siteniz telefonda bekleme yapmadan 1 saniyenin altında açılır, Google testlerinde tam puan alır ve rakiplerinizin önüne geçer.",
        },
        {
          q: "Proje fiyatlandırması nasıl yapılıyor, sonradan sürpriz ek masraf çıkar mı?",
          a: "Hayır. İşin kapsamı, kullanılacak altyapı ve teslim tarihi resmi sözleşmeyle baştan yazılı olarak belirlenir. Onaylanan teklif dışında teslimat anında veya sonrasında hiçbir gizli masrafla karşılaşmazsınız.",
        },
        {
          q: "Sitenin içeriklerini, görsellerini ve ürünlerini kendimiz güncelleyebilir miyiz?",
          a: "Elbette. Kod bilmenize gerek kalmadan menülerinizi, yazılarınızı, referanslarınızı ve fiyatlarınızı saniyeler içinde güncelleyebileceğiniz son derece sade, hızlı, güvenli ve Türkçe bir yönetim paneli veriyoruz.",
        },
        {
          q: "Tüm kaynak kodlar, alan adı ve verilerin mülkiyeti kime ait oluyor?",
          a: "Tüm kaynak kodlar, alan adı (domain) ve veritabanı %100 şirketinize tescil edilir. Hexa Dijital olarak sizi kendimize bağımlı kılmayız; mülkiyet tamamen şirketinize aittir.",
        },
      ]
    : [
        {
          q: "Where is Hexa Digital located and do you serve clients outside of Bursa?",
          a: "Hexa Digital is headquartered in Nilüfer / Bursa. We conduct on-site visits across Bursa, while partnering with companies nationwide across Turkey and globally via video conferences and binding legal contracts.",
        },
        {
          q: "Which industries do you provide web design and custom software for?",
          a: "We serve all industries: Manufacturing, construction, architecture, dental and healthcare clinics, restaurants, law firms, e-commerce stores, automotive repair, and B2B enterprises.",
        },
        {
          q: "What differentiates you from other web design agencies?",
          a: "Most agencies resell slow WordPress templates packed with bloated plugins. We build fast, custom web systems from scratch, hitting 100/100 performance scores and securing competitive edges.",
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
      ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://hexadijital.com/#organization",
        name: "HEXA Dijital",
        legalName: "Hexa Dijital Web Tasarım ve Yazılım Şirketi",
        alternateName: [
          "Hexa Dijital",
          "Hexa Dijital Bursa",
          "Hexa Dijital Yazılım Ajansı",
          "Hexa Web Tasarım",
          "Hexa Digital",
        ],
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
        hasMap: "https://maps.google.com/?q=Bursa+Nilufer+Hexa+Dijital",
        areaServed: [
          { "@type": "Country", name: "Türkiye" },
          { "@type": "City", name: "Bursa" },
          { "@type": "City", name: "İstanbul" },
          { "@type": "City", name: "Ankara" },
          { "@type": "City", name: "İzmir" },
          { "@type": "AdministrativeArea", name: "Nilüfer" },
          { "@type": "AdministrativeArea", name: "Osmangazi" },
          { "@type": "AdministrativeArea", name: "Yıldırım" },
          { "@type": "AdministrativeArea", name: "Mudanya" },
          { "@type": "AdministrativeArea", name: "İnegöl" },
        ],
        knowsAbout: [
          "Kurumsal Web Tasarım",
          "Özel Web Yazılımı",
          "Bursa Web Tasarım Ajansı",
          "Fabrika ve Sanayi Web Siteleri",
          "İnşaat ve Mimarlık Portfolyo Siteleri",
          "Klinik ve Diş Hekimi Randevu Sistemleri",
          "Restoran Komisyonsuz Paket Servis ve Adisyon",
          "Google Haritalar 1. Sıra Yerel SEO",
          "Google Ads ve Meta Reklam Yönetimi",
          "E-Ticaret ve Sanal POS Entegrasyonları",
          "Arama Motoru Optimizasyonu (SEO)",
        ],
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
            closes: "18:00",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "32",
          bestRating: "5",
          worstRating: "1",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Hexa Dijital Hizmet Kataloğu",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Özel Web Yazılımı & Kurumsal Web Tasarım",
                description:
                  "Tüm cihazlarda 1 saniyenin altında açılan, hazır şablon barındırmayan modern şirket siteleri.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Restoran Sipariş & Kasa Otomasyonu",
                description:
                  "Restoran ve kafeler için komisyonsuz sipariş ve masa adisyon kasa programları.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Klinik & Salon Otomatik Randevu Sistemi",
                description:
                  "Diş hekimleri, klinikler ve kuaförler için 7/24 çalışan, WhatsApp onaylı online randevu takvimi.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Google Haritalar İlk Sıra & Reklam Yönetimi",
                description:
                  "İşletmeleri aramalarda doğrudan üst sıralara taşıyan ve telefon çaldıran reklam yönetimi.",
              },
            },
          ],
        },
        sameAs: [
          "https://instagram.com/hexadijital",
          "https://facebook.com/hexadijitall",
          "https://youtube.com/@hexadijital",
          "https://tiktok.com/@hexadijital",
          "https://x.com/hexadijital",
          "https://tr.pinterest.com/hexadijital",
        ],
      },
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
