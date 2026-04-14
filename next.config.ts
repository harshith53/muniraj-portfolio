import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Essential for GitHub Pages static export
  images: {
    unoptimized: true, // Disables Next.js image optimization server (which doesn't exist on GH Pages)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
