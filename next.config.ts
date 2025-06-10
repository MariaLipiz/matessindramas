import type { NextConfig } from "next";

// next.config.js
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 💥 Esto evita que Vercel pete por errores de estilo
  },
};

module.exports = nextConfig;
