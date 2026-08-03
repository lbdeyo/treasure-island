import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/tour-dates",
        destination: "/performance-dates",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
