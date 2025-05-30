// next.config.js or next.config.ts (if using TypeScript)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost"], // Replace with your actual domain in production (e.g., "cms.purelyfresh.com")
  },
  reactStrictMode: true,
};

export default nextConfig;
