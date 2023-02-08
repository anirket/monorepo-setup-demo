/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: '/transtrack',
  transpilePackages: ["ui"],
}

module.exports = nextConfig
