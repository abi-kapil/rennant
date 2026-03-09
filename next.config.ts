import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rennant",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
