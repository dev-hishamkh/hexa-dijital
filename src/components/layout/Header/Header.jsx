"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dictionary } from "@/data/dictionary";
import styles from "./Header.module.css";

export default function Header({ lang = "tr" }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState("dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dict = dictionary[lang]?.nav || dictionary.tr.nav;

  useEffect(() => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(currentTheme);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme(nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("hexa-theme", nextTheme);
      });
    } else {
      setTheme(nextTheme);
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("hexa-theme", nextTheme);
    }
  };

  const navLinks = [
    { href: `/${lang}/projeler`, label: dict.works },
    { href: `/${lang}/hizmetler`, label: dict.services },
    { href: `/${lang}/bursa-web-tasarim`, label: dict.localSeo },
    { href: `/${lang}/iletisim`, label: dict.contact },
  ];

  const targetLang = lang === "tr" ? "en" : "tr";
  const switchLangHref = pathname.replace(`/${lang}`, `/${targetLang}`);

  return (
    <div className={styles.headerWrapper}>
      <header
        className={`${styles.islandNav} ${
          isScrolled ? styles.islandScrolled : ""
        }`}
      >
        <Link href={`/${lang}`} className={styles.brandLink}>
          <span className={styles.logoName}>HEXA</span>
          <span className={styles.logoTag}>DİJİTAL</span>
          <span className={styles.telemetryPulse} />
        </Link>

        <nav className={styles.desktopNav}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navItem} ${
                  isActive ? styles.navItemActive : ""
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className={styles.activeDot} />}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actionPanel}>
          <Link
            href={switchLangHref}
            className={styles.langPill}
            aria-label="Change Language"
          >
            {targetLang.toUpperCase()}
          </Link>

          <button
            onClick={toggleTheme}
            className={styles.themeBtn}
            aria-label="Toggle Theme"
          >
            <div className={styles.themeIconWrapper}>
              {theme === "dark" ? (
                <svg
                  className={styles.themeSvg}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="5" strokeWidth="2" />
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                  />
                </svg>
              ) : (
                <svg
                  className={styles.themeSvg}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                  />
                </svg>
              )}
            </div>
          </button>

          <Link href={`/${lang}/iletisim`} className={styles.launchBtn}>
            <span>{dict.initiate}</span>
            <span className={styles.launchArrow}>↗</span>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={styles.burgerBtn}
            aria-label="Menü"
          >
            <span
              className={`${styles.burgerBar} ${
                isMobileMenuOpen ? styles.barTop : ""
              }`}
            />
            <span
              className={`${styles.burgerBar} ${
                isMobileMenuOpen ? styles.barBottom : ""
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`${styles.mobileDrawer} ${
          isMobileMenuOpen ? styles.drawerVisible : ""
        }`}
      >
        <div className={styles.drawerLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.drawerItem}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`/${lang}/iletisim`}
            className={styles.drawerCta}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>{dict.drawerCta}</span>
            <span>↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
