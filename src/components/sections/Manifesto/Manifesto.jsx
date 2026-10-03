"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Manifesto.module.css";

const wordsTR = [
  { text: "Bir", isAccent: false, isSerif: false },
  { text: "işletmeye", isAccent: false, isSerif: false },
  { text: "sadece", isAccent: false, isSerif: false },
  { text: "güzel", isAccent: false, isSerif: false },
  { text: "görünen", isAccent: false, isSerif: false },
  { text: "bir", isAccent: false, isSerif: false },
  { text: "web", isAccent: false, isSerif: false },
  { text: "sitesi", isAccent: false, isSerif: false },
  { text: "teslim", isAccent: false, isSerif: false },
  { text: "etmek", isAccent: false, isSerif: false },
  { text: "işi", isAccent: false, isSerif: true },
  { text: "çözmüyor.", isAccent: false, isSerif: true, breakAfter: true },
  { text: "Biz", isAccent: false, isSerif: false },
  { text: "her", isAccent: false, isSerif: false },
  { text: "markayı;", isAccent: false, isSerif: false },
  { text: "saniyeler", isAccent: false, isSerif: false },
  { text: "içinde", isAccent: false, isSerif: false },
  { text: "açılan", isAccent: false, isSerif: false },
  { text: "özel", isAccent: false, isSerif: false },
  { text: "yazılımlar", isAccent: false, isSerif: false },
  { text: "ve", isAccent: false, isSerif: false },
  { text: "kasaya", isAccent: false, isSerif: false },
  { text: "doğrudan", isAccent: false, isSerif: false },
  { text: "ciro", isAccent: false, isSerif: false },
  { text: "düşüren", isAccent: false, isSerif: false },
  { text: "dijital", isAccent: false, isSerif: false },
  { text: "mekanizmalarla", isAccent: false, isSerif: false },
  { text: "büyütüyoruz.", isAccent: true, isSerif: true },
];

const wordsEN = [
  { text: "We", isAccent: false, isSerif: false },
  { text: "don't", isAccent: false, isSerif: false },
  { text: "just", isAccent: false, isSerif: false },
  { text: "build", isAccent: false, isSerif: false },
  { text: "brochure", isAccent: false, isSerif: false },
  { text: "websites.", isAccent: false, isSerif: false, breakAfter: true },
  { text: "We", isAccent: false, isSerif: false },
  { text: "engineer", isAccent: false, isSerif: false },
  { text: "sub-second", isAccent: false, isSerif: false },
  { text: "custom", isAccent: false, isSerif: true },
  { text: "software", isAccent: false, isSerif: true },
  { text: "and", isAccent: false, isSerif: false },
  { text: "growth", isAccent: false, isSerif: false },
  { text: "machines", isAccent: false, isSerif: false },
  { text: "that", isAccent: false, isSerif: false },
  { text: "consistently", isAccent: false, isSerif: false },
  { text: "scale", isAccent: false, isSerif: false },
  { text: "your", isAccent: false, isSerif: false },
  { text: "business.", isAccent: true, isSerif: true },
];

export default function Manifesto({ lang = "tr" }) {
  const isTr = lang === "tr";
  const words = isTr ? wordsTR : wordsEN;
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const normalWordElements = textRef.current?.querySelectorAll(
      `.${styles.gsapNormalWord}`,
    );
    const accentWordElement = textRef.current?.querySelector(
      `.${styles.accentWord}`,
    );

    if (!normalWordElements || normalWordElements.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center", // Ekranın tam ortasına oturduğunda kilitlenir
          end: "+=1400", // Ziyaretçi tekerleği çevirirken ekran kilitli kalır
          pin: true, // EKRANI ÇİVİLEME
          scrub: 1, // Lenis ile ipeksi takip
          anticipatePin: 1,
        },
      });

      // 1. AŞAMA: Önceki tüm kelimeler sırayla beyazlaşır (%12 ➔ %100)
      tl.to(normalWordElements, {
        opacity: 1,
        stagger: 0.08,
        ease: "power1.inOut",
      });

      // 2. AŞAMA: Sıra tam son kelimeye geldiğinde neon turkuaza patlar!
      if (accentWordElement) {
        tl.to(
          accentWordElement,
          {
            opacity: 1,
            color: "#00FFD1", // Siber Zümrüt Neon Rengi
            textShadow: "0 0 35px rgba(0, 255, 209, 0.45)",
            scale: 1.05,
            duration: 0.35,
            ease: "back.out(2)",
          },
          "+=0.04", // Cümlenin bitişinden hemen sonra vurucu final
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [words]);

  return (
    <section
      ref={sectionRef}
      className={styles.manifestoSection}
      aria-label="Stüdyo Manifestosu"
    >
      <div ref={containerRef} className={`container ${styles.container}`}>
        <h2 ref={textRef} className={styles.centerStatement}>
          {words.map((item, idx) => (
            <span key={idx} className={styles.wordWrapper}>
              <span
                className={`${styles.baseWord} ${
                  item.isAccent ? styles.accentWord : styles.gsapNormalWord
                } ${item.isSerif ? styles.serifWord : ""}`}
              >
                {item.text}
              </span>
              {item.breakAfter && <br className={styles.desktopBr} />}{" "}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
