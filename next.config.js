/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['midoel.local', 'reportdroid.com', 'http://reportdroid.com'],
  },
}

module.exports = nextConfig
