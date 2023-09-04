/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
});

const isInDevMode = process.env.NODE_ENV === 'development';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = isInDevMode ? nextConfig : withPWA(nextConfig);
