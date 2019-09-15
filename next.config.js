const withPlugins = require('next-compose-plugins')
const css = require('@zeit/next-css')

module.exports = withPlugins([css], { cssModules: true })
