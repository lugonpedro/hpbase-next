/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.wizardingworld.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
