import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  // The www redirect and the noindex header used to live in middleware.ts,
  // which ran as a billed function on every request, before the cache
  // (PDOS 08 rule 19b, 26 Sep 2026). As config they run in Vercel's router.
  async headers() {
    return [{ source: "/:path*", missing: [{ type: "host", value: "summit.afrifoodnetwork.com" }], headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
  async redirects() {
    return [
      { source: "/:path*", has: [{ type: "host", value: "www.summit.afrifoodnetwork.com" }], destination: "https://summit.afrifoodnetwork.com/:path*", permanent: true },
      { source: "/partnership", destination: "/partner-with-us", permanent: true },
      { source: "/become-a-sponsor", destination: "/partner-with-us", permanent: true },
    ];
  },
};
export default nextConfig;
