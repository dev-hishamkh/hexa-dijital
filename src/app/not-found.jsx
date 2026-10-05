"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [targetUrl, setTargetUrl] = useState("/tr");
  const [redirecting, setRedirecting] = useState(true);

  useEffect(() => {
    try {
      const path = window.location.pathname.toLowerCase();

      // ESKİ GOOGLE İNDEKSİ KURTARMA HARİTASI
      let destination = "/tr";

      if (
        path.includes("hakkimizda") ||
        path.includes("about") ||
        path.includes("biz-kimiz")
      ) {
        destination = "/tr/bursa-dijital-ajans";
      } else if (path.includes("iletisim") || path.includes("contact")) {
        destination = "/tr/iletisim";
      } else if (path.includes("hizmet") || path.includes("service")) {
        destination = "/tr/hizmetler";
      } else if (
        path.includes("proje") ||
        path.includes("referans") ||
        path.includes("portfolio")
      ) {
        destination = "/tr/projeler";
      } else if (path.includes("web-tasarim") || path.includes("yazilim")) {
        destination = "/tr/hizmetler/kurumsal-web-siteleri";
      } else if (path.includes("seo") || path.includes("harita")) {
        destination = "/tr/hizmetler/google-haritalar-1-sira";
      } else if (path.includes("reklam") || path.includes("ads")) {
        destination = "/tr/hizmetler/google-reklamlari";
      } else {
        destination = "/tr";
      }

      setTargetUrl(destination);

      // 0.3 saniye içinde ilgili yeni sayfaya otomatik yönlendir
      const timer = setTimeout(() => {
        window.location.replace(destination);
      }, 300);

      return () => clearTimeout(timer);
    } catch (e) {
      setRedirecting(false);
    }
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A0E17",
        color: "#F8FAFC",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          border: "2px solid rgba(0, 255, 209, 0.2)",
          borderTopColor: "#00FFD1",
          animation: "spin 0.8s linear infinite",
          marginBottom: "1.5rem",
        }}
      />

      <h1
        style={{
          fontSize: "1.8rem",
          fontWeight: "600",
          margin: "0 0 0.5rem 0",
        }}
      >
        Sayfa Güncellendi
      </h1>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "0.95rem",
          maxWidth: "420px",
          margin: "0 0 1.5rem 0",
        }}
      >
        Aradığınız sayfa yeni altyapımıza taşındı. Otomatik olarak
        yönlendiriliyorsunuz...
      </p>

      <Link
        href={targetUrl}
        style={{
          display: "inline-flex",
          padding: "0.6rem 1.4rem",
          borderRadius: "9999px",
          backgroundColor: "#FFFFFF",
          color: "#0A0E17",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "0.88rem",
        }}
      >
        Hemen Git →
      </Link>

      <style jsx global>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
