"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./SelectedWorks.module.css";

const basePath =
  process.env.NODE_ENV === "production" ? "/hexa-dijital-final" : "";

const filterTabs = [
  { id: "all", label: "TÜMÜ" },
  { id: "web", label: "WEB TASARIM & YAZILIM" },
  { id: "seo", label: "GOOGLE HARİTA & SEO" },
  { id: "automation", label: "SİPARİŞ & ADİSYON" },
];

const projectsData = [
  {
    id: 1,
    slug: "munchico-fried-chicken",
    title: "Munchico Fried Chicken",
    category: "automation",
    badge: "QR MENÜ & SİPARİŞ",
    year: "2025",
    impact: "Sıfır Komisyonlu QR Menü & Paket Servis Sistemi",
    imageSrc: `${basePath}/projects/project-1.webp`,
    imageAlt: {
      tr: "Bursa Restoran QR Menü Sipariş ve Paket Servis Yazılımı - Munchico Fried Chicken",
      en: "Bursa Restaurant QR Menu Ordering System - Munchico Fried Chicken",
    },
    monogram: "MFC",
    logoSrc: "",
  },
  {
    id: 2,
    slug: "alya-davet",
    title: "Alya Davet & Organizasyon",
    category: "seo",
    badge: "HARİTALARDA 1. SIRA",
    year: "2025",
    impact: "Google Haritalar 1. Sıra Hakimiyeti & Rezervasyon Akışı",
    imageSrc: `${basePath}/projects/project-2.webp`,
    imageAlt: {
      tr: "Bursa Yerel SEO ve Google Haritalar 1. Sıra Çalışması - Alya Davet",
      en: "Bursa Local SEO and Google Maps #1 Ranking - Alya Event",
    },
    monogram: "ADY",
    logoSrc: "",
  },
  {
    id: 3,
    slug: "hira-koltuk-yikama",
    title: "Hira Halı & Koltuk Yıkama",
    category: "web",
    badge: "YAZILIM & WEB",
    year: "2024",
    impact: "Hızlı Web Sitesi & Her Gün Telefon Çaldıran Reklam Motoru",
    imageSrc: `${basePath}/projects/project-3.jpeg`,
    imageAlt: {
      tr: "Bursa Web Tasarım ve Google Ads Reklam Yönetimi - Hira Koltuk Yıkama",
      en: "Bursa Web Design and Google Ads Acquisition Engine - Hira Cleaning",
    },
    monogram: "HHY",
    logoSrc: "",
  },
  {
    id: 4,
    slug: "taha-usta",
    title: "Taha Usta",
    category: "automation",
    badge: "ADİSYON & KASA",
    year: "2024",
    impact: "Restoran Masaları, Adisyon & Kasa Otomasyonu",
    imageSrc: `${basePath}/projects/project-4.jpg`,
    imageAlt: {
      tr: "Bursa Restoran Masaları Adisyon ve Kasa Otomasyon Yazılımı - Taha Usta",
      en: "Bursa Restaurant POS and Cashier Automation System - Taha Usta",
    },
    monogram: "THU",
    logoSrc: "",
  },
  {
    id: 5,
    slug: "tataroglu-insaat",
    title: "Tataroğlu İnşaat",
    category: "web",
    badge: "YAZILIM & WEB",
    year: "2024",
    impact: "Kurumsal Mimari Portföy & Dijital Firma Vitrini",
    imageSrc: `${basePath}/projects/project-5.jpg`,
    imageAlt: {
      tr: "Bursa Kurumsal Web Tasarım ve Mimari Firma Kataloğu - Tataroğlu İnşaat",
      en: "Bursa Corporate Architecture Web Platform - Tataroglu Construction",
    },
    monogram: "TTR",
    logoSrc: "",
  },
  {
    id: 6,
    slug: "damisco",
    title: "Damisco Global",
    category: "web",
    badge: "E-TİCARET",
    year: "2024",
    impact: "Küresel E-Ticaret & Tescilli İhracat Altyapısı",
    imageSrc: `${basePath}/projects/project-6.jpg`,
    imageAlt: {
      tr: "Bursa Özel Web Yazılımı ve Çok Dilli E-Ticaret İhracat Altyapısı - Damisco Global",
      en: "Bursa Custom Web Development and Global Export Platform - Damisco Global",
    },
    monogram: "DMC",
    logoSrc: "",
  },
];

export default function SelectedWorks({ lang = "tr" }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [failedImages, setFailedImages] = useState({});
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const filterRef = useRef(null);
  const gridRef = useRef(null);
  const isTr = lang === "tr";

  // LINEAR SPOTLIGHT: Farenin kartlar üzerindeki cerrahi piksel takibi
  const handleMouseMove = (e) => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(`.${styles.projectCard}`);

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  };

  // GSAP SENKRONİZE SAHNE AÇILIŞI (BAŞLIK MASKESİ + FİLTRE + KARTLAR)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const eyebrow = headerRef.current?.querySelector(
      `.${styles.eyebrowWrapper}`,
    );
    const line1 = headerRef.current?.querySelector(`.${styles.titleLine1}`);
    const line2 = headerRef.current?.querySelector(`.${styles.titleLine2}`);
    const filterBar = filterRef.current;
    const cards = gridRef.current?.querySelectorAll(`.${styles.projectCard}`);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Bölüm ekranın %75'ine girdiği an başlar
          once: true,
        },
      });

      // 1. Rozet açılır
      if (eyebrow) {
        tl.fromTo(
          eyebrow,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
        );
      }

      // 2. İki satırlı başlık gizli maskenin arkasından fırlar
      if (line1 && line2) {
        tl.fromTo(
          [line1, line2],
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.3",
        );
      }

      // 3. Filtre çubuğu yumuşakça oturur
      if (filterBar) {
        tl.fromTo(
          filterBar,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        );
      }

      // 4. Kartlar ardı ardına 3D süzülüşle sahneye oturur
      if (cards && cards.length > 0) {
        tl.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.09,
            ease: "power3.out",
          },
          "-=0.3",
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // GSAP AKICI FİLTRE DEĞİŞİMİ
  const handleFilterClick = (tabId) => {
    if (tabId === activeFilter) return;

    const cards = gridRef.current?.querySelectorAll(`.${styles.projectCard}`);
    if (!cards) {
      setActiveFilter(tabId);
      return;
    }

    gsap.to(cards, {
      opacity: 0,
      scale: 0.96,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setActiveFilter(tabId);
        setTimeout(() => {
          const newCards = gridRef.current?.querySelectorAll(
            `.${styles.projectCard}`,
          );
          if (newCards) {
            gsap.fromTo(
              newCards,
              { opacity: 0, y: 25, scale: 0.96 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.55,
                stagger: 0.08,
                ease: "power3.out",
              },
            );
          }
        }, 30);
      },
    });
  };

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const filtered =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((item) => item.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="projeler"
      aria-label="Seçkin Projeler Vitrini"
    >
      <div className={`container ${styles.container}`}>
        {/* 1. APPLE TARZI MASKELİ EDİTORYAL BAŞLIK */}
        <header ref={headerRef} className={styles.header}>
          <div className={styles.eyebrowWrapper}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>
              {isTr ? "SEÇKİN ÇALIŞMALAR" : "SELECTED WORK"}
            </span>
          </div>

          <h2 className={styles.mainTitle}>
            <span className={styles.maskContainer}>
              <span className={styles.titleLine1}>
                {isTr
                  ? "Sözde değil sahada çalışan,"
                  : "Quiet craft, engineered for"}
              </span>
            </span>

            <span className={styles.maskContainer}>
              <span className={`${styles.titleLine2} ${styles.titleAccent}`}>
                {isTr
                  ? "müşterisiyle buluşmuş projeler."
                  : "brands you probably already use."}
              </span>
            </span>
          </h2>
        </header>

        {/* 2. RAFİNE FİLTRE ÇUBUĞU */}
        <div ref={filterRef} className={styles.filterBar}>
          <div className={styles.filterPillsGroup}>
            <span className={styles.filterLabel}>
              {isTr ? "FİLTRE:" : "FILTER:"}
            </span>
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleFilterClick(tab.id)}
                  className={`${styles.filterPill} ${
                    isActive ? styles.pillActive : ""
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <span className={styles.projectCount}>
            // 0{filtered.length} {isTr ? "PROJE" : "PROJECTS"}
          </span>
        </div>

        {/* 3. LINEAR SPOTLIGHT KART IZGARASI */}
        <div
          ref={gridRef}
          onMouseMove={handleMouseMove}
          className={styles.showcaseGrid}
        >
          {filtered.map((item) => {
            const hasError = failedImages[item.id];
            const currentAlt =
              item.imageAlt?.[lang] || item.imageAlt?.tr || item.title;

            return (
              <article key={item.id} className={styles.projectCard}>
                <div className={styles.spotlightBorder} aria-hidden="true" />

                <Link
                  href={`/${lang}/projeler/${item.slug}`}
                  className={styles.cardLink}
                >
                  <div className={styles.viewportArea}>
                    {!hasError ? (
                      <Image
                        src={item.imageSrc}
                        alt={currentAlt}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 420px"
                        className={styles.projectImg}
                        onError={() => handleImageError(item.id)}
                      />
                    ) : (
                      <div className={styles.fallbackCanvas}>
                        <div className={styles.fallbackGridPattern} />
                        <span className={styles.fallbackMonogram}>
                          {item.monogram}
                        </span>
                        <div className={styles.telemetryBar}>
                          <span className={styles.telemetryDot} />
                          <span className={styles.telemetryText}>
                            {isTr ? "SİSTEM // AKTİF" : "SYSTEM // ONLINE"}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className={styles.vignetteOverlay} />

                    <div className={styles.brandLogoBadge}>
                      {item.logoSrc ? (
                        <Image
                          src={item.logoSrc}
                          alt={item.title}
                          width={24}
                          height={24}
                          className={styles.brandLogoImg}
                        />
                      ) : (
                        <span className={styles.monogramMini}>
                          {item.monogram}
                        </span>
                      )}
                    </div>

                    <div className={styles.heroArrowBadge}>
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

                    <span className={styles.innerBadge}>{item.badge}</span>
                  </div>

                  <div className={styles.cardMeta}>
                    <div className={styles.titleRow}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <span className={styles.projectYear}>{item.year}</span>
                    </div>
                    <p className={styles.impactText}>{item.impact}</p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
