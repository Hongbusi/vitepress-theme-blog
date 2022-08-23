import { HbsTheme } from 'vitepress-theme-hbs'
import { h } from 'vue'

export default {
  ...HbsTheme,
  Layout() {
    return h(HbsTheme.Layout, null, {})
  },
  NotFound: HbsTheme.NotFound
}
