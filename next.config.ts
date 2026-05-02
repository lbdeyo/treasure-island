import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
