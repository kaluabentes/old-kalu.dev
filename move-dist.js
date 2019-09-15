const fs = require('fs-extra')

fs.move('./src/out', './docs', { overwrite: true }, error => {
  if (error) {
    console.error(error)
    return
  }
  console.log('\x1b[33m%s\x1b[0m', 'Output folder moved successfully!')
})
