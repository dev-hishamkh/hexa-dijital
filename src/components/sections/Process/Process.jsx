"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Process.module.css";

const steps = [
  {
    step: "01",
    code: "ANALYSIS_AUDIT",
    title: "Cerrahi Teşhis & Pazar Analizi",
    desc: "Rakiplerinizin nerede müşteri kaybettiğini, Bursa pazarındaki arama hacimlerini ve işletmenizin dijital darboğazlarını verilerle tespit ediyoruz.",
    badge: "Kayıp-Kaçak Teşhisi",
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
    code: "UI_ARCHITECTURE",
    title: "Mimari Tasarım & Prototip",
    desc: "Şablon veya WordPress çöplüğü yok. Markanızı pahalı ve seçkin gösteren, ziyaretçiyi müşteriye dönüştüren arayüzleri piksel piksel modelliyoruz.",
    badge: "Piksel Kusursuzluğu",
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
    code: "SUB_SECOND_DEV",
    title: "Tescilli Kodlama & Hız",
    desc: "0.8 saniyenin altında açılan Next.js altyapısıyla, Google Harita ve SEO algoritmalarının en sevdiği hafif ve temiz mühendisliği kodluyoruz.",
    badge: "< 0.8s Core Web Vitals",
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
    code: "MARKET_DOMINANCE",
    title: "Lansman & Ciro Entegrasyonu",
    desc: "Siteyi teslim edip kenara çekilmiyoruz. Google Ads, Meta reklamları ve Haritalar dominasyonuyla hazır müşterileri doğrudan kasanıza akıtıyoruz.",
    badge: "Doğrudan ROI & Ciro",
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

export default function HowItWorks({ lang = "tr" }) {
  const isTr = lang === "tr";
  const trackRef = useRef(null);
  const nodeRefs = useRef([]);

  // Tereyağı gibi akıcı 60 FPS Fizik Motoru State'leri
  const [currentFill, setCurrentFill] = useState(0);
  const targetFillRef = useRef(0);
  const currentFillRef = useRef(0);
  const [activeNodes, setActiveNodes] = useState([false, false, false, false]);

  useEffect(() => {
    // 1. Scroll anında hedef yüksekliği hesapla
    const handleScroll = () => {
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Çizginin tetiklenme penceresi: Ekranın %60'lık hizası
      const triggerY = windowHeight * 0.6;
      const progressY = triggerY - rect.top;

      // Hedef yüksekliği belirle
      targetFillRef.current = Math.min(Math.max(progressY, 0), rect.height);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 2. 60/120 FPS PÜRÜZSÜZ LERP (EASING) FİZİK MOTORU:
    // Basamaklanmayı ve parça parça dolmayı yok eden sihirli satır!
    let animId;
    const updatePhysics = () => {
      // Lerp katsayısı: 0.08 (İpeksi yumuşak takip)
      currentFillRef.current +=
        (targetFillRef.current - currentFillRef.current) * 0.08;
      const smoothVal = currentFillRef.current;
      setCurrentFill(smoothVal);

      // =======================================================================
      // KESİN ÇÖZÜM: Çizgi yuvarlağa DEĞMEDEN ASLA PARLAYAMAZ!
      // Her düğümün merkez noktasını çizginin ucuyla tam pikseli pikseline karşılaştırıyoruz
      // =======================================================================
      const newActive = nodeRefs.current.map((nodeEl) => {
        if (!nodeEl) return false;
        // Düğümün merkez noktasının çizgi başlangıcına göre mesafesi
        const nodeCenter = nodeEl.offsetTop + nodeEl.offsetHeight / 2;
        // Çizgi tam o merkeze ulaştı mı?
        return smoothVal >= nodeCenter;
      });

      setActiveNodes(newActive);

      animId = requestAnimationFrame(updatePhysics);
    };

    animId = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className={styles.section} id="nasil-calisiyoruz">
      <div className={`container ${styles.container}`}>
        {/* BÖLÜM BAŞLIĞI */}
        <header className={styles.header}>
          <div className={styles.eyebrowWrapper}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>
              {isTr ? "// ÇALIŞMA PROTOKOLÜ" : "// DELIVERY PROTOCOL"}
            </span>
          </div>

          <h2 className={styles.mainTitle}>
            {isTr ? (
              <>
                Sürpriz Yok. <br />
                <span className={styles.titleAccent}>
                  4 Adımlı Ciro Mimarisi.
                </span>
              </>
            ) : (
              <>
                Zero Surprises. <br />
                <span className={styles.titleAccent}>
                  4-Phase Engineering Framework.
                </span>
              </>
            )}
          </h2>

          <p className={styles.subtitle}>
            {isTr
              ? "Kaotik ajans süreçlerini unutun. Ne zaman ne teslim alacağınızı, bütçenizin nereye harcandığını ve sistemin ne zaman ciro üreteceğini baştan biliyorsunuz."
              : "Transparent execution. Predictable sprints engineered to deliver measurable market dominance."}
          </p>
        </header>

        {/* ==========================================================================
            TEREYAĞI GİBİ AKAN KİNETİK TİMELİNE SAHNESİ
            ========================================================================== */}
        <div className={styles.timelineStage}>
          {/* Ortadaki Dikey Hat */}
          <div ref={trackRef} className={styles.timelineTrack}>
            {/* 1. Arkadaki Kesikli Çizgi */}
            <div className={styles.trackDashed} />

            {/* 2. Lerp Fiziğiyle Pürüzsüzce Aşağı Akan Dolu Çizgi */}
            <div
              className={styles.trackSolidFill}
              style={{ height: `${currentFill}px` }}
            />
          </div>

          {/* Adımlar Listesi */}
          <div className={styles.stepsList}>
            {steps.map((item, idx) => {
              const isReached = activeNodes[idx];

              return (
                <div key={item.step} className={styles.stepRow}>
                  {/* SOL TARAF: TİPOGRAFİ */}
                  <div className={styles.textSide}>
                    <span className={styles.stepCode}>// {item.code}</span>
                    <h3 className={styles.stepTitle}>{item.title}</h3>
                    <p className={styles.stepDesc}>{item.desc}</p>
                    <div className={styles.metricPill}>
                      <span className={styles.pillDot} />
                      <span>{item.badge}</span>
                    </div>
                  </div>

                  {/* 
                    MERKEZ: DÜĞÜM 
                    Çizgi tam merkezine değmeden ASLA parlamaz!
                  */}
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
