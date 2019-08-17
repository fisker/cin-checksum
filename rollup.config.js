import product from 'fast-cartesian-product'
import prettier from 'rollup-plugin-prettier'
import {terser} from 'rollup-plugin-terser'

const UMD_NAME = 'CIN.checksum'
const input = 'src/index.js'

const builds = product([
  [
    {format: 'umd', extension: 'js', name: UMD_NAME},
    {format: 'esm', extension: 'mjs'},
  ],
  [false, true],
]).map(([{format, extension, name}, minify]) => {
  const plugins = minify ? [terser()] : [prettier()]
  const file = `lib/index${minify ? '.min' : ''}.${extension}`

  return {
    input,
    output: {
      file,
      format,
      name,
    },
    plugins,
  }
})

export default builds
