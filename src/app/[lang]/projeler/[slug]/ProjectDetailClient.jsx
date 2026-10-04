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

export default function ProjectDetailClient({ project, lang }) {
  const isTr = lang === "tr";
  const rootRef = useRef(null);
  const galleryTrackRef = useRef(null);
  const [failedImages, setFailedImages] = useState({});

  // FAREYLE TUTUP SÜRÜKLEME (GRAB-TO-SCROLL) DURUMLARI
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

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

      // 6. Metrikler Şeridi
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
    }, rootRef);

    return () => ctx.revert();
  }, []);

  // OK BUTONLARI İLE KAYDIRMA
  const scrollGallery = (direction) => {
    if (!galleryTrackRef.current) return;
    const distance = 600;
    galleryTrackRef.current.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  // FARE İLE TUTUP ÇEKME (GRAB) ETKİNLİKLERİ - ASLA KİLİTLENME YAPMAZ
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
    const walk = (x - startXRef.current) * 1.5; // Akıcı sürükleme hızı
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
            <Link href={`/${lang}/projeler`} className={styles.backNav}>
              <ArrowLeft size={16} className={styles.backArrow} />
              <span>{isTr ? "Seçkin Projelerimiz" : "Portfolio"}</span>
            </Link>
            <span className={styles.navSeparator}>/</span>
            <span className={styles.currentNavBadge}>
              {project.categoryLabel}
            </span>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroProjectTitle}>{project.title}</h1>
            <p className={styles.heroProjectLead}>{project.heroLead}</p>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          KATMAN 2: FEATURES 8
          ========================================================================== */}
      {project.features8 && project.features8.length > 0 && (
        <section className={`container ${styles.features8Section}`}>
          <div className={styles.features8Grid}>
            {project.features8.map((item, idx) => (
              <div key={idx} className={styles.features8Card}>
                <div className={styles.iconHolder}>
                  <DynamicIcon
                    name={item.icon}
                    size={22}
                    className={styles.lucideIcon}
                  />
                </div>
                <h3 className={styles.serifHeading}>{item.serifTitle}</h3>
                <p className={styles.minimalistCopy}>{item.copy}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ==========================================================================
          KATMAN 3: PROJE PASAPORTU
          ========================================================================== */}
      <section className={`container ${styles.passportSection}`}>
        <div className={styles.projectPassportBar}>
          <div className={styles.passportItem}>
            <span className={styles.passportLabel}>
              {isTr ? "İŞLETME" : "CLIENT"}
            </span>
            <span className={styles.passportValue}>{project.client}</span>
          </div>

          <div className={styles.passportDivider} />

          <div className={styles.passportItem}>
            <span className={styles.passportLabel}>
              {isTr ? "LOKASYON" : "LOCATION"}
            </span>
            <span className={styles.passportValue}>{project.location}</span>
          </div>

          <div className={styles.passportDivider} />

          <div className={styles.passportItem}>
            <span className={styles.passportLabel}>
              {isTr ? "TESLİM YILI" : "YEAR"}
            </span>
            <span className={styles.passportValue}>{project.year}</span>
          </div>

          <div className={styles.passportDivider} />

          <div className={styles.passportItem}>
            <span className={styles.passportLabel}>
              {isTr ? "HİZMET KAPSAMI" : "DISCIPLINES"}
            </span>
            <span className={styles.passportValue}>{project.role}</span>
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
              {isTr ? "Mevcut Durum & Büyük Kriz" : "Initial Bottleneck"}
            </span>
          </div>
          <h2 className={styles.storyHeading}>{project.crisisHeading}</h2>
          <p className={styles.storyParagraph}>{project.crisisStory}</p>
        </div>

        <div className={styles.storyBlock}>
          <div className={styles.storyTagWrap}>
            <span className={styles.storyPhaseNum}>02</span>
            <span className={styles.storyPhaseLabel}>
              {isTr ? "Masanızda Yüz Yüze Keşif" : "On-Site Discovery"}
            </span>
          </div>
          <h2 className={styles.storyHeading}>{project.discoveryHeading}</h2>
          <p className={styles.storyParagraph}>{project.discoveryStory}</p>
        </div>
      </section>

      {/* ==========================================================================
          KATMAN 5: GERÇEK GRAB-TO-SCROLL GALERİSİ (ASLA KİLİTLENMEZ)
          ========================================================================== */}
      <section className={`container ${styles.gallerySection}`}>
        <div className={styles.galleryHeaderWrap}>
          <div className={styles.galleryHeaderLeft}>
            <span className={styles.sectionMiniEyebrow}>
              {isTr ? "Görsel İnceleme & Galeri" : "Visual Showcase"}
            </span>
            <h2 className={styles.galleryMainHeading}>
              {isTr
                ? "Sahada hayata geçen detaylar."
                : "Craft delivered on-site."}
            </h2>
          </div>

          <div className={styles.galleryControlGroup}>
            <button
              onClick={() => scrollGallery("left")}
              className={styles.galleryScrollBtn}
              aria-label="Önceki Görsel"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollGallery("right")}
              className={styles.galleryScrollBtn}
              aria-label="Sonraki Görsel"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* FARE İLE TUTUP SÜRÜKLENEBİLEN, DİKEYİ ASLA ENGELLEMEYEN HAT */}
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
                    alt={`${project.title} Görsel ${idx + 1}`}
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
          KATMAN 6: ADIM ADIM İMALAT
          ========================================================================== */}
      <section className={`container ${styles.solutionSection}`}>
        <div className={styles.sectionHeaderWrap}>
          <span className={styles.sectionMiniEyebrow}>
            {isTr ? "03 · Çözüm & İmalat" : "03 · Engineering"}
          </span>
          <h2 className={styles.sectionMainTitle}>{project.solutionHeading}</h2>
        </div>

        <div className={styles.solutionGrid}>
          {project.solutionSteps.map((step) => (
            <div key={step.num} className={styles.stepCard}>
              <div className={styles.stepCardTop}>
                <span className={styles.stepCardNum}>{step.num}</span>
              </div>
              <h3 className={styles.stepCardTitle}>{step.title}</h3>
              <p className={styles.stepCardDesc}>{step.desc}</p>
            </div>
          ))}
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
              {isTr ? "Kırılma Noktası & İlk Hafta" : "The Turning Point"}
            </span>
          </div>
          <h2 className={styles.shiftHeadingText}>{project.shiftHeading}</h2>
          <p className={styles.shiftParagraphText}>{project.shiftStory}</p>
        </div>
      </section>

      {/* ==========================================================================
          KATMAN 8: METRİKLER
          ========================================================================== */}
      <section className={`container ${styles.metricsSection}`}>
        <div className={styles.metricsBoxFrame}>
          <div className={styles.metricsHeader}>
            <span className={styles.sectionMiniEyebrow}>
              {isTr ? "05 · Somut Kazanımlar" : "05 · Verified ROI"}
            </span>
            <h2 className={styles.metricsTitle}>
              {isTr
                ? "Laf kalabalığı değil; kasanın hissettiği gerçek sonuçlar."
                : "Real, verifiable metrics delivered live in operations."}
            </h2>
          </div>

          <div className={styles.metricsGridRow}>
            {project.metrics.map((m, idx) => (
              <div key={idx} className={styles.metricColumn}>
                <span className={styles.metricBigNumber}>{m.figure}</span>
                <span className={styles.metricDescLabel}>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          BÜYÜK FİNAL CTA (45 DERECE DÖNEN MASTER BUTON)
          ========================================================================== */}
      <section className={`container ${styles.finaleCtaSection}`}>
        <div className={styles.ctaCardFrame}>
          <div className={styles.ctaContentCol}>
            <span className={styles.ctaEyebrowText}>
              {isTr ? "Sizin İşletmeniz İçin" : "Your Next Transformation"}
            </span>
            <h3 className={styles.ctaMainHeading}>
              <span>
                {isTr
                  ? "Sizin masanıza da gelip "
                  : "Let’s meet at your table to "}
              </span>
              <span className={styles.serifAccentWord}>
                {isTr ? "aynı başarıyı yazalım." : "engineer the same growth."}
              </span>
            </h3>
            <p className={styles.ctaBodyParagraph}>
              {isTr
                ? "Telefon karmaşasından, komisyon kesintilerinden veya açılmayan eski sitenizden kurtulun. İşletmenizi Bursa genelinde doğrudan yerinde ziyaret edelim; en doğru sistemi masanızda birlikte planlayalım."
                : "Escape operational bottlenecks and wasted marketing budget. We visit your venue across Bursa to engineer high-converting digital systems."}
            </p>
          </div>

          <div className={styles.ctaActionsCol}>
            <a
              href={`https://wa.me/905519769406?text=${encodeURIComponent(
                isTr
                  ? `Merhaba Hexa Dijital, ${project.title} projenizi inceledim. Bizim işletmemiz için de benzer bir çalışma hakkında görüşmek istiyoruz.`
                  : `Hello Hexa Digital, I reviewed the ${project.title} case study. We would like to consult on a similar transformation for our business.`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectExecutiveBtn}
            >
              <span className={styles.btnText}>
                {isTr ? "Yerinde Keşif Talep Edin" : "Request On-Site Meeting"}
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

            <Link
              href={`/${lang}/projeler`}
              className={styles.returnProjectsLink}
            >
              <span>
                {isTr
                  ? "← Diğer Başarı Hikayelerini İnceleyin"
                  : "← Explore Other Case Studies"}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
