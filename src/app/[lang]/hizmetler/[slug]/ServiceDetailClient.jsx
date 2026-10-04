"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ServiceDetail.module.css";
import {
  Zap,
  Gauge,
  KeyRound,
  ShieldCheck,
  TrendingUp,
  MapPin,
  PhoneCall,
  Star,
  Percent,
  Printer,
  Database,
  Target,
  QrCode,
  UtensilsCrossed,
  Sparkles,
  Layers,
  Award,
  ShoppingBag,
  CreditCard,
  Truck,
  Boxes,
  Building2,
  Workflow,
  MessageSquare,
  CircleDollarSign,
  Receipt,
  CalendarCheck,
  Timer,
  Bot,
  Cpu,
  FileText,
  CheckCircle2,
  Barcode,
  PackageCheck,
  BellRing,
  Palette,
  Search,
  Ruler,
  Frame,
  Camera,
  Code2,
  FileCode2,
  ShieldAlert,
  Sliders,
  MailCheck,
  Fingerprint,
  Headset,
  Settings2,
  Compass,
  Radio,
  BarChart3,
  Smartphone,
  Tag,
  Share2,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Plus,
} from "lucide-react";

const lucideRegistry = {
  Zap,
  Gauge,
  KeyRound,
  ShieldCheck,
  TrendingUp,
  MapPin,
  PhoneCall,
  Star,
  Percent,
  Printer,
  Database,
  Target,
  QrCode,
  UtensilsCrossed,
  Sparkles,
  Layers,
  Award,
  ShoppingBag,
  CreditCard,
  Truck,
  Boxes,
  Building2,
  Workflow,
  MessageSquare,
  CircleDollarSign,
  Receipt,
  CalendarCheck,
  Timer,
  Bot,
  Cpu,
  FileText,
  CheckCircle2,
  Barcode,
  PackageCheck,
  BellRing,
  Palette,
  Search,
  Ruler,
  Frame,
  Camera,
  Code2,
  FileCode2,
  ShieldAlert,
  Sliders,
  MailCheck,
  Fingerprint,
  Headset,
  Settings2,
  Compass,
  Radio,
  BarChart3,
  Smartphone,
  Tag,
  Share2,
};

function DynamicLucideIcon({ name, size = 20, className }) {
  const IconComp = lucideRegistry[name] || Zap;
  return (
    <IconComp
      size={size}
      strokeWidth={1.8}
      className={className || styles.f11IconSvg}
    />
  );
}

export default function ServiceDetailClient({
  data,
  relatedServices,
  lang,
  whatsappMessage,
}) {
  const isTr = lang === "tr";
  const rootRef = useRef(null);
  // İpeksi Akordeon Durumu (İlk soru açık)
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero Girişi
      gsap.fromTo(
        `.${styles.heroContent}`,
        { opacity: 0, y: 30 },
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

      // 3. Features 11 Split Başlık & Kartlar
      const f11Tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles.features11Section}`,
          start: "top 78%",
          once: true,
        },
      });

      f11Tl
        .fromTo(
          `.${styles.f11TopSplit}`,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        )
        .fromTo(
          `.${styles.f11BoxCard}`,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.3",
        );

      // 4. Deliverables Kartları
      gsap.fromTo(
        `.${styles.delivItemCard}`,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.deliverablesSection}`,
            start: "top 78%",
            once: true,
          },
        },
      );

      // 5. Alt CTA Kutusu
      gsap.fromTo(
        `.${styles.ctaBoxFrame}`,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.bottomCtaSection}`,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <main ref={rootRef} className={styles.mainContainer}>
      {/* ==========================================================================
          KATMAN 1: SİNEMATİK BACKGROUND HERO
          ========================================================================== */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <Image
            src={data.imageUrl}
            alt={data.title}
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
            <Link href={`/${lang}/hizmetler`} className={styles.backNav}>
              <ArrowLeft size={16} className={styles.backArrow} />
              <span>{isTr ? "Hizmet Fihristi" : "Services"}</span>
            </Link>
            <span className={styles.navSeparator}>/</span>
            <span className={styles.currentDeptText}>{data.categoryTag}</span>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{data.title}</h1>
            <p className={styles.heroLead}>{data.leadText}</p>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          KATMAN 2: 3 SÜTUNLU MİMARİ
          ========================================================================== */}
      <section className={`container ${styles.features8Section}`}>
        <div className={styles.features8Grid}>
          {data.features8.map((item, idx) => (
            <div key={idx} className={styles.features8Card}>
              <div className={styles.iconHolder}>
                <DynamicLucideIcon
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

      {/* ==========================================================================
          KATMAN 3: SPLIT BAŞLIK & KARTLAR
          ========================================================================== */}
      <section className={`container ${styles.features11Section}`}>
        <div className={styles.f11TopSplit}>
          <h2 className={styles.f11MainHeadline}>
            <span>{data.features11.headlineMain} </span>
            <span className={styles.f11ItalicWord}>
              {data.features11.headlineItalic}{" "}
            </span>
            <span>{data.features11.headlineEnd}</span>
          </h2>

          <p className={styles.f11RightParagraph}>
            {data.features11.leadParagraph}
          </p>
        </div>

        <div className={styles.f11CardsGrid}>
          {data.features11.cards.map((card) => (
            <div key={card.index} className={styles.f11BoxCard}>
              <div className={styles.f11CardTopHeader}>
                <div className={styles.f11IconSquare}>
                  <DynamicLucideIcon
                    name={card.icon}
                    size={20}
                    className={styles.f11IconSvg}
                  />
                </div>
                <span className={styles.f11CardIndexNum}>{card.index}</span>
              </div>

              <div className={styles.f11CardBody}>
                <h3 className={styles.f11CardTitle}>{card.title}</h3>
                <p className={styles.f11CardText}>{card.text}</p>
              </div>

              <div className={styles.f11CardFooterLine}>
                <span className={styles.f11ActionText}>{card.actionText}</span>
                <ArrowRight size={15} className={styles.f11ActionArrow} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================================================
          KATMAN 4: ZİG-ZAG GÖRSEL MİMARİSİ
          ========================================================================== */}
      <section className={`container ${styles.zigzagSection}`}>
        <div className={`${styles.zigzagRow} ${styles.rowTextLeft}`}>
          <div className={styles.zigzagContentCol}>
            <span className={styles.zigzagTag}>
              {data.zigzagShowcase.block1.tag}
            </span>
            <h2 className={styles.zigzagHeading}>
              {data.zigzagShowcase.block1.heading}
            </h2>
            <p className={styles.zigzagText}>
              {data.zigzagShowcase.block1.text}
            </p>
          </div>
          <div className={styles.zigzagVisualCol}>
            <div className={styles.showcaseFrame}>
              <Image
                src={data.zigzagShowcase.block1.image}
                alt={data.zigzagShowcase.block1.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 680px"
                className={styles.showcaseImg}
              />
              <div className={styles.frameVignette} />
            </div>
          </div>
        </div>

        <div className={`${styles.zigzagRow} ${styles.rowImageLeft}`}>
          <div className={styles.zigzagVisualCol}>
            <div className={styles.showcaseFrame}>
              <Image
                src={data.zigzagShowcase.block2.image}
                alt={data.zigzagShowcase.block2.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 680px"
                className={styles.showcaseImg}
              />
              <div className={styles.frameVignette} />
            </div>
          </div>
          <div className={styles.zigzagContentCol}>
            <span className={styles.zigzagTag}>
              {data.zigzagShowcase.block2.tag}
            </span>
            <h2 className={styles.zigzagHeading}>
              {data.zigzagShowcase.block2.heading}
            </h2>
            <p className={styles.zigzagText}>
              {data.zigzagShowcase.block2.text}
            </p>
          </div>
        </div>

        <div className={`${styles.zigzagRow} ${styles.rowTextLeft}`}>
          <div className={styles.zigzagContentCol}>
            <span className={styles.zigzagTag}>
              {data.zigzagShowcase.block3.tag}
            </span>
            <h2 className={styles.zigzagHeading}>
              {data.zigzagShowcase.block3.heading}
            </h2>
            {data.zigzagShowcase.block3.metricBadge && (
              <div className={styles.proofMetricPill}>
                {data.zigzagShowcase.block3.metricBadge}
              </div>
            )}
            <p className={styles.zigzagText}>
              {data.zigzagShowcase.block3.text}
            </p>
          </div>
          <div className={styles.zigzagVisualCol}>
            <div className={styles.showcaseFrame}>
              <Image
                src={data.zigzagShowcase.block3.image}
                alt={data.zigzagShowcase.block3.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 680px"
                className={styles.showcaseImg}
              />
              <div className={styles.frameVignette} />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          KATMAN 5: TESLİMAT KALEMLERİ
          ========================================================================== */}
      <section className={`container ${styles.deliverablesSection}`}>
        <div className={styles.deliverablesHeader}>
          <span className={styles.delivEyebrow}>
            {data.deliverablesHeader.eyebrow}
          </span>
          <h2 className={styles.delivMainHeading}>
            <span>{isTr ? "İşletmenize sağlanan " : "Engineered "}</span>
            <span className={styles.delivSerifWord}>
              {isTr ? "somut çıktılar." : "technical deliverables."}
            </span>
          </h2>
          <p className={styles.delivLeadText}>{data.deliverablesHeader.lead}</p>
        </div>

        <div className={styles.delivBalancedGrid}>
          {data.pillars.map((pillar, idx) => (
            <div key={idx} className={styles.delivItemCard}>
              <div className={styles.delivItemTop}>
                <div className={styles.delivIconBadge}>
                  <DynamicLucideIcon
                    name={pillar.icon}
                    size={20}
                    className={styles.delivIconSvg}
                  />
                </div>
                <h3 className={styles.delivItemTitle}>{pillar.title}</h3>
              </div>
              <p className={styles.delivItemDesc}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================================================
          KATMAN 6: YAN YANA BİRLEŞİK BÖLÜM (İPEKSİ AKORDEON DÖNÜŞÜMÜ)
          ========================================================================== */}
      <section className={`container ${styles.faqAndRelatedCombinedSection}`}>
        <div className={styles.combinedTwoColLayout}>
          {/* SOL SÜTUN: İPEKSİ AKORDEON SSS */}
          <div className={styles.combinedFaqCol}>
            <div className={styles.colHeaderWrap}>
              <span className={styles.sectionLabel}>
                {isTr ? "Merak Edilenler" : "Common Inquiries"}
              </span>
              <h2 className={styles.sectionTitle}>
                <span>{isTr ? "Sıkça sorulan " : "Frequently asked "}</span>
                <span className={styles.titleSerifWord}>
                  {isTr ? "sorular." : "questions."}
                </span>
              </h2>
            </div>

            <div className={styles.faqListContainer}>
              {data.faq.map((item, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`${styles.faqRowItem} ${isOpen ? styles.faqRowActive : ""}`}
                    onClick={() => toggleFaq(idx)}
                  >
                    <div className={styles.faqSummaryLine}>
                      <h3 className={styles.faqQuestionText}>{item.q}</h3>
                      <div
                        className={`${styles.iconWrap} ${isOpen ? styles.iconWrapRotated : ""}`}
                      >
                        <Plus size={18} className={styles.faqExpandIcon} />
                      </div>
                    </div>
                    {/* CSS GRID İLE İPEKSİ AŞAĞI KAYAN GÖVDE */}
                    <div
                      className={`${styles.faqSmoothDrawer} ${isOpen ? styles.drawerOpen : ""}`}
                    >
                      <div className={styles.drawerInner}>
                        <p className={styles.faqAnswerParagraph}>{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SAĞ SÜTUN: TAMAMLAYICI ÇÖZÜMLER */}
          <div className={styles.combinedRelatedCol}>
            <div className={styles.colHeaderWrap}>
              <span className={styles.sectionLabel}>
                {isTr ? "Tamamlayıcı Çarklar" : "Complementary Disciplines"}
              </span>
              <h2 className={styles.sectionTitle}>
                <span>{isTr ? "Bu sistemi tamamlayan " : "Synchronized "}</span>
                <span className={styles.titleSerifWord}>
                  {isTr ? "diğer dişliler." : "digital gears."}
                </span>
              </h2>
            </div>

            <div className={styles.relatedStackGroup}>
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/${lang}/hizmetler/${rel.slug}`}
                  className={styles.relatedMiniCard}
                >
                  <div className={styles.relatedCardMain}>
                    <span className={styles.relatedCategoryTag}>
                      {rel.categoryTag}
                    </span>
                    <h3 className={styles.relatedServiceName}>{rel.title}</h3>
                    <p className={styles.relatedServiceSnippet}>
                      {rel.leadText}
                    </p>
                  </div>

                  <div className={styles.relatedCardBottom}>
                    <span className={styles.relatedKpiText}>{rel.kpi}</span>
                    <div className={styles.arrowCircleMini}>
                      <ArrowUpRight size={16} className={styles.arrowSvgMini} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          KATMAN 7: ALT CTA (45 DERECE DÖNEN MASTER BUTON)
          ========================================================================== */}
      <section className={`container ${styles.bottomCtaSection}`}>
        <div className={styles.ctaBoxFrame}>
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
                  "{data.title}" için{" "}
                  <span className={styles.serifAccentWord}>
                    net bir yol haritası
                  </span>{" "}
                  çıkaralım.
                </>
              ) : (
                <>
                  Engineer a precise roadmap for{" "}
                  <span className={styles.serifAccentWord}>{data.title}</span>.
                </>
              )}
            </h3>

            <p className={styles.ctaBodyText}>
              {isTr
                ? "Sürpriz maliyetler veya ucu açık teslimat süreleri yok. Kapsamı, kullanılacak altyapıyı ve takvimi şeffafça belirleyelim."
                : "Zero hidden costs or ambiguous delivery windows. We codify deliverables and timelines into binding agreements."}
            </p>
          </div>

          <div className={styles.ctaActionsRight}>
            {/* 45 DERECE DÖNEN MASTER BUTON */}
            <a
              href={`https://wa.me/905519769406?text=${whatsappMessage}`}
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

            <Link
              href={`/${lang}/hizmetler`}
              className={styles.secondaryInquiryLink}
            >
              <span>
                {isTr ? "← Tüm Hizmetleri Görüntüle" : "← All Services"}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
