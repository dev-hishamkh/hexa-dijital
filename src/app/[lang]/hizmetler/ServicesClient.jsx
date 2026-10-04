"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesData } from "@/data/servicesData";
import styles from "./Services.module.css";

export default function ServicesClient({ lang = "tr" }) {
  const isTr = lang === "tr";
  const groups = servicesData[lang] || servicesData.tr;

  const [stageData, setStageData] = useState({
    title: groups[0].categoryTitle,
    badge: groups[0].categoryCode,
    target: groups[0].categoryDiagnosis,
    outcome: groups[0].categoryOutcome,
    slug: groups[0].services[0].slug,
    isSpecificService: false,
  });

  const [isFading, setIsFading] = useState(false);
  const heroRef = useRef(null);
  const workspaceRef = useRef(null);
  const stageRef = useRef(null);
  const groupRefs = useRef([]);
  const ctaRef = useRef(null);

  // LENIS İLE SENKRONİZE GSAP SCROLL ANİMASYONLARI
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const hero = heroRef.current;
    const stageCard = stageRef.current;
    const cta = ctaRef.current;

    const ctx = gsap.context(() => {
      // 1. Hero Giriş Animasyonu
      if (hero) {
        const badge = hero.querySelector(`.${styles.breadcrumbBadge}`);
        const titleLines = hero.querySelectorAll(`.${styles.titleLine}`);
        const desc = hero.querySelector(`.${styles.heroDesc}`);

        const tl = gsap.timeline();

        if (badge) {
          tl.to(badge, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
        }

        if (titleLines && titleLines.length > 0) {
          tl.to(
            titleLines,
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.12,
              ease: "power4.out",
            },
            "-=0.2",
          );
        }

        if (desc) {
          tl.to(
            desc,
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
            "-=0.4",
          );
        }
      }

      // 2. Sol Canlı Kartın Sahneye Girişi
      if (stageCard) {
        gsap.fromTo(
          stageCard,
          { opacity: 0, x: -30, scale: 0.98 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: workspaceRef.current,
              start: "top 80%",
              once: true,
            },
          },
        );
      }

      // 3. Sağ Departmanların ScrollTrigger Senkronu
      groupRefs.current.forEach((groupEl, idx) => {
        if (!groupEl) return;
        const group = groups[idx];
        const header = groupEl.querySelector(`.${styles.groupHeaderRow}`);
        const rows = groupEl.querySelectorAll(
          `.${styles.serviceInteractiveRow}`,
        );

        const groupTl = gsap.timeline({
          scrollTrigger: {
            trigger: groupEl,
            start: "top 80%",
            once: true,
          },
        });

        if (header) {
          groupTl.fromTo(
            header,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          );
        }

        if (rows && rows.length > 0) {
          groupTl.fromTo(
            rows,
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: "power3.out",
            },
            "-=0.3",
          );
        }

        ScrollTrigger.create({
          trigger: groupEl,
          start: "top center",
          end: "bottom center",
          onEnter: () => updateStageForCategory(group),
          onEnterBack: () => updateStageForCategory(group),
        });
      });

      // 4. Alt Dönüşüm Şeridi Girişi
      if (cta) {
        gsap.fromTo(
          cta,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cta,
              start: "top 85%",
              once: true,
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, [groups]);

  const updateStageForCategory = (group) => {
    triggerSmoothChange({
      title: group.categoryTitle,
      badge: group.categoryCode,
      target: group.categoryDiagnosis,
      outcome: group.categoryOutcome,
      slug: group.services[0].slug,
      isSpecificService: false,
    });
  };

  const triggerSmoothChange = (newData) => {
    setIsFading(true);
    setTimeout(() => {
      setStageData(newData);
      setIsFading(false);
    }, 150);
  };

  const handleServiceHover = (service) => {
    triggerSmoothChange({
      title: service.name,
      badge: service.kpi,
      target: service.target,
      outcome: service.outcome,
      slug: service.slug,
      isSpecificService: true,
    });
  };

  const handleMouseLeaveGroup = (group) => {
    updateStageForCategory(group);
  };

  return (
    <main className={styles.mainContainer}>
      {/* 1. EDİTORYAL HERO */}
      <section ref={heroRef} className={`container ${styles.heroSection}`}>
        <div className={styles.heroContent}>
          <span className={`${styles.breadcrumbBadge} ${styles.revealDelay1}`}>
            {isTr
              ? "Hizmet Mimarisi · 5 Departman"
              : "Service Architecture · 5 Departments"}
          </span>

          <h1 className={styles.heroTitle}>
            <span
              className={`${styles.titleLineWrapper} ${styles.revealDelay2}`}
            >
              <span className={styles.titleLine}>
                {isTr ? "Hafif yazılımlar," : "Bespoke software,"}
              </span>
            </span>
            <span
              className={`${styles.titleLineWrapper} ${styles.revealDelay3}`}
            >
              <span className={styles.titleLine}>
                <span className={styles.serifItalic}>
                  {isTr ? "kusursuz tasarımlar &" : "radical craft &"}
                </span>
              </span>
            </span>
            <span
              className={`${styles.titleLineWrapper} ${styles.revealDelay4}`}
            >
              <span className={styles.titleLine}>
                <span>{isTr ? "kasa dolduran" : "high-impact"}</span>{" "}
                <span className={styles.accentWord}>
                  {isTr ? "büyüme motoru." : "growth media."}
                </span>
              </span>
            </span>
          </h1>

          <p className={`${styles.heroDesc} ${styles.revealDelay5}`}>
            {isTr ? (
              <>
                İşletmenizin ciro rekoru kırması için üç dişlinin aynı anda
                kusursuz dönmesi gerekir: Saniyeler içinde açılan hafif
                yazılımlar, güven veren kurumsal kimlikler ve satın almaya hazır
                müşteri çeken reklamlar. Şablon kullanmıyor, 24 temel hizmeti
                tek merkezden yönetiyoruz.
              </>
            ) : (
              <>
                Sustainable commercial growth requires three synchronized
                disciplines: sub-second software backbones, authoritative visual
                identity systems, and algorithmic customer acquisition media.
              </>
            )}
          </p>
        </div>
      </section>

      {/* 2. MASAÜSTÜ & MOBİL ÇALIŞMA ALANI */}
      <section
        ref={workspaceRef}
        className={`container ${styles.interactiveWorkspace}`}
      >
        {/* SOL: CANLI KATEGORİ VE ÇÖZÜM VİTRİNİ (STICKY) */}
        <aside className={styles.liveStageAside}>
          <div ref={stageRef} className={styles.liveStageCard}>
            <div
              className={`${styles.stageContentMotionWrap} ${
                isFading ? styles.stageFading : ""
              }`}
            >
              <div className={styles.stageHeadingArea}>
                <span className={styles.stageContextTag}>
                  {stageData.isSpecificService
                    ? isTr
                      ? "Modül İncelemesi"
                      : "Module Scope"
                    : isTr
                      ? "Departman Kapsamı"
                      : "Department Scope"}
                </span>
                <h3 className={styles.stageServiceName}>{stageData.title}</h3>
              </div>

              <div className={styles.stageSectionBlock}>
                <h4 className={styles.sectionHeaderTitle}>
                  {isTr ? "Hedef Kitle & İhtiyaç" : "Who Is This For?"}
                </h4>
                <p className={styles.sectionBodyText}>{stageData.target}</p>
              </div>

              <div className={styles.stageSectionBlock}>
                <h4 className={styles.sectionHeaderTitle}>
                  {isTr ? "Somut Ticari Çıktı" : "Commercial Outcome"}
                </h4>
                <p className={styles.sectionBodyText}>{stageData.outcome}</p>
              </div>
            </div>

            <div className={styles.stageBottomAction}>
              <Link
                href={`/${lang}/hizmetler/${stageData.slug}`}
                className={styles.magneticLaunchBtn}
              >
                <div className={styles.actionCircle}>
                  <svg
                    className={styles.arrowDiagonal}
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
                </div>
                <div className={styles.actionLabels}>
                  <span className={styles.actionPrimaryText}>
                    {isTr ? "Çözümü İnceleyin" : "Explore Solution"}
                  </span>
                  <span className={styles.actionSubText}>
                    {isTr
                      ? "Teknik özellikleri ve teslimatları görün"
                      : "View technical specs"}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </aside>

        {/* SAĞ: ANITSAL 5 DEPARTMAN & 24 HİZMET (YENİLENEN İTALİK SERİF SAYILAR) */}
        <div className={styles.servicesListingCol}>
          {groups.map((group, gIdx) => (
            <div
              key={group.categoryNumber}
              ref={(el) => (groupRefs.current[gIdx] = el)}
              className={styles.deptGroupBlock}
              onMouseLeave={() => handleMouseLeaveGroup(group)}
            >
              {/* DEPARTMAN BAŞLIĞI */}
              <div className={styles.groupHeaderRow}>
                <span className={styles.monumentalNumber}>
                  {group.categoryNumber}
                </span>
                <div className={styles.groupTitleStack}>
                  <h2 className={styles.groupTitleText}>
                    {group.categoryTitle}
                  </h2>
                </div>
              </div>

              {/* MOBİL İÇİN TEŞHİS KARTI */}
              <div className={styles.mobileDeptDiagnosis}>
                <div className={styles.diagItem}>
                  <span className={styles.diagBadge}>
                    {isTr ? "KİMLER İÇİN?" : "FOR WHOM?"}
                  </span>
                  <p className={styles.diagText}>{group.categoryDiagnosis}</p>
                </div>
                <div className={styles.diagItem}>
                  <span className={styles.diagBadge}>
                    {isTr ? "SOMUT KAZANÇ:" : "OUTCOME:"}
                  </span>
                  <p className={styles.diagTextHighlight}>
                    {group.categoryOutcome}
                  </p>
                </div>
              </div>

              {/* HİZMET SATIRLARI */}
              <div className={styles.groupRowsWrap}>
                {group.services.map((service, sIdx) => {
                  const isSelected = stageData.title === service.name;

                  return (
                    <div
                      key={service.slug}
                      className={`${styles.serviceInteractiveRow} ${
                        isSelected ? styles.rowHoverActive : ""
                      }`}
                      onMouseEnter={() => handleServiceHover(service)}
                    >
                      <Link
                        href={`/${lang}/hizmetler/${service.slug}`}
                        className={styles.rowLinkBlock}
                      >
                        <div className={styles.rowLeftInfo}>
                          <span className={styles.rowNum}>
                            {sIdx < 9 ? `0${sIdx + 1}` : sIdx + 1}
                          </span>
                          <div className={styles.rowTextStack}>
                            <h3 className={styles.rowServiceName}>
                              {service.name}
                            </h3>
                            <p className={styles.mobileOnlyOutcome}>
                              {service.outcome}
                            </p>
                          </div>
                        </div>

                        <div className={styles.rowRightBadge}>
                          <span className={styles.desktopKpiTag}>
                            {service.kpi}
                          </span>
                          <div className={styles.arrowCircle}>
                            <svg
                              className={styles.arrowSvg}
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
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DÖNÜŞÜM ÇAĞRISI (CTA) */}
      <section className={`container ${styles.ctaContainer}`}>
        <div ref={ctaRef} className={styles.ctaBoxFrame}>
          <div className={styles.ctaContentLeft}>
            <div className={styles.ctaBadgeArea}>
              <span className={styles.ctaStatusDot} />
              <span className={styles.ctaBadgeLabel}>
                {isTr ? "Ücretsiz Dijital Denetim" : "Complimentary Audit"}
              </span>
            </div>

            <h3 className={styles.ctaMainHeading}>
              {isTr ? (
                <>
                  İşletmeniz için hangi çarkın{" "}
                  <br className={styles.desktopBr} />
                  <span className={styles.serifAccentWord}>
                    eksik olduğunu konuşalım.
                  </span>
                </>
              ) : (
                <>
                  Let’s diagnose which digital gear{" "}
                  <br className={styles.desktopBr} />
                  <span className={styles.serifAccentWord}>
                    your business is missing.
                  </span>
                </>
              )}
            </h3>

            <p className={styles.ctaBodyText}>
              {isTr
                ? "Sitenizin açılış hızını, Google Harita sıralamanızı ve reklam dönüşümlerinizi ücretsiz inceleyelim; kasanıza doğrudan ciro kazandıracak net bir yol haritası çıkaralım."
                : "We audit your site latency, Google Maps ranking, and ad efficiency — delivering an actionable, measurable growth roadmap."}
            </p>
          </div>

          <div className={styles.ctaActionsRight}>
            <a
              href="https://wa.me/905519769406?text=Merhaba%20Hexa%20Dijital,%20hizmetleriniz%20hakk%C4%B1nda%20teknik%20bilgi%20ve%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.luxuryWhatsappBtn}
            >
              <span className={styles.btnMainText}>
                {isTr ? "WhatsApp ile Başlatın" : "Initiate via WhatsApp"}
              </span>
              <div className={styles.btnIconCircle}>
                <svg
                  className={styles.btnArrowSvg}
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
              </div>
            </a>

            <div className={styles.liveDeskRow}>
              <span className={styles.pulseGreenDot} />
              <span className={styles.liveDeskText}>
                {isTr
                  ? "Bursa Proje Masası — 09:00 - 18:00 Canlı"
                  : "Bursa Project Desk — Online"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
