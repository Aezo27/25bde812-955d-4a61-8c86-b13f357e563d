/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    domains: ["i.dummyjson.com"],
  },
};

module.exports = nextConfig
