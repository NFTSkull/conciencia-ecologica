/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://conciencia-ecologica.vercel.app',
  },
  // Temporarily disabled optimizations due to build issues
  // experimental: {
  //   optimizeCss: true,
  // },
  // compiler: {
  //   removeConsole: process.env.NODE_ENV === 'production',
  // },
  // Disable static generation for problematic pages
  output: 'standalone',
}

module.exports = nextConfig
