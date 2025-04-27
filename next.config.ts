import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '',
  images: {
    // Keep unoptimized for flexibility
    unoptimized: true,
  }
};

export default nextConfig;
