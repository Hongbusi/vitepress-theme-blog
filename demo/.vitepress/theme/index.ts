import { BlogTheme } from 'vitepress-theme-blog'
import { h } from 'vue'

export default Object.assign({}, BlogTheme, {
  Layout: () => {
    return h(BlogTheme.Layout, null, { })
  },
  enhanceApp() {},
})
