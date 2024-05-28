import type { Theme } from 'vitepress'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './styles/index.css'
import Layout from './components/Layout.vue'

const BlogTheme: Theme = {
  Layout,
}

export {
  BlogTheme,
}
