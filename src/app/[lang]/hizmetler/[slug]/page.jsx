import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
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
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp/FloatingWhatsApp";
import { servicesData } from "@/data/servicesData";
import { getServiceDetailData } from "@/data/serviceDetailData";
import styles from "./ServiceDetail.module.css";

// Lucide İkon Kayıt Tablosu
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

export async function generateStaticParams() {
  const languages = ["tr", "en"];
  const params = [];

  languages.forEach((lang) => {
    const groups = servicesData[lang] || servicesData.tr;
    groups.forEach((dept) => {
      dept.services.forEach((service) => {
        params.push({
          lang,
          slug: service.slug,
        });
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const slug = resolvedParams?.slug;
  const data = getServiceDetailData(slug, lang);

  if (!data) {
    return {
      title: "Hizmet Bulunamadı | Hexa Dijital",
    };
  }

  const isTr = lang === "tr";
  const metaTitle = `${data.title} | Hexa Dijital`;
  const metaDesc = data.leadText.slice(0, 158);

  return {
    title: metaTitle,
    description: metaDesc,
    keywords: [
      data.name,
      `${data.name} Bursa`,
      "Bursa web tasarım",
      "Bursa özel web yazılım",
      data.departmentTitle,
      "Hexa Dijital",
    ],
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: `https://hexadijital.com/${lang}/hizmetler/${data.slug}`,
      siteName: "Hexa Dijital",
      locale: isTr ? "tr_TR" : "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDesc,
    },
    alternates: {
      canonical: `https://hexadijital.com/${lang}/hizmetler/${data.slug}`,
      languages: {
        tr: `https://hexadijital.com/tr/hizmetler/${data.slug}`,
        en: `https://hexadijital.com/en/hizmetler/${data.slug}`,
      },
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const slug = resolvedParams?.slug;
  const isTr = lang === "tr";

  const data = getServiceDetailData(slug, lang);

  if (!data) {
    notFound();
  }

  const relatedServices = data.relatedSlugs
    .map((rSlug) => getServiceDetailData(rSlug, lang))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: isTr ? "Ana Sayfa" : "Home",
            item: `https://hexadijital.com/${lang}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: isTr ? "Hizmetlerimiz" : "Services",
            item: `https://hexadijital.com/${lang}/hizmetler`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: data.title,
            item: `https://hexadijital.com/${lang}/hizmetler/${data.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        name: data.title,
        description: data.leadText,
        category: data.departmentTitle,
        provider: {
          "@type": "ProfessionalService",
          name: "HEXA Dijital",
          telephone: "+905519769406",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Nilüfer",
            addressLocality: "Bursa",
            addressCountry: "TR",
          },
        },
        areaServed: [
          { "@type": "City", name: "Bursa" },
          { "@type": "Country", name: "Türkiye" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: data.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    isTr
      ? `Merhaba Hexa Dijital, "${data.title}" hizmetiniz hakkında bilgi ve teklif almak istiyorum.`
      : `Hello Hexa Digital, I would like to inquire about "${data.title}".`,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang={lang} />
      <main className={styles.mainContainer}>
        {/* ==========================================================================
            1. SİNEMATİK BACKGROUND HERO (YAZI EN ALTA YASLI)
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
            2. REACT BITS PRO "FEATURES 8" BLOĞU
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
            3. REACT BITS PRO "FEATURES 11" BLOĞU (3 İNDEKSLİ KARTLAR)
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
                  <span className={styles.f11ActionText}>
                    {card.actionText}
                  </span>
                  <ArrowRight size={15} className={styles.f11ActionArrow} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================================================
            4. CIRCULAR ORBITAL INTEGRATION HUB (3'LÜ ARI PETEĞİ ALTIGEN MERKEZLİ)
            ========================================================================== */}
        {data.orbitalHub && (
          <section className={`container ${styles.orbitalSection}`}>
            <div className={styles.orbitalLayout}>
              <div className={styles.orbitalLeftContent}>
                <span className={styles.orbitalBadge}>
                  {data.orbitalHub.badge}
                </span>
                <h2 className={styles.orbitalMainHeading}>
                  {data.orbitalHub.heading}
                </h2>
                <p className={styles.orbitalDescription}>
                  {data.orbitalHub.description}
                </p>

                <div className={styles.orbitalActionRow}>
                  <a
                    href={`https://wa.me/905519769406?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.orbitalWhiteBtn}
                  >
                    <span>{data.orbitalHub.actionBtnText}</span>
                  </a>
                </div>
              </div>

              <div className={styles.orbitalRightDiagram}>
                <div className={styles.orbitalStageWrap}>
                  <div className={styles.orbitalRingOuter} />
                  <div className={styles.orbitalRingInnerDashed} />

                  <div className={`${styles.spokeLine} ${styles.spoke1}`} />
                  <div className={`${styles.spokeLine} ${styles.spoke2}`} />
                  <div className={`${styles.spokeLine} ${styles.spoke3}`} />

                  <span
                    className={`${styles.orbitDotParticle} ${styles.pDot1}`}
                  />
                  <span
                    className={`${styles.orbitDotParticle} ${styles.pDot2}`}
                  />
                  <span
                    className={`${styles.orbitDotParticle} ${styles.pDot3}`}
                  />
                  <span
                    className={`${styles.orbitDotParticle} ${styles.pDot4}`}
                  />
                  <span
                    className={`${styles.orbitDotParticle} ${styles.pDot5}`}
                  />
                  <span
                    className={`${styles.orbitDotParticle} ${styles.pDot6}`}
                  />

                  <div className={styles.orbitalCenterBox}>
                    <div className={styles.honeycombCluster}>
                      <svg
                        className={`${styles.hexPetek} ${styles.hexTop}`}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <polygon points="12 2 21 7.5 21 16.5 12 22 3 16.5 3 7.5" />
                      </svg>
                      <svg
                        className={`${styles.hexPetek} ${styles.hexBottomLeft}`}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <polygon points="12 2 21 7.5 21 16.5 12 22 3 16.5 3 7.5" />
                      </svg>
                      <svg
                        className={`${styles.hexPetek} ${styles.hexBottomRight}`}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <polygon points="12 2 21 7.5 21 16.5 12 22 3 16.5 3 7.5" />
                      </svg>
                    </div>
                    <span className={styles.centerHubLabel}>HEXA CORE</span>
                  </div>

                  {data.orbitalHub.nodes.map((node, nIdx) => (
                    <div
                      key={nIdx}
                      className={`${styles.orbitalNodeItem} ${styles[`nodePosition${nIdx + 1}`]}`}
                    >
                      <div className={styles.nodeIconBox}>
                        <DynamicLucideIcon
                          name={node.icon}
                          size={20}
                          className={styles.nodeSvg}
                        />
                      </div>
                      <span className={styles.nodeLabelText}>{node.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==========================================================================
            5. ŞEFFAF TESLİMAT STANDARTLARI (4 SÜTUNLU IZGARA)
            ========================================================================== */}
        <section className={`container ${styles.deliverablesSection}`}>
          <div className={styles.deliverablesHeader}>
            <span className={styles.delivEyebrow}>
              {data.deliverablesHeader.eyebrow}
            </span>
            <h2 className={styles.delivMainHeading}>
              {data.deliverablesHeader.heading}
            </h2>
            <p className={styles.delivLeadText}>
              {data.deliverablesHeader.lead}
            </p>
          </div>

          <div className={styles.deliv4ColGrid}>
            {data.pillars.map((pillar, idx) => (
              <div key={idx} className={styles.delivGridItem}>
                <div className={styles.delivItemTop}>
                  <div className={styles.delivIconBadge}>
                    <DynamicLucideIcon
                      name={pillar.icon}
                      size={18}
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
            6. KANITLANMIŞ SAHA VAKASI (PROOF CASE)
            ========================================================================== */}
        {data.caseHighlight && (
          <section className={`container ${styles.caseSection}`}>
            <div className={styles.caseFrame}>
              <div className={styles.caseMeta}>
                <span className={styles.caseBadge}>
                  {data.caseHighlight.badge}
                </span>
                <span className={styles.caseClient}>
                  {data.caseHighlight.client}
                </span>
              </div>
              <div className={styles.caseMetricValue}>
                {data.caseHighlight.metric}
              </div>
              <p className={styles.caseSummaryText}>
                {data.caseHighlight.summary}
              </p>
            </div>
          </section>
        )}

        {/* ==========================================================================
            7. SSS (KUTUSUZ ÇİZGİSEL AKORDEON)
            ========================================================================== */}
        <section className={`container ${styles.faqSection}`}>
          <div className={styles.sectionHeaderRow}>
            <span className={styles.sectionLabel}>
              {isTr ? "AKLINIZA TAKILANLAR" : "FAQ"}
            </span>
            <h2 className={styles.sectionTitle}>
              {isTr ? "Sıkça Sorulan Sorular" : "Frequently Asked Questions"}
            </h2>
          </div>

          <div className={styles.faqListContainer}>
            {data.faq.map((item, idx) => (
              <details key={idx} className={styles.faqRowItem} open={idx === 0}>
                <summary className={styles.faqSummaryLine}>
                  <h3 className={styles.faqQuestionText}>{item.q}</h3>
                  <Plus size={20} className={styles.faqExpandIcon} />
                </summary>
                <div className={styles.faqAnswerBody}>
                  <p className={styles.faqAnswerParagraph}>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ==========================================================================
            8. İLGİLİ ÇÖZÜMLER (HİZMETLER SATIR DİLİ)
            ========================================================================== */}
        <section className={`container ${styles.relatedSection}`}>
          <div className={styles.sectionHeaderRow}>
            <span className={styles.sectionLabel}>
              {isTr ? "DİĞER ÇÖZÜMLER" : "COMPLEMENTARY"}
            </span>
            <h2 className={styles.sectionTitle}>
              {isTr
                ? "Bu hizmeti tamamlayan diğer dişliler."
                : "Complementary digital gears."}
            </h2>
          </div>

          <div className={styles.relatedRowsGroup}>
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/${lang}/hizmetler/${rel.slug}`}
                className={styles.relatedRowLink}
              >
                <div className={styles.relatedLeftInfo}>
                  <span className={styles.relatedCategoryTag}>
                    {rel.categoryTag}
                  </span>
                  <h3 className={styles.relatedServiceName}>{rel.title}</h3>
                </div>

                <div className={styles.relatedRightAction}>
                  <span className={styles.relatedKpiText}>{rel.kpi}</span>
                  <div className={styles.arrowCircleMini}>
                    <ArrowUpRight size={16} className={styles.arrowSvgMini} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ==========================================================================
            9. LÜKS BEYAZ KAPSÜL ALT CTA
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
                    <span className={styles.serifAccentWord}>{data.title}</span>
                    .
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
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </>
  );
}
