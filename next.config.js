/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://conciencia-ecologica.vercel.app',
  },
  // Minimal configuration to avoid React conflicts
  reactStrictMode: true,
}

module.exports = nextConfig
