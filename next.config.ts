import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      { source: "/partnership", destination: "/partner-with-us", permanent: true },
      { source: "/become-a-sponsor", destination: "/partner-with-us", permanent: true },
    ];
  },
};
export default nextConfig;
