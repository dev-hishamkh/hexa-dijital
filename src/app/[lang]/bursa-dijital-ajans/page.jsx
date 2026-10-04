import Link from "next/link";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp/FloatingWhatsApp";
import { servicesData } from "@/data/servicesData";
import styles from "./BursaAgency.module.css";

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const isTr = lang === "tr";

  const title = isTr
    ? "Bursa Dijital Ajans & Özel Yazılım Şirketi | Hexa Dijital"
    : "Bursa Digital Agency & Custom Software Studio | Hexa Digital";

  const description = isTr
    ? "Bursa sanayisi ve ticari işletmeleri için 0.8s açılan web yazılımları, sıfır komisyonlu sipariş sistemleri, Google Haritalar ilk 3 SEO ve büyüme reklamları."
    : "Sub-second web software, commission-free ordering platforms, and local SEO dominance engineered across Bursa, Turkey.";

  return {
    title,
    description,
    keywords: [
      "Bursa dijital ajans",
      "Bursa web tasarım şirketi",
      "Bursa özel yazılım",
      "Bursa SEO ajansı",
      "Bursa reklam ajansı",
      "Nilüfer dijital ajans",
      "Osmangazi web ajansı",
      "Bursa kurumsal yazılım",
    ],
    openGraph: {
      title,
      description,
      url: `https://hexadijital.com/${lang}/bursa-dijital-ajans`,
      siteName: "Hexa Dijital",
      locale: isTr ? "tr_TR" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://hexadijital.com/${lang}/bursa-dijital-ajans`,
      languages: {
        tr: "https://hexadijital.com/tr/bursa-dijital-ajans",
        en: "https://hexadijital.com/en/bursa-dijital-ajans",
      },
    },
  };
}

export default async function BursaDigitalAgencyPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const isTr = lang === "tr";
  const groups = servicesData[lang] || servicesData.tr;

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
            name: isTr ? "Bursa Dijital Ajans" : "Bursa Digital Agency",
            item: `https://hexadijital.com/${lang}/bursa-dijital-ajans`,
          },
        ],
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://hexadijital.com/#organization",
        name: "HEXA Dijital",
        legalName: "Hexa Dijital Web Tasarım ve Yazılım Şirketi",
        url: `https://hexadijital.com/${lang}/bursa-dijital-ajans`,
        telephone: "+905519769406",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Nilüfer / Bursa",
          addressLocality: "Bursa",
          addressRegion: "Marmara",
          postalCode: "16110",
          addressCountry: "TR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 40.215,
          longitude: 28.932,
        },
        areaServed: [
          { "@type": "City", name: "Bursa" },
          { "@type": "City", name: "Nilüfer" },
          { "@type": "City", name: "Osmangazi" },
          { "@type": "City", name: "Yıldırım" },
          { "@type": "City", name: "İnegöl" },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang={lang} />
      <main className={styles.mainContainer}>
        {/* ==========================================================================
            1. BÖLGESEL HERO & MANİFESTO
            ========================================================================== */}
        <section className={`container ${styles.heroSection}`}>
          <span className={styles.eyebrowBadge}>
            {isTr
              ? "BURSA OPERASYON MERKEZİ // 5 DEPARTMAN · 24 ÇÖZÜM"
              : "BURSA OPERATIONS HUB // 5 DEPARTMENTS · 24 SOLUTIONS"}
          </span>

          <h1 className={styles.heroTitle}>
            {isTr ? (
              <>
                Bursa'nın üretim gücünü,{" "}
                <span className={styles.serifAccentWord}>hafif yazılımlar</span>{" "}
                ve ciro getiren sistemlerle büyütüyoruz.
              </>
            ) : (
              <>
                Scaling Bursa’s commercial footprint with{" "}
                <span className={styles.serifAccentWord}>
                  sub-second software
                </span>{" "}
                and high-impact media.
              </>
            )}
          </h1>

          <p className={styles.heroDesc}>
            {isTr
              ? "Kopyala-yapıştır şablon sitelerin yavaşlığından, yemek platformlarına her ay ödenen %30 komisyonlardan ve reklam bütçesini boşa yakan amatör ajanslardan bıkan işletmeler için buradayız. Bursa sanayisinden mahalle esnafına kadar tüm çarkları tek elden yönetiyoruz."
              : "Bespoke digital systems engineered for industrial leaders and commercial merchants across Bursa. Eliminating template lag, aggregator commissions, and wasteful marketing spend."}
          </p>

          <div className={styles.heroActionRow}>
            <a
              href="https://wa.me/905519769406?text=Merhaba%20Hexa%20Dijital,%20Bursa'daki%20i%C5%9Fletmemiz%20i%C3%A7in%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyoruz."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryLaunchBtn}
            >
              <span>
                {isTr
                  ? "Bursa Proje Masasıyla Başlatın"
                  : "Initiate Consultation"}
              </span>
              <span>↗</span>
            </a>
            <div className={styles.liveDeskPill}>
              <span className={styles.pulseDot} />
              <span>
                {isTr
                  ? "Nilüfer Ofis · 09:00 - 18:00 Canlı"
                  : "Nilufer Desk · Online"}
              </span>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            2. BURSA SAHASI: 5 DEPARTMANIN YEREL KARŞILIĞI
            ========================================================================== */}
        <section className={`container ${styles.deptOverviewSection}`}>
          <div className={styles.sectionHeadingWrap}>
            <span className={styles.sectionMiniTag}>
              {isTr ? "KAPSAMLI HİZMET MİMARİSİ" : "FULL CAPABILITIES"}
            </span>
            <h2 className={styles.sectionMainHeading}>
              {isTr
                ? "Sadece web sitesi değil; işletmenizi uçuran 5 ayrı çark."
                : "Not just websites. 5 synchronized engines driving your business."}
            </h2>
          </div>

          <div className={styles.deptGrid}>
            {groups.map((dept) => (
              <div key={dept.categoryNumber} className={styles.deptCard}>
                <div className={styles.deptCardTop}>
                  <span className={styles.deptNumber}>
                    {dept.categoryNumber}
                  </span>
                  <span className={styles.deptCodeTag}>
                    {dept.categoryCode}
                  </span>
                </div>

                <h3 className={styles.deptTitle}>{dept.categoryTitle}</h3>
                <p className={styles.deptDiagnosis}>{dept.categoryDiagnosis}</p>

                <div className={styles.deptOutcomeHighlight}>
                  <span className={styles.outcomeLabel}>
                    {isTr ? "KAZANIM:" : "OUTCOME:"}
                  </span>
                  <p className={styles.outcomeText}>{dept.categoryOutcome}</p>
                </div>

                <div className={styles.deptMicroServicesList}>
                  {dept.services.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${lang}/hizmetler/${item.slug}`}
                      className={styles.microServiceLink}
                    >
                      <span>{item.name}</span>
                      <span className={styles.linkArrow}>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================================================
            3. SAHA KANITI: BURSA'DA ÇALIŞTIĞIMIZ PROJELER
            ========================================================================== */}
        <section className={`container ${styles.proofSection}`}>
          <div className={styles.sectionHeadingWrap}>
            <span className={styles.sectionMiniTag}>
              {isTr ? "SAHADA KANITLANMIŞ VERİ" : "PROVEN IN BURSA"}
            </span>
            <h2 className={styles.sectionMainHeading}>
              {isTr
                ? "Bursa'da ciro rekoru kıran referans sistemlerimiz."
                : "Verified commercial systems operating live in Bursa."}
            </h2>
          </div>

          <div className={styles.proofGrid}>
            <div className={styles.proofCard}>
              <span className={styles.proofBadge}>İNŞAAT & MİMARİ</span>
              <h3 className={styles.proofClient}>Tataroğlu İnşaat</h3>
              <p className={styles.proofImpact}>
                0.6s Açılış · 3 Kat Fazla Teklif Talebi
              </p>
              <p className={styles.proofText}>
                Eski hantal site Next.js ile sıfırdan kodlandı; açılış süresi 4
                saniyeden 0.6 saniyeye çekilerek yerel aramalarda 1. sıraya
                yerleşti.
              </p>
            </div>

            <div className={styles.proofCard}>
              <span className={styles.proofBadge}>RESTORAN & PAKET SERVİS</span>
              <h3 className={styles.proofClient}>Munchico Fried Chicken</h3>
              <p className={styles.proofImpact}>
                %0 Komisyon · Ayda 140.000₺ Tasarruf
              </p>
              <p className={styles.proofText}>
                Müşteriler doğrudan dükkanın kendi paket servis sitesine
                çekildi; platformlara ödenen %30 komisyonlar sıfırlanıp doğrudan
                kâra çevrildi.
              </p>
            </div>

            <div className={styles.proofCard}>
              <span className={styles.proofBadge}>YEREL SEO & ÇAĞRI</span>
              <h3 className={styles.proofClient}>Hira Halı & Koltuk Yıkama</h3>
              <p className={styles.proofImpact}>
                Günde 35+ Doğrudan Müşteri Çağrısı
              </p>
              <p className={styles.proofText}>
                Reklam odaklı tek sayfa altyapıya geçildi; reklam bütçesi
                artırılmadan dükkana gelen günlük doğrudan telefon araması 4
                katına çıktı.
              </p>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            4. ŞEFFAF PROTOKOL VE TAAHHÜTLERİMİZ
            ========================================================================== */}
        <section className={`container ${styles.commitmentsSection}`}>
          <div className={styles.commitBox}>
            <h3 className={styles.commitHeading}>
              {isTr
                ? "Bursa'daki hiçbir müşterimizi yarı yolda bırakmıyoruz."
                : "Contractually codified performance standards."}
            </h3>

            <div className={styles.commitGrid}>
              <div className={styles.commitItem}>
                <h4>Resmi Sözleşme & E-Fatura</h4>
                <p>
                  Ucu açık teslimat tarihleri yok. İşin kapsamı, takvimi ve
                  bedeli sözleşmeyle tescillenir.
                </p>
              </div>
              <div className={styles.commitItem}>
                <h4>%100 Kod ve Veri Mülkiyeti</h4>
                <p>
                  Alan adınız, kaynak kodlarınız ve müşteri veri tabanınız
                  doğrudan firmanıza aittir.
                </p>
              </div>
              <div className={styles.commitItem}>
                <h4>0.8s Hız ve Sıfır Eklenti</h4>
                <p>
                  Yıllık tema yenileme masrafı yok. Siteniz hafif, hızlı ve
                  siber korumalı çalışır.
                </p>
              </div>
              <div className={styles.commitItem}>
                <h4>Canlı Bursa Proje Masası</h4>
                <p>
                  Haftanın 7 günü 09:00 - 18:00 doğrudan teknik ekiple
                  görüşebileceğiniz canlı destek.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </>
  );
}
