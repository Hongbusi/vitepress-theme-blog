import Unocss from 'unocss/vite'
import { presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export function getVitePlugins() {
  const plugins: any[] = []

  plugins.push(unocssPlugin())

  return plugins
}

export function registerVitePlugins(config: any, plugins: any[]) {
  config.vite = {
    plugins,
  }
}

export function unocssPlugin() {
  return Unocss({
    shortcuts: {
      'bg-base': 'bg-[var(--vp-c-bg-soft)]',
      'base-card': 'p-6 bg-[var(--vp-c-bg-soft)] border border-[var(--vp-c-bg-soft)] rounded-lg transition',
    },
    presets: [
      presetUno(),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  })
}
