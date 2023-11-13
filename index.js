const defaultExport = require('fix-esm').require('minify-xml')

const { minify } = defaultExport

for (const [k, v] of Object.entries(defaultExport)) {
  if (k === 'default') continue
  minify[k] = v
}

module.exports = minify
