import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CRITICAL for DreamHost: Generates standard HTML/CSS files
  output: 'export', 
  
  // CRITICAL for DreamHost: Disables server-side image optimization
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;