const postcssPresetEnv = require('postcss-preset-env')
const postcssImport = require('postcss-import')
const postcssNested = require('postcss-nested')
const postcssGlobalImport = require('postcss-global-import')
const postcssCustomMedia = require('postcss-custom-media')

module.exports = {
  plugins: [
    postcssPresetEnv({ stage: 0 }),
    postcssImport(),
    postcssNested(),
    postcssGlobalImport(),
    postcssCustomMedia({
      importFrom: [
        {
          customMedia: {
            '--break-mobile': '(max-width: 767px)',
            '--break-desktop': '(min-width: 768px)',
          },
        },
      ],
    }),
  ],
}
