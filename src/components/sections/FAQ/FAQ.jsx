"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { dictionary } from "@/data/dictionary";
import styles from "./FAQ.module.css";

const faqItems = {
  tr: [
    {
      id: 1,
      q: "Diğer web tasarım ajanslarından farkınız nedir, neden özel kodlama?",
      a: "Piyasadaki çoğu ajans hazır WordPress şablonlarını kopyalayıp onlarca hantal eklentiyle sitenizi yavaşlatır. Biz sıfırdan, temiz kodla site kuruyoruz. Siteniz telefonda bekleme yapmadan anında açılır, Google testlerinde tam puan alır ve rakiplerinizin önüne geçer.",
    },
    {
      id: 2,
      q: "Google Haritalar ve yerel aramalarda ilk sıralara nasıl çıkarıyorsunuz?",
      a: "İşletmenizin fotoğraflarını, kategorilerini ve adres sinyallerini haritanıza işliyoruz. Masalarınıza yerleştireceğimiz temassız NFC yorum standlarıyla gerçek müşterilerinizden 5 yıldız toplayarak Google'da ilk sıralara yerleşmenizi sağlıyoruz.",
    },
    {
      id: 3,
      q: "Proje fiyatlandırması nasıl yapılıyor, sonradan sürpriz ek masraf çıkar mı?",
      a: "Hayır. İşin kapsamı ve teslim tarihi resmi sözleşmeyle baştan yazılı olarak belirlenir. Onaylanan teklif dışında teslimat anında veya sonrasında hiçbir gizli masrafla karşılaşmazsınız.",
    },
    {
      id: 4,
      q: "Sitenin içeriklerini, görsellerini ve ürünlerini kendimiz güncelleyebilir miyiz?",
      a: "Elbette. Kod bilmenize gerek kalmadan menülerinizi, yazılarınızı, referanslarınızı ve fiyatlarınızı saniyeler içinde güncelleyebileceğiniz son derece sade, hızlı ve güvenli bir yönetim paneli veriyoruz.",
    },
    {
      id: 5,
      q: "Tüm kaynak kodlar, alan adı ve verilerin mülkiyeti kime ait oluyor?",
      a: "Tüm kaynak kodlar, alan adı ve sistem doğrudan sizin adınıza tescil edilir. Hexa Dijital olarak sizi kendimize bağımlı kılmayız; mülkiyet %100 şirketinize aittir.",
    },
    {
      id: 6,
      q: "Mevcut sitemizi yenilerken Google sıralamalarımızı ve müşterilerimizi kaybeder miyiz?",
      a: "Asla. Eski sitenizdeki tüm sayfaları yeni altyapıya sıfır kayıpla aktarıyoruz. Trafiğiniz kesilmez, aksine siteniz hızlandığı için Google'da daha da yükselirsiniz.",
    },
    {
      id: 7,
      q: "Bir projenin tamamlanması ortalama ne kadar sürer?",
      a: "Kurumsal web siteleri ortalama 7 ila 10 iş günü içinde yayına alınır. Restoran sipariş/kasa sistemleri ise ortalama 2 hafta içinde anahtar teslim kurulup çalışır vaziyette teslim edilir.",
    },
    {
      id: 8,
      q: "Teslimattan sonra teknik destek nasıl işliyor?",
      a: "Projeyi teslim edip kenara çekilmiyoruz. 7/24 kesintisiz sunucu izleme, güvenlik sertifikaları ve otomatik veri yedekleme sürekli tarafımızdan takip edilir. Sorularınızda doğrudan telefonla bize ulaşırsınız.",
    },
    {
      id: 9,
      q: "İşletmemizin kullandığı muhasebe veya kasa programıyla entegre olabilir mi?",
      a: "Evet. Kullandığınız özel muhasebe veya sipariş yazılımlarıyla doğrudan bağlantı kurabiliyoruz. Süreçleriniz otomatik ve hatasız çalışır.",
    },
    {
      id: 10,
      q: "Siber saldırılara ve bozulmalara karşı siteler nasıl korunuyor?",
      a: "Gereksiz ve güvenlik açığı yaratan hazır eklentiler kullanmadığımız için sitelerimiz hacklenmeye ve çökmeye karşı en üst düzey kurumsal güvenlik kalkanıyla korunur.",
    },
    {
      id: 11,
      q: "Sözleşme ve faturalandırma resmi mi?",
      a: "Tüm projeler karşılıklı imzalı resmi hizmet sözleşmesi, şeffaf teslimat maddeleri ve kurumsal e-fatura ile yürütülür.",
    },
    {
      id: 12,
      q: "Web sitemiz bittiğinde Google ve Instagram reklamlarını da yönetiyor musunuz?",
      a: "Evet. Web sitenizi doğrudan müşteri getirecek şekilde kurduğumuz için reklamları da yöneterek harcadığınız her liranın telefon araması ve sipariş olarak dönmesini sağlıyoruz.",
    },
  ],
  en: [
    {
      id: 1,
      q: "What differentiates you from other web design agencies?",
      a: "Most agencies resell slow WordPress templates packed with bloated plugins. We build fast, custom web systems from scratch, hitting 100/100 performance scores and securing competitive edges.",
    },
    {
      id: 2,
      q: "How do you achieve top rankings on Google Maps and regional search?",
      a: "We engineer precise business signals, geotagged imagery, and contactless NFC review cards that gather verified 5-star customer endorsements.",
    },
    {
      id: 3,
      q: "What is your pricing policy, are there hidden unexpected fees?",
      a: "None. All deliverables, timelines, and budgets are codified in transparent, legally binding contracts. The approved scope is the final invoice.",
    },
    {
      id: 4,
      q: "Can our team update content, media, and services independently?",
      a: "Yes. We integrate lightweight, intuitive management dashboards allowing your non-technical personnel to update content, pricing, and case studies instantly.",
    },
    {
      id: 5,
      q: "Who retains ownership of the source code, domain, and data?",
      a: "You retain 100% intellectual property, domain registration, and database ownership. We create no proprietary lock-ins.",
    },
    {
      id: 6,
      q: "Can we migrate our existing site without losing SEO rankings?",
      a: "Yes. We execute meticulous redirection maps to ensure zero traffic drop during migration.",
    },
    {
      id: 7,
      q: "What is the typical completion timeframe for a project?",
      a: "Corporate web platforms are deployed within 7 to 10 business days. Custom ordering systems are typically delivered within two weeks.",
    },
    {
      id: 8,
      q: "How does maintenance and technical support function post-launch?",
      a: "We maintain 24/7 server telemetry, SSL automation, and database backups continuously with direct phone support.",
    },
    {
      id: 9,
      q: "Can you integrate with our in-house accounting or POS software?",
      a: "Yes. We build native connectors to interface smoothly with your existing inventory and accounting platforms.",
    },
    {
      id: 10,
      q: "How is security and stability handled?",
      a: "Because we avoid fragile third-party plugins, our clean architectures remain impervious to common hacks and crashes.",
    },
    {
      id: 11,
      q: "Are engagements backed by formal contracts and invoices?",
      a: "Every engagement is protected by legal service agreements, clear milestones, and corporate e-invoicing.",
    },
    {
      id: 12,
      q: "Do you handle paid acquisition campaigns on Google and Meta?",
      a: "Yes. We manage your Google Ads and Meta budgets to ensure direct inquiries and sales.",
    },
  ],
};

export default function FAQ({ lang = "tr" }) {
  const [openId, setOpenId] = useState(1);
  const [isOnline, setIsOnline] = useState(true);
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const cardsWrapRef = useRef(null);
  const dict = dictionary[lang]?.faq || dictionary.tr.faq;
  const currentFaq = faqItems[lang] || faqItems.tr;

  useEffect(() => {
    const checkOfficeHours = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const turkeyTime = new Date(utc + 3600000 * 3);
      const hour = turkeyTime.getHours();

      const isWorkingTime = hour >= 9 && hour < 18;
      setIsOnline(isWorkingTime);
    };

    checkOfficeHours();
    const interval = setInterval(checkOfficeHours, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const stickyCard = stickyRef.current;
    const cards = cardsWrapRef.current?.querySelectorAll(
      `.${styles.capsuleCard}`,
    );
    if (!stickyCard || !cards || cards.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.fromTo(
        stickyCard,
        { opacity: 0, x: -30, scale: 0.98 },
        { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power3.out" },
      );

      tl.fromTo(
        cards,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.04,
          ease: "power3.out",
        },
        "-=0.5",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const leftColumnItems = currentFaq.slice(0, 6);
  const rightColumnItems = currentFaq.slice(6, 12);

  const renderCard = (item) => {
    const isOpen = openId === item.id;
    return (
      <div
        key={item.id}
        className={`${styles.capsuleCard} ${isOpen ? styles.cardExpanded : ""}`}
        onClick={() => toggleItem(item.id)}
      >
        <div className={styles.capsuleTop}>
          <h3 className={styles.questionText}>{item.q}</h3>
          <div className={styles.iconBox}>
            <span className={styles.iconH} />
            <span
              className={`${styles.iconV} ${isOpen ? styles.vRotated : ""}`}
            />
          </div>
        </div>

        <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}>
          <div className={styles.drawerInner}>
            <p className={styles.answerText}>{item.a}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="sss"
      aria-label="Sıkça Sorulan Sorular"
    >
      <div className={`container ${styles.container}`}>
        {/* SOL STICKY BÖLÜM */}
        <div className={styles.stickyColumn}>
          <div ref={stickyRef} className={styles.contactCard}>
            <h2 className={styles.cardHeading}>{dict.leftHeading}</h2>
            <p className={styles.cardText}>{dict.leftText}</p>

            <div className={styles.metricGrid}>
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>{dict.metricSpeed}</span>
                <span className={styles.metricSub}>
                  {dict.metricSpeedLabel}
                </span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>{dict.metricGuarantee}</span>
                <span className={styles.metricSub}>
                  {dict.metricGuaranteeLabel}
                </span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              {/* HOVER'DA 45 DERECE DÖNEN WHATSAPP BUTONU */}
              <a
                href={`https://wa.me/905519769406?text=${encodeURIComponent(
                  dictionary[lang]?.whatsapp?.message ||
                    dictionary.tr.whatsapp.message,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryWhatsappBtn}
              >
                <span className={styles.btnText}>{dict.waBtn}</span>
                <div className={styles.btnCircle}>
                  <svg
                    className={styles.ctaArrowSvg}
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
                href={`/${lang}/iletisim`}
                className={styles.secondaryFormLink}
              >
                <span>{dict.formLink}</span>
                <span className={styles.arrowSmall}>→</span>
              </Link>

              <div className={styles.liveStatusRow}>
                <span
                  className={`${styles.statusPulseDot} ${
                    isOnline ? styles.dotOnline : styles.dotOffline
                  }`}
                />
                <span className={styles.statusText}>
                  {isOnline
                    ? "Canlı Destek Hattı (09:00 - 18:00)"
                    : "Online Destek 7/24 Aktif"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SAĞ TARAF: 2 SÜTUNLU 12 ADET KAPSÜL KART */}
        <div ref={cardsWrapRef} className={styles.rightColumnsWrap}>
          <div className={styles.faqSubColumn}>
            {leftColumnItems.map(renderCard)}
          </div>
          <div className={styles.faqSubColumn}>
            {rightColumnItems.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
