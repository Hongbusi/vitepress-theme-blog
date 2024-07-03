import path from 'node:path'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/node.ts'],
  outDir: path.resolve(__dirname, './'),
  format: 'esm',
  dts: true,
  external: ['vitepress', 'unocss', 'uno.css'],
  silent: true,
})
