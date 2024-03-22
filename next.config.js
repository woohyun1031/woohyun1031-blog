/** @type {import('next').NextConfig} */
var nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/article',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['s3.us-west-2.amazonaws.com', 'toss.tech', 'www.notion.so'],
  },
};

module.exports = nextConfig;
