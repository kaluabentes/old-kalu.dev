const withPlugins = require('next-compose-plugins')
const css = require('@zeit/next-css')
const webpackExtra = require('./webpack.extra')

const config = {
  cssModules: true,
  webpack(config, options) {
    return { ...config, ...webpackExtra }
  },
}

module.exports = withPlugins([css], config)
