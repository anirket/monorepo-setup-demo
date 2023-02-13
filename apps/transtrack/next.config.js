/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: '/transtrack',
  transpilePackages: ["ui"],
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        {
          source: '/transtrack/_next/:path*',
          destination: '/_next/:path*',
        },
      ],
    }
  },

}

module.exports = nextConfig
