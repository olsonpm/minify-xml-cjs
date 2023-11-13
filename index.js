const defaultExport = require('fix-esm').require('minify-xml')

const { minify, ...restOfExport } = defaultExport

for (const [k, v] of Object.entries(restOfExport)) {
  minify[k] = v
}

module.exports = minify
