"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ServicesIndex.module.css";

const servicesList = [
  {
    num: "01",
    slug: "web-tasarim-yazilim",
    title: {
      tr: "Özel Web Mimarisi",
      en: "Bespoke Web Architecture",
    },
    bgImage:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=85",
  },
  {
    num: "02",
    slug: "sektorel-otomasyon-pos",
    title: {
      tr: "Satış & Sipariş Sistemleri",
      en: "POS & Ordering Automation",
    },
    bgImage:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1800&q=85",
  },
  {
    num: "03",
    slug: "yerel-seo-harita-dominasyonu",
    title: {
      tr: "Google Harita & Yerel SEO",
      en: "Google Maps & Local SEO",
    },
    bgImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85",
  },
  {
    num: "04",
    slug: "performans-pazarlama-ads",
    title: {
      tr: "Performans Reklam Yönetimi",
      en: "Performance Media & Ads",
    },
    bgImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=85",
  },
  {
    num: "05",
    slug: "marka-kimligi-kreatif",
    title: {
      tr: "Kurumsal Marka Kimliği",
      en: "Corporate Brand Identity",
    },
    bgImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
  },
];

export default function ServicesIndex({ lang = "tr" }) {
  const [activeIdx, setActiveIdx] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const listRef = useRef(null);
  const isTr = lang === "tr";

  // GSAP SCROLLTRIGGER İLE KADEMELİ SAHNE GİRİŞİ
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const titleEl = titleRef.current;
    const items = listRef.current?.querySelectorAll(`.${styles.serviceItem}`);
    if (!items || items.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%", // Bölüm ekranın %72'sine girdiğinde başlar
          once: true,
        },
      });

      // 1. Üst Başlık soldan süzülerek açılır
      if (titleEl) {
        tl.fromTo(
          titleEl,
          { opacity: 0, x: -25 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
        );
      }

      // 2. 5 Hizmet satırı dipten yukarı sırayla yaylanır
      tl.fromTo(
        items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.3",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.servicesSection}
      id="hizmetler"
      aria-label="Hizmetlerimiz"
      onMouseLeave={() => setActiveIdx(null)}
    >
      {/* Üst Erime Sisi */}
      <div className={styles.topFadeGradient} aria-hidden="true" />

      {/* Arka Plan Parallax Resimler & Koyu Perde */}
      <div
        className={`${styles.hoverImagesContainer} ${
          activeIdx !== null ? styles.containerActive : ""
        }`}
      >
        {servicesList.map((item, idx) => (
          <div
            key={item.num}
            className={`${styles.hoverImage} ${activeIdx === idx ? styles.active : ""}`}
            style={{ backgroundImage: `url(${item.bgImage})` }}
          />
        ))}
        <div className={styles.scrimBackdrop} />
      </div>

      {/* Alt Erime Sisi */}
      <div className={styles.bottomFadeGradient} aria-hidden="true" />

      <div className={`container ${styles.container}`}>
        {/* SEMANTİK H2 BAŞLIĞI */}
        <h2 ref={titleRef} className={styles.sectionTitle}>
          {isTr
            ? "Bursa Web Tasarım & Yazılım Hizmetleri"
            : "Digital Engineering & Web Services"}
        </h2>

        {/* GSAP KADEMELİ GİRİŞ LİSTESİ */}
        <div
          ref={listRef}
          className={`${styles.servicesList} ${
            activeIdx !== null ? styles.hasActiveItem : ""
          }`}
        >
          {servicesList.map((item, idx) => {
            const currentTitle = isTr ? item.title.tr : item.title.en;

            return (
              <div
                key={item.num}
                className={`${styles.serviceItem} ${
                  activeIdx === idx ? styles.itemHovered : ""
                }`}
                onMouseEnter={() => setActiveIdx(idx)}
              >
                <Link
                  href={`/${lang}/hizmetler`}
                  className={styles.serviceLink}
                >
                  <h3 className={styles.serviceName}>{currentTitle}</h3>
                  <span className={styles.serviceNumber}>{item.num}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
