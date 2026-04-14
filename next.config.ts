import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = "muniraj-portfolio";

const nextConfig: NextConfig = {
  output: "export", // Essential for GitHub Pages static export
  basePath: isProd ? `/${repoName}` : undefined,
  assetPrefix: isProd ? `/${repoName}/` : undefined,
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
