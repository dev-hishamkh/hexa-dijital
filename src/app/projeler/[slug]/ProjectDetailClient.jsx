"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ProjectDetail.module.css";
import {
  Camera,
  UtensilsCrossed,
  MapPin,
  Palette,
  Building2,
  CircleDollarSign,
  PhoneCall,
  Printer,
  Receipt,
  Globe,
  TrendingUp,
  Zap,
  Search,
  Star,
  ShieldCheck,
  CalendarCheck,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const iconRegistry = {
  Camera,
  UtensilsCrossed,
  MapPin,
  Palette,
  Building2,
  CircleDollarSign,
  PhoneCall,
  Printer,
  Receipt,
  Globe,
  TrendingUp,
  Zap,
  Search,
  Star,
  ShieldCheck,
  CalendarCheck,
};

function DynamicIcon({ name, size = 22, className }) {
  const IconComp = iconRegistry[name] || Zap;
  return <IconComp size={size} strokeWidth={1.8} className={className} />;
}

export default function ProjectDetailClient({ project }) {
  const rootRef = useRef(null);
  const galleryTrackRef = useRef(null);
  const [failedImages, setFailedImages] = useState({});

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const categoryLabel =
    typeof project.categoryLabel === "object"
      ? project.categoryLabel.tr
      : project.categoryLabel;
  const roleText =
    typeof project.role === "object" ? project.role.tr : project.role;
  const heroLeadText =
    typeof project.heroLead === "object"
      ? project.heroLead.tr
      : project.heroLead;
  const crisisHeadingText =
    typeof project.crisisHeading === "object"
      ? project.crisisHeading.tr
      : project.crisisHeading;
  const crisisStoryText =
    typeof project.crisisStory === "object"
      ? project.crisisStory.tr
      : project.crisisStory;
  const discoveryHeadingText =
    typeof project.discoveryHeading === "object"
      ? project.discoveryHeading.tr
      : project.discoveryHeading;
  const discoveryStoryText =
    typeof project.discoveryStory === "object"
      ? project.discoveryStory.tr
      : project.discoveryStory;
  const solutionHeadingText =
    typeof project.solutionHeading === "object"
      ? project.solutionHeading.tr
      : project.solutionHeading;
  const shiftHeadingText =
    typeof project.shiftHeading === "object"
      ? project.shiftHeading.tr
      : project.shiftHeading;
  const shiftStoryText =
    typeof project.shiftStory === "object"
      ? project.shiftStory.tr
      : project.shiftStory;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero Sinematik Girişi
      gsap.fromTo(
        `.${styles.heroContent}`,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.85, ease: "power3.out" },
      );

      // 2. Features 8 Kademeli Giriş
      gsap.fromTo(
        `.${styles.features8Card}`,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.features8Section}`,
            start: "top 80%",
            once: true,
          },
        },
      );

      // 3. Proje Pasaportu
      gsap.fromTo(
        `.${styles.projectPassportBar}`,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.passportSection}`,
            start: "top 82%",
            once: true,
          },
        },
      );

      // 4. Kriz ve Masada Keşif Blokları
      gsap.fromTo(
        `.${styles.storyBlock}`,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.storySection}`,
            start: "top 78%",
            once: true,
          },
        },
      );

      // 5. Adım Adım İmalat Kartları
      gsap.fromTo(
        `.${styles.stepCard}`,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.solutionGrid}`,
            start: "top 80%",
            once: true,
          },
        },
      );

      // 6. Kırılma Noktası Kutusu
      gsap.fromTo(
        `.${styles.shiftCardBox}`,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.shiftSection}`,
            start: "top 82%",
            once: true,
          },
        },
      );

      // 7. Metrikler Şeridi
      gsap.fromTo(
        `.${styles.metricColumn}`,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: `.${styles.metricsSection}`,
            start: "top 82%",
            once: true,
          },
        },
      );

      // 8. Final CTA
      gsap.fromTo(
        `.${styles.ctaCardFrame}`,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.finaleCtaSection}`,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const scrollGallery = (direction) => {
    if (!galleryTrackRef.current) return;
    const distance = 600;
    galleryTrackRef.current.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e) => {
    const track = galleryTrackRef.current;
    if (!track) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - track.offsetLeft;
    scrollLeftRef.current = track.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const track = galleryTrackRef.current;
    if (!track) return;
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    track.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  const handleImageError = (idx) => {
    setFailedImages((prev) => ({ ...prev, [idx]: true }));
  };

  const galleryImages =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.imageSrc];

  return (
    <main ref={rootRef} className={styles.mainContainer}>
      {/* ==========================================================================
          KATMAN 1: SİNEMATİK BACKGROUND HERO
          ========================================================================== */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className={styles.heroBgImg}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.bottomFadeGradient} aria-hidden="true" />
        </div>

        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.navigationRow}>
            <Link href="/projeler" className={styles.backNav}>
              <ArrowLeft size={16} className={styles.backArrow} />
              <span>Seçkin Projelerimiz</span>
            </Link>
            <span className={styles.navSeparator}>/</span>
            <span className={styles.currentNavBadge}>{categoryLabel}</span>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroProjectTitle}>{project.title}</h1>
            <p className={styles.heroProjectLead}>{heroLeadText}</p>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          KATMAN 2: FEATURES 8
          ========================================================================== */}
      {project.features8 && project.features8.length > 0 && (
        <section className={`container ${styles.features8Section}`}>
          <div className={styles.features8Grid}>
            {project.features8.map((item, idx) => {
              const serifTitle =
                typeof item.serifTitle === "object"
                  ? item.serifTitle.tr
                  : item.serifTitle;
              const copyText =
                typeof item.copy === "object" ? item.copy.tr : item.copy;

              return (
                <div key={idx} className={styles.features8Card}>
                  <div className={styles.iconHolder}>
                    <DynamicIcon
                      name={item.icon}
                      size={22}
                      className={styles.lucideIcon}
                    />
                  </div>
                  <h3 className={styles.serifHeading}>{serifTitle}</h3>
                  <p className={styles.minimalistCopy}>{copyText}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ==========================================================================
          KATMAN 3: PROJE PASAPORTU
          ========================================================================== */}
      <section className={`container ${styles.passportSection}`}>
        <div className={styles.projectPassportBar}>
          <div className={styles.passportItem}>
            <span className={styles.passportLabel}>İŞLETME</span>
            <span className={styles.passportValue}>{project.client}</span>
          </div>

          <div className={styles.passportDivider} />

          <div className={styles.passportItem}>
            <span className={styles.passportLabel}>LOKASYON</span>
            <span className={styles.passportValue}>{project.location}</span>
          </div>

          <div className={styles.passportDivider} />

          <div className={styles.passportItem}>
            <span className={styles.passportLabel}>TESLİM YILI</span>
            <span className={styles.passportValue}>{project.year}</span>
          </div>

          <div className={styles.passportDivider} />

          <div className={styles.passportItem}>
            <span className={styles.passportLabel}>HİZMET KAPSAMI</span>
            <span className={styles.passportValue}>{roleText}</span>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          KATMAN 4: KRİZ VE MASADA YÜZ YÜZE KEŞİF
          ========================================================================== */}
      <section className={`container ${styles.storySection}`}>
        <div className={styles.storyBlock}>
          <div className={styles.storyTagWrap}>
            <span className={styles.storyPhaseNum}>01</span>
            <span className={styles.storyPhaseLabel}>
              Mevcut Durum & Büyük Kriz
            </span>
          </div>
          <h2 className={styles.storyHeading}>{crisisHeadingText}</h2>
          <p className={styles.storyParagraph}>{crisisStoryText}</p>
        </div>

        <div className={styles.storyBlock}>
          <div className={styles.storyTagWrap}>
            <span className={styles.storyPhaseNum}>02</span>
            <span className={styles.storyPhaseLabel}>
              Masanızda Yüz Yüze Keşif
            </span>
          </div>
          <h2 className={styles.storyHeading}>{discoveryHeadingText}</h2>
          <p className={styles.storyParagraph}>{discoveryStoryText}</p>
        </div>
      </section>

      {/* ==========================================================================
          KATMAN 5: GERÇEK GRAB-TO-SCROLL GALERİSİ
          ========================================================================== */}
      <section className={`container ${styles.gallerySection}`}>
        <div className={styles.galleryHeaderWrap}>
          <div className={styles.galleryHeaderLeft}>
            <span className={styles.sectionMiniEyebrow}>
              Görsel İnceleme & Galeri
            </span>
            <h2 className={styles.galleryMainHeading}>
              Sahada hayata geçen detaylar.
            </h2>
          </div>

          <div className={styles.galleryControlGroup}>
            <button
              onClick={() => scrollGallery("left")}
              className={styles.galleryScrollBtn}
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollGallery("right")}
              className={styles.galleryScrollBtn}
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={galleryTrackRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={styles.horizontalScrollTrack}
        >
          {galleryImages.map((src, idx) => {
            const hasError = failedImages[idx];

            return (
              <div key={idx} className={styles.galleryCardFrame}>
                {!hasError ? (
                  <Image
                    src={src}
                    alt={`${project.title} ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 85vw, 680px"
                    className={styles.galleryCardImg}
                    draggable={false}
                    onError={() => handleImageError(idx)}
                  />
                ) : (
                  <div className={styles.galleryFallbackCanvas}>
                    <span className={styles.galleryFallbackMonogram}>
                      {project.monogram}
                    </span>
                  </div>
                )}
                <div className={styles.galleryFrameVignette} />
              </div>
            );
          })}
        </div>
      </section>

      {/* ==========================================================================
          KATMAN 6: ADIM ADIM GELİŞTİRME & ÇÖZÜM
          ========================================================================== */}
      <section className={`container ${styles.solutionSection}`}>
        <div className={styles.sectionHeaderWrap}>
          <span className={styles.sectionMiniEyebrow}>
            03 · Geliştirme & Çözüm
          </span>
          <h2 className={styles.sectionMainTitle}>{solutionHeadingText}</h2>
        </div>

        <div className={styles.solutionGrid}>
          {project.solutionSteps.map((step) => {
            const stepTitle =
              typeof step.title === "object" ? step.title.tr : step.title;
            const stepDesc =
              typeof step.desc === "object" ? step.desc.tr : step.desc;

            return (
              <div key={step.num} className={styles.stepCard}>
                <div className={styles.stepCardTop}>
                  <span className={styles.stepCardNum}>{step.num}</span>
                </div>
                <h3 className={styles.stepCardTitle}>{stepTitle}</h3>
                <p className={styles.stepCardDesc}>{stepDesc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==========================================================================
          KATMAN 7: KIRILMA NOKTASI
          ========================================================================== */}
      <section className={`container ${styles.shiftSection}`}>
        <div className={styles.shiftCardBox}>
          <div className={styles.shiftTagWrap}>
            <span className={styles.storyPhaseNum}>04</span>
            <span className={styles.storyPhaseLabel}>
              Kırılma Noktası & İlk Hafta
            </span>
          </div>
          <h2 className={styles.shiftHeadingText}>{shiftHeadingText}</h2>
          <p className={styles.shiftParagraphText}>{shiftStoryText}</p>
        </div>
      </section>

      {/* ==========================================================================
          KATMAN 8: METRİKLER
          ========================================================================== */}
      <section className={`container ${styles.metricsSection}`}>
        <div className={styles.metricsBoxFrame}>
          <div className={styles.metricsHeader}>
            <span className={styles.sectionMiniEyebrow}>
              05 · Somut Kazanımlar
            </span>
            <h2 className={styles.metricsTitle}>
              Laf kalabalığı değil; kasanın hissettiği gerçek sonuçlar.
            </h2>
          </div>

          <div className={styles.metricsGridRow}>
            {project.metrics.map((m, idx) => {
              const metricLabel =
                typeof m.label === "object" ? m.label.tr : m.label;

              return (
                <div key={idx} className={styles.metricColumn}>
                  <span className={styles.metricBigNumber}>{m.figure}</span>
                  <span className={styles.metricDescLabel}>{metricLabel}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          BÜYÜK FİNAL CTA
          ========================================================================== */}
      <section className={`container ${styles.finaleCtaSection}`}>
        <div className={styles.ctaCardFrame}>
          <div className={styles.ctaContentCol}>
            <span className={styles.ctaEyebrowText}>Sizin İşletmeniz İçin</span>
            <h3 className={styles.ctaMainHeading}>
              <span>Sizin masanıza da gelip </span>
              <span className={styles.serifAccentWord}>
                aynı başarıyı yazalım.
              </span>
            </h3>
            <p className={styles.ctaBodyParagraph}>
              Telefon karmaşasından, komisyon kesintilerinden veya açılmayan
              eski sitenizden kurtulun. İşletmenizi Bursa genelinde doğrudan
              yerinde ziyaret edelim; en doğru sistemi masanızda birlikte
              planlayalım.
            </p>
          </div>

          <div className={styles.ctaActionsCol}>
            <a
              href={`https://wa.me/905519769406?text=${encodeURIComponent(
                `Merhaba Hexa Dijital, ${project.title} projenizi inceledim. Bizim işletmemiz için de benzer bir çalışma hakkında görüşmek istiyoruz.`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectExecutiveBtn}
            >
              <span className={styles.btnText}>Yerinde Keşif Talep Edin</span>
              <div className={styles.btnCircle}>
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

            <Link href="/projeler" className={styles.returnProjectsLink}>
              <span>← Diğer Başarı Hikayelerini İnceleyin</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
