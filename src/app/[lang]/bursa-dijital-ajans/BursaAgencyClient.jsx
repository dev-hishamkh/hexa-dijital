"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./BursaAgency.module.css";

export default function BursaAgencyClient({ groups, isTr, lang }) {
  const [activeDeptIdx, setActiveDeptIdx] = useState(0);
  const activeDept = groups[activeDeptIdx] || groups[0];
  const rootRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero Giriş Animasyonu
      gsap.fromTo(
        `.${styles.heroSection} > *`,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
        },
      );

      // 2. Bento Kartlar
      gsap.fromTo(
        `.${styles.bentoCard}`,
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.storyBentoSection}`,
            start: "top 80%",
            once: true,
          },
        },
      );

      // 3. Departman Kokpiti
      gsap.fromTo(
        `.${styles.deptCockpitFrame}`,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.deptOverviewSection}`,
            start: "top 80%",
            once: true,
          },
        },
      );

      // 4. Saha Kanıtı
      gsap.fromTo(
        `.${styles.proofCard}`,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.proofSection}`,
            start: "top 82%",
            once: true,
          },
        },
      );

      // 5. Taahhütler
      gsap.fromTo(
        `.${styles.commitBox}`,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.commitmentsSection}`,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef}>
      {/* 1. HERO BÖLÜMÜ */}
      <section className={`container ${styles.heroSection}`}>
        <span className={styles.eyebrowBadge}>
          {isTr
            ? "Bursa Geneli Yerinde Ziyaret · Birebir Destek"
            : "On-Site Business Visits Across Bursa · Direct Partnership"}
        </span>

        <h1 className={styles.heroTitle}>
          <span className={styles.heroLineSans}>
            {isTr
              ? "İşletmenizi yerinde ziyaret ediyor,"
              : "We visit your business on-site,"}
          </span>
          <span className={styles.heroLineSerif}>
            {isTr
              ? "dijital büyümenizi masanızda planlıyoruz."
              : "engineering custom growth directly at your table."}
          </span>
        </h1>

        <p className={styles.heroDesc}>
          {isTr
            ? "Telefonlara çıkmayan, sizi ofislerine çağıran ya da hazır şablonları satıp kaybolan ajanslardan sıkıldıysanız doğru yerdesiniz. Doğrudan dükkanınızı ziyaret ediyor; web sitenizi, sipariş sisteminizi ve reklamlarınızı masanızda yüz yüze konuşarak kuruyoruz."
            : "Tired of agencies forcing you to their office or selling slow templates? We visit your business directly, planning your software, ordering pipelines, and customer acquisition campaigns face-to-face."}
        </p>

        <div className={styles.heroActionRow}>
          <a
            href="https://wa.me/905519769406?text=Merhaba%20Hexa%20Dijital,%20Bursa'daki%20i%C5%9Fletmemizi%20ziyaret%20etmeniz%20ve%20y%C3%BCz%20y%C3%BCze%20g%C3%B6r%C3%BC%C5%9Fmek%20i%C3%A7in%20yaz%C4%B1yorum."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroExecutiveBtn}
          >
            <span className={styles.btnText}>
              {isTr ? "Yerinde Görüşme Talep Edin" : "Request On-Site Meeting"}
            </span>
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

          <div className={styles.liveDeskPill}>
            <span className={styles.pulseDot} />
            <span>
              {isTr
                ? "Bursa Geneli Yerinde Keşif · 09:00 - 18:00 Canlı"
                : "On-Site Consultation · 09:00 - 18:00 Active"}
            </span>
          </div>
        </div>
      </section>

      {/* 2. BENTO GRID (ÇİFT DİLLİ ROZETLER) */}
      <section className={`container ${styles.storyBentoSection}`}>
        <div className={styles.sectionHeadingWrap}>
          <h2 className={styles.sectionMainHeading}>
            <span>{isTr ? "Biz kimiz ve " : "Who we are and "}</span>
            <span className={styles.serifAccentWord}>
              {isTr ? "neden bu yola çıktık?" : "why we started."}
            </span>
          </h2>
          <p className={styles.sectionLeadText}>
            {isTr
              ? "Süslü laflar veya karmaşık teknik terimler yok. İşletmenizin yanında duran dürüst çalışma anlayışımız:"
              : "No agency jargon. Honest partnership focused entirely on your business results."}
          </p>
        </div>

        <div className={styles.bentoGridWrapper}>
          <div className={styles.bentoCard}>
            <div className={styles.bentoCardHeader}>
              <span className={styles.bentoIndexPill}>
                {isTr ? "01 · Çıkış Noktamız" : "01 · Our Origin"}
              </span>
            </div>
            <h3 className={styles.bentoCardTitle}>
              {isTr
                ? "Aylarca bekletip telefonlara çıkmayan ajans kalıplarını kırmak için yola çıktık."
                : "Started to break the broken agency pattern of missing deadlines and calls."}
            </h3>
            <p className={styles.bentoCardParagraph}>
              {isTr
                ? "İnternette işini büyütmek isteyen birçok işletmenin; hazır kalıpları kopyalayıp satan, iş bittikten sonra telefonları açmayan ve sürekli ek masraf çıkaran kişiler yüzünden mağdur olduğunu gördük. Bu ezberi bozmak; her işletmenin derdini masasında yüz yüze dinleyip doğrudan kasanızı büyütecek gerçek sistemler kurmak için bu stüdyoyu kurduk."
                : "We saw businesses frustrated by agencies selling slow templates, missing calls, and demanding unexpected fees. We built Hexa to change this: meeting you in-person, building bespoke systems, and directly growing your bottom line."}
            </p>
          </div>

          <div className={styles.bentoCard}>
            <div className={styles.bentoCardHeader}>
              <span className={styles.bentoIndexPill}>
                {isTr ? "02 · İletişim Tarzımız" : "02 · Direct Presence"}
              </span>
            </div>
            <h3 className={styles.bentoCardTitle}>
              {isTr
                ? "Masanızda Yüz Yüze Görüşme"
                : "Face-to-Face At Your Table"}
            </h3>
            <p className={styles.bentoCardParagraph}>
              {isTr
                ? "Sizi çağırmıyoruz, dükkanınıza biz geliyoruz. Menünüzü, ürünlerinizi ve müşterilerinizi yerinde görerek en doğru çözümü çayınızı içerken birlikte planlıyoruz."
                : "We don't summon you to our office. We visit your venue across Bursa, inspecting operations on-site to engineer the exact solution you need."}
            </p>
          </div>

          <div className={styles.bentoCard}>
            <div className={styles.bentoCardHeader}>
              <span className={styles.bentoIndexPill}>
                {isTr ? "03 · Kalite Anlayışımız" : "03 · Performance SLA"}
              </span>
            </div>
            <h3 className={styles.bentoCardTitle}>
              {isTr
                ? "Hatasız & Anında Açılan Sistemler"
                : "Instant Loading Guarantee"}
            </h3>
            <p className={styles.bentoCardParagraph}>
              {isTr
                ? "Sürekli bozulan veya telefonda açılmayan sitelerle müşteri kaybetmeyin. Yaptığımız her sistem müşterinizin telefonunda saniyesinde açılır ve sorunsuz çalışır."
                : "Never lose a customer to slow loading. We build ultra-fast, robust platforms that load instantly on all mobile phones."}
            </p>
          </div>

          <div className={styles.bentoCard}>
            <div className={styles.bentoCardHeader}>
              <span className={styles.bentoIndexPill}>
                {isTr ? "04 · Tek Başarı Ölçümüz" : "04 · Core KPI"}
              </span>
            </div>
            <h3 className={styles.bentoCardTitle}>
              {isTr
                ? "Doğrudan Kasanıza Giren Ciro"
                : "Your Bottom-Line Turnover"}
            </h3>
            <p className={styles.bentoCardParagraph}>
              {isTr
                ? "Bizim için başarı sadece güzel bir ekran çizmek değil; telefonunuzun ne kadar çaldığı, yemek sitelerine ödediğiniz komisyonların ne kadarının cebinizde kaldığıdır."
                : "Success is not just attractive design. It is how many phone calls ring your register and how much commission you retain each month."}
            </p>
          </div>
        </div>
      </section>

      {/* 3. DEPARTMAN KOKPİTİ */}
      <section className={`container ${styles.deptOverviewSection}`}>
        <div className={styles.sectionHeadingWrap}>
          <h2 className={styles.sectionMainHeading}>
            <span>
              {isTr ? "Sadece web sitesi değil; " : "Not just websites; "}
            </span>
            <span className={styles.serifAccentWord}>
              {isTr
                ? "işletmenizi büyüten 5 temel çark."
                : "5 synchronized growth engines."}
            </span>
          </h2>
          <p className={styles.sectionLeadText}>
            {isTr
              ? "Tüm dijital ihtiyaçlarınızı farklı kişilere dağıtmadan, tek bir çatı altında ve doğrudan teknik ekiple çözün."
              : "Consolidate all digital requirements under one unified roof with direct technical accountability."}
          </p>
        </div>

        <div className={styles.deptCockpitFrame}>
          <div className={styles.cockpitNavCol}>
            {groups.map((dept, idx) => {
              const isSelected = activeDeptIdx === idx;
              return (
                <button
                  key={dept.categoryNumber}
                  onClick={() => setActiveDeptIdx(idx)}
                  className={`${styles.cockpitNavBtn} ${
                    isSelected ? styles.cockpitNavBtnActive : ""
                  }`}
                >
                  <span className={styles.navBtnNumber}>
                    {dept.categoryNumber}
                  </span>
                  <div className={styles.navBtnTextStack}>
                    <span className={styles.navBtnTitle}>
                      {dept.categoryTitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className={styles.cockpitStageCol}>
            <div className={styles.stageTopHeader}>
              <div className={styles.stageTitleWrap}>
                <span className={styles.stageGiantNumber}>
                  {activeDept.categoryNumber}
                </span>
                <div>
                  <h3 className={styles.stageDeptHeading}>
                    {activeDept.categoryTitle}
                  </h3>
                  <p className={styles.stageDiagnosis}>
                    {activeDept.categoryDiagnosis}
                  </p>
                </div>
              </div>

              <div className={styles.stageOutcomeCard}>
                <span className={styles.outcomeTagLabel}>
                  {isTr ? "SAĞLANAN KAZANÇ" : "COMMERCIAL OUTCOME"}
                </span>
                <p className={styles.outcomeLeadText}>
                  {activeDept.categoryOutcome}
                </p>
              </div>
            </div>

            <div className={styles.stageServicesArea}>
              <span className={styles.servicesAreaLabel}>
                {isTr
                  ? "Departman Çözümleri & Hizmetler:"
                  : "Department Solutions:"}
              </span>
              <div className={styles.stageButtonsFlex}>
                {activeDept.services.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${lang}/hizmetler/${item.slug}`}
                    className={styles.cockpitServiceBtn}
                  >
                    <span className={styles.serviceBtnLabel}>{item.name}</span>
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
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SAHA KANITI (ÇİFT DİLLİ METRİKLER) */}
      <section className={`container ${styles.proofSection}`}>
        <div className={styles.sectionHeadingWrap}>
          <h2 className={styles.sectionMainHeading}>
            <span>
              {isTr ? "Bursa'da birlikte " : "Verified commercial systems "}
            </span>
            <span className={styles.serifAccentWord}>
              {isTr ? "büyüdüğümüz işletmeler." : "operating live in Bursa."}
            </span>
          </h2>
          <p className={styles.sectionLeadText}>
            {isTr
              ? "Laf kalabalığı değil; dükkanların ve firmaların kazandığı gerçek sonuçlar:"
              : "Real, verifiable business outcomes delivered for local companies:"}
          </p>
        </div>

        <div className={styles.proofGrid}>
          <div className={styles.proofCard}>
            <div className={styles.proofCardHeader}>
              <span className={styles.proofSectorTag}>
                {isTr ? "İnşaat & Mimari" : "Construction & Architecture"}
              </span>
              <span className={styles.proofMetricBadge}>
                {isTr ? "Hızlı Açılış" : "Instant Loading"}
              </span>
            </div>
            <h3 className={styles.proofClientName}>Tataroğlu İnşaat</h3>
            <div className={styles.proofResultBlock}>
              <span className={styles.resultLabel}>
                {isTr ? "Sağlanan Çıktı:" : "Delivered Output:"}
              </span>
              <p className={styles.resultHighlight}>
                {isTr
                  ? "Anında Açılan Vitrin · Teklif Taleplerinde Net Artış"
                  : "Instant Showcase · 3x Inbound Quote Lift"}
              </p>
            </div>
            <p className={styles.proofSummary}>
              {isTr
                ? "Eski hantal site yenilendi; müşterilerin telefondan saniyede açtığı şık bir şirket vitrini kurularak kurumsal teklif talepleri artırıldı."
                : "Replaced slow legacy architecture with an instant-load web showcase, boosting corporate inbound bidding inquiries."}
            </p>
          </div>

          <div className={styles.proofCard}>
            <div className={styles.proofCardHeader}>
              <span className={styles.proofSectorTag}>
                {isTr ? "Restoran & Paket Servis" : "Restaurant & Delivery"}
              </span>
              <span className={styles.proofMetricBadge}>
                {isTr ? "%0 Komisyon" : "0% Commission"}
              </span>
            </div>
            <h3 className={styles.proofClientName}>Munchico Fried Chicken</h3>
            <div className={styles.proofResultBlock}>
              <span className={styles.resultLabel}>
                {isTr ? "Sağlanan Çıktı:" : "Delivered Output:"}
              </span>
              <p className={styles.resultHighlight}>
                {isTr
                  ? "Kendi Paket Servis Hattı · %0 Komisyonlu Siparişler"
                  : "Direct Delivery Pipeline · 0% Commission Orders"}
              </p>
            </div>
            <p className={styles.proofSummary}>
              {isTr
                ? "Paket müşterileri doğrudan dükkanın kendi online sipariş sistemine yönlendirildi; aracı yemek sitelerine komisyon kaptırmadan doğrudan dükkandan sipariş alınmaya başlandı."
                : "Customer order volume funneled directly into the venue's own system, bypassing aggregator commission overhead completely."}
            </p>
          </div>

          <div className={styles.proofCard}>
            <div className={styles.proofCardHeader}>
              <span className={styles.proofSectorTag}>
                {isTr ? "Yerel Arama & Doğrudan Çağrı" : "Local Search & Calls"}
              </span>
              <span className={styles.proofMetricBadge}>
                {isTr ? "Günde 35+ Telefon" : "35+ Daily Calls"}
              </span>
            </div>
            <h3 className={styles.proofClientName}>
              Hira Halı & Koltuk Yıkama
            </h3>
            <div className={styles.proofResultBlock}>
              <span className={styles.resultLabel}>
                {isTr ? "Sağlanan Çıktı:" : "Delivered Output:"}
              </span>
              <p className={styles.resultHighlight}>
                {isTr
                  ? "Aynı Bütçeyle 4 Kat Daha Fazla Müşteri Çağrısı"
                  : "4x Inbound Customer Calls on Same Budget"}
              </p>
            </div>
            <p className={styles.proofSummary}>
              {isTr
                ? "Doğrudan telefon araması odaklı tek sayfa yapıya geçildi; reklam bütçesi artırılmadan dükkana gelen günlük gerçek müşteri araması 4 katına çıktı."
                : "Deployed high-velocity single-page architecture, quadrupling incoming verified phone inquiries without budget increases."}
            </p>
          </div>
        </div>
      </section>

      {/* 5. TAAHHÜTLER */}
      <section className={`container ${styles.commitmentsSection}`}>
        <div className={styles.commitBox}>
          <div className={styles.commitHeader}>
            <h3 className={styles.commitHeading}>
              <span>
                {isTr
                  ? "Birlikte çalıştığımız hiçbir işletmeyi "
                  : "We never leave any client with "}
              </span>
              <span className={styles.serifAccentWord}>
                {isTr
                  ? "belirsizliklerle baş başa bırakmıyoruz."
                  : "unanswered questions."}
              </span>
            </h3>
            <p className={styles.commitSubText}>
              {isTr
                ? "Sürpriz maliyetler veya ucu açık teslimat tarihleri yok. İşin kapsamını ve takvimini baştan yazılı olarak belirleriz."
                : "All deliverables and timelines codified into legally binding contracts and transparent agreements."}
            </p>
          </div>

          <div className={styles.commitGrid}>
            <div className={styles.commitItem}>
              <span className={styles.commitNumber}>01</span>
              <h4>
                {isTr ? "Net Kapsam & Sabit Fiyat" : "Fixed Scope & Pricing"}
              </h4>
              <p>
                {isTr
                  ? "Başta ne konuştuysak o geçerlidir. İşin ortasında veya teslimat anında ek masraflar çıkarılmaz; bütçeniz ve teslim gününüz baştan bellidir."
                  : "Fixed scope and transparent pricing. No unexpected charges during development or delivery; your budget and timeline are locked from day one."}
              </p>
            </div>

            <div className={styles.commitItem}>
              <span className={styles.commitNumber}>02</span>
              <h4>
                {isTr
                  ? "%100 Kontrol & Mülkiyet Sizde"
                  : "100% Control & Ownership"}
              </h4>
              <p>
                {isTr
                  ? "Alan adınız, web siteniz ve tüm verileriniz doğrudan şirketinize tescil edilir. Bize veya başka bir ajansa bağımlı kalmazsınız."
                  : "Your domain, source code, and customer data belong entirely to your enterprise. Zero vendor lock-ins."}
              </p>
            </div>

            <div className={styles.commitItem}>
              <span className={styles.commitNumber}>03</span>
              <h4>
                {isTr
                  ? "Kesintisiz İletişim & Hızlı Destek"
                  : "Direct & Fast Communication"}
              </h4>
              <p>
                {isTr
                  ? "Telefonu açmayan veya günlerce cevap vermeyen ekipler yok. Sorularınızda doğrudan teknik ekiple görüşürsünüz."
                  : "No vanished account managers. You speak directly to lead engineers whenever you require support."}
              </p>
            </div>

            <div className={styles.commitItem}>
              <span className={styles.commitNumber}>04</span>
              <h4>
                {isTr ? "Bursa İçi Yerinde Ziyaret" : "On-Site Consultations"}
              </h4>
              <p>
                {isTr
                  ? "Haftanın her günü 09:00 - 18:00 arası işletmenizi doğrudan yerinde ziyaret ediyor, süreçleri masanızda yüz yüze konuşuyoruz."
                  : "We visit your venue directly across Bursa, planning digital pipelines face-to-face at your table."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
