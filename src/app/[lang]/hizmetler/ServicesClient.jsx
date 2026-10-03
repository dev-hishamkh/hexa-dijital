"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Services.module.css";

const allServicesData = {
  tr: [
    {
      categoryNumber: "01",
      categoryTitle: "Web Siteleri & Dijital Vitrin",
      categoryCode: "DEPT // 01",
      categoryDiagnosis:
        "Eski, yavaş açılan web sitesi yüzünden müşteri kaybeden, Google'da güven vermeyen ve mobil uyumsuz şablonlardan bıkmış tüm kurumsal firmalar için.",
      categoryOutcome:
        "Tüm cihazlarda 0.8 saniyede açılan, Core Web Vitals tam puanlı ve Google aramalarında güven aşılayan siber şirket vitrini.",
      services: [
        {
          id: "01.1",
          name: "Tek Sayfa Tanıtım Siteleri",
          outcome:
            "Doğrudan telefon çaldıran ve sipariş aldıran sade açılış sayfası.",
          target:
            "Hızlıca reklam çıkıp telefon ve form toplamak isteyen işletmeler için.",
          kpi: "Yüksek Dönüşüm",
          slug: "tek-sayfa-tanitim-siteleri",
        },
        {
          id: "01.2",
          name: "Kurumsal Web Siteleri",
          outcome:
            "Şirketinize prestij katan, tüm cihazlarda 0.8s açılan şirket vitrini.",
          target:
            "Müşterilerine ve kurumsal partnerlerine güven aşılamak isteyen firmalar için.",
          kpi: "< 0.8s Açılış",
          slug: "kurumsal-web-siteleri",
        },
        {
          id: "01.3",
          name: "QR Kodlu Menü",
          outcome:
            "Masalarda telefondan anında açılan, garson yükünü azaltan dijital menü.",
          target:
            "Baskı maliyetinden kurtulup menüsünü anında güncellemek isteyen restoran ve kafeler için.",
          kpi: "Sıfır Baskı Gideri",
          slug: "qr-kodlu-menu",
        },
        {
          id: "01.4",
          name: "Özel Tasarım & 3D Siteler",
          outcome:
            "Sektördeki tüm rakipleri geride bırakan, ödüllü ajans kalitesinde tasarım.",
          target:
            "Standart tasarımlardan sıkılmış, lüks ve inovatif görünmek isteyen markalar için.",
          kpi: "Awwwards Kalitesi",
          slug: "ozel-tasarim-3d-siteler",
        },
        {
          id: "01.5",
          name: "E-Ticaret Siteleri",
          outcome:
            "Ödeme altyapıları ve kargo sistemleriyle tam entegre satış mağazası.",
          target:
            "7/24 internetten kredi kartıyla kesintisiz ürün satmak isteyen perakendeciler için.",
          kpi: "%100 Kesintisiz Satış",
          slug: "e-ticaret-siteleri",
        },
      ],
    },
    {
      categoryNumber: "02",
      categoryTitle: "Sipariş & Satış Sistemleri",
      categoryCode: "DEPT // 02",
      categoryDiagnosis:
        "Yemek ve e-ticaret sitelerine her ay devasa komisyonlar kaptıran, kendi müşteri datasını toplayıp WhatsApp ve webden doğrudan kâr etmek isteyen işletmeler için.",
      categoryOutcome:
        "Sıfır komisyonlu paket servis, tek tıkla WhatsApp sipariş ve B2B toptan bayi sipariş ağları.",
      services: [
        {
          id: "02.1",
          name: "Toptan & Bayi Sipariş Sistemi",
          outcome:
            "Bayilerinizin cari bakiyesini görüp tek tıkla sipariş girdiği B2B portalı.",
          target:
            "Telefon ve WhatsApp üzerinden manuel sipariş alırken karışıklık yaşayan toptancılar için.",
          kpi: "Muhasebe Entegre",
          slug: "toptan-bayi-siparis-sistemi",
        },
        {
          id: "02.2",
          name: "Komisyonsuz Paket Servis Sitesi",
          outcome:
            "Yemek sitelerine yüzde 30 komisyon vermeden doğrudan dükkana çalışan hat.",
          target:
            "Yemeksepeti ve Getir'e servet ödemekten bıkmış restoranlar için.",
          kpi: "%0 Komisyon",
          slug: "komisyonsuz-paket-servis",
        },
        {
          id: "02.3",
          name: "WhatsApp Sipariş Sistemi",
          outcome:
            "Müşterinin ürünleri sepete ekleyip tek tuşla WhatsApp'a sipariş attığı hat.",
          target:
            "Müşterileriyle doğrudan birebir iletişimde kalarak hızlı satış kapatmak isteyenler için.",
          kpi: "Tek Tık Sipariş",
          slug: "whatsapp-siparis-sistemi",
        },
        {
          id: "02.4",
          name: "Yemek Sitelerinde Satış Artırma",
          outcome:
            "Yemeksepeti, Trendyol Yemek ve Getir'de dükkanı üst sıralara taşıma.",
          target:
            "Yemek uygulamalarında arka sayfalarda kaybolan restoranlar için.",
          kpi: "Algoritma 1. Sıra",
          slug: "yemek-sitelerinde-satis-artirma",
        },
        {
          id: "02.5",
          name: "Alışveriş Sitelerinde Satış Artırma",
          outcome:
            "Trendyol, Hepsiburada ve Amazon'da Buybox kazanma ve ciro katlama stratejisi.",
          target:
            "Pazar yerlerinde satışlarını 3'e 5'e katlamak isteyen e-ticaret satıcıları için.",
          kpi: "Buybox Kazanımı",
          slug: "pazar-yerlerinde-satis-artirma",
        },
      ],
    },
    {
      categoryNumber: "03",
      categoryTitle: "İşletme Otomasyonu & Yazılım",
      categoryCode: "DEPT // 03",
      categoryDiagnosis:
        "Adisyon ve kasa karışıklığı yaşayan, telefon ve randevulara yetişemeyen, stok takibini manuel yaparken zaman ve para kaybeden işletmeler için.",
      categoryOutcome:
        "7/24 kesintisiz çalışan yapay zeka asistanları, hatasız masa adisyon kasası ve otonom randevu motoru.",
      services: [
        {
          id: "03.1",
          name: "Adisyon ve Kasa Programı",
          outcome:
            "Masaları, garsonları, mutfak yazıcılarını ve anlık kasayı tek ekrandan yönetme.",
          target:
            "Masalarda hesap karışıklığı ve kaçak istemeyen kafe ve restoranlar için.",
          kpi: "Sıfır Hesap Hatası",
          slug: "adisyon-kasa-programi",
        },
        {
          id: "03.2",
          name: "Otomatik Randevu Sistemi",
          outcome:
            "Müşterilerin 7/24 uygun saati seçip aldığı, SMS ve WhatsApp onaylı sistem.",
          target:
            "Randevu telefonlarına yetişemeyen klinikler, güzellik merkezleri ve kuaförler için.",
          kpi: "7/24 Otonom Randevu",
          slug: "otomatik-randevu-sistemi",
        },
        {
          id: "03.3",
          name: "Yapay Zeka Müşteri Asistanı",
          outcome:
            "WhatsApp'ta gece gündüz müşterilerin sorularını yanıtlayan ve satış bağlayan AI.",
          target:
            "Mesai saatleri dışında gelen müşteri mesajlarını satışa çevirmek isteyen işletmeler için.",
          kpi: "Anında Satış Kapatma",
          slug: "yapay-zeka-musteri-asistani",
        },
        {
          id: "03.4",
          name: "İş ve Evrak Takip Programı",
          outcome:
            "Ofis içi işleri, müşteri evraklarını ve teslim tarihlerini takip eden özel yazılım.",
          target:
            "İş takibini Excel veya kağıtla yaparken süreçleri aksatan ofis ve fabrikalar için.",
          kpi: "%100 Süreç Kontrolü",
          slug: "is-evrak-takip-programi",
        },
        {
          id: "03.5",
          name: "Barkod & Stok Takip Sistemi",
          outcome:
            "Dükkandaki veya depodaki malların giriş-çıkışını, azalan ürünleri anında bildiren panel.",
          target:
            "Depodaki mal sayımını ve kritik stokları anlık kontrol etmek isteyen işletmeler için.",
          kpi: "Canlı Stok Alarmı",
          slug: "barkod-stok-takip-sistemi",
        },
      ],
    },
    {
      categoryNumber: "04",
      categoryTitle: "Büyüme Reklamı & Haritalar 1. Sıra",
      categoryCode: "DEPT // 04",
      categoryDiagnosis:
        "Google Haritalar'da rakiplerinin arkasında kalan, reklam bütçesi harcayıp telefon çaldıramayan ve yerel aramada hazır müşteri çekmek isteyenler için.",
      categoryOutcome:
        "Bursa yerel aramalarında Google Haritalar ilk 3 sıra hakimiyeti ve doğrudan kasanıza ciro akıtan Meta/Google reklamları.",
      services: [
        {
          id: "04.1",
          name: "Instagram & Facebook Reklamları",
          outcome:
            "Doğrudan şehrinizdeki ve bölgenizdeki hedef kitleye gösterilen müşteri çeken reklamlar.",
          target:
            "Sosyal medyadan her gün dükkanına yeni müşteri çekmek isteyen işletmeler için.",
          kpi: "Yüksek ROAS / Ciro",
          slug: "meta-instagram-facebook-reklamlari",
        },
        {
          id: "04.2",
          name: "Sosyal Medya Yönetimi",
          outcome:
            "Sayfanızı düzenli kurumsal paylaşımlarla güven veren canlı bir işletme vitrinine dönüştürme.",
          target:
            "Instagram hesabı terkedilmiş gibi duran, profesyonel görünmek isteyen firmalar için.",
          kpi: "Prestijli Vitrin",
          slug: "sosyal-medya-yonetimi",
        },
        {
          id: "04.3",
          name: "Google Reklamları",
          outcome:
            "Bursa'da sizin hizmetinizi aratanların karşısına en tepede çıkıp doğrudan arama sağlama.",
          target:
            "Satın almaya hazır müşteriyi arama yaptığı saniyede yakalamak isteyenler için.",
          kpi: "Hazır Müşteri Akışı",
          slug: "google-reklamlari",
        },
        {
          id: "04.4",
          name: "Google Haritalar & 1. Sıra",
          outcome:
            "Harita aramalarında rakipleri geçip ilk 3 sıra içine girerek dükkanınıza müşteri akıtma.",
          target:
            "Bölgesindeki aramalarda rakiplerinin gerisinde kalan yerel dükkan ve işletmeler için.",
          kpi: "Haritalarda İlk 3",
          slug: "google-haritalar-1-sira",
        },
        {
          id: "04.5",
          name: "Google Yorum & Puan Artırma",
          outcome:
            "İşletmenizin Harita puanını 5 yıldıza taşıyan gerçek müşteri memnuniyeti toplama sistemi.",
          target:
            "Google puanı düşük olduğu için müşteri kaybeden tüm işletmeler için.",
          kpi: "5.0 Yıldız Otoritesi",
          slug: "google-yorum-puan-artirma",
        },
      ],
    },
    {
      categoryNumber: "05",
      categoryTitle: "Marka, Baskı & Fotoğraf Çekimi",
      categoryCode: "DEPT // 05",
      categoryDiagnosis:
        "Ürünlerinin kalitesine yakışmayan amatör bir logoya sahip olan, tabela ve profesyonel 4K çekimlerle fiyatını ve prestijini yükseltmek isteyenler için.",
      categoryOutcome:
        "%100 özgün vektörel logo mimarisi, kalın gramajlı kurumsal ambalaj baskıları ve 4K profesyonel mekan çekimleri.",
      services: [
        {
          name: "Dükkana Özel Logo Tasarımı",
          id: "05.1",
          outcome:
            "Tabelanızda, ambalajınızda ve internette güven veren markanıza özel vektörel logo.",
          target:
            "İnternetten kopyalama amatör logolardan kurtulup kurumsallaşmak isteyenler için.",
          kpi: "%100 Vektörel Özgün",
          slug: "ozel-logo-tasarimi",
        },
        {
          id: "05.2",
          name: "Kartvizit, Magnet & Ambalaj Baskıları",
          outcome:
            "Müşterinin eline aldığında kaliteyi hissettiği kalın kartvizitler ve paket ambalajları.",
          target:
            "Müşterisine verdiği ambalaj ve kartla kalitesini hissettirmek isteyen işletmeler için.",
          kpi: "Yüksek Gramaj Baskı",
          slug: "kartvizit-magnet-ambalaj-baskilari",
        },
        {
          id: "05.3",
          name: "Ürün ve Dükkan Fotoğraf Çekimi",
          outcome:
            "Yemeklerinizi, ürünlerinizi veya dükkanınızı profesyonel ışık ve 4K lenslerle karelere dökme.",
          target:
            "Kötü telefon fotoğrafları yüzünden ürününü ucuza satmak zorunda kalanlar için.",
          kpi: "4K Profesyonel Çekim",
          slug: "urun-dukkan-fotograf-cekimi",
        },
        {
          id: "05.4",
          name: "Tabela & Cephe Giydirme Tasarımı",
          outcome:
            "Yoldan geçen herkesin dikkatini çeken, dükkanınıza yakışan modern dış cephe ve tabela.",
          target:
            "Dükkanının önünden geçen binlerce insanın dikkatini çekmek isteyen mekanlar için.",
          kpi: "Cadde Hakimiyeti",
          slug: "tabela-cephe-giydirme-tasarimi",
        },
      ],
    },
  ],
  en: [
    {
      categoryNumber: "01",
      categoryTitle: "Websites & Digital Storefronts",
      categoryCode: "DEPT // 01",
      categoryDiagnosis:
        "For corporate enterprises losing clients due to sluggish, outdated websites seeking mobile-first, sub-second platforms.",
      categoryOutcome:
        "0.8s load SLA with perfect Core Web Vitals commanding high commercial trust across all viewports.",
      services: [
        {
          id: "01.1",
          name: "Single Page Landing Sites",
          outcome:
            "High-converting landing pages engineered to generate direct phone calls.",
          target:
            "For businesses running performance ads seeking maximum lead conversion.",
          kpi: "High Conversion",
          slug: "tek-sayfa-tanitim-siteleri",
        },
        {
          id: "01.2",
          name: "Corporate Web Architecture",
          outcome:
            "Sub-second corporate platforms establishing undeniable commercial trust.",
          target:
            "For enterprises commanding high-value client trust across all viewports.",
          kpi: "< 0.8s Latency SLA",
          slug: "kurumsal-web-siteleri",
        },
        {
          id: "01.3",
          name: "QR Code Menu Systems",
          outcome:
            "Instant-load digital menus eliminating paper printing overhead for hospitality.",
          target:
            "For restaurants and venues aiming to reduce waiter friction and printing costs.",
          kpi: "Zero Reprint Cost",
          slug: "qr-kodlu-menu",
        },
        {
          id: "01.4",
          name: "Custom 3D & Bespoke Sites",
          outcome:
            "Award-class interactive digital experiences setting you apart from competitors.",
          target:
            "For luxury brands requiring cutting-edge interactive WebGL experiences.",
          kpi: "Award Class",
          slug: "ozel-tasarim-3d-siteler",
        },
        {
          id: "01.5",
          name: "E-Commerce Stores",
          outcome:
            "High-speed online shopping systems integrated with payment and logistics.",
          target: "For retailers seeking 24/7 unthrottled checkout pipelines.",
          kpi: "High Concurrency",
          slug: "e-ticaret-siteleri",
        },
      ],
    },
    {
      categoryNumber: "02",
      categoryTitle: "Ordering & Sales Systems",
      categoryCode: "DEPT // 02",
      categoryDiagnosis:
        "For restaurants and merchants seeking direct ordering channels without paying predatory 30% marketplace commissions.",
      categoryOutcome:
        "Commission-free takeout platforms, 1-click WhatsApp funnels, and autonomous B2B dealer ordering networks.",
      services: [
        {
          id: "02.1",
          name: "B2B Dealer Ordering Portals",
          outcome:
            "Dedicated dealer backoffices with real-time stock, accounting, and order flows.",
          target:
            "For wholesale operations replacing messy WhatsApp phone orders with a clean portal.",
          kpi: "Live ERP Sync",
          slug: "toptan-bayi-siparis-sistemi",
        },
        {
          id: "02.2",
          name: "Direct Takeout & Delivery Sites",
          outcome:
            "Commission-free food ordering sites keeping 100% of the margin in your register.",
          target:
            "For restaurants bleeding cash to 30% aggregator marketplace commissions.",
          kpi: "0% Commission",
          slug: "komisyonsuz-paket-servis",
        },
        {
          id: "02.3",
          name: "WhatsApp Ordering Funnels",
          outcome:
            "Seamless one-click WhatsApp checkouts turning mobile browsers into fast buyers.",
          target:
            "For quick-commerce brands capturing rapid mobile checkout intent.",
          kpi: "One-Click Checkout",
          slug: "whatsapp-siparis-sistemi",
        },
        {
          id: "02.4",
          name: "Food Delivery Marketplace Boost",
          outcome:
            "Algorithmic optimization to rank your restaurant higher on food delivery apps.",
          target:
            "For restaurants buried on page 5 of food delivery platforms.",
          kpi: "App Ranking",
          slug: "yemek-sitelerinde-satis-artirma",
        },
        {
          id: "02.5",
          name: "E-Commerce Marketplace Growth",
          outcome:
            "Targeted ranking and Buybox strategies to maximize product turnover.",
          target:
            "For Amazon/Trendyol sellers seeking higher Buybox dominance.",
          kpi: "Buybox Dominance",
          slug: "pazar-yerlerinde-satis-artirma",
        },
      ],
    },
    {
      categoryNumber: "03",
      categoryTitle: "Business Automation & Software",
      categoryCode: "DEPT // 03",
      categoryDiagnosis:
        "For venues and offices struggling with order chaos, missed appointments, and manual inventory tracking.",
      categoryOutcome:
        "24/7 autonomous AI assistants, error-free cashier table management, and self-service appointment engines.",
      services: [
        {
          id: "03.1",
          name: "POS & Cashier Floor Software",
          outcome:
            "Manage restaurant tables, waiters, kitchen thermal printers, and live cash on one screen.",
          target: "For venues eliminating table confusion and cashier leakage.",
          kpi: "Zero Floor Leakage",
          slug: "adisyon-kasa-programi",
        },
        {
          id: "03.2",
          name: "Autonomous Booking Engines",
          outcome:
            "24/7 self-service customer appointment scheduling with automated SMS confirmations.",
          target:
            "For clinics, salons, and consultants overwhelmed by scheduling phone calls.",
          kpi: "24/7 Self-Booking",
          slug: "otomatik-randevu-sistemi",
        },
        {
          id: "03.3",
          name: "AI Customer Assistant",
          outcome:
            "Autonomous conversational AI answering customer inquiries and closing sales on WhatsApp 24/7.",
          target:
            "For businesses wanting to convert late-night WhatsApp leads into closed revenue.",
          kpi: "Instant Inbound Sales",
          slug: "yapay-zeka-musteri-asistani",
        },
        {
          id: "03.4",
          name: "Workflow & Operations Tracker",
          outcome:
            "Custom internal software tracking customer dossiers, job timelines, and team milestones.",
          target:
            "For manufacturing and service operations replacing messy Excel spreadsheets.",
          kpi: "Complete Oversight",
          slug: "is-evrak-takip-programi",
        },
        {
          id: "03.5",
          name: "Barcode & Inventory Telemetry",
          outcome:
            "Real-time stock level monitoring and barcode tracking with automated low-stock warnings.",
          target:
            "For retail and warehousing needing real-time shrinkage and stock alerts.",
          kpi: "Live Stock Alarm",
          slug: "barkod-stok-takip-sistemi",
        },
      ],
    },
    {
      categoryNumber: "04",
      categoryTitle: "Growth Media & Google Maps #1",
      categoryCode: "DEPT // 04",
      categoryDiagnosis:
        "For businesses invisible on Google Maps, burning ad spend with zero qualified inbound phone inquiries.",
      categoryOutcome:
        "Uncontested Google Maps 3-pack rankings across regional commercial corridors and high-ROAS acquisition funnels.",
      services: [
        {
          id: "04.1",
          name: "Instagram & Facebook Ads",
          outcome:
            "Precision acquisition campaigns targeting ready buyers in your regional radius.",
          target:
            "For merchants wanting verified daily customer footfall from paid social.",
          kpi: "High ROAS / ROI",
          slug: "meta-instagram-facebook-reklamlari",
        },
        {
          id: "04.2",
          name: "Corporate Social Media Management",
          outcome:
            "Elevating dormant profiles into trustworthy, active business storefronts.",
          target:
            "For businesses whose social media looks abandoned and lacks commercial authority.",
          kpi: "Brand Trust",
          slug: "sosyal-medya-yonetimi",
        },
        {
          id: "04.3",
          name: "Google Search Ads",
          outcome:
            "Capture high-intent searches precisely when customers are looking for your service.",
          target:
            "For commercial operations capturing ready-to-buy customers at peak intent.",
          kpi: "High Purchase Intent",
          slug: "google-reklamlari",
        },
        {
          id: "04.4",
          name: "Google Maps #1 Dominance",
          outcome:
            "Rank above all local competitors in Google Maps 3-pack to generate direct calls.",
          target:
            "For local commercial establishments losing local map search traffic to competitors.",
          kpi: "Maps Top 3",
          slug: "google-haritalar-1-sira",
        },
        {
          id: "04.5",
          name: "Google Review & Reputation Engine",
          outcome:
            "Systematic 5.0-star customer review collection mechanism multiplying customer trust.",
          target:
            "For brands with low review volume seeking uncontested 5-star reputation.",
          kpi: "5.0 Star Authority",
          slug: "google-yorum-puan-artirma",
        },
      ],
    },
    {
      categoryNumber: "05",
      categoryTitle: "Brand Identity, Print & 4K Media",
      categoryCode: "DEPT // 05",
      categoryDiagnosis:
        "For businesses trapped with amateur visual identities seeking 4K production photography and luxury prestige.",
      categoryOutcome:
        "100% custom vector identity systems, heavyweight packaging print collateral, and 4K commercial optics.",
      services: [
        {
          name: "Bespoke Logo Architecture",
          id: "05.1",
          outcome:
            "Authoritative vector logos designed to command premium pricing.",
          target:
            "For businesses wanting to break out of commodity pricing with custom vector craft.",
          kpi: "100% Vector Bespoke",
          slug: "ozel-logo-tasarimi",
        },
        {
          id: "05.2",
          name: "Business Cards, Magnets & Packaging",
          outcome:
            "Heavy-spec tactile print collateral that customers can feel the quality of.",
          target:
            "For businesses whose physical packaging must convey executive prestige.",
          kpi: "Heavyweight Print",
          slug: "kartvizit-magnet-ambalaj-baskilari",
        },
        {
          id: "05.3",
          name: "Product & Facility 4K Photography",
          outcome:
            "High-end commercial optics transforming your food, products, or venue.",
          target:
            "For brands tired of amateur mobile photos depressing product value.",
          kpi: "4K Commercial Optics",
          slug: "urun-dukkan-fotograf-cekimi",
        },
        {
          id: "05.4",
          name: "Signage & Exterior Facade Design",
          outcome:
            "Modern architectural storefront and illuminated sign projects demanding street attention.",
          target:
            "For retail establishments wanting unavoidable street-level passerby attention.",
          kpi: "Street Dominance",
          slug: "tabela-cephe-giydirme-tasarimi",
        },
      ],
    },
  ],
};

export default function ServicesClient({ lang = "tr" }) {
  const isTr = lang === "tr";
  const groups = allServicesData[lang] || allServicesData.tr;

  const [currentCategoryIdx, setCurrentCategoryIdx] = useState(0);

  const [stageData, setStageData] = useState({
    title: groups[0].categoryTitle,
    badge: groups[0].categoryCode,
    target: groups[0].categoryDiagnosis,
    outcome: groups[0].categoryOutcome,
    slug: groups[0].services[0].slug,
    isSpecificService: false,
  });

  const [isFading, setIsFading] = useState(false);
  const heroRef = useRef(null);
  const workspaceRef = useRef(null);
  const stageRef = useRef(null);
  const groupRefs = useRef([]);
  const ctaRef = useRef(null);

  // GSAP SCROLL ANİMASYONLARI
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const hero = heroRef.current;
    const stageCard = stageRef.current;
    const cta = ctaRef.current;

    const ctx = gsap.context(() => {
      // 1. Hero Girişi
      if (hero) {
        const badge = hero.querySelector(`.${styles.breadcrumbBadge}`);
        const titleLines = hero.querySelectorAll(`.${styles.titleLine}`);
        const desc = hero.querySelector(`.${styles.heroDesc}`);

        const tl = gsap.timeline();

        if (badge) {
          tl.to(badge, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
        }

        if (titleLines && titleLines.length > 0) {
          tl.to(
            titleLines,
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.12,
              ease: "power4.out",
            },
            "-=0.2",
          );
        }

        if (desc) {
          tl.to(
            desc,
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
            "-=0.4",
          );
        }
      }

      // 2. Sol Canlı Kartın Sahneye Oturuşu
      if (stageCard) {
        gsap.fromTo(
          stageCard,
          { opacity: 0, x: -30, scale: 0.98 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: workspaceRef.current,
              start: "top 80%",
              once: true,
            },
          },
        );
      }

      // 3. Sağ Departmanların ve Hizmetlerin Sırayla Açılışı
      groupRefs.current.forEach((groupEl) => {
        if (!groupEl) return;
        const header = groupEl.querySelector(`.${styles.groupHeaderRow}`);
        const rows = groupEl.querySelectorAll(
          `.${styles.serviceInteractiveRow}`,
        );

        const groupTl = gsap.timeline({
          scrollTrigger: {
            trigger: groupEl,
            start: "top 80%",
            once: true,
          },
        });

        if (header) {
          groupTl.fromTo(
            header,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          );
        }

        if (rows && rows.length > 0) {
          groupTl.fromTo(
            rows,
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.06,
              ease: "power3.out",
            },
            "-=0.3",
          );
        }
      });

      // 4. Alt Dönüşüm Şeridi Girişi
      if (cta) {
        gsap.fromTo(
          cta,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cta,
              start: "top 85%",
              once: true,
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // SCROLL ANINDA KATEGORİ TEŞHİSİNİ AKTİFLEŞTİR
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 280;

      groupRefs.current.forEach((el, index) => {
        if (!el) return;
        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          if (currentCategoryIdx !== index) {
            setCurrentCategoryIdx(index);
            const targetGroup = groups[index];
            if (targetGroup) {
              triggerSmoothChange({
                title: targetGroup.categoryTitle,
                badge: targetGroup.categoryCode,
                target: targetGroup.categoryDiagnosis,
                outcome: targetGroup.categoryOutcome,
                slug: targetGroup.services[0].slug,
                isSpecificService: false,
              });
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentCategoryIdx, groups]);

  const triggerSmoothChange = (newData) => {
    setIsFading(true);
    setTimeout(() => {
      setStageData(newData);
      setIsFading(false);
    }, 160);
  };

  const handleServiceHover = (service, group) => {
    triggerSmoothChange({
      title: service.name,
      badge: service.kpi,
      target: service.target,
      outcome: service.outcome,
      slug: service.slug,
      isSpecificService: true,
    });
  };

  const handleMouseLeaveGroup = (group) => {
    triggerSmoothChange({
      title: group.categoryTitle,
      badge: group.categoryCode,
      target: group.categoryDiagnosis,
      outcome: group.categoryOutcome,
      slug: group.services[0].slug,
      isSpecificService: false,
    });
  };

  return (
    <main className={styles.mainContainer}>
      {/* ==========================================================================
          1. GENİŞ EDİTORYAL HERO
          ========================================================================== */}
      <section ref={heroRef} className={`container ${styles.heroSection}`}>
        <div className={styles.heroContent}>
          <span className={`${styles.breadcrumbBadge} ${styles.revealDelay1}`}>
            {isTr
              ? "HEXA DİJİTAL // HİZMET FİHRİSTİ"
              : "HEXA DIGITAL // SERVICE DIRECTORY"}
          </span>

          <h1 className={styles.heroTitle}>
            <span
              className={`${styles.titleLineWrapper} ${styles.revealDelay2}`}
            >
              <span className={styles.titleLine}>
                {isTr ? "Hafif yazılımlar," : "Bespoke software,"}
              </span>
            </span>
            <span
              className={`${styles.titleLineWrapper} ${styles.revealDelay3}`}
            >
              <span className={styles.titleLine}>
                <span className={styles.serifItalic}>
                  {isTr ? "kusursuz tasarımlar &" : "radical craft &"}
                </span>
              </span>
            </span>
            <span
              className={`${styles.titleLineWrapper} ${styles.revealDelay4}`}
            >
              <span className={styles.titleLine}>
                <span>{isTr ? "kasa dolduran" : "high-impact"}</span>{" "}
                <span className={styles.accentWord}>
                  {isTr ? "büyüme motoru." : "growth media."}
                </span>
              </span>
            </span>
          </h1>

          <p className={`${styles.heroDesc} ${styles.revealDelay5}`}>
            {isTr ? (
              <>
                İşletmenizin ciro rekoru kırması için üç dişlinin aynı anda
                kusursuz dönmesi gerekir: Saniyeler içinde açılan hafif
                yazılımlar, güven veren kurumsal kimlikler ve Google ile Meta
                üzerinden hazır müşteri çeken reklamlar. Şablon kullanmıyor, 24
                temel hizmeti tek merkezden yönetiyoruz.
              </>
            ) : (
              <>
                Sustainable commercial growth requires three synchronized
                disciplines: sub-second software backbones, authoritative visual
                identity systems, and algorithmic customer acquisition media.
              </>
            )}
          </p>
        </div>
      </section>

      {/* ==========================================================================
          2. MASAÜSTÜ İNTERAKTİF ÇALIŞMA ALANI
          ========================================================================== */}
      <section
        ref={workspaceRef}
        className={`container ${styles.interactiveWorkspace}`}
      >
        {/* SOL: CANLI KATEGORİ TEŞHİSİ VE ÖZET SAHNESİ */}
        <aside className={styles.liveStageAside}>
          <div ref={stageRef} className={styles.liveStageCard}>
            <div
              className={`${styles.stageContentMotionWrap} ${
                isFading ? styles.stageFading : ""
              }`}
            >
              <div className={styles.stageHeadingArea}>
                <span className={styles.stageContextTag}>
                  {stageData.isSpecificService
                    ? isTr
                      ? "ÖZEL MODÜL DETAYI"
                      : "SPECIFIC MODULE"
                    : isTr
                      ? "KATEGORİ TEŞHİSİ"
                      : "CATEGORY DIAGNOSIS"}
                </span>
                <h3 className={styles.stageServiceName}>{stageData.title}</h3>
              </div>

              <div className={styles.stageSectionBlock}>
                <span className={styles.sectionHeaderTitle}>
                  {isTr ? "BU KATEGORİ KİMLER İÇİN UYGUN?" : "WHO IS THIS FOR?"}
                </span>
                <p className={styles.sectionBodyText}>{stageData.target}</p>
              </div>

              <div className={styles.stageSectionBlock}>
                <span className={styles.sectionHeaderTitle}>
                  {isTr ? "İŞLETMEYE SAĞLADIĞI KAZANÇ" : "COMMERCIAL OUTCOME"}
                </span>
                <p className={styles.sectionBodyText}>{stageData.outcome}</p>
              </div>
            </div>

            {/* HERO TARZI MANYETİK BUTON */}
            <div className={styles.stageBottomAction}>
              <Link
                href={`/${lang}/hizmetler/${stageData.slug}`}
                className={styles.magneticLaunchBtn}
              >
                <div className={styles.actionCircle}>
                  <svg
                    className={styles.arrowDiagonal}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.actionLabels}>
                  <span className={styles.actionPrimaryText}>
                    {isTr ? "Çözümü İnceleyin" : "Explore Solution"}
                  </span>
                  <span className={styles.actionSubText}>
                    {isTr
                      ? "Detaylı özellikleri görün"
                      : "View technical specs"}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </aside>

        {/* SAĞ TARAF: ANITSAL 5 KATEGORİ & HİZMETLER */}
        <div className={styles.servicesListingCol}>
          {groups.map((group, gIdx) => (
            <div
              key={group.categoryNumber}
              ref={(el) => (groupRefs.current[gIdx] = el)}
              className={styles.deptGroupBlock}
              onMouseLeave={() => handleMouseLeaveGroup(group)}
            >
              {/* ANITSAL DEPARTMAN BAŞLIĞI */}
              <div className={styles.groupHeaderRow}>
                <span className={styles.monumentalNumber}>
                  {group.categoryNumber}
                </span>
                <div className={styles.groupTitleStack}>
                  <h2 className={styles.groupTitleText}>
                    {group.categoryTitle}
                  </h2>
                  <span className={styles.titleHairline} />
                </div>
              </div>

              {/* HİZMET SATIRLARI */}
              <div className={styles.groupRowsWrap}>
                {group.services.map((service, sIdx) => {
                  const isSelected = stageData.title === service.name;

                  return (
                    <div
                      key={service.slug}
                      className={`${styles.serviceInteractiveRow} ${
                        isSelected ? styles.rowHoverActive : ""
                      }`}
                      onMouseEnter={() => handleServiceHover(service, group)}
                    >
                      <Link
                        href={`/${lang}/hizmetler/${service.slug}`}
                        className={styles.rowLinkBlock}
                      >
                        <div className={styles.rowLeftInfo}>
                          <span className={styles.rowNum}>
                            {sIdx < 9 ? `0${sIdx + 1}` : sIdx + 1}
                          </span>
                          <div className={styles.rowTextStack}>
                            <h3 className={styles.rowServiceName}>
                              {service.name}
                            </h3>
                            <p className={styles.mobileOnlyOutcome}>
                              {service.outcome}
                            </p>
                          </div>
                        </div>

                        <div className={styles.rowRightBadge}>
                          <span className={styles.desktopKpiTag}>
                            {service.kpi}
                          </span>
                          <div className={styles.arrowCircle}>
                            <svg
                              className={styles.arrowSvg}
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================================================
          3. SİBER-LÜKS VE YÜKSEK DÖNÜŞÜMLÜ CTA ŞERİDİ (YENİDEN ŞEKİLLENDİRİLDİ)
          ========================================================================== */}
      <section className={`container ${styles.ctaContainer}`}>
        <div ref={ctaRef} className={styles.ctaBoxFrame}>
          <div className={styles.ctaContentLeft}>
            <div className={styles.ctaBadgeArea}>
              <span className={styles.ctaStatusDot} />
              <span className={styles.ctaBadgeLabel}>
                {isTr ? "ÜCRETSİZ DİJİTAL CHECK-UP" : "COMPLIMENTARY AUDIT"}
              </span>
            </div>

            <h3 className={styles.ctaMainHeading}>
              {isTr ? (
                <>
                  İşletmeniz için hangi çarkın{" "}
                  <br className={styles.desktopBr} />
                  <span className={styles.serifAccentWord}>
                    eksik olduğunu konuşalım.
                  </span>
                </>
              ) : (
                <>
                  Let’s diagnose which digital gear{" "}
                  <br className={styles.desktopBr} />
                  <span className={styles.serifAccentWord}>
                    your business is missing.
                  </span>
                </>
              )}
            </h3>

            <p className={styles.ctaBodyText}>
              {isTr
                ? "Sitenizin açılış hızını, Google Harita sıralamanızı ve reklam dönüşümlerinizi ücretsiz inceleyelim; kasanıza doğrudan ciro kazandıracak net bir yol haritası çıkaralım."
                : "We audit your site latency, Google Maps ranking, and ad efficiency — delivering an actionable, measurable growth roadmap."}
            </p>
          </div>

          <div className={styles.ctaActionsRight}>
            {/* Lüks Beyaz Kapsül WhatsApp Butonu (İçindeki Ok 45 Derece Dönen) */}
            <a
              href="https://wa.me/905519769406?text=Merhaba%20Hexa%20Dijital,%20hizmetleriniz%20hakk%C4%B1nda%20teknik%20bilgi%20ve%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.luxuryWhatsappBtn}
            >
              <span className={styles.btnMainText}>
                {isTr ? "WhatsApp ile Başlatın" : "Initiate via WhatsApp"}
              </span>
              <div className={styles.btnIconCircle}>
                <svg
                  className={styles.btnArrowSvg}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>

            {/* İkincil Hafif İletişim Linki */}
            <Link
              href={`/${lang}/iletisim`}
              className={styles.secondaryInquiryLink}
            >
              <span>
                {isTr ? "Veya Proje Formu Doldurun" : "Or Submit Inquiry Form"}
              </span>
              <span className={styles.smallArrow}>→</span>
            </Link>

            {/* Canlı Mesai Sinyali */}
            <div className={styles.liveDeskRow}>
              <span className={styles.pulseGreenDot} />
              <span className={styles.liveDeskText}>
                {isTr
                  ? "Bursa Proje Masası — 09:00 - 17:00 Canlı"
                  : "Bursa Project Desk — Online 24/7"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
