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

  // ANA SAYFADAN GELEN KATEGORİ ANKORUNU YAKALA VE ORAYA KAY
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const targetCategoryNum = hash.replace("#kategori-", "");
      const matchedGroupIdx = groups.findIndex(
        (g) => g.categoryNumber === targetCategoryNum,
      );

      if (matchedGroupIdx !== -1) {
        const matchedGroup = groups[matchedGroupIdx];
        updateStageForCategory(matchedGroup);

        setTimeout(() => {
          const targetEl = document.getElementById(
            `kategori-${targetCategoryNum}`,
          );
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      }
    };

    handleHashNavigation();
  }, [groups]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const hero = heroRef.current;
    const stageCard = stageRef.current;
    const cta = ctaRef.current;

    const ctx = gsap.context(() => {
      // 1. SAF GSAP HERO GİRİŞ ANİMASYONU
      if (hero) {
        const badge = hero.querySelector(`.${styles.breadcrumbBadge}`);
        const titleWrappers = hero.querySelectorAll(
          `.${styles.titleLineWrapper}`,
        );
        const desc = hero.querySelector(`.${styles.heroDesc}`);

        const heroTl = gsap.timeline();

        if (badge) {
          heroTl.fromTo(
            badge,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          );
        }

        if (titleWrappers && titleWrappers.length > 0) {
          heroTl.fromTo(
            titleWrappers,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.12,
              ease: "power3.out",
            },
            "-=0.3",
          );
        }

        if (desc) {
          heroTl.fromTo(
            desc,
            { opacity: 0, y: 25 },
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
          <span className={styles.breadcrumbBadge}>
            {isTr
              ? "Hizmet Kataloğu · 5 Temel Alan"
              : "Service Catalogue · 5 Core Disciplines"}
          </span>

          <h1 className={styles.heroTitle}>
            <span className={styles.titleLineWrapper}>
              <span className={styles.titleLine}>
                {isTr ? "Hızlı web siteleri," : "Bespoke software,"}
              </span>
            </span>
            <span className={styles.titleLineWrapper}>
              <span className={styles.titleLine}>
                <span className={styles.serifItalic}>
                  {isTr ? "özel yazılımlar &" : "radical craft &"}
                </span>
              </span>
            </span>
            <span className={styles.titleLineWrapper}>
              <span className={styles.titleLine}>
                <span>{isTr ? "müşteri kazandıran" : "high-impact"}</span>{" "}
                <span className={styles.accentWord}>
                  {isTr ? "reklam yönetimi." : "growth media."}
                </span>
              </span>
            </span>
          </h1>

          <p className={styles.heroDesc}>
            {isTr ? (
              <>
                İşletmenizin satışlarını artırmak için ihtiyacınız olan temel
                çözümler tek çatı altında: Anında açılan hafif web siteleri,
                güven veren kurumsal kimlik tasarımı ve satın almaya hazır
                müşteri çeken reklamlar. Hazır şablon kullanmadan, 24 temel
                hizmeti doğrudan tek merkezden yönetiyoruz.
              </>
            ) : (
              <>
                Sustainable commercial growth requires synchronized disciplines:
                fast custom software backbones, authoritative visual identity,
                and targeted customer acquisition media.
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
                      ? "Hizmet İncelemesi"
                      : "Module Scope"
                    : isTr
                      ? "Departman Kapsamı"
                      : "Department Scope"}
                </span>
                <h3 className={styles.stageServiceName}>{stageData.title}</h3>
              </div>

              <div className={styles.stageSectionBlock}>
                <h4 className={styles.sectionHeaderTitle}>
                  {isTr ? "Kimler İçin Uygun?" : "Who Is This For?"}
                </h4>
                <p className={styles.sectionBodyText}>{stageData.target}</p>
              </div>

              <div className={styles.stageSectionBlock}>
                <h4 className={styles.sectionHeaderTitle}>
                  {isTr ? "Sağlanan Somut Fayda" : "Commercial Outcome"}
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
                    {isTr ? "Hizmeti İnceleyin" : "Explore Solution"}
                  </span>
                  <span className={styles.actionSubText}>
                    {isTr
                      ? "Teknik detayları ve nelerin dahil olduğunu görün"
                      : "View technical specs"}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </aside>

        <div className={styles.servicesListingCol}>
          {groups.map((group, gIdx) => (
            <div
              key={group.categoryNumber}
              id={`kategori-${group.categoryNumber}`}
              ref={(el) => (groupRefs.current[gIdx] = el)}
              className={styles.deptGroupBlock}
              onMouseLeave={() => handleMouseLeaveGroup(group)}
            >
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

              <div className={styles.mobileDeptDiagnosis}>
                <div className={styles.diagItem}>
                  <span className={styles.diagBadge}>
                    {isTr ? "KİMLER İÇİN?" : "FOR WHOM?"}
                  </span>
                  <p className={styles.diagText}>{group.categoryDiagnosis}</p>
                </div>
                <div className={styles.diagItem}>
                  <span className={styles.diagBadge}>
                    {isTr ? "KAZANILAN FAYDA:" : "OUTCOME:"}
                  </span>
                  <p className={styles.diagTextHighlight}>
                    {group.categoryOutcome}
                  </p>
                </div>
              </div>

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

      {/* 3. DÖNÜŞÜM ÇAĞRISI */}
      <section className={`container ${styles.ctaContainer}`}>
        <div ref={ctaRef} className={styles.ctaBoxFrame}>
          <div className={styles.ctaContentLeft}>
            <div className={styles.ctaBadgeArea}>
              <span className={styles.ctaStatusDot} />
              <span className={styles.ctaBadgeLabel}>
                {isTr ? "Ücretsiz Ön İnceleme" : "Complimentary Audit"}
              </span>
            </div>

            <h3 className={styles.ctaMainHeading}>
              {isTr ? (
                <>
                  İşletmeniz için hangi adımın{" "}
                  <br className={styles.desktopBr} />
                  <span className={styles.serifAccentWord}>
                    öncelikli olduğunu konuşalım.
                  </span>
                </>
              ) : (
                <>
                  Let’s diagnose what your business{" "}
                  <br className={styles.desktopBr} />
                  <span className={styles.serifAccentWord}>
                    needs to grow next.
                  </span>
                </>
              )}
            </h3>

            <p className={styles.ctaBodyText}>
              {isTr
                ? "Sitenizin hızını, Google Harita görünürlüğünüzü ve reklamlarınızı ücretsiz inceleyelim; doğrudan satış kazandıracak net bir yol haritası çıkaralım."
                : "We audit your site speed, Google Maps ranking, and ad efficiency — delivering an actionable growth roadmap."}
            </p>
          </div>

          <div className={styles.ctaActionsRight}>
            <a
              href="https://wa.me/905519769406?text=Merhaba%20Hexa%20Dijital,%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20ve%20fiyat%20almak%20istiyorum."
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
                  ? "Bursa Operasyon Masası — 09:00 - 18:00 Canlı"
                  : "Operations Desk — Online"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
