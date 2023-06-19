/** @type {import('next').NextConfig} */
var nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/about',
      },
    ];
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    );
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  images: {
    domains: ['s3.us-west-2.amazonaws.com', 'toss.tech', 'www.notion.so'],
  },
};

module.exports = nextConfig;
