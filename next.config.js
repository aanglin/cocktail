/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ["lh3.googleusercontent.com", "developers.google.com", "www.thecocktaildb.com"]
  }
}
