import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'

export default defineConfig({
  vite: {
    plugins: [
      Unocss({
        presets: [
          presetUno()
        ]
      })
    ]
  }
})