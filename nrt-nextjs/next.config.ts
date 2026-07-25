import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "motion", "framer-motion"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.worldvectorlogo.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/terms-of-service",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withAnalyzer(nextConfig);
