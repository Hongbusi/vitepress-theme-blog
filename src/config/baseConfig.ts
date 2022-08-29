import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import { presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  vite: {
    plugins: [
      Unocss({
        shortcuts: {
          'text-primary': 'text-black dark:text-gray-100'
        },

        presets: [
          presetUno()
        ],

        theme: {
          colors: {
            white: '#fff',
            block: '#050505',
            gray: {
              50: '#fafafa',
              100: '#f5f5f5',
              200: '#e5e5e5',
              300: '#d4d4d4',
              400: '#a3a3a3',
              500: '#737373',
              600: '#525252',
              700: '#404040',
              800: '#262626',
              900: '#171717'
            }
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
