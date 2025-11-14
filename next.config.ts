// next.config.ts

import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Other configurations like experimental, webpack, etc. go here

  images: {
    // Use remotePatterns for Next.js 13+ App Router
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgtemple.dinamalar.com',
        port: '', // Leave empty if not needed
        pathname: '/kovilimages/**', // Use ** to match any path after /kovilimages/
      },
    ],
    // If you are on an older Next.js version or prefer the simpler syntax, use 'domains':
    // domains: ['imgtemple.dinamalar.com'],
  },
};

export default nextConfig;