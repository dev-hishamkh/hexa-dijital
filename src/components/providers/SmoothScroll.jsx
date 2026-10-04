"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  useEffect(() => {
    // 1. GSAP ScrollTrigger Eklentisini Kaydet
    gsap.registerPlugin(ScrollTrigger);

    // 2. Lenis Akıcı Kaydırma Motorunu Başlat
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

    // 3. Lenis ile GSAP Senkronizasyonu
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

    // Yeni sayfanın tetikleyicilerini sıfır gecikmeyle yenile
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 80);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
