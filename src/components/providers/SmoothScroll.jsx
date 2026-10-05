"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  // 1. REACT 19 UYUMLU SIFIR SCRIPT HATALI TEMA İLKLENDİRİCİSİ
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem("hexa-theme");
      const prefersLight = window.matchMedia(
        "(prefers-color-scheme: light)",
      ).matches;
      const theme = storedTheme || (prefersLight ? "light" : "dark");
      document.documentElement.setAttribute("data-theme", theme);
    } catch (e) {}
  }, []);

  useEffect(() => {
    // 2. GSAP ScrollTrigger Eklentisini Kaydet
    gsap.registerPlugin(ScrollTrigger);

    // 3. Lenis Akıcı Kaydırma Motorunu Başlat
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    // 4. Lenis ile GSAP Senkronizasyonu
    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // HER SAYFA DEĞİŞİMİNDE ANINDA EN TEPEYE SIFIRLA
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 80);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
