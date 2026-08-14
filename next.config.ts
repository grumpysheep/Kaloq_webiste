import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products/payments",
        destination: "/products/global-account",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
