"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    try {
      // 1. Ziyaretçi daha önce sitede dil seçmiş mi?
      const savedLang = localStorage.getItem("hexa-lang");

      if (savedLang === "en" || savedLang === "tr") {
        router.replace(`/${savedLang}`);
        return;
      }

      // 2. Ziyaretçinin cihaz / tarayıcı dilini tespit et
      const browserLang = (
        navigator.language ||
        navigator.userLanguage ||
        "tr"
      ).toLowerCase();

      // Cihaz dili Türkçe ise /tr, yabancı bir ülke ise doğrudan /en
      if (browserLang.startsWith("tr")) {
        router.replace("/tr");
      } else {
        router.replace("/en");
      }
    } catch (e) {
      router.replace("/tr");
    }
  }, [router]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A0E17",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "2px solid rgba(0, 255, 209, 0.2)",
          borderTopColor: "#00FFD1",
          animation: "spin 0.8s linear infinite",
        }}
      />
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
