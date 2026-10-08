export const metadata = {
  title: "Hexa Dijital | Yazılım, Tasarım ve Reklam Ajansı",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://hexadijital.com/tr",
  },
};

export default function RootPage() {
  return (
    <>
      {/* 1. TARAYICI İLK OKUDUĞU MİLİSANİYEDE ÇALIŞAN NATIVE YÖNLENDİRİCİ */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var s = localStorage.getItem("hexa-lang");
                if (s === "en" || s === "tr") {
                  window.location.replace("/" + s);
                  return;
                }
                var lang = (navigator.language || navigator.userLanguage || "tr").toLowerCase();
                if (lang.startsWith("tr")) {
                  window.location.replace("/tr");
                } else {
                  window.location.replace("/en");
                }
              } catch(e) {
                window.location.replace("/tr");
              }
            })();
          `,
        }}
      />

      {/* 2. JAVASCRIPT KAPALI VEYA GECİKMELİ OLSA BİLE ANINDA FIRLATAN META REFRESH */}
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/tr" />
      </noscript>

      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#0A0E17",
        }}
      />
    </>
  );
}
