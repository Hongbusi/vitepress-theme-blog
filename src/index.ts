import type { Theme } from 'vitepress'
import Layout from './components/Layout.vue'
import NotFound from './components/NotFound.vue'
import { withConfigProvider } from './composables/config'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import './styles/custom-styles.css'
import './styles/prose-styles.css'

const HbsTheme: Theme = {
  Layout: withConfigProvider(Layout),
  NotFound
}

export { HbsTheme }
