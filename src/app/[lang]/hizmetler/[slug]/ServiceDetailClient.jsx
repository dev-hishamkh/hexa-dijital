"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Zap,
  Gauge,
  KeyRound,
  ShieldCheck,
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
import styles from "./ServiceDetail.module.css";

const lucideRegistry = {
  Zap,
  Gauge,
  KeyRound,
  ShieldCheck,
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

      // 4. Zig-Zag Satırları (Her Satır Ekrana Girdikçe Akıcı Geçiş)
      const rows = gsap.utils.toArray(`.${styles.zigzagRow}`);
      rows.forEach((row) => {
        const contentCol = row.querySelector(`.${styles.zigzagContentCol}`);
        const visualCol = row.querySelector(`.${styles.zigzagVisualCol}`);

        const rowTl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 75%",
            once: true,
          },
        });

        if (contentCol) {
          rowTl.fromTo(
            contentCol,
            { opacity: 0, x: -25 },
            { opacity: 1, x: 0, duration: 0.75, ease: "power3.out" },
          );
        }

        if (visualCol) {
          rowTl.fromTo(
            visualCol,
            { opacity: 0, scale: 0.96 },
            { opacity: 1, scale: 1, duration: 0.85, ease: "power3.out" },
            "-=0.5",
          );
        }
      });

      // 5. Deliverables Kartları
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

      // 6. SSS & İlgili Çözümler
      gsap.fromTo(
        `.${styles.faqAndRelatedCombinedSection}`,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.faqAndRelatedCombinedSection}`,
            start: "top 80%",
            once: true,
          },
        },
      );

      // 7. Alt CTA Kutusu
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

  return (
    <main ref={rootRef} className={styles.mainContainer}>
      {/* ==========================================================================
          KATMAN 1: SİNEMATİK BACKGROUND HERO (YAZI EN ALTA YASLI)
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
              <span>{isTr ? "Hizmetler" : "Services"}</span>
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
          KATMAN 2: REACT BITS PRO "FEATURES 8" (3 SÜTUNLU LUCIDE İKONLU MİMARİ)
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
          KATMAN 3: REACT BITS PRO "FEATURES 11" (3 İNDEKSLİ KARTLAR)
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
          KATMAN 4: ZİG-ZAG GÖRSEL MİMARİSİ (3'LÜ VİTRİN)
          ========================================================================== */}
      <section className={`container ${styles.zigzagSection}`}>
        {/* 1. BLOK: Sol Metin — Sağ Görsel */}
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

        {/* 2. BLOK: Sol Görsel — Sağ Metin */}
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

        {/* 3. BLOK: Sol Metin — Sağ Görsel */}
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
          KATMAN 5: DENGELİ EDİTORYAL TESLİMAT KALEMLERİ (2 SÜTUNLU LÜKS BLOKLAR)
          ========================================================================== */}
      <section className={`container ${styles.deliverablesSection}`}>
        <div className={styles.deliverablesHeader}>
          <span className={styles.delivEyebrow}>
            {data.deliverablesHeader.eyebrow}
          </span>
          <h2 className={styles.delivMainHeading}>
            {data.deliverablesHeader.heading}
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
          KATMAN 6: YAN YANA BİRLEŞİK BÖLÜM (SOL: SSS — SAĞ: TAMAMLAYICI DİŞLİLER)
          ========================================================================== */}
      <section className={`container ${styles.faqAndRelatedCombinedSection}`}>
        <div className={styles.combinedTwoColLayout}>
          {/* SOL SÜTUN: SSS (KUTUSUZ AKORDEON) */}
          <div className={styles.combinedFaqCol}>
            <div className={styles.colHeaderWrap}>
              <span className={styles.sectionLabel}>
                {isTr ? "AKLINIZA TAKILANLAR" : "FAQ"}
              </span>
              <h2 className={styles.sectionTitle}>
                {isTr ? "Sıkça Sorulan Sorular" : "Frequently Asked Questions"}
              </h2>
            </div>

            <div className={styles.faqListContainer}>
              {data.faq.map((item, idx) => (
                <details
                  key={idx}
                  className={styles.faqRowItem}
                  open={idx === 0}
                >
                  <summary className={styles.faqSummaryLine}>
                    <h3 className={styles.faqQuestionText}>{item.q}</h3>
                    <Plus size={18} className={styles.faqExpandIcon} />
                  </summary>
                  <div className={styles.faqAnswerBody}>
                    <p className={styles.faqAnswerParagraph}>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* SAĞ SÜTUN: TAMAMLAYICI ÇÖZÜMLER (İLGİLİ DİŞLİLER) */}
          <div className={styles.combinedRelatedCol}>
            <div className={styles.colHeaderWrap}>
              <span className={styles.sectionLabel}>
                {isTr ? "TAMAMLAYICI DİŞLİLER" : "COMPLEMENTARY"}
              </span>
              <h2 className={styles.sectionTitle}>
                {isTr
                  ? "Bu hizmeti tamamlayan diğer dişliler."
                  : "Complementary digital gears."}
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
          KATMAN 7: GENİŞ LÜKS BEYAZ KAPSÜL ALT CTA
          ========================================================================== */}
      <section className={`container ${styles.bottomCtaSection}`}>
        <div className={styles.ctaBoxFrame}>
          <div className={styles.ctaContentLeft}>
            <div className={styles.ctaBadgeArea}>
              <span className={styles.ctaStatusDot} />
              <span className={styles.ctaBadgeLabel}>
                {isTr ? "ÜCRETSİZ DİJİTAL CHECK-UP" : "COMPLIMENTARY AUDIT"}
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
                ? "Sürpriz maliyetler veya ucu açık teslimat süreleri yok. Kapsamı, kullanılacak teknolojileri ve takvimi şeffafça belirleyelim."
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
                <ArrowUpRight size={18} className={styles.btnArrowSvg} />
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
