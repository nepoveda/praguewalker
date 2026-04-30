import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  images: {
    // This will make every image lazy‑loaded by default
    unoptimized: true,
    loader: 'default',
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hoirqrkdgbmvpwutwuwj.supabase.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  output: "export",
};

export default nextConfig;
