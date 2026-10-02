import { NextResponse } from "next/server";

const locales = ["tr", "en"];
const defaultLocale = "tr";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Statik dosyaları, api rotalarını ve Next.js iç rotalarını pas geç
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.includes(".") // robots.txt, sitemap.xml, görseller vb.
  ) {
    return NextResponse.next();
  }

  // URL zaten desteklenen bir dille mi başlıyor?
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Dil yoksa varsayılan dile yönlendir
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
