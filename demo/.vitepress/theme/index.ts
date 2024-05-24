import { BlogTheme } from 'vitepress-theme-blog'
import { h } from 'vue'

export default {
  ...BlogTheme,
  Layout() {
    return h(BlogTheme.Layout, null, {})
  },
}
