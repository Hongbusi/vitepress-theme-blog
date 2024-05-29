import type { Theme } from 'vitepress'
import '@unocss/reset/tailwind.css'
import 'uno.css'

import './styles/index.css'
import Layout from './Layout.vue'

const theme: Theme = {
  Layout,
}

export default theme
