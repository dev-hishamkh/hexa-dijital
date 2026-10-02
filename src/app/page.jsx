"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Kök dizine gelen kullanıcıyı varsayılan olarak /tr sayfasına yönlendir
    router.replace("/tr");
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
