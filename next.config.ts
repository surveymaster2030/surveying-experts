import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  async redirects() {
    return [
      {source:'/collections/:path*',destination:'https://store.surveyingexperts-sa.com/collections/:path*',permanent:true},
      {source:'/ar/collections/:path*',destination:'https://store.surveyingexperts-sa.com/collections/:path*',permanent:true},
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
