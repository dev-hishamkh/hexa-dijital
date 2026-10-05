"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesData } from "@/data/servicesData";
import styles from "./Footer.module.css";

export default function Footer({ lang = "tr" }) {
  const isTr = lang === "tr";
  const footerRef = useRef(null);
  const columnsRef = useRef(null);
  const massiveTextRef = useRef(null);
  const socialRowRef = useRef(null);

  const groups = servicesData[lang] || servicesData.tr;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const columns = columnsRef.current?.querySelectorAll(
      `.${styles.footerColumnItem}`,
    );
    const massiveText = massiveTextRef.current;
    const socialRow = socialRowRef.current;

    const ctx = gsap.context(() => {
      // 1. 5 Kolonlu Hizmet Ağının Kademeli Girişi
      if (columns && columns.length > 0) {
        gsap.fromTo(
          columns,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: columnsRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
      }

      // 2. Devasa HEXA Filigranının Parallax Yükselişi
      if (massiveText) {
        gsap.fromTo(
          massiveText,
          { scale: 0.9, y: 40 },
          {
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1,
            },
          },
        );
      }

      // 3. Telif & Sosyal Medya Satırı Girişi
      if (socialRow) {
        gsap.fromTo(
          socialRow,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: socialRow,
              start: "top 95%",
              once: true,
            },
          },
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className={styles.hexaPremiumFooter}>
      <div className={`container ${styles.container}`}>
        {/* DOĞRULAMA ŞERİDİ (ÇİFT DİLLİ) */}
        <div className={styles.napHeaderStrip}>
          <div className={styles.napIdentityBlock}>
            <div className={styles.napBrandName}>HEXA DİJİTAL</div>
            <p className={styles.napDescription}>
              {isTr
                ? "Bursa merkezli web tasarım ve özel yazılım şirketi. Hazır şablon kullanmadan, %100 özgün ve anında açılan kurumsal web çözümleri."
                : "Bursa-based bespoke web engineering and advertising studio. Zero slow templates; sub-second performance architectures."}
            </p>
          </div>

          <div className={styles.napContactMeta}>
            <div className={styles.napMetaItem}>
              <span className={styles.napMetaLabel}>
                {isTr ? "DOĞRUDAN TELEFON" : "DIRECT LINE"}
              </span>
              <a href="tel:+905519769406" className={styles.napMetaValue}>
                0551 976 94 06
              </a>
            </div>

            <div className={styles.napMetaItem}>
              <span className={styles.napMetaLabel}>
                {isTr ? "MESAİ SAATLERİ" : "OPERATING HOURS"}
              </span>
              <span className={styles.napMetaValue}>
                {isTr
                  ? "Pzt - Paz · 09:00 - 18:00"
                  : "Mon - Sun · 09:00 - 18:00"}
              </span>
            </div>

            <div className={styles.napMetaItem}>
              <span className={styles.napMetaLabel}>
                {isTr ? "ÇALIŞMA MODELİ" : "SERVICE MODEL"}
              </span>
              <span className={styles.napMetaValue}>
                {isTr
                  ? "Bursa Geneli Yerinde Ziyaret"
                  : "On-Site Business Visits"}
              </span>
            </div>
          </div>
        </div>

        {/* 5 HİZMET KATEGORİSİNİN DİZİLİMİ */}
        <div ref={columnsRef} className={styles.footerColumns5grid}>
          {groups.map((category) => (
            <div
              key={category.categoryNumber}
              className={styles.footerColumnItem}
            >
              <h4 className={styles.footerColumnTitle}>
                <Link
                  href={`/${lang}/hizmetler`}
                  className={styles.footerColHeaderLink}
                >
                  <span>{category.categoryTitle}</span>
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
                {category.services.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/${lang}/hizmetler/${item.slug}`}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* DEVASA HEXA FİLİGRANI */}
      <div className={styles.footerBottomContainer}>
        <div
          ref={massiveTextRef}
          className={styles.footerMassiveText}
          aria-hidden="true"
        >
          <span>HEXA</span>
        </div>

        <div ref={socialRowRef} className={styles.footerSocialRow}>
          {/* ÇİFT DİLLİ TELİF METNİ */}
          <div className={styles.copyrightText}>
            {isTr
              ? `© ${new Date().getFullYear()} Hexa Dijital — Yazılım, Tasarım ve Reklam Ajansı. Tüm hakları saklıdır.`
              : `© ${new Date().getFullYear()} Hexa Digital — Bespoke Software & Growth Engineering. All rights reserved.`}
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://instagram.com/hexadijital"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <span>Instagram</span>
            </a>

            <a
              href="https://facebook.com/hexadijitall"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <span>Facebook</span>
            </a>

            <a
              href="https://youtube.com/@hexadijital"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="YouTube"
            >
              <span>YouTube</span>
            </a>

            <a
              href="https://tiktok.com/@hexadijital"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="TikTok"
            >
              <span>TikTok</span>
            </a>

            <a
              href="https://x.com/hexadijital"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="X Twitter"
            >
              <span>X</span>
            </a>

            <a
              href="https://tr.pinterest.com/hexadijital"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="Pinterest"
            >
              <span>Pinterest</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
