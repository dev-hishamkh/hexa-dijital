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
  PhoneOff,
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
  MessageCircle,
  CircleDollarSign,
  Receipt,
  CalendarCheck,
  Timer,
  Bot,
  Cpu,
  FileText,
  FileX,
  FileCheck,
  CheckCircle2,
  Barcode,
  PackageCheck,
  BellRing,
  Palette,
  Search,
  Filter,
  Ruler,
  Frame,
  Camera,
  Focus,
  Video,
  Code2,
  FileCode2,
  ShieldAlert,
  Sliders,
  MailCheck,
  Fingerprint,
  Headset,
  Coins,
  LayoutGrid,
  PenTool,
  Lightbulb,
  Share2,
  Smartphone,
  Eye,
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
  PhoneOff,
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
  MessageCircle,
  CircleDollarSign,
  Receipt,
  CalendarCheck,
  Timer,
  Bot,
  Cpu,
  FileText,
  FileX,
  FileCheck,
  CheckCircle2,
  Barcode,
  PackageCheck,
  BellRing,
  Palette,
  Search,
  Filter,
  Ruler,
  Frame,
  Camera,
  Focus,
  Video,
  Code2,
  FileCode2,
  ShieldAlert,
  Sliders,
  MailCheck,
  Fingerprint,
  Headset,
  Coins,
  LayoutGrid,
  PenTool,
  Lightbulb,
  Share2,
  Smartphone,
  Eye,
};

function DynamicLucideIcon({ name, size = 22, strokeWidth = 1.4, className }) {
  const IconComp = lucideRegistry[name] || Zap;
  return (
    <IconComp
      size={size}
      strokeWidth={strokeWidth}
      className={className || styles.defaultIconSvg}
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
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero Giriş Animasyonu
      gsap.fromTo(
        `.${styles.heroContent} > *`,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
      );

      // 2. 3 Sütunlu Özellikler
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

      // 3. Devasa İkonik Mimari Katmanları
      gsap.fromTo(
        `.${styles.monolithBlock}`,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.architecturalSection}`,
            start: "top 78%",
            once: true,
          },
        },
      );

      // 4. Features 11 Split Başlık & Kartlar
      const f11Tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles.features11Section}`,
          start: "top 80%",
          once: true,
        },
      });

      f11Tl
        .fromTo(
          `.${styles.f11TopSplit}`,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" },
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
          "-=0.25",
        );

      // 5. Teslimat Kalemleri
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
            start: "top 80%",
            once: true,
          },
        },
      );

      // 6. Alt CTA
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

  const block1Icon = data?.zigzagShowcase?.block1?.icon || "Zap";
  const block2Icon = data?.zigzagShowcase?.block2?.icon || "Workflow";
  const block3Icon = data?.zigzagShowcase?.block3?.icon || "Award";

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
              <span>{isTr ? "Hizmet Kataloğu" : "Service Index"}</span>
            </Link>
            <span className={styles.navSeparator}>/</span>
            <span className={styles.currentDeptText}>{data.categoryTag}</span>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.heroKpiPill}>
              <span className={styles.kpiDot} />
              <span>
                {data.kpi ||
                  (isTr ? "Mühendislik Standardı" : "Engineering Benchmark")}
              </span>
            </div>

            <h1 className={styles.heroTitle}>{data.title}</h1>
            <p className={styles.heroLead}>{data.leadText}</p>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          KATMAN 2: 3 SÜTUNLU ÖZELLİK MİMARİSİ
          ========================================================================== */}
      {data.features8 && data.features8.length > 0 && (
        <section className={`container ${styles.features8Section}`}>
          <div className={styles.features8Grid}>
            {data.features8.map((item, idx) => (
              <div key={idx} className={styles.features8Card}>
                <div className={styles.iconHolder}>
                  <DynamicLucideIcon
                    name={item.icon}
                    size={24}
                    strokeWidth={1.5}
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
          KATMAN 3: BAŞLIĞA ÖZEL DEV LUCIDE İKONİK SAHNELERİ
          ========================================================================== */}
      {data.zigzagShowcase && (
        <section className={`container ${styles.architecturalSection}`}>
          <div className={styles.monolithGrid}>
            {/* BLOK 1 */}
            <div className={`${styles.monolithBlock} ${styles.blockRowNormal}`}>
              <div className={styles.monolithVisualCol}>
                <div className={styles.sculptureFrame}>
                  <div className={styles.sculptureGlowOrb} />
                  <DynamicLucideIcon
                    name={block1Icon}
                    size={84}
                    strokeWidth={1.2}
                    className={styles.giantHeroLucide}
                  />
                  <span className={styles.sculptureIndexBadge}>
                    01 // TEŞHİS
                  </span>
                </div>
              </div>
              <div className={styles.monolithContentCol}>
                <span className={styles.monolithTag}>
                  {data.zigzagShowcase.block1.tag}
                </span>
                <h2 className={styles.monolithHeading}>
                  {data.zigzagShowcase.block1.heading}
                </h2>
                <p className={styles.monolithText}>
                  {data.zigzagShowcase.block1.text}
                </p>
              </div>
            </div>

            {/* BLOK 2 */}
            <div
              className={`${styles.monolithBlock} ${styles.blockRowReversed}`}
            >
              <div className={styles.monolithVisualCol}>
                <div className={styles.sculptureFrame}>
                  <div className={styles.sculptureGlowOrb} />
                  <DynamicLucideIcon
                    name={block2Icon}
                    size={84}
                    strokeWidth={1.2}
                    className={styles.giantHeroLucide}
                  />
                  <span className={styles.sculptureIndexBadge}>
                    02 // SÜREÇ
                  </span>
                </div>
              </div>
              <div className={styles.monolithContentCol}>
                <span className={styles.monolithTag}>
                  {data.zigzagShowcase.block2.tag}
                </span>
                <h2 className={styles.monolithHeading}>
                  {data.zigzagShowcase.block2.heading}
                </h2>
                <p className={styles.monolithText}>
                  {data.zigzagShowcase.block2.text}
                </p>
              </div>
            </div>

            {/* BLOK 3 */}
            <div className={`${styles.monolithBlock} ${styles.blockRowNormal}`}>
              <div className={styles.monolithVisualCol}>
                <div className={styles.sculptureFrame}>
                  <div className={styles.sculptureGlowOrb} />
                  <DynamicLucideIcon
                    name={block3Icon}
                    size={84}
                    strokeWidth={1.2}
                    className={styles.giantHeroLucide}
                  />
                  <span className={styles.sculptureIndexBadge}>
                    03 // TAAHHÜT
                  </span>
                </div>
              </div>
              <div className={styles.monolithContentCol}>
                <span className={styles.monolithTag}>
                  {data.zigzagShowcase.block3.tag}
                </span>
                <h2 className={styles.monolithHeading}>
                  {data.zigzagShowcase.block3.heading}
                </h2>
                {data.zigzagShowcase.block3.metricBadge && (
                  <div className={styles.proofMetricPill}>
                    {data.zigzagShowcase.block3.metricBadge}
                  </div>
                )}
                <p className={styles.monolithText}>
                  {data.zigzagShowcase.block3.text}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==========================================================================
          KATMAN 4: SPLIT BAŞLIK & TERTEMİZ KARTLAR (İNCELEYİN/GÖRÜN KALDIRILDI)
          ========================================================================== */}
      {data.features11 && (
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
                      size={22}
                      className={styles.f11IconSvg}
                    />
                  </div>
                  <span className={styles.f11CardIndexNum}>{card.index}</span>
                </div>

                <div className={styles.f11CardBody}>
                  <h3 className={styles.f11CardTitle}>{card.title}</h3>
                  <p className={styles.f11CardText}>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ==========================================================================
          KATMAN 5: TESLİMAT KALEMLERİ
          ========================================================================== */}
      <section className={`container ${styles.deliverablesSection}`}>
        <div className={styles.deliverablesHeader}>
          <span className={styles.delivEyebrow}>
            {data.deliverablesHeader?.eyebrow ||
              (isTr ? "Mühendislik Standartları" : "Engineering Deliverables")}
          </span>
          <h2 className={styles.delivMainHeading}>
            <span>{isTr ? "İşletmenize sağlanan " : "Engineered "}</span>
            <span className={styles.delivSerifWord}>
              {isTr ? "somut çıktılar." : "technical deliverables."}
            </span>
          </h2>
          <p className={styles.delivLeadText}>
            {data.deliverablesHeader?.lead ||
              (isTr
                ? "Her teslimat kalemimiz şeffaf, ölçülebilir ve şirketinize ait tam mülkiyetle sunulur."
                : "Codified with verifiable speed, zero vendor lock-ins, and full intellectual property ownership.")}
          </p>
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
          KATMAN 6: YAN YANA BİRLEŞİK BÖLÜM (İPEKSİ AKORDEON SSS)
          ========================================================================== */}
      <section className={`container ${styles.faqAndRelatedCombinedSection}`}>
        <div className={styles.combinedTwoColLayout}>
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
                {isTr ? "Bursa İçi Masanızda Keşif" : "On-Site Consultation"}
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
