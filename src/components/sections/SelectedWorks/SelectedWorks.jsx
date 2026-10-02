"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./SelectedWorks.module.css";

const basePath =
  process.env.NODE_ENV === "production" ? "/hexa-dijital-final" : "";

// Sadece en kritik 2 bilgi: Başlık ve Tek Cümlelik Ticari Sonuç
const projects = [
  {
    slug: "munchico-fried-chicken",
    title: "Munchico",
    result:
      "Sıfır komisyonlu QR menü, paket servis otomasyonu ve marka kimliği.",
    href: "/projeler/munchico",
    type: "mobile",
    mockupImage: `${basePath}/projects/project-1.png`,
  },
  {
    slug: "alya-davet",
    title: "Alya Davet",
    result:
      "Bursa yerel etkinlik aramalarında Google Haritalar 1. sıra dominasyonu.",
    href: "/projeler/alya-davet",
    type: "browser",
    mockupImage: `${basePath}/projects/project-2.png`,
  },
];

export default function SelectedWorks({ lang = "tr" }) {
  const isTr = lang === "tr";

  return (
    <section
      className={styles.section}
      id="projeler"
      aria-label="Seçkin Projeler Vitrini"
    >
      <div className={`container ${styles.container}`}>
        {/* BÖLÜM BAŞLIĞI */}
        <header className={styles.header}>
          <div className={styles.eyebrowWrapper}></div>

          <h2 className={styles.mainTitle}>
            {isTr ? "Seçkin Projeler" : "Selected Works"}
          </h2>

          <p className={styles.subtitle}>
            {isTr
              ? "Tasarım ve mühendisliği doğrudan ticari sonuca dönüştüren tescilli altyapılar."
              : "Engineered web architectures delivering tangible operational impact."}
          </p>
        </header>

        {/* CİHAZ VİTRİNİ: SADE, TOK VE NET */}
        <div className={styles.showcaseGrid}>
          {projects.map((item) => (
            <article key={item.slug} className={styles.showcaseItem}>
              <Link href={`/${lang}${item.href}`} className={styles.itemLink}>
                {/* 1. KISIM: HAVADA SÜZÜLEN CİHAZ SAHNESİ */}
                <div className={styles.deviceStage}>
                  <div className={styles.ambientGlow} />

                  {item.type === "mobile" ? (
                    <div className={styles.phoneContainer}>
                      <div className={styles.phoneBody}>
                        <div className={styles.phoneSpeaker} />
                        <div className={styles.phoneScreen}>
                          <Image
                            src={item.mockupImage}
                            alt={item.title}
                            fill
                            sizes="(max-width: 860px) 100vw, 500px"
                            className={styles.screenImg}
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.browserContainer}>
                      <div className={styles.browserBody}>
                        <div className={styles.browserHeader}>
                          <div className={styles.windowControls}>
                            <span className={styles.controlDot} />
                            <span className={styles.controlDot} />
                            <span className={styles.controlDot} />
                          </div>
                          <div className={styles.addressBar}>
                            <span>google.com/maps/search/bursa-davet</span>
                          </div>
                        </div>
                        <div className={styles.browserScreen}>
                          <Image
                            src={item.mockupImage}
                            alt={item.title}
                            fill
                            sizes="(max-width: 860px) 100vw, 600px"
                            className={styles.screenImg}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Sağ Üst Cerrahi Ok */}
                  <div className={styles.floatingArrow}>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className={styles.arrowIcon}
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

                {/* 2. KISIM: KAFA KARIŞTIRMAYAN SAF VE TOK METİN ALANI */}
                <div className={styles.infoArea}>
                  <h3 className={styles.itemTitle}>
                    <span>{item.title}</span>
                    <span className={styles.titleArrow}>↗</span>
                  </h3>
                  <p className={styles.itemResult}>{item.result}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
