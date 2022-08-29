import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import { presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  vite: {
    plugins: [
      Unocss({
        shortcuts: {
          'text-primary': 'text-gray-1000 dark:text-gray-100'
        },

        presets: [
          presetUno()
        ],

        theme: {
          colors: {
            block: '#050505'
          }
        },

        transformers: [
          transformerDirectives(),
          transformerVariantGroup()
        ]
      })
    ]
  }
})
