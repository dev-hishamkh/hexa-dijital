/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: false,
  // GitHub Pages için alt klasör yolu
  basePath: isProd ? "/hexa-dijital-final" : "",
  assetPrefix: isProd ? "/hexa-dijital-final/" : "",
  images: {
    unoptimized: true, // Statik HTML çıktısı için zorunlu
  },
};

export default nextConfig;
