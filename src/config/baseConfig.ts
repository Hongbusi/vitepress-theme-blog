import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import { presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  vite: {
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
