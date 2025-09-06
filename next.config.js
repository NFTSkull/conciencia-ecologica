/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://conciencia-ecologica.vercel.app',
  },
  // Force consistent React runtime
  experimental: {
    esmExternals: false,
    serverComponentsExternalPackages: [],
  },
  // Disable problematic optimizations that can cause React conflicts
  swcMinify: false,
  compiler: {
    removeConsole: false,
  },
  // Ensure proper JSX handling
  transpilePackages: [],
}

module.exports = nextConfig
