"use client";

import React from "react";
import { dictionary } from "@/data/dictionary";
import styles from "./FloatingWhatsApp.module.css";

export default function FloatingWhatsApp({ lang = "tr" }) {
  const isTr = lang === "tr";
  const dict = dictionary[lang]?.whatsapp || dictionary.tr.whatsapp;

  const whatsappUrl = `https://wa.me/905519769406?text=${encodeURIComponent(
    dict.message,
  )}`;

  return (
    <aside
      className={styles.floatingWrapper}
      aria-label={
        isTr
          ? "Hexa Dijital WhatsApp İletişim Hattı"
          : "Hexa Digital WhatsApp Contact"
      }
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cyberCapsule}
      >
        {/* SİBER CANLI NABIZ ÇEKİRDEĞİ */}
        <div className={styles.liveIndicator}>
          <span className={styles.pulseCore} />
          <span className={styles.pulseAura} />
        </div>

        {/* TİTANYUM ETİKET (ÇİFT DİLLİ) */}
        <div className={styles.labelGroup}>
          <span className={styles.brandTitle}>
            {isTr ? "WhatsApp'tan Yazın" : "Message on WhatsApp"}
          </span>
          <span className={styles.statusLive}>
            {isTr ? "Canlı Destek" : "Online Direct"}
          </span>
        </div>

        {/* 45 DERECE DÖNEN AKSİYON ÇEMBERİ */}
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
