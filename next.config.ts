import type { NextConfig } from "next";

<<<<<<< HEAD
const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
=======
// const isProd = process.env.NODE_ENV === 'production'; // No longer needed for assetPrefix

const nextConfig: NextConfig = {
  output: 'export',
  // assetPrefix: isProd ? '/check/' : undefined, // Remove assetPrefix for custom domain root
  /* config options here */
>>>>>>> f7d0c5bf1442387ada4246c3e9b3d86ab7f25bfe
};

export default nextConfig;
