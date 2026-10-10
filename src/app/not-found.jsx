"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [targetUrl, setTargetUrl] = useState("/");

  useEffect(() => {
    try {
      const path = window.location.pathname.toLowerCase();

      // Zaten ana sayfadaysa veya boşsa yönlendirme yapma
      if (!path || path === "/") return;

      let destination = "/";

      // Sadece eski /tr önekini temizle (İlerideki /en yapısına zarar vermesin)
      let cleanPath = path;
      if (cleanPath.startsWith("/tr/"))
        cleanPath = cleanPath.replace("/tr", "");
      else if (cleanPath === "/tr" || cleanPath === "/tr/") cleanPath = "/";

      if (
        cleanPath.includes("hakkimizda") ||
        cleanPath.includes("about") ||
        cleanPath.includes("biz-kimiz")
      ) {
        destination = "/bursa-dijital-ajans";
      } else if (
        cleanPath.includes("iletisim") ||
        cleanPath.includes("contact")
      ) {
        destination = "/iletisim";
      } else if (
        cleanPath.includes("hizmet") ||
        cleanPath.includes("service")
      ) {
        destination = cleanPath.startsWith("/hizmetler")
          ? cleanPath
          : "/hizmetler";
      } else if (
        cleanPath.includes("proje") ||
        cleanPath.includes("portfolio")
      ) {
        destination = cleanPath.startsWith("/projeler")
          ? cleanPath
          : "/projeler";
      } else {
        // Tanınmayan her kırık linki güvenle ana sayfaya yönlendir
        destination = "/";
      }

      setTargetUrl(destination);
      window.location.replace(destination);
    } catch (e) {
      setTargetUrl("/");
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
        Sayfa Yönlendiriliyor
      </h1>
      <p
        style={{
          color: "#94a3b8",
          fontSize: "0.95rem",
          maxWidth: "420px",
          margin: "0 0 1.5rem 0",
        }}
      >
        Sayfa yeni adresine aktarılıyor...
      </p>
      <Link
        href={targetUrl}
        style={{
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
