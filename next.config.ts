/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Wildcard for all domains (use with caution)
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
