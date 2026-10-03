"use client";

import React from "react";
import { dictionary } from "@/data/dictionary";
import styles from "./FloatingWhatsApp.module.css";

export default function FloatingWhatsApp({ lang = "tr" }) {
  const dict = dictionary[lang]?.whatsapp || dictionary.tr.whatsapp;

  // Google Profilindeki Doğrulanmış Gerçek Hat: 0551 976 94 06
  const whatsappUrl = `https://wa.me/905519769406?text=${encodeURIComponent(
    dict.message,
  )}`;

  return (
    <aside
      className={styles.floatingContainer}
      aria-label="Hexa Dijital WhatsApp İletişim Hattı"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappCapsule}
      >
        <div className={styles.statusRadar}>
          <span className={styles.pulseCore} />
          <span className={styles.pulseRing} />
        </div>

        <div className={styles.iconCircle}>
          <svg
            className={styles.waIcon}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.61L5.07 16.3C4.24 14.98 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.05 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.05 20.15ZM16.56 14.34C16.31 14.22 15.1 13.62 14.88 13.54C14.65 13.45 14.49 13.41 14.32 13.66C14.16 13.91 13.68 14.47 13.54 14.64C13.39 14.8 13.25 14.83 13 14.7C12.75 14.58 11.95 14.31 11 13.47C10.26 12.82 9.76 12.01 9.62 11.76C9.47 11.51 9.61 11.38 9.73 11.26C9.85 11.14 9.99 10.96 10.11 10.82C10.24 10.68 10.28 10.57 10.36 10.41C10.45 10.24 10.4 10.1 10.34 9.98C10.28 9.85 9.78 8.64 9.58 8.13C9.38 7.64 9.17 7.7 9.02 7.7C8.88 7.69 8.71 7.69 8.55 7.69C8.38 7.69 8.12 7.75 7.89 8C7.67 8.25 7.03 8.84 7.03 10.05C7.03 11.26 7.91 12.43 8.04 12.6C8.16 12.76 9.78 15.26 12.26 16.33C12.85 16.59 13.31 16.74 13.67 16.85C14.26 17.04 14.8 17.01 15.23 16.95C15.71 16.88 16.7 16.35 16.91 15.77C17.11 15.19 17.11 14.69 17.05 14.59C16.99 14.49 16.81 14.46 16.56 14.34Z" />
          </svg>
        </div>

        <div className={styles.labelBlock}>
          <span className={styles.primaryText}>{dict.primary}</span>
          <span className={styles.subText}>{dict.sub}</span>
        </div>

        <span className={styles.arrowIcon}>↗</span>
      </a>
    </aside>
  );
}
