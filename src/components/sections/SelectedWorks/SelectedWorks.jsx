"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    monogram: "MFC",
    logoSrc: "", // public/projects/logos/munchico.svg koyunca buraya bağlanır
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
    monogram: "DMC",
    logoSrc: "",
  },
];

export default function SelectedWorks({ lang = "tr" }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [failedImages, setFailedImages] = useState({});
  const isTr = lang === "tr";

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const filtered =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((item) => item.category === activeFilter);

  return (
    <section
      className={styles.section}
      id="projeler"
      aria-label="Seçkin Projeler Vitrini"
    >
      <div className={`container ${styles.container}`}>
        {/* 1. ÜST EDİTORYAL BAŞLIK */}
        <header className={styles.header}>
          <div className={styles.eyebrowWrapper}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>
              {isTr
                ? "// SEÇKİN ÇALIŞMALAR · 2024—2026"
                : "// SELECTED WORK · 2024—2026"}
            </span>
          </div>

          <h2 className={styles.mainTitle}>
            {isTr ? (
              <>
                Bursa ve ötesinde, her gün <br className={styles.titleBr} />
                <span className={styles.titleAccent}>
                  karşılaştığınız markalar için ürettik.
                </span>
              </>
            ) : (
              <>
                Quiet craft, engineered for <br className={styles.titleBr} />
                <span className={styles.titleAccent}>
                  brands you probably already use.
                </span>
              </>
            )}
          </h2>
        </header>

        {/* 2. RAFİNE FİLTRE ÇUBUĞU */}
        <div className={styles.filterBar}>
          <div className={styles.filterPillsGroup}>
            <span className={styles.filterLabel}>
              {isTr ? "FİLTRE:" : "FILTER:"}
            </span>
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`${styles.filterPill} ${isActive ? styles.pillActive : ""}`}
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

        {/* 3. 3 SÜTUNLU KART IZGARASI */}
        <div className={styles.showcaseGrid}>
          {filtered.map((item) => {
            const hasError = failedImages[item.id];

            return (
              <article key={item.id} className={styles.projectCard}>
                <Link
                  href={`/${lang}/projeler/${item.slug}`}
                  className={styles.cardLink}
                >
                  {/* Görsel Çerçevesi */}
                  <div className={styles.viewportArea}>
                    {!hasError ? (
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
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

                    {/* Karartma Tülü */}
                    <div className={styles.vignetteOverlay} />

                    {/* 
                      1. YENİ DETAY: SOL ÜST KÖŞEDEKİ MARKA LOGOSU / MONOGRAM ROZETİ 
                    */}
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

                    {/* 
                      2. YENİ DETAY: SAĞ ÜSTTEKİ HERO'DAN GELEN CERRAHİ SVG DIŞ BAĞLANTI OKU
                    */}
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

                    {/* Sol Alt Kategori Rozeti */}
                    <span className={styles.innerBadge}>{item.badge}</span>
                  </div>

                  {/* Kart Altı Editoryal Tipografi */}
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
