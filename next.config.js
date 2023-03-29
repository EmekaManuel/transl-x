/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: [
      'images.pexels.com',
      'platform.openai.com'
    ]
  },
  env: {
    customKey: "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",
  },
}
