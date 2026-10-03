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
        {/* TAM ORTALANMIŞ, ANITSAL VE NAKDEN FELSEFE CÜMLESİ */}
        <h2 className={styles.centerStatement}>
          {isTr ? (
            <>
              Bir işletmeye sadece güzel görünen bir web sitesi teslim etmek{" "}
              <span className={styles.serifHighlight}>işi çözmüyor.</span>{" "}
              <br className={styles.desktopBr} />
              Biz her markayı; saniyeler içinde açılan özel yazılımlar ve kasaya
              doğrudan ciro düşüren dijital mekanizmalarla{" "}
              <span className={styles.serifHighlight}>büyütüyoruz.</span>
            </>
          ) : (
            <>
              We don’t just build websites. We engineer digital experiences and{" "}
              <span className={styles.serifHighlight}>custom software</span>{" "}
              that solve real commercial problems and scale with your{" "}
              <span className={styles.serifHighlight}>business.</span>
            </>
          )}
        </h2>
      </div>
    </section>
  );
}
