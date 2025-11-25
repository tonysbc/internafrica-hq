import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* * Vercel Config:
   * We have removed 'output: export' to allow Dynamic Routing.
   * This fixes the 404 errors on program pages.
   */
  images: {
    // Allow external images if you ever use them (optional but good practice)
    remotePatterns: [],
  },
};

export default nextConfig;