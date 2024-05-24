import type { Theme } from 'vitepress'
import baseConfig from './config/baseConfig'

import '@unocss/reset/tailwind.css'
import 'uno.css'

import './styles/index.css'
import Layout from './components/Layout.vue'

const BlogTheme: Theme = {
  Layout,
}

export {
  BlogTheme,
  baseConfig,
}
