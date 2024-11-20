import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"], // Разрешенные домены для изображений
  },
};

export default nextConfig;
