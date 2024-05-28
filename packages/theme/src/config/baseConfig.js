/**
 * This file is intended to be required from VitePress
 * consuming project's config file.
 *
 * It runs in Node.js.
 */

import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import { presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

// for local-linked development
const deps = ['vitepress-theme-blog']

export default defineConfig({
  vite: {
    ssr: {
      noExternal: deps,
    },
    optimizeDeps: {
      exclude: deps,
    },
    plugins: [
      Unocss({
        shortcuts: {
          'card-base': 'overflow-hidden rounded transition',
        },
        presets: [
          presetUno(),
        ],
        transformers: [
          transformerDirectives(),
          transformerVariantGroup(),
        ],
      }),
    ],
  },
})
