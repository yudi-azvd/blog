/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: '/blog',
  // https://vercel.com/support/articles/can-i-redirect-from-a-subdomain-to-a-subpath
  // https://estevanmaito.me/blog/how-to-redirect-subfolder-in-vercel
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [{
            type: 'host',
            value: 'yudi-azvd-blog.vercel.app'
          }],
          destination: '/blog/:path*'
        }
      ]
    }
  }
}
