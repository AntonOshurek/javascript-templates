import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["image.tmdb.org"], // Добавляем хост изображения
  },
};

export default nextConfig;
