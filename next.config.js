/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://conciencia-ecologica.vercel.app',
  },
  // Disable all optimizations that might cause React conflicts
  experimental: {
    esmExternals: false,
  },
  swcMinify: false,
  compiler: {
    removeConsole: false,
  },
  transpilePackages: [],
  // Force consistent React runtime
  reactStrictMode: true,
}

module.exports = nextConfig
