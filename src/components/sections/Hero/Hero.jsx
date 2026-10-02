"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import LightRays from "@/components/ui/LightRays/LightRays";
import styles from "./Hero.module.css";

// 3D Logo sadece masaüstünde devreye girer
const Logo3D = dynamic(() => import("@/components/ui/Logo3D/Logo3D"), {
  ssr: false,
});

export default function Hero({ lang = "tr" }) {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const isTr = lang === "tr";

  useEffect(() => {
    setIsMounted(true);
    // Masaüstü kontrolü: 1180px ve üzeri
    setIsDesktop(window.innerWidth >= 1180);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1180);
    };

    window.addEventListener("resize", handleResize);

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

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className={`${styles.heroSection} ${isMounted ? styles.heroMounted : ""}`}
    >
      {/* 
        PARIL PARIL PARLAYAN SİBER LIGHTRAYS IŞIKLARI
        Hem masaüstünde hem telefonda tam ekran süzülür!
      */}
      <div className={styles.lightContainer}>
        <LightRays
          raysOrigin="top-right"
          raysColor={isLightMode ? "#0071E3" : "#00FFD1"}
          raysSpeed={0.9}
          lightSpread={1.6}
          rayLength={2.4}
          followMouse={true}
          mouseInfluence={0.06}
          noiseAmount={0.02}
          distortion={0.01}
          lightMode={isLightMode}
        />
      </div>

      <div className={`container ${styles.heroContainer}`}>
        {/* SOL SÜTUN: TİPOGRAFİ */}
        <div className={styles.contentColumn}>
          <h1 className={styles.heroTitle}>
            <span className={`${styles.titleLineWrapper} ${styles.delay1}`}>
              <span className={styles.titleLine}>
                {isTr ? "Bursa Web Tasarım," : "Bespoke Web Design,"}
              </span>
            </span>

            <span className={`${styles.titleLineWrapper} ${styles.delay2}`}>
              <span className={styles.titleLine}>
                <span className={styles.serifItalic}>
                  {isTr ? "özel yazılımlar &" : "custom software &"}
                </span>
              </span>
            </span>

            <span className={`${styles.titleLineWrapper} ${styles.delay3}`}>
              <span className={styles.titleLine}>
                <span>{isTr ? "ciro odaklı" : "high-impact"}</span>{" "}
                <span className={styles.accentSerif}>
                  {isTr ? "dijital büyüme." : "digital growth."}
                </span>
              </span>
            </span>
          </h1>

          <div className={`${styles.bottomArea} ${styles.delay4}`}>
            <p className={styles.manifesto}>
              {isTr ? (
                <>
                  Estetik arayüzler tasarlıyor, saniyeler içinde açılan özel web
                  ve otomasyon altyapıları kodluyor, Google ve Meta
                  reklamlarıyla hazır müşterileri doğrudan kasanıza çekiyoruz.
                  Tasarımdan reklama, tüm dijital çarkları tek elden
                  yönetiyoruz.
                </>
              ) : (
                <>
                  A creative agency specializing in bespoke software, web
                  design, and growth media — building high-converting digital
                  machines that scale businesses.
                </>
              )}
            </p>

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
                    {isTr ? "Yeni Bir Proje Başlatın" : "Initiate a Project"}
                  </span>
                  <span className={styles.actionSubText}>
                    {isTr
                      ? "Birlikte dijital makinenizi kuralım"
                      : "Let’s engineer your growth"}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* 
          SAĞ SÜTUN: MASAÜSTÜNDE 3D LOGO 
          Telefonda hiç render edilmez (0ms gecikme!)
        */}
        {isDesktop && (
          <div className={`${styles.visualColumn} ${styles.delayLogo}`}>
            <div className={styles.webglCanvasWrapper}>
              <Logo3D />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
