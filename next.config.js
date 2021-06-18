const optimizedImages = require('next-optimized-images')
const withPlugins = require('next-compose-plugins')

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      }
    }
    return config
  },
  pageExtensions: ['js', 'jsx'],
  target: 'serverless',
  trailingSlash: true,
  assetPrefix: './',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
}

module.exports = withPlugins([[optimizedImages]], nextConfig)
