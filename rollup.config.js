import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import esbuild from 'rollup-plugin-esbuild'

export default {
  input: 'src/index.ts', // Your entry file
  output:
  {
    file: 'dist/index.esm.js',
    format: 'esm', // ES Module format
    sourcemap: true,
  },
  plugins: [
    resolve(),
    typescript(),
    esbuild({
      minify: true, // Enable minification with esbuild
      target: 'es5'
    })
  ]
}