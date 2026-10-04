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
    title: {
      absolute: dict.metaTitle,
    },
    description: dict.metaDesc,
    keywords: [
      "özel web yazılım",
      "kurumsal web tasarım",
      "web yazılım ajansı",
      "reklam ajansı",
      "kurumsal web sitesi tasarımı",
      "komisyonsuz paket servis yazılımı",
      "restoran adisyon programı",
      "Google Haritalar ilk sıra",
      "diş hekimi randevu sistemi",
      "kuaför randevu programı",
      "Bursa web tasarım",
      "Bursa web yazılım şirketi",
      "Bursa reklam ajansı",
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

  const faqSchemaData = isTr
    ? [
        {
          q: "Diğer web tasarım ajanslarından farkınız nedir, neden özel kodlama?",
          a: "Piyasadaki çoğu ajans hazır WordPress şablonlarını kopyalayıp onlarca hantal eklentiyle sitenizi yavaşlatır. Biz sıfırdan, temiz kodla site kuruyoruz. Siteniz telefonda bekleme yapmadan anında açılır, Google testlerinde tam puan alır ve rakiplerinizin önüne geçer.",
        },
        {
          q: "Türkiye genelinde mi hizmet veriyorsunuz, Bursa dışındaki işletmelerle süreç nasıl işliyor?",
          a: "Bursa merkezliyiz ve Bursa genelinde işletmeleri doğrudan yerinde ziyaret ediyoruz. Türkiye'nin diğer tüm şehirlerindeki işletmelerle ise telefon, WhatsApp ve online görüşmelerle aynı hızda, sözleşmeli ve resmi faturalı olarak çalışıyoruz.",
        },
        {
          q: "Proje fiyatlandırması nasıl yapılıyor, sonradan sürpriz ek masraf çıkar mı?",
          a: "Hayır. İşin kapsamı ve teslim tarihi resmi sözleşmeyle baştan yazılı olarak belirlenir. Onaylanan teklif dışında teslimat anında veya sonrasında hiçbir gizli masrafla karşılaşmazsınız.",
        },
        {
          q: "Sitenin içeriklerini, görsellerini ve ürünlerini kendimiz güncelleyebilir miyiz?",
          a: "Elbette. Kod bilmenize gerek kalmadan menülerinizi, yazılarınızı, referanslarınızı ve fiyatlarınızı saniyeler içinde güncelleyebileceğiniz son derece sade, hızlı ve güvenli bir yönetim paneli veriyoruz.",
        },
        {
          q: "Tüm kaynak kodlar, alan adı ve verilerin mülkiyeti kime ait oluyor?",
          a: "Tüm kaynak kodlar, alan adı ve sistem doğrudan sizin adınıza tescil edilir. Hexa Dijital olarak sizi kendimize bağımlı kılmayız; mülkiyet %100 şirketinize aittir.",
        },
        {
          q: "Mevcut sitemizi yenilerken Google sıralamalarımızı ve müşterilerimizi kaybeder miyiz?",
          a: "Asla. Eski sitenizdeki tüm sayfaları yeni altyapıya sıfır kayıpla aktarıyoruz. Trafiğiniz kesilmez, aksine siteniz hızlandığı için Google'da daha da yükselirsiniz.",
        },
      ]
    : [
        {
          q: "What differentiates you from other web design agencies?",
          a: "Most agencies resell slow WordPress templates packed with bloated plugins. We build fast, custom web systems from scratch, hitting 100/100 performance scores and securing competitive edges.",
        },
        {
          q: "Do you serve clients outside of Bursa?",
          a: "Yes. While our headquarters are in Bursa with on-site visits across the region, we build and support web systems for enterprises across Turkey via direct online consultation and binding contracts.",
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
          a: "Yes. We execute meticulous redirection maps to ensure zero traffic drop during migration.",
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
          "Hexa Dijital Yazılım Ajansı",
          "Hexa Web Tasarım",
          "Hexa Dijital Bursa",
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
        ],
        // S+ TIER: GOOGLEknowledge graph ÇOKLU SEKTÖR EŞLEŞTİRME KATMANI
        knowsAbout: [
          "Web Design",
          "Custom Software Development",
          "Search Engine Optimization",
          "Dentistry Digital Solutions",
          "Medical Practice Management Software",
          "Restaurant Point of Sale Systems",
          "Online Food Ordering Systems",
          "Beauty Salon & Barber Appointment Software",
          "Construction & Architecture Corporate Platforms",
          "Automotive Repair & Towing Service Landing Pages",
          "E-Commerce & Payment Gateways",
          "Performance Advertising & Meta Ads",
          "Google Maps Local Pack Optimization",
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
                name: "Özel Web Yazılımı & Web Tasarım",
                description:
                  "Anında açılan, hazır şablon barındırmayan modern kurumsal web siteleri.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Komisyonsuz Paket Servis & Kasa Sistemleri",
                description:
                  "Restoran ve kafeler için komisyonsuz sipariş ve adisyon sistemleri.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Klinik & Salon Otomatik Randevu Sistemi",
                description:
                  "Diş hekimleri, klinikler ve kuaförler için 7/24 çalışan akıllı randevu takvimi.",
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
