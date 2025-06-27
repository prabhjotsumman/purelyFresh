// next.config.js or next.config.ts (if using TypeScript)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "strong-belief-18dce98a17.media.strapiapp.com"], // Replace with your actual domain in production (e.g., "cms.purelyfresh.com")
  },
  reactStrictMode: true,
};

export default nextConfig;
