"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Contact.module.css";
import { Phone, MessageSquare, Clock, MapPin, Copy, Check } from "lucide-react";

export default function ContactClient({ lang }) {
  const isTr = lang === "tr";
  const rootRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    notes: "",
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.heroArea} > *`,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        `.${styles.contactGrid} > *`,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.contactGrid}`,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("05519769406");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendViaWhatsApp = (e) => {
    e.preventDefault();
    const message = isTr
      ? `Merhaba Hexa Dijital,\n\nİsmim: ${formData.fullName || "Belirtilmedi"}\nİşletmem: ${formData.businessName || "Belirtilmedi"}\nMesajım: ${formData.notes || "Görüşmek istiyorum."}\n\nYerinde görüşme ve keşif için iletişime geçebilir miyiz?`
      : `Hello Hexa Digital,\n\nName: ${formData.fullName || "N/A"}\nBusiness: ${formData.businessName || "N/A"}\nMessage: ${formData.notes || "Would like to consult."}\n\nCan we arrange an on-site consultation?`;

    const whatsappUrl = `https://wa.me/905519769406?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div ref={rootRef} className={styles.mainContainer}>
      <div className={`container ${styles.contentWrapper}`}>
        {/* HERO */}
        <div className={styles.heroArea}>
          <span className={styles.eyebrowBadge}>
            {isTr
              ? "Bursa Operasyon Masası · Doğrudan İletişim"
              : "Bursa Operations Hub · Direct Project Desk"}
          </span>

          <h1 className={styles.title}>
            <span className={styles.titleLineSans}>
              {isTr
                ? "Yeni bir başarı hikayesini,"
                : "Let’s engineer your next"}
            </span>
            <span className={styles.titleLineSerif}>
              {isTr ? "masanızda başlatalım." : "growth chapter at your table."}
            </span>
          </h1>

          <p className={styles.subtitle}>
            {isTr
              ? "Sizi günlerce oyalayan formlar veya telefonları açmayan hesap yöneticileri yok. İster dilediğiniz saatte WhatsApp'tan yazın, ister mesai saatlerinde arayın; teknik ekibimizle doğrudan masaya oturun."
              : "No vanished account managers or ignored support tickets. Message us on WhatsApp 24/7 or call during business hours to consult with lead engineers directly."}
          </p>
        </div>

        {/* İLETİŞİM GRİDİ */}
        <div className={styles.contactGrid}>
          {/* SOL: KANALLAR */}
          <div className={styles.channelsColumn}>
            {/* TELEFON KARTI (#0D111A KART STANDARDI) */}
            <div className={styles.channelCard}>
              <div className={styles.channelCardTop}>
                <div className={styles.channelIconWrap}>
                  <Phone size={20} />
                </div>
                <div className={styles.workingHoursBadge}>
                  <span className={styles.hoursDot} />
                  <span>
                    {isTr
                      ? "09:00 - 18:00 Canlı Çağrı"
                      : "09:00 - 18:00 Calling Hours"}
                  </span>
                </div>
              </div>
              <h3 className={styles.channelValue}>0551 976 94 06</h3>
              <p className={styles.channelDesc}>
                {isTr
                  ? "Mesai saatleri içinde doğrudan ekibimizi arayabilir, işletmeniz için yerinde ziyaret randevusu oluşturabilirsiniz."
                  : "Call our team directly during business hours to arrange an on-site visit."}
              </p>
              <div className={styles.channelActionRow}>
                {/* 45 DERECE DÖNEN ARAMA BUTONU */}
                <a
                  href="tel:+905519769406"
                  className={styles.executiveActionBtn}
                >
                  <span className={styles.btnText}>
                    {isTr ? "Hemen Arayın" : "Call Directly"}
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
                <button onClick={handleCopyPhone} className={styles.copyBtn}>
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  <span>
                    {copied
                      ? isTr
                        ? "Kopyalandı"
                        : "Copied"
                      : isTr
                        ? "Numarayı Kopyala"
                        : "Copy"}
                  </span>
                </button>
              </div>
            </div>

            {/* WHATSAPP KARTI */}
            <div className={styles.channelCard}>
              <div className={styles.channelCardTop}>
                <div
                  className={`${styles.channelIconWrap} ${styles.iconWhatsapp}`}
                >
                  <MessageSquare size={20} />
                </div>
                <div className={styles.livePulseWrap}>
                  <span className={styles.liveDot} />
                  <span className={styles.liveText}>
                    {isTr ? "7/24 Kesintisiz Aktif" : "Active 24/7"}
                  </span>
                </div>
              </div>
              <h3 className={styles.channelValue}>WhatsApp Proje Masası</h3>
              <p className={styles.channelDesc}>
                {isTr
                  ? "Günün her saati dilediğiniz zaman yazabilirsiniz. Mesajınız anında ekibimize iletilir ve hızla yanıtlanır."
                  : "Message anytime 24/7. Your inquiry is directly routed to our desk for immediate review."}
              </p>
              {/* 45 DERECE DÖNEN WHATSAPP BUTONU */}
              <a
                href="https://wa.me/905519769406?text=Merhaba%20Hexa%20Dijital,%20i%C5%9Fletmemiz%20i%C3%A7in%20bilgi%20ve%20teklif%20almak%20istiyoruz."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.executiveActionBtn}
              >
                <span className={styles.btnText}>
                  {isTr ? "WhatsApp'tan Yazın" : "Message on WhatsApp"}
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
            </div>

            {/* YERİNDE HİZMET (NİLÜFER KALDIRILDI) */}
            <div className={styles.infoMetaBox}>
              <div className={styles.metaRow}>
                <MapPin size={18} className={styles.metaIcon} />
                <div>
                  <span className={styles.metaTitle}>
                    {isTr ? "Çalışma Modeli" : "Service Model"}
                  </span>
                  <p className={styles.metaText}>
                    {isTr
                      ? "Bursa Geneli Yerinde Ziyaret · Sizi çağırmıyoruz, dükkanınıza gelip masanızda yüz yüze konuşuyoruz."
                      : "On-site business visits across Bursa · In-person consultations directly at your table."}
                  </p>
                </div>
              </div>

              <div className={styles.metaRow}>
                <Clock size={18} className={styles.metaIcon} />
                <div>
                  <span className={styles.metaTitle}>
                    {isTr
                      ? "Telefon & Ziyaret Saatleri"
                      : "Calling & Meeting Hours"}
                  </span>
                  <p className={styles.metaText}>
                    {isTr
                      ? "Pazartesi - Pazar · 09:00 - 18:00 (Haftanın 7 Günü)"
                      : "Monday - Sunday · 09:00 - 18:00"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ: FORM */}
          <div className={styles.formColumn}>
            <form
              onSubmit={handleSendViaWhatsApp}
              className={styles.cockpitForm}
            >
              <div className={styles.formHeader}>
                <h3 className={styles.formHeading}>
                  {isTr ? "Projenizi Birlikte Planlayalım" : "Plan Your System"}
                </h3>
                <p className={styles.formSub}>
                  {isTr
                    ? "Bilgilerinizi ve aklınızdakileri yazın; tek tıkla doğrudan WhatsApp hattımıza aktararak konuşalım."
                    : "Fill out your details to transmit your project scope directly into our WhatsApp desk."}
                </p>
              </div>

              <div className={styles.inputTwoCol}>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    {isTr ? "Adınız Soyadınız" : "Full Name"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isTr ? "Örn: Ahmet Yılmaz" : "e.g. John Doe"}
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className={styles.glassInput}
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    {isTr ? "İşletme / Dükkan Adı" : "Business / Venue Name"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={
                      isTr ? "Örn: Yılmaz Restoran" : "e.g. Acme Venue"
                    }
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    className={styles.glassInput}
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>
                  {isTr
                    ? "Aklınızdaki Proje veya Çözmek İstediğiniz Sorun"
                    : "Your Project Scope or Requirements"}
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder={
                    isTr
                      ? "Örn: Paket servis siparişlerimizi aracı sitelerden kendi dükkanımıza çekmek istiyoruz, yerinde görüşebilir miyiz?"
                      : "e.g. We want to streamline our direct delivery orders on-site, can we schedule an on-site consultation?"
                  }
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className={styles.glassTextarea}
                />
              </div>

              {/* 45 DERECE DÖNEN MASTER FORM GÖNDERME BUTONU */}
              <button type="submit" className={styles.executiveSubmitBtn}>
                <span className={styles.btnText}>
                  {isTr
                    ? "Talebi WhatsApp ile İletin"
                    : "Transmit via WhatsApp"}
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
              </button>

              <span className={styles.securityNote}>
                {isTr
                  ? "Paylaştığınız bilgiler doğrudan ekibimizle yerinde görüşme planlamak amacıyla kullanılır."
                  : "Your details are strictly used to schedule consultations directly with our team."}
              </span>
            </form>
          </div>
        </div>

        {/* TAAHHÜTLER */}
        <div className={styles.trustBar}>
          <div className={styles.trustItem}>
            <span className={styles.trustNumber}>01</span>
            <div>
              <h4>
                {isTr ? "Net Kapsam & Sabit Fiyat" : "Fixed Scope & Pricing"}
              </h4>
              <p>
                {isTr
                  ? "Sonradan sürpriz ek masraf çıkarılmaz."
                  : "Zero hidden surprise costs."}
              </p>
            </div>
          </div>

          <div className={styles.trustItem}>
            <span className={styles.trustNumber}>02</span>
            <div>
              <h4>{isTr ? "%100 Mülkiyet Sizde" : "100% IP Ownership"}</h4>
              <p>
                {isTr
                  ? "Tüm kontrol doğrudan şirketinize tescil edilir."
                  : "Complete client asset ownership."}
              </p>
            </div>
          </div>

          <div className={styles.trustItem}>
            <span className={styles.trustNumber}>03</span>
            <div>
              <h4>
                {isTr ? "Bursa İçi Yerinde Ziyaret" : "On-Site Business Visits"}
              </h4>
              <p>
                {isTr
                  ? "Sizi çağırmıyoruz, masanızda çözüyoruz."
                  : "We meet face-to-face at your table."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
