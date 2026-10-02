"use client";

import styles from "./Manifesto.module.css";

export default function Manifesto({ lang = "tr" }) {
  const isTr = lang === "tr";

  return (
    <section
      className={styles.manifestoSection}
      aria-label="Stüdyo Manifestosu"
    >
      <div className={`container ${styles.container}`}>
        {/* Üst Eyebrow */}
        <div className={styles.eyebrowWrapper}></div>

        {/* Hero İle Aynı Editoryal Font Zıtlığı (Sans + Lüks İtalik Serif) */}
        <h2 className={styles.heading}>
          <span>
            {isTr
              ? "Bir işletmeye sadece güzel görünen bir web sitesi teslim etmek"
              : "Delivering merely an aesthetic website to an enterprise"}{" "}
          </span>
          <span className={styles.serifHighlight}>
            {isTr ? "işi çözmüyor." : "never solves the puzzle."}
          </span>
        </h2>

        {/* Vurucu Satış & Felsefe Açıklaması */}
        <p className={styles.leadText}>
          {isTr
            ? "Hızlı açılmayan, kasaya sipariş düşürmeyen ve Google'da rakiplerin arkasında kalan hiçbir tasarımın ticari değeri yoktur. Biz her markayı; arayüzünden veritabanına, sipariş sisteminden reklam bütçesine kadar tek elden, çalışan bir mekanizma olarak kuruyoruz."
            : "If a platform does not load in sub-seconds, drive sales, and dominate search rankings, it holds zero commercial value. We engineer every enterprise as a unified, revenue-generating mechanism."}
        </p>
      </div>
    </section>
  );
}
