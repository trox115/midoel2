/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['midoel.local', 'report-droid.com'],
  },
}

module.exports = nextConfig
