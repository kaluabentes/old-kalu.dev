const withPlugins = require('next-compose-plugins')
const css = require('@zeit/next-css')
const optimizedImages = require('next-optimized-images')
const webpackExtra = require('./webpack.extra')

const config = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...webpackExtra.resolve.alias,
    }
    return config
  },
}

module.exports = withPlugins([css, optimizedImages], config)
