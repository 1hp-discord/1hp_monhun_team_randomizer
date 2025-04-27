import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Get the repository name from the environment or use default
  basePath: '',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
