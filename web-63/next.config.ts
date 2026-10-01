import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // env: {
  // }
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
    ],
    unoptimized: true
  },
};

export default nextConfig;
