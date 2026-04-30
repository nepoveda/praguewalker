import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  images: {
    // This will make every image lazy‑loaded by default
    unoptimized: false,
    loader: 'default',
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hoirqrkdgbmvpwutwuwj.supabase.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
