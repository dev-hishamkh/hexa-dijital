"use client";

import styles from "./Process.module.css";

const protocolPhases = [
  {
    phase: "Faz 01",
    category: "Veri & Yol Haritası",
    title: "Sektörel Açıkları ve Kaçan Ciroyu Tespit Ediyoruz",
    desc: "Rakiplerin yavaşlıklarını, yerel aramadaki görünürlük açıklarını ve dönüşüm kaçıran kullanıcı darboğazlarını analiz ederek projenin teknik şartnamesini çıkarıyoruz.",
    badge: "Sıfır Varsayım // Somut Veri",
  },
  {
    phase: "Faz 02",
    category: "Geliştirme & Performans",
    title: "Next.js ile Sub-Second Yanıt Süreli Altyapı",
    desc: "Şablon veya WordPress eklenti çöplüğü olmadan; işletmenize özel tasarlanmış arayüzleri temiz kod ve modern veritabanı mimarisiyle sıfırdan hayata geçiriyoruz.",
    badge: "< 0.8s Açılış // Core Web Vitals 100",
  },
  {
    phase: "Faz 03",
    category: "Ölçekleme & ROI",
    title: "Yerel Arama Hakimiyeti ve Satış Odaklı Reklam",
    desc: "Yazılım teslim edildiğinde süreç bitmez. Google Haritalar profilini optimize ediyor, arama ve sosyal medya bütçelerini doğrudan nitelikli müşteri talebine dönüştürüyoruz.",
    badge: "Harita İlk 3 // Dönüşüm Takibi",
  },
];

export default function Protocol({ lang = "tr" }) {
  const isTr = lang === "tr";

  return (
    <section
      className={styles.section}
      id="protokol"
      aria-label="Mühendislik Protokolümüz"
    >
      <div className={`container ${styles.container}`}>
        {/* SOL SÜTUN: STICKY EDITORIAL BAŞLIK (EKRANDA SABİT KALIR) */}
        <div className={styles.stickyColumn}>
          <div className={styles.stickyContent}>
            <div className={styles.eyebrowWrapper}>
              <span className={styles.eyebrowDot} />
              <span className={styles.eyebrowText}>
                {isTr ? "// SİSTEMATİK YAKLAŞIM" : "// SYSTEMATIC PROTOCOL"}
              </span>
            </div>

            <h2 className={styles.stickyTitle}>
              {isTr ? "Mühendislik Protokolümüz." : "Engineering Protocol."}
            </h2>

            <p className={styles.stickyDesc}>
              {isTr
                ? "Şablon veya rastgele kararlarla değil; doğrudan ölçülebilir ciro, operasyonel hız ve sıfır hata toleransıyla çalışan tescilli geliştirme döngümüz."
                : "Zero generic templates or guesswork. A hardened development cycle engineered for measurable revenue acceleration and sub-second velocity."}
            </p>
          </div>
        </div>

        {/* SAĞ SÜTUN: PROTOKOL KARTLARI (DİKEY AKIŞ) */}
        <div className={styles.cardsColumn}>
          {protocolPhases.map((item) => (
            <article key={item.phase} className={styles.protocolCard}>
              <div className={styles.cardHeader}>
                <span className={styles.phaseTag}>{item.phase}</span>
                <span className={styles.categoryTag}>{item.category}</span>
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>

              <p className={styles.cardDesc}>{item.desc}</p>

              <div className={styles.cardFooter}>
                <div className={styles.badgePill}>
                  <span className={styles.badgeDot} />
                  <span className={styles.badgeText}>{item.badge}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
