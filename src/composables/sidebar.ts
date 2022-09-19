import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { getSidebar } from '../utils'

export function useSidebar() {
  const route = useRoute()
  const { theme, frontmatter } = useData()

  const sidebar = computed(() => {
    const sidebarConfig = theme.value.sidebar
    const relativePath = route.data.relativePath
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : []
  })

  const hasSidebar = computed(() => {
    return (
      frontmatter.value.sidebar !== false
      && sidebar.value.length > 0
      && frontmatter.value.layout !== 'home'
    )
  })

  return {
    sidebar,
    hasSidebar
  }
}
