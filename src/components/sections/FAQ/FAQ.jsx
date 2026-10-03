"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { dictionary } from "@/data/dictionary";
import styles from "./FAQ.module.css";

const faqItems = {
  tr: [
    {
      id: 1,
      q: "Bursa'da diğer web tasarım ajanslarından farkınız nedir, neden özel kodlama?",
      a: "Bursa'daki çoğu ajans hazır WordPress temalarını kopyalayıp onlarca hantal eklentiyle sitenizi yavaşlatır. Biz Next.js ile sıfırdan, temiz kodla mimari kuruyoruz. Siteniz 0.8 saniyenin altında açılır, Google Core Web Vitals testlerinde 100 puan alır ve rakiplerinizin önüne doğrudan geçer.",
    },
    {
      id: 2,
      q: "Google Haritalar ve Bursa yerel aramalarında ilk 3 sıraya nasıl çıkarıyorsunuz?",
      a: "Sadece Nilüfer değil; Osmangazi, Yıldırım, İnegöl ve sanayi bölgelerindeki yerel arama sinyallerini haritanıza işliyoruz. Doğru JSON-LD yapılandırılmış verileri, yerel yetki backlinkleri ve sayfa açılış hızıyla algoritmanın aradığı tüm kriterleri sağlayarak ilk 3 sırayı kilitliyoruz.",
    },
    {
      id: 3,
      q: "Proje fiyatlandırması nasıl yapılıyor, sonradan sürpriz ek masraf çıkar mı?",
      a: "Hayır. İşin kapsamı, kullanılacak teknolojiler ve teslim tarihi noter geçerliliğinde resmi sözleşmeyle belirlenir. Onaylanan teklif dışında teslimat anında veya sonrasında hiçbir gizli masrafla karşılaşmazsınız.",
    },
    {
      id: 4,
      q: "Sitenin içeriklerini, görsellerini ve ürünlerini kendimiz güncelleyebilir miyiz?",
      a: "Elbette. Kod bilmenize gerek kalmadan menülerinizi, yazılarınızı, referanslarınızı ve fiyatlarınızı saniyeler içinde güncelleyebileceğiniz son derece sade, hızlı ve güvenli bir yönetim paneli entegre ediyoruz.",
    },
    {
      id: 5,
      q: "Tüm kaynak kodlar, alan adı ve verilerin mülkiyeti kime ait oluyor?",
      a: "Tüm kaynak kodlar, lisanslar, alan adı (domain) ve bulut veritabanı doğrudan sizin adınıza tescil edilir. Hexa Dijital olarak sizi kendimize bağımlı kılmayız; mülkiyet %100 şirketinize aittir.",
    },
    {
      id: 6,
      q: "Mevcut sitemizi yenilerken Google sıralamalarımızı ve trafiğimizi kaybeder miyiz?",
      a: "Asla. Mevcut sitenizdeki tüm URL otoritesini ve indekslenmiş sayfaları 301 yönlendirme protokolüyle sıfır kayıpla yeni altyapıya aktarıyoruz. Trafiğiniz kesilmez, aksine hız arttığı için sıralamalarınız yükselir.",
    },
    {
      id: 7,
      q: "Bir projenin tamamlanması ortalama ne kadar sürer?",
      a: "Kurumsal web siteleri ortalama 10 ila 15 iş günü içinde yayına alınır. Restoran adisyon/QR sistemleri ve özel ERP/B2B yazılımları ise 3 ila 4 haftalık sprintlerle anahtar teslim sunulur.",
    },
    {
      id: 8,
      q: "Teslimattan sonra teknik destek ve sunucu takibi nasıl işliyor?",
      a: "Projeyi yayına alıp kenara çekilmiyoruz. 7/24 sunucu izleme, Cloudflare kurumsal güvenlik katmanı, SSL sertifikaları ve otomatik veri yedekleme kesintisiz olarak tarafımızdan yönetilir.",
    },
    {
      id: 9,
      q: "İşletmemizin kullandığı ERP, muhasebe veya CRM sistemleriyle entegre olabilir mi?",
      a: "Evet. Logo, Mikro, SAP veya kullandığınız özel muhasebe ve depo yazılımlarıyla doğrudan RESTful API ve webhook entegrasyonu kurabiliyoruz. Süreçleriniz otomatik çalışır.",
    },
    {
      id: 10,
      q: "Siber saldırılara ve veri kayıplarına karşı siteler nasıl korunuyor?",
      a: "Sunucu tarafında Cloudflare Enterprise seviyesinde DDoS koruması, katı güvenlik başlıkları (HSTS, CSP) ve uçtan uca şifreleme uyguluyoruz.",
    },
    {
      id: 11,
      q: "Sözleşme ve faturalandırma resmi mi?",
      a: "Tüm projeler karşılıklı ıslak imzalı veya KEP onaylı resmi hizmet sözleşmesi, şeffaf teslimat şartları ve kurumsal e-fatura ile yürütülür.",
    },
    {
      id: 12,
      q: "Web sitemiz bittiğinde Google ve Meta reklamlarını da yönetiyor musunuz?",
      a: "Evet. Web mimarisini inşa ettiğimiz için dönüşüm piksellerini kusursuz entegre ederiz. Google Ads ve Instagram reklam bütçenizi en yüksek ciroya (ROI) dönüştürecek şekilde profesyonelce yönetiriz.",
    },
  ],
  en: [
    {
      id: 1,
      q: "What differentiates you from other web design agencies in Bursa?",
      a: "Most agencies resell slow WordPress templates packed with bloated plugins. We build sub-second custom web systems on Next.js from scratch, hitting 100/100 Core Web Vitals and securing unfair competitive edges.",
    },
    {
      id: 2,
      q: "How do you achieve top-3 rankings on Google Maps and regional search?",
      a: "We engineer precise schema markup, geographic relevance signals across Bursa's commercial corridors, and lightning-fast load times that satisfy Google's primary ranking signals.",
    },
    {
      id: 3,
      q: "What is your pricing policy, are there hidden unexpected fees?",
      a: "None. All deliverables, timelines, and budgets are codified in transparent, legally binding contracts. The approved scope is the final invoice.",
    },
    {
      id: 4,
      q: "Can our team update content, media, and services independently?",
      a: "Yes. We integrate lightweight, intuitive management dashboards allowing your non-technical personnel to update content, pricing, and case studies instantly.",
    },
    {
      id: 5,
      q: "Who retains ownership of the source code, domain, and data?",
      a: "You retain 100% intellectual property, domain registration, and database ownership. We create no proprietary lock-ins.",
    },
    {
      id: 6,
      q: "Can we migrate our existing site without losing SEO rankings?",
      a: "Yes. We execute meticulous 301 mapping and semantic URL transfer protocols to ensure zero traffic drop during migration.",
    },
    {
      id: 7,
      q: "What is the typical completion timeframe for an enterprise project?",
      a: "Corporate web platforms are deployed within 10 to 15 business days. Bespoke automation and B2B portals require 3 to 4 planned sprint cycles.",
    },
    {
      id: 8,
      q: "How does maintenance and technical support function post-launch?",
      a: "We maintain 24/7 server telemetry, Cloudflare DDoS firewalls, SSL automation, and enterprise database backups continuously.",
    },
    {
      id: 9,
      q: "Can you integrate with our in-house ERP, CRM, or accounting systems?",
      a: "Yes. We build native REST/GraphQL connectors to interface smoothly with SAP, Logo, Mikro, or proprietary operational platforms.",
    },
    {
      id: 10,
      q: "How is cyber security and data integrity handled?",
      a: "We deploy enterprise-grade edge firewalls, strict Content Security Policies, and encrypted pipelines meeting international security standards.",
    },
    {
      id: 11,
      q: "Are engagements backed by formal contracts and invoices?",
      a: "Every engagement is protected by legal service level agreements (SLAs), clear milestones, and corporate e-invoicing.",
    },
    {
      id: 12,
      q: "Do you handle paid acquisition campaigns on Google and Meta?",
      a: "Yes. Because we build the conversion architecture, our tracking integrations are exact, enabling high-ROI ad performance.",
    },
  ],
};

export default function FAQ({ lang = "tr" }) {
  const [openId, setOpenId] = useState(1);
  const [isOnline, setIsOnline] = useState(true);
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const cardsWrapRef = useRef(null);
  const dict = dictionary[lang]?.faq || dictionary.tr.faq;
  const currentFaq = faqItems[lang] || faqItems.tr;

  // GOOGLE PROFİLİ: 7 GÜN 09:00 - 17:00 CANLI MESAİ KONTROLÜ
  useEffect(() => {
    const checkOfficeHours = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const turkeyTime = new Date(utc + 3600000 * 3);
      const hour = turkeyTime.getHours();

      const isWorkingTime = hour >= 9 && hour < 17;
      setIsOnline(isWorkingTime);
    };

    checkOfficeHours();
    const interval = setInterval(checkOfficeHours, 60000);
    return () => clearInterval(interval);
  }, []);

  // GSAP SCROLLTRIGGER İLE SENKRONİZE GİRİŞ
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const stickyCard = stickyRef.current;
    const cards = cardsWrapRef.current?.querySelectorAll(
      `.${styles.capsuleCard}`,
    );
    if (!stickyCard || !cards || cards.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      // 1. Sol Sticky Panel Girişi
      tl.fromTo(
        stickyCard,
        { opacity: 0, x: -30, scale: 0.98 },
        { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power3.out" },
      );

      // 2. Sağdaki 12 Kartın Şelale Süzülüşü
      tl.fromTo(
        cards,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.04,
          ease: "power3.out",
        },
        "-=0.5",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const leftColumnItems = currentFaq.slice(0, 6);
  const rightColumnItems = currentFaq.slice(6, 12);

  const renderCard = (item) => {
    const isOpen = openId === item.id;
    return (
      <div
        key={item.id}
        className={`${styles.capsuleCard} ${isOpen ? styles.cardExpanded : ""}`}
        onClick={() => toggleItem(item.id)}
      >
        <div className={styles.capsuleTop}>
          <h3 className={styles.questionText}>{item.q}</h3>
          <div className={styles.iconBox}>
            <span className={styles.iconH} />
            <span
              className={`${styles.iconV} ${isOpen ? styles.vRotated : ""}`}
            />
          </div>
        </div>

        {/* 2026 CSS Grid Akordeon Mekanizması */}
        <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}>
          <div className={styles.drawerInner}>
            <p className={styles.answerText}>{item.a}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="sss"
      aria-label="Sıkça Sorulan Sorular"
    >
      <div className={`container ${styles.container}`}>
        {/* SOL STICKY BÖLÜM */}
        <div className={styles.stickyColumn}>
          <div ref={stickyRef} className={styles.contactCard}>
            <h2 className={styles.cardHeading}>{dict.leftHeading}</h2>
            <p className={styles.cardText}>{dict.leftText}</p>

            <div className={styles.metricGrid}>
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>{dict.metricSpeed}</span>
                <span className={styles.metricSub}>
                  {dict.metricSpeedLabel}
                </span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>{dict.metricGuarantee}</span>
                <span className={styles.metricSub}>
                  {dict.metricGuaranteeLabel}
                </span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <a
                href={`https://wa.me/905519769406?text=${encodeURIComponent(
                  dictionary[lang]?.whatsapp?.message ||
                    dictionary.tr.whatsapp.message,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryWhatsappBtn}
              >
                <span className={styles.btnText}>{dict.waBtn}</span>
                <div className={styles.btnCircle}>
                  <svg
                    className={styles.ctaArrowSvg}
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

              <Link
                href={`/${lang}/iletisim`}
                className={styles.secondaryFormLink}
              >
                <span>{dict.formLink}</span>
                <span className={styles.arrowSmall}>→</span>
              </Link>

              <div className={styles.liveStatusRow}>
                <span
                  className={`${styles.statusPulseDot} ${
                    isOnline ? styles.dotOnline : styles.dotOffline
                  }`}
                />
                <span className={styles.statusText}>
                  {isOnline ? dict.teamOnline : dict.teamOffline}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SAĞ TARAF: 2 SÜTUNLU 12 ADET KAPSÜL KART */}
        <div ref={cardsWrapRef} className={styles.rightColumnsWrap}>
          <div className={styles.faqSubColumn}>
            {leftColumnItems.map(renderCard)}
          </div>
          <div className={styles.faqSubColumn}>
            {rightColumnItems.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
