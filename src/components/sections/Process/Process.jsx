"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { dictionary } from "@/data/dictionary";
import styles from "./Process.module.css";

export default function Process({ lang = "tr" }) {
  const dict = dictionary[lang]?.process || dictionary.tr.process;
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const trackRef = useRef(null);
  const fillLineRef = useRef(null);
  const nodeRefs = useRef([]);
  const [activeNodes, setActiveNodes] = useState([false, false, false, false]);

  const steps = [
    {
      step: "01",
      code: dict.step1Code,
      title: dict.step1Title,
      desc: dict.step1Desc,
      badge: dict.step1Badge,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.nodeIconSvg}
        >
          <path d="M12 3c0 4.5-3.5 8-8 8 4.5 0 8 3.5 8 8 0-4.5 3.5-8 8-8-4.5 0-8-3.5-8-8z" />
          <path d="M19 3v4M21 5h-4" />
        </svg>
      ),
    },
    {
      step: "02",
      code: dict.step2Code,
      title: dict.step2Title,
      desc: dict.step2Desc,
      badge: dict.step2Badge,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.nodeIconSvg}
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      step: "03",
      code: dict.step3Code,
      title: dict.step3Title,
      desc: dict.step3Desc,
      badge: dict.step3Badge,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.nodeIconSvg}
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        </svg>
      ),
    },
    {
      step: "04",
      code: dict.step4Code,
      title: dict.step4Title,
      desc: dict.step4Desc,
      badge: dict.step4Badge,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.nodeIconSvg}
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const header = headerRef.current;
    const track = trackRef.current;
    const fillLine = fillLineRef.current;
    if (!track || !fillLine) return;

    const ctx = gsap.context(() => {
      // 1. Başlık Alanı Giriş Animasyonu
      if (header) {
        gsap.fromTo(
          header.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: header,
              start: "top 80%",
              once: true,
            },
          },
        );
      }

      // 2. Kinetik Çizginin GSAP ScrollTrigger ile Tereyağı Gibi Akışı
      ScrollTrigger.create({
        trigger: track,
        start: "top 60%", // Çizgi ekranın %60'ına geldiğinde akmaya başlar
        end: "bottom 60%", // Listenin sonuna ulaştığında tamamlanır
        scrub: 0.5, // 0.5s ultra pürüzsüz takip
        onUpdate: (self) => {
          const progress = self.progress;
          const trackHeight = track.offsetHeight;
          const currentHeight = progress * trackHeight;

          // Çizgi boyunu doğrudan donanım hızlandırmalı height ile güncelle
          fillLine.style.height = `${currentHeight}px`;

          // Düğümlerin tam merkezine ulaşıldığında aktif et
          const newActives = nodeRefs.current.map((nodeEl) => {
            if (!nodeEl) return false;
            const nodeCenter = nodeEl.offsetTop + nodeEl.offsetHeight / 2;
            return currentHeight >= nodeCenter;
          });

          setActiveNodes(newActives);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="nasil-calisiyoruz">
      <div className={`container ${styles.container}`}>
        {/* BÖLÜM BAŞLIĞI */}
        <header ref={headerRef} className={styles.header}>
          <div className={styles.eyebrowWrapper}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>{dict.eyebrow}</span>
          </div>

          <h2 className={styles.mainTitle}>
            {dict.titleMain} <br />
            <span className={styles.titleAccent}>{dict.titleAccent}</span>
          </h2>

          <p className={styles.subtitle}>{dict.subtitle}</p>
        </header>

        {/* KİNETİK TİMELİNE SAHNESİ */}
        <div className={styles.timelineStage}>
          {/* Ortadaki Dikey Hat */}
          <div ref={trackRef} className={styles.timelineTrack}>
            <div className={styles.trackDashed} />
            <div ref={fillLineRef} className={styles.trackSolidFill} />
          </div>

          {/* Adımlar Listesi */}
          <div className={styles.stepsList}>
            {steps.map((item, idx) => {
              const isReached = activeNodes[idx];

              return (
                <div key={item.step} className={styles.stepRow}>
                  {/* SOL TARAF: TİPOGRAFİ */}
                  <div
                    className={`${styles.textSide} ${
                      isReached ? styles.textActive : ""
                    }`}
                  >
                    <span className={styles.stepCode}>{item.code}</span>
                    <h3 className={styles.stepTitle}>{item.title}</h3>
                    <p className={styles.stepDesc}>{item.desc}</p>
                    <div className={styles.metricPill}>
                      <span className={styles.pillDot} />
                      <span>{item.badge}</span>
                    </div>
                  </div>

                  {/* MERKEZ: KİNETİK İKON DÜĞÜMÜ */}
                  <div className={styles.nodeColumn}>
                    <div
                      ref={(el) => (nodeRefs.current[idx] = el)}
                      className={`${styles.iconNodeOuter} ${
                        isReached ? styles.nodeActive : ""
                      }`}
                    >
                      <div className={styles.iconNodeInner}>{item.icon}</div>
                    </div>
                  </div>

                  {/* SAĞ TARAF: TELEMETRİ KARTI */}
                  <div className={styles.cardSide}>
                    <div
                      className={`${styles.telemetryCard} ${
                        isReached ? styles.cardActive : ""
                      }`}
                    >
                      <div className={styles.cardTop}>
                        <span className={styles.phaseLabel}>
                          PHASE // {item.step}
                        </span>
                        <span className={styles.statusLabel}>
                          {isReached ? "ACTIVE" : "STANDBY"}
                        </span>
                      </div>
                      <div className={styles.cardCenter}>
                        <span className={styles.giantNum}>{item.step}</span>
                        {isReached && (
                          <span className={styles.radarPulseRing} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
