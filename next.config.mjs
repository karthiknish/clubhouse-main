/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "upload.wikimedia.org"],
    unoptimized: true,
  },
  // Use standalone output for better Vercel deployment
  output: "standalone",
  // Enable both App Router and Pages Router
  experimental: {
    appDir: true,
  },
  // Ensure proper page extensions are processed
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

export default nextConfig;
