/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_TOKEN: process.env.CONTENTFUL_PREVIEW_TOKEN,
    API_URL: process.env.API_URL,
    MIXPANEL_API_KEY: process.env.MIXPANEL_API_KEY,
    NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV,
    CLARITY_ID: process.env.CLARITY_ID,
  },
  images: {
    domains: ['images.ctfassets.net'],
  }
}

module.exports = nextConfig
