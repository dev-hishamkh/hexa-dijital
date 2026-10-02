"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header({ lang }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState("dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(currentTheme);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    {
      href: `/${lang}/hizmetler`,
      label: lang === "tr" ? "Hizmetler" : "Services",
    },
    { href: `/${lang}/projeler`, label: lang === "tr" ? "Projeler" : "Works" },
    { href: `/${lang}/bursa-nilufer-web-tasarim`, label: "Bursa Web Tasarım" },
    {
      href: `/${lang}/iletisim`,
      label: lang === "tr" ? "İletişim" : "Contact",
    },
  ];

  const targetLang = lang === "tr" ? "en" : "tr";
  const switchLangHref = pathname.replace(`/${lang}`, `/${targetLang}`);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
    >
      <div className={`container ${styles.headerContainer}`}>
        <Link href={`/${lang}`} className={styles.logo}>
          <span className={styles.logoHex}>HEXA</span>
          <span className={styles.logoSub}>DIJITAL</span>
          <div className={styles.logoDot} />
        </Link>

        <nav className={styles.nav}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <Link
            href={switchLangHref}
            className={styles.langSwitch}
            aria-label="Dili Değiştir"
          >
            {targetLang.toUpperCase()}
          </Link>

          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Temayı Değiştir"
          >
            <div className={styles.iconContainer}>
              {theme === "dark" ? (
                <svg
                  className={styles.icon}
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
                  className={styles.icon}
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

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={styles.burger}
            aria-label="Menü"
          >
            <span
              className={`${styles.burgerLine} ${isMobileMenuOpen ? styles.openTop : ""}`}
            />
            <span
              className={`${styles.burgerLine} ${isMobileMenuOpen ? styles.openBottom : ""}`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
