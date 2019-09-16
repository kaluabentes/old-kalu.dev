const withPlugins = require('next-compose-plugins')
const css = require('@zeit/next-css')
const webpackExtra = require('./webpack.extra')

const config = {
  cssModules: true,
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...webpackExtra.resolve.alias,
    }
    return config
  },
}

module.exports = withPlugins([css], config)
