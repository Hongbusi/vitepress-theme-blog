import type { DefineComponent } from 'vue'
import type { EnhanceAppContext } from 'vitepress'

declare const theme: {
  Layout: DefineComponent
  enhanceApp: (ctx: EnhanceAppContext) => void
}

export default theme
