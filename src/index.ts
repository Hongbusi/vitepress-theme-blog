import type { Theme } from 'vitepress'
import Layout from './components/Layout.vue'
import NotFound from './components/NotFound.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const HbsTheme: Theme = {
  Layout,
  NotFound
}

export { HbsTheme }
