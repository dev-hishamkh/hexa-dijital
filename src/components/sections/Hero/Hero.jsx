"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LightRays from "@/components/ui/LightRays/LightRays";
import { dictionary } from "@/data/dictionary";
import styles from "./Hero.module.css";

export default function Hero({ lang = "tr" }) {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isTr = lang === "tr";
  const dict = dictionary[lang]?.hero || dictionary.tr.hero;

  useEffect(() => {
    setIsMounted(true);

    const updateTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsLightMode(theme === "light");
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`${styles.heroSection} ${isMounted ? styles.heroMounted : ""}`}
    >
      {/* LightRays Arka Plan Işığı */}
      <div className={styles.lightContainer}>
        <LightRays
          raysOrigin="top-right"
          raysColor={isLightMode ? "#0071E3" : "#00FFD1"}
          raysSpeed={0.8}
          lightSpread={1.4}
          rayLength={2.1}
          followMouse={true}
          mouseInfluence={0.05}
          noiseAmount={0.02}
          distortion={0.01}
          lightMode={isLightMode}
        />
      </div>

      <div className={`container ${styles.heroContainer}`}>
        {/* MERKEZİ EDİTORYAL TİPOGRAFİ (S+ TIER-1 STANDARDI) */}
        <div className={styles.contentColumn}>
          <h1 className={styles.heroTitle}>
            <span className={`${styles.titleLineWrapper} ${styles.delay1}`}>
              <span className={styles.titleLine}>{dict.h1Prefix}</span>
            </span>

            <span className={`${styles.titleLineWrapper} ${styles.delay2}`}>
              <span className={styles.titleLine}>
                <span className={styles.serifItalic}>{dict.h1Serif}</span>
              </span>
            </span>

            <span className={`${styles.titleLineWrapper} ${styles.delay3}`}>
              <span className={styles.titleLine}>
                <span>{isTr ? "ciro odaklı" : "revenue-driven"}</span>{" "}
                <span className={styles.accentSerif}>{dict.h1Suffix}</span>
              </span>
            </span>
          </h1>

          <div className={`${styles.bottomArea} ${styles.delay4}`}>
            <p className={styles.manifesto}>{dict.manifesto}</p>

            <div className={styles.actionGroup}>
              <Link
                href={`/${lang}/iletisim`}
                className={styles.magneticAction}
              >
                <div className={styles.actionCircle}>
                  <svg
                    className={styles.arrowDiagonal}
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
                <div className={styles.actionLabels}>
                  <span className={styles.actionPrimaryText}>
                    {dict.primaryCta}
                  </span>
                  <span className={styles.actionSubText}>{dict.subCta}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Keskin Çizgiyi Yok Eden Sinematik Erime Katmanı */}
      <div className={styles.bottomFadeGradient} aria-hidden="true" />
    </section>
  );
}
