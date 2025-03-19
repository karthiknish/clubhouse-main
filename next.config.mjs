/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "upload.wikimedia.org"],
    unoptimized: true,
  },
  // Ensure static exports work correctly
  output: "standalone",
};

export default nextConfig;
