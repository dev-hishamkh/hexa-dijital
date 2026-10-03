"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./FAQ.module.css";

// Sol Kolon Soruları
const leftFaqItems = [
  {
    id: 1,
    q: "Neden hazır WordPress veya şablon site kullanmıyorsunuz?",
    a: "Hazır şablonlar ve eklenti çöplüğü sitenizi ağırlaştırır, Google hız testlerinde sınıfta kalır ve saniyeler içinde müşteri kaybettirir. Biz her işletmeye özel, Next.js ile tescilli kod yazıyoruz; siteniz 0.8 saniyenin altında açılıyor ve güvenlik açığı barındırmıyor.",
  },
  {
    id: 2,
    q: "Google Haritalar ve Yerel SEO garantisi veriyor musunuz?",
    a: "Google algoritmalarının istediği teknik şartnameyi (%100 temiz kod, schema.org semantik verisi, sayfa hızı ve yerel sinyaller) eksiksiz uyguluyoruz. Bursa ve Nilüfer hedefli aramalarda rakiplerinizi geçecek harita optimizasyonunu bizzat yönetiyoruz.",
  },
  {
    id: 3,
    q: "Fiyatlandırma mantığınız nedir, sürpriz maliyet çıkar mı?",
    a: "Sürpriz maliyet toleransımız sıfırdır. İhtiyaç analizi sonrası işin başında tüm şartnameyi ve bütçeyi yazılı olarak kilitleriz; proje ortasında ekstra fatura veya gizli masraflarla karşılaşmazsınız.",
  },
  {
    id: 4,
    q: "Paket servis ve QR menüde komisyon ödüyor muyuz?",
    a: "Hayır. Kurduğumuz tüm sipariş ve restoran altyapıları tamamen sizin mülkünüzdür. Üçüncü parti yemek platformları gibi cironuzdan %30-40 komisyon kesilmez, ödemeler doğrudan kasanıza girer.",
  },
];

// Sağ Kolon Soruları
const rightFaqItems = [
  {
    id: 5,
    q: "Proje geliştirme süreci ortalama ne kadar sürer?",
    a: "Kapsama göre değişmekle birlikte; kurumsal web platformları ortalama 2 ila 3 hafta içinde yayına alınır. Restoran adisyon ve B2B sipariş otomasyonları ise 3 ila 5 haftalık net sprintlerle teslim edilir.",
  },
  {
    id: 6,
    q: "Site tesliminden sonra teknik destek nasıl işliyor?",
    a: "Teslim edip ortadan kaybolmuyoruz. Barındırma (Edge Cloud hosting), SSL, yedekleme ve güvenlik güncellemelerini tek elden biz takip ediyoruz. İhtiyaç duyduğunuz her an doğrudan geliştirici ekibimize ulaşıyorsunuz.",
  },
  {
    id: 7,
    q: "Mevcut sitemizi silmeden yenileme yapabilir miyiz?",
    a: "Evet. Mevcut verilerinizi, trafiğinizi ve alan adı otoritenizi sıfır kayıpla yeni yüksek hızlı altyapımıza taşıyor, eşzamanlı olarak Google Haritalar profilinizi optimize ediyoruz.",
  },
  {
    id: 8,
    q: "Sözleşme ve faturalandırma süreçleri nasıl ilerliyor?",
    a: "Tüm projelerimiz resmi sözleşme, net teslimat maddeleri ve kurumsal e-fatura garantisiyle yürütülür. İşin her aşaması şeffaf olarak raporlanır.",
  },
];

export default function FAQ({ lang = "tr" }) {
  const [openId, setOpenId] = useState(1);
  const [isOnline, setIsOnline] = useState(true);
  const isTr = lang === "tr";

  // TÜRKİYE ÇALIŞMA SAATLERİNE GÖRE CANLI TELEMETRİ (Hafta içi 09:00 - 18:00)
  useEffect(() => {
    const checkOfficeHours = () => {
      // Türkiye saati hesaplama (UTC+3)
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const turkeyTime = new Date(utc + 3600000 * 3);

      const day = turkeyTime.getDay(); // 0 = Pazar, 6 = Cumartesi
      const hour = turkeyTime.getHours();

      // Hafta içi ve 09:00 - 18:00 arası ÇEVRİMİÇİ (Yeşil)
      const isWorkDay = day >= 1 && day <= 5;
      const isWorkHours = hour >= 9 && hour < 18;

      setIsOnline(isWorkDay && isWorkHours);
    };

    checkOfficeHours();
    const interval = setInterval(checkOfficeHours, 60000); // Her dakika kontrol et
    return () => clearInterval(interval);
  }, []);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

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
          <p className={styles.answerText}>{item.a}</p>
        </div>
      </div>
    );
  };

  return (
    <section
      className={styles.section}
      id="sss"
      aria-label="Sıkça Sorulan Sorular"
    >
      <div className={`container ${styles.container}`}>
        {/* ==========================================================================
            SOL SÜTUN: STICKY PANEL & CANLI ÇEVRİMİÇİ/ÇEVRİMDİŞİ DURUM SİNYALİ
            ========================================================================== */}
        <div className={styles.stickyColumn}>
          <div className={styles.contactCard}>
            <h2 className={styles.cardHeading}>
              {isTr ? (
                <>
                  Doğrudan bir <br />
                  uzmanla mı <br />
                  görüşmek istiyorsunuz?
                </>
              ) : (
                <>
                  Questions that <br />
                  need a human?
                </>
              )}
            </h2>

            <p className={styles.cardText}>
              {isTr
                ? "Buradaki yanıtlar temel çerçeveyi kapsar. Özel şartname, güvenlik denetimi veya süreç planlaması için ekibimize yazın; doğrudan bir mühendis yanıtlasın."
                : "The answers here cover the basics. For custom scope, security audits, or rollout planning, send us the context: an engineer replies."}
            </p>

            {/* İki Sütunlu Metrik Kutusu */}
            <div className={styles.metricGrid}>
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>&lt; 15 Dk</span>
                <span className={styles.metricSub}>Ortalama ilk yanıt</span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>%99</span>
                <span className={styles.metricSub}>Memnuniyet oranı</span>
              </div>
            </div>

            {/* ÇİFTLİ BUTON HİYERARŞİSİ: WHATSAPP + İLETİŞİM LİNKİ */}
            <div className={styles.cardFooter}>
              {/* 1. Birincil Buton: WhatsApp */}
              <a
                href="https://wa.me/905519769406?text=Merhaba,%20Hexa%20Dijital'den%20projemiz%20i%C3%A7in%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryWhatsappBtn}
              >
                <span className={styles.btnText}>
                  {isTr ? "WhatsApp ile Hemen Başlayın" : "Chat via WhatsApp"}
                </span>
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

              {/* 2. İkincil Hafif Link */}
              <Link
                href={`/${lang}/iletisim`}
                className={styles.secondaryFormLink}
              >
                <span>
                  {isTr
                    ? "Veya Proje Detaylarını İletin"
                    : "Or Submit Project Brief"}
                </span>
                <span className={styles.arrowSmall}>→</span>
              </Link>

              {/* 
                CANLI DURUM SİNYALİ (GERÇEK ZAMANLI SAAT KONTROLÜ):
                09:00 - 18:00 arası: YEŞİL NABIZ (Çevrimiçi)
                Saat geçmişse: KIRMIZI/KEHRİBAR (Çevrimdışı, sabah yanıtlanır)
              */}
              <div className={styles.liveStatusRow}>
                <span
                  className={`${styles.statusPulseDot} ${
                    isOnline ? styles.dotOnline : styles.dotOffline
                  }`}
                />
                <span className={styles.statusText}>
                  {isOnline
                    ? isTr
                      ? "Ekip Şu An Çevrimiçi — Ortalama Yanıt: 5 Dk"
                      : "Team Online Now — Avg. reply: 5 mins"
                    : isTr
                      ? "Ekip Şu An Çevrimdışı — Mesajınız 09:00’da Öncelikli Yanıtlanır"
                      : "Team Offline — Inquiries prioritized at 09:00 AM"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================================================
            SAĞ TARAF: BOŞLUKSUZ 2 BAĞIMSIZ SÜTUN (MASONRY)
            ========================================================================== */}
        <div className={styles.rightColumnsWrap}>
          <div className={styles.faqSubColumn}>
            {leftFaqItems.map(renderCard)}
          </div>
          <div className={styles.faqSubColumn}>
            {rightFaqItems.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
