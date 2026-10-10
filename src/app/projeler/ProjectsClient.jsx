"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData, projectFilterTabs } from "@/data/projectsData";
import styles from "./Projects.module.css";

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [failedImages, setFailedImages] = useState({});
  const gridRef = useRef(null);
  const rootRef = useRef(null);

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
      const masterTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      masterTl
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
        .fromTo(
          `.${styles.filterBar}`,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.25",
        )
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
          "-=0.15",
        );

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
        <div className={styles.headerArea}>
          <span className={styles.eyebrowBadge}>
            Doğrulanmış Saha Çalışmaları · Gerçek Sonuçlar
          </span>

          <h1 className={styles.title}>
            <span className={styles.titleLineSans}>
              Sahada çalışan ve ciro kazandıran
            </span>
            <span className={styles.titleLineSerif}>
              gerçek referanslarımız.
            </span>
          </h1>

          <p className={styles.subtitle}>
            Uydurma hikayeler değil; işletmelerin telefon karmaşasını bitiren,
            paket servis satışlarını artıran ve aramalarda öne taşıyan somut
            çözümlerimiz.
          </p>
        </div>

        <div className={styles.filterBar}>
          <div className={styles.filterPillsGroup}>
            {projectFilterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleFilterClick(tab.id)}
                  className={`${styles.filterPill} ${
                    isActive ? styles.pillActive : ""
                  }`}
                >
                  <span>{tab.labelTR}</span>
                </button>
              );
            })}
          </div>

          <span className={styles.projectCount}>0{filtered.length} Proje</span>
        </div>

        <div
          ref={gridRef}
          onMouseMove={handleMouseMove}
          className={styles.showcaseGrid}
        >
          {filtered.map((item) => {
            const hasError = failedImages[item.id];
            const currentAlt = item.imageAlt?.tr || item.title;

            // Doğrulanmış Gerçek Görsel Yolu
            const finalImageSrc =
              item.imageSrc ||
              (item.gallery && item.gallery.length > 0 ? item.gallery[0] : "");

            const badgeText =
              typeof item.badge === "object" ? item.badge.tr : item.badge;
            const impactText =
              typeof item.impact === "object" ? item.impact.tr : item.impact;
            const descText =
              typeof item.description === "object"
                ? item.description.tr
                : item.description;

            return (
              <article key={item.id} className={styles.projectCard}>
                <div className={styles.spotlightBorder} aria-hidden="true" />

                <Link
                  href={`/projeler/${item.slug}`}
                  className={styles.cardLink}
                >
                  <div className={styles.viewportArea}>
                    {!hasError && finalImageSrc ? (
                      <Image
                        src={finalImageSrc}
                        alt={currentAlt}
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

                    <span className={styles.innerBadge}>{badgeText}</span>
                  </div>

                  <div className={styles.cardMeta}>
                    <div className={styles.titleRow}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <span className={styles.projectYear}>{item.year}</span>
                    </div>

                    <p className={styles.impactHighlight}>{impactText}</p>
                    <p className={styles.descriptionText}>{descText}</p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        <div className={styles.bottomCtaBox}>
          <div className={styles.ctaLeft}>
            <span className={styles.ctaEyebrow}>Sizin İşletmeniz İçin</span>
            <h3 className={styles.ctaHeading}>
              <span>Sizin için de benzer bir </span>
              <span className={styles.serifAccentWord}>başarı kuralım.</span>
            </h3>
            <p className={styles.ctaDesc}>
              İşletmenizi doğrudan yerinde ziyaret edelim; telefon karmaşanızı,
              sipariş altyapınızı ve müşteri akışınızı birlikte planlayalım.
            </p>
          </div>

          <div className={styles.ctaRight}>
            <a
              href="https://wa.me/905519769406?text=Merhaba%20Hexa%20Dijital,%20i%C5%9Fletmemiz%20i%C3%A7in%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyoruz."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaExecutiveBtn}
            >
              <span className={styles.btnText}>Yerinde Görüşme Başlatın</span>
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
