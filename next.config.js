/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: '/blog',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/blog',
        permanent: false
      }
    ]
  }
}
