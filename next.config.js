/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  cleanDistDir: true,
  compress: true,
  distDir: "./build"
}

module.exports = nextConfig
