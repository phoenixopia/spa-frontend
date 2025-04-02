import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.app.goo.gl", 'drive.google.com'], // Allow external images from this domain
  },
};

export default nextConfig;
