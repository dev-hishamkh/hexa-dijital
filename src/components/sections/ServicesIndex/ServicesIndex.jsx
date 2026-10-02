"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./ServicesIndex.module.css";

const services = [
  {
    num: "01",
    slug: "web-tasarim-yazilim",
    title: "Özel Web Mimarisi",
    bgImage:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=85",
  },
  {
    num: "02",
    slug: "sektorel-otomasyon-pos",
    title: "Satış & Sipariş Sistemleri",
    bgImage:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1800&q=85",
  },
  {
    num: "03",
    slug: "yerel-seo-harita-dominasyonu",
    title: "Google Harita & Yerel SEO",
    bgImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85",
  },
  {
    num: "04",
    slug: "performans-pazarlama-ads",
    title: "Performans Reklam Yönetimi",
    bgImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=85",
  },
  {
    num: "05",
    slug: "marka-kimligi-kreatif",
    title: "Kurumsal Marka Kimliği",
    bgImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
  },
];

export default function ServicesIndex({ lang = "tr" }) {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section
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
        {services.map((item, idx) => (
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
        <span className={styles.sectionTitle}>// HİZMET MİMARİSİ</span>

        <div
          className={`${styles.servicesList} ${
            activeIdx !== null ? styles.hasActiveItem : ""
          }`}
        >
          {services.map((item, idx) => (
            <div
              key={item.num}
              className={`${styles.serviceItem} ${
                activeIdx === idx ? styles.itemHovered : ""
              }`}
              onMouseEnter={() => setActiveIdx(idx)}
            >
              <Link href={`/${lang}/hizmetler`} className={styles.serviceLink}>
                <h3 className={styles.serviceName}>{item.title}</h3>
                <span className={styles.serviceNumber}>{item.num}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
