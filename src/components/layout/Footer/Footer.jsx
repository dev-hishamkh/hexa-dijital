"use client";

import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import styles from "./Footer.module.css";

export default function Footer({ lang = "tr" }) {
  return (
    <footer className={styles.hexaPremiumFooter}>
      <div className={`container ${styles.container}`}>
        {/* 5 HİZMET KATEGORİSİNİN YAN YANA EŞİT DİZİLİMİ */}
        <div className={styles.footerColumns5grid}>
          {servicesData.map((category) => {
            const sub = category.subCategories[0];
            if (!sub) return null;

            return (
              <div key={category.id} className={styles.footerColumnItem}>
                <h4 className={styles.footerColumnTitle}>
                  <Link
                    href={`/${lang}/hizmetler`}
                    className={styles.footerColHeaderLink}
                  >
                    <span>{sub.title}</span>
                    <svg
                      className={styles.colArrow}
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
                  </Link>
                </h4>
                <ul className={styles.footerLinksList}>
                  {sub.items.map((item) => (
                    <li key={item.slug}>
                      <Link href={`/${lang}/hizmetler`}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* DEVASA ORİJİNAL 35VW HEXA FİLİGRANI */}
      <div className={styles.footerBottomContainer}>
        <div className={styles.footerMassiveText} aria-hidden="true">
          <span>HEXA</span>
        </div>

        <div className={styles.footerSocialRow}>
          <div className={styles.copyrightText}>
            © {new Date().getFullYear()} Hexa Dijital • Bursa. Tüm hakları
            saklıdır.
          </div>

          {/* Sosyal Medya İkonları (Harici paket gerektirmeyen saf SVG) */}
          <div className={styles.socialLinks}>
            <a
              href="https://instagram.com/hexadijital"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <svg
                className={styles.socialIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>Instagram</span>
            </a>

            <a
              href="https://facebook.com/hexadijitall"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <svg
                className={styles.socialIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span>Facebook</span>
            </a>

            <a
              href="https://www.youtube.com/@HEXADijital"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="YouTube"
            >
              <svg
                className={styles.socialIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
              <span>YouTube</span>
            </a>

            <a
              href="https://www.tiktok.com/@hexadijital"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="TikTok"
            >
              <svg
                className={styles.socialIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
              <span>TikTok</span>
            </a>

            <a
              href="https://x.com/hexadijital"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="X Twitter"
            >
              <svg
                className={styles.socialIcon}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>X</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
