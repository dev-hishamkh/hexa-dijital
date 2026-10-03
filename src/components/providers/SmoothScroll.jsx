"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // 1. GSAP ScrollTrigger Eklentisini Kaydet
    gsap.registerPlugin(ScrollTrigger);

    // 2. Lenis Akıcı Kaydırma Motorunu Başlat
    const lenis = new Lenis({
      duration: 1.2, // İpeksi kayma süresi
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple/Linear pürüzsüz yaylanma eğrisi
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // 3. Lenis ile GSAP ScrollTrigger'ı Birbirine Senkronize Et
    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0); // Basamaklanmayı ve gecikmeyi sıfırla

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
