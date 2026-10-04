"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "@/data/projectsData";
import styles from "./Projects.module.css";

const filterTabs = [
  { id: "all", labelTR: "Tümü", labelEN: "All" },
  {
    id: "food",
    labelTR: "Restoran & Paket Servis",
    labelEN: "Restaurant & Delivery",
  },
  {
    id: "automation",
    labelTR: "Özel Yazılım & Kasa",
    labelEN: "Custom Software & POS",
  },
  { id: "web", labelTR: "Web & Performans", labelEN: "Web & Performance" },
  {
    id: "brand",
    labelTR: "Marka Kimliği & Tabela",
    labelEN: "Brand Identity & Signage",
  },
  { id: "seo", labelTR: "Harita & İtibar", labelEN: "Maps & Reputation" },
];

export default function ProjectsClient({ lang }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [failedImages, setFailedImages] = useState({});
  const gridRef = useRef(null);
  const rootRef = useRef(null);
  const isTr = lang === "tr";

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // TEK MASTER GSAP TİMELİNE: ÖNCE BAŞLIK ➔ SONRA FİLTRELER ➔ EN SON KARTLAR
      const masterTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      masterTl
        // 1. ADIM: Başlık ve açıklama süzülür
        .fromTo(
          `.${styles.headerArea} > *`,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
          },
        )
        // 2. ADIM: Filtre çubuğu (Haplar) sahneye çıkar
        .fromTo(
          `.${styles.filterBar}`,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.25", // Başlık biterken filtre hemen başlar
        )
        // 3. ADIM: Filtreler açıldığı an kartlar sırayla dökülür
        .fromTo(
          `.${styles.projectCard}`,
          { opacity: 0, y: 35, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.08,
          },
          "-=0.15", // Filtre oturduğu an kartlar yağ gibi akar
        );

      // 4. ALT CTA KUTUSU SCROLL TRIGGER İLE GELİR
      gsap.fromTo(
        `.${styles.bottomCtaBox}`,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.bottomCtaBox}`,
            start: "top 88%",
            once: true,
          },
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handleFilterClick = (tabId) => {
    if (tabId === activeFilter) return;

    const cards = gridRef.current?.querySelectorAll(`.${styles.projectCard}`);
    if (!cards) {
      setActiveFilter(tabId);
      return;
    }

    gsap.to(cards, {
      opacity: 0,
      scale: 0.97,
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
              { opacity: 0, y: 25, scale: 0.97 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.55,
                stagger: 0.07,
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
    <div ref={rootRef} className={styles.mainContainer}>
      <section className={styles.contentSection}>
        {/* 1. BAŞLIK ALANI */}
        <div className={styles.headerArea}>
          <span className={styles.eyebrowBadge}>
            {isTr
              ? "Doğrulanmış Saha Çalışmaları · Gerçek Sonuçlar"
              : "Verified Commercial Works · Proven Outcomes"}
          </span>

          <h1 className={styles.title}>
            <span className={styles.titleLineSans}>
              {isTr
                ? "Sahada çalışan ve ciro kazandıran"
                : "Commercial systems engineered for"}
            </span>
            <span className={styles.titleLineSerif}>
              {isTr ? "gerçek referanslarımız." : "verifiable business growth."}
            </span>
          </h1>

          <p className={styles.subtitle}>
            {isTr
              ? "Uydurma hikayeler değil; işletmelerin telefon karmaşasını bitiren, paket servis satışlarını artıran ve aramalarda öne taşıyan somut çözümlerimiz."
              : "No generic templates. Custom digital systems built to solve real operational bottlenecks and increase business turnover."}
          </p>
        </div>

        {/* 2. ÖNCE GELEN FİLTRE HAPLARI */}
        <div className={styles.filterBar}>
          <div className={styles.filterPillsGroup}>
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
                  <span>{isTr ? tab.labelTR : tab.labelEN}</span>
                </button>
              );
            })}
          </div>

          <span className={styles.projectCount}>
            0{filtered.length} {isTr ? "Proje" : "Projects"}
          </span>
        </div>

        {/* 3. SONRA DÖKÜLEN KARTLAR */}
        <div
          ref={gridRef}
          onMouseMove={handleMouseMove}
          className={styles.showcaseGrid}
        >
          {filtered.map((item) => {
            const hasError = failedImages[item.id];

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
                        alt={item.title}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 420px"
                        className={styles.projectImg}
                        onError={() => handleImageError(item.id)}
                      />
                    ) : (
                      <div className={styles.fallbackCanvas}>
                        <span className={styles.fallbackMonogram}>
                          {item.monogram}
                        </span>
                      </div>
                    )}

                    <div className={styles.vignetteOverlay} />

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

                    <span className={styles.innerBadge}>
                      {item.categoryLabel}
                    </span>
                  </div>

                  <div className={styles.cardMeta}>
                    <div className={styles.titleRow}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <span className={styles.projectYear}>{item.year}</span>
                    </div>

                    <p className={styles.impactHighlight}>{item.impact}</p>
                    <p className={styles.descriptionText}>{item.description}</p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {/* 4. ALT DÖNÜŞÜM ÇAĞRISI */}
        <div className={styles.bottomCtaBox}>
          <div className={styles.ctaLeft}>
            <span className={styles.ctaEyebrow}>
              {isTr ? "Sizin İşletmeniz İçin" : "Tailored For Your Business"}
            </span>
            <h3 className={styles.ctaHeading}>
              <span>
                {isTr ? "Sizin için de benzer bir " : "Let’s engineer a "}
              </span>
              <span className={styles.serifAccentWord}>
                {isTr ? "başarı kuralım." : "verifiable growth engine."}
              </span>
            </h3>
            <p className={styles.ctaDesc}>
              {isTr
                ? "İşletmenizi doğrudan yerinde ziyaret edelim; telefon karmaşanızı, sipariş altyapınızı ve müşteri akışınızı birlikte planlayalım."
                : "We visit your business directly on-site to inspect customer flow and deploy high-converting digital pipelines."}
            </p>
          </div>

          <div className={styles.ctaRight}>
            <a
              href="https://wa.me/905519769406?text=Merhaba%20Hexa%20Dijital,%20i%C5%9Fletmemiz%20i%C3%A7in%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyoruz."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaExecutiveBtn}
            >
              <span className={styles.btnText}>
                {isTr ? "Yerinde Görüşme Başlatın" : "Initiate Consultation"}
              </span>
              <div className={styles.btnCircle}>
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
          </div>
        </div>
      </section>
    </div>
  );
}
