/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  cleanDistDir: true,
  compress: true,
  distDir: "./build",
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
