/** @type {import('next').NextConfig} */
var nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['s3.us-west-2.amazonaws.com', 'toss.tech', 'www.notion.so'],
  },
};

module.exports = nextConfig;
