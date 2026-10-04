"use client";

import React from "react";
import { dictionary } from "@/data/dictionary";
import styles from "./FloatingWhatsApp.module.css";

export default function FloatingWhatsApp({ lang = "tr" }) {
  const dict = dictionary[lang]?.whatsapp || dictionary.tr.whatsapp;

  // Doğrulanmış Proje Masası: 0551 976 94 06
  const whatsappUrl = `https://wa.me/905519769406?text=${encodeURIComponent(
    dict.message,
  )}`;

  return (
    <aside
      className={styles.floatingWrapper}
      aria-label="Hexa Dijital Canlı WhatsApp Masası"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cyberCapsule}
      >
        {/* SİBER CANLI NABIZ ÇEKİRDEĞİ (NEON TURKUAZ) */}
        <div className={styles.liveIndicator}>
          <span className={styles.pulseCore} />
          <span className={styles.pulseAura} />
        </div>

        {/* TİTANYUM MONOLİTİK ETİKET */}
        <div className={styles.labelGroup}>
          <span className={styles.brandTitle}>WhatsApp Masası</span>
          <span className={styles.statusLive}>Canlı Destek</span>
        </div>

        {/* 45 DERECE DÖNEN MASTER AKSİYON ÇEMBERİ */}
        <div className={styles.actionCircle}>
          <svg className={styles.arrowSvg} viewBox="0 0 16 16" fill="none">
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
    </aside>
  );
}
