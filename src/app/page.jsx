"use client";

import { useEffect } from "react";

export default function RootRedirect() {
  useEffect(() => {
    try {
      // 1. Ziyaretçinin kayıtlı tercihi var mı?
      const savedLang = localStorage.getItem("hexa-lang");
      if (savedLang === "en" || savedLang === "tr") {
        window.location.replace(`/${savedLang}`);
        return;
      }

      // 2. Cihaz dilini yakala
      const browserLang = (
        navigator.language ||
        navigator.userLanguage ||
        "tr"
      ).toLowerCase();

      // Türkçe ise doğrudan /tr, yabancı ise doğrudan /en
      if (browserLang.startsWith("tr")) {
        window.location.replace("/tr");
      } else {
        window.location.replace("/en");
      }
    } catch (e) {
      window.location.replace("/tr");
    }
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A0E17",
      }}
    />
  );
}
