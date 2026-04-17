import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/my-vibe_3",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
