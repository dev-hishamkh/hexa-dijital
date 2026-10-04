"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ServicesIndex.module.css";

const servicesList = [
  {
    num: "01",
    slug: "kurumsal-web-siteleri",
    title: {
      tr: "Özel Web Mimarisi",
      en: "Bespoke Web Architecture",
    },
    bgImage:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=85",
  },
  {
    num: "02",
    slug: "komisyonsuz-paket-servis",
    title: {
      tr: "Satış & Sipariş Sistemleri",
      en: "POS & Ordering Automation",
    },
    bgImage:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1800&q=85",
  },
  {
    num: "03",
    slug: "google-haritalar-1-sira",
    title: {
      tr: "Harita & Yerel Arama Hakimiyeti",
      en: "Google Maps & Local Search Dominance",
    },
    bgImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85",
  },
  {
    num: "04",
    slug: "meta-instagram-facebook-reklamlari",
    title: {
      tr: "Performans Reklam Yönetimi",
      en: "Performance Media & Acquisition",
    },
    bgImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=85",
  },
  {
    num: "05",
    slug: "ozel-logo-tasarimi",
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
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          },
        );
      }

      tl.fromTo(
        items,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
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

      {/* Arka Plan Parallax Resimler */}
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
        {/* 2026 S+ ÇİFT FONT TİPOGRAFİK BAŞLIK (SANS + SERİF İTALİK İMZA) */}
        <header ref={headerRef} className={styles.sectionHeader}>
          <h2 className={styles.sectionMainTitle}>
            <span className={styles.titleLineSans}>
              {isTr ? "Tek merkezden yönetilen," : "Engineered from one core,"}
            </span>
            <span className={styles.titleLineSerif}>
              {isTr
                ? "5 senkronize büyüme motoru."
                : "5 synchronized growth engines."}
            </span>
          </h2>
        </header>

        {/* LÜKS MİNİMALİST HİZMET LİSTESİ */}
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
