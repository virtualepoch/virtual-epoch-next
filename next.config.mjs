/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack + some three add-ons (e.g., custom shader material) can break XR
  experimental: {
    turbo: false, // force webpack
  },
  webpack: (config) => {
    // Ensure a single three instance is bundled to avoid XR prototype errors
    config.resolve.alias.three = require.resolve("three");
    return config;
  },
};

export default nextConfig;
