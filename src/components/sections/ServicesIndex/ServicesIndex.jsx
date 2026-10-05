"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ServicesIndex.module.css";

const basePath = "";

const servicesList = [
  {
    num: "01",
    categoryNumber: "01",
    title: {
      tr: "Web Siteleri & Dijital Vitrin",
      en: "Websites & Digital Storefronts",
    },
    bgImage: `${basePath}/home/servicess/mobile_development.webp`,
  },
  {
    num: "02",
    categoryNumber: "02",
    title: {
      tr: "Sipariş & Satış Sistemleri",
      en: "Ordering & Sales Systems",
    },
    bgImage: `${basePath}/home/servicess/e-commerce.webp`,
  },
  {
    num: "03",
    categoryNumber: "03",
    title: {
      tr: "İşletme Otomasyonu & Yazılım",
      en: "Business Automation & Software",
    },
    bgImage: `${basePath}/home/servicess/business_management_software.webp`,
  },
  {
    num: "04",
    categoryNumber: "04",
    title: {
      tr: "Büyüme Reklamı & Haritalar İlk Sıra",
      en: "Growth Media & Google Maps #1",
    },
    bgImage: `${basePath}/home/servicess/local_seo.webp`,
  },
  {
    num: "05",
    categoryNumber: "05",
    title: {
      tr: "Marka Kimliği, Tasarım & Fotoğraf",
      en: "Brand Identity, Design & Photography",
    },
    bgImage: `${basePath}/home/servicess/social_medya.webp`,
  },
];

export default function ServicesIndex({ lang = "tr" }) {
  const [activeIdx, setActiveIdx] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const isTr = lang === "tr";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const headerEl = headerRef.current;
    const items = listRef.current?.querySelectorAll(`.${styles.serviceItem}`);
    if (!items || items.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      if (headerEl) {
        tl.fromTo(
          headerEl.children,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          },
        );
      }

      tl.fromTo(
        items,
        { autoAlpha: 0, y: 35 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.4",
      );

      if (window.innerWidth <= 768) {
        items.forEach((item, idx) => {
          ScrollTrigger.create({
            trigger: item,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveIdx(idx),
            onEnterBack: () => setActiveIdx(idx),
          });
        });
      }
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
      <div className={styles.topFadeGradient} aria-hidden="true" />

      {/* Hazırladığın Gerçek Görsellerle Arka Plan Parallax Sahnesi */}
      <div
        className={`${styles.hoverImagesContainer} ${
          activeIdx !== null ? styles.containerActive : ""
        }`}
      >
        {servicesList.map((item, idx) => (
          <div
            key={item.num}
            className={`${styles.hoverImage} ${
              activeIdx === idx ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${item.bgImage})` }}
          />
        ))}
        <div className={styles.scrimBackdrop} />
      </div>

      <div className={styles.bottomFadeGradient} aria-hidden="true" />

      <div className={`container ${styles.container}`}>
        {/* ÇİFT FONT TİPOGRAFİK BAŞLIK */}
        <header ref={headerRef} className={styles.sectionHeader}>
          <h2 className={styles.sectionMainTitle}>
            <span className={styles.titleLineSans}>
              {isTr ? "Tek merkezden yönetilen," : "Engineered from one core,"}
            </span>
            <span className={styles.titleLineSerif}>
              {isTr ? "5 temel hizmet alanı." : "5 core digital disciplines."}
            </span>
          </h2>
        </header>

        {/* DOĞRUDAN O KATEGORİYE BAĞLAYAN LÜKS LİSTE */}
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
                  href={`/${lang}/hizmetler#kategori-${item.categoryNumber}`}
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
