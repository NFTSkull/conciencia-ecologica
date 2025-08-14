/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  trailingSlash: false,
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig
