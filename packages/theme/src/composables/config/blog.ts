import { useData } from 'vitepress'
import type { Component, InjectionKey, Ref } from 'vue'
import { computed, defineComponent, h, inject, provide, ref } from 'vue'

import type { Theme } from './index'

const configSymbol: InjectionKey<Ref<Theme.Config>> = Symbol('theme-config')

const currentPageNum: InjectionKey<Ref<number>> = Symbol('home-page-num')

const footer: InjectionKey<Theme.Footer | undefined> = Symbol('footer')

export function withConfigProvider(App: Component) {
  return defineComponent({
    name: 'ConfigProvider',
    setup(_, { slots }) {
      const { theme } = useData()
      const config = computed(() => resolveConfig(theme.value))
      provide(footer, config.value.blog?.footer)
      provide(configSymbol, config)

      const pageNum = ref(1)
      provide(currentPageNum, pageNum)

      return () => h(App, null, slots)
    },
  })
}

export function useConfig() {
  return {
    config: inject(configSymbol)!.value,
  }
}

export function useBlogConfig() {
  return inject(configSymbol)!.value.blog!
}

export function useArticles() {
  const blogConfig = useConfig()
  const articles = computed(() => blogConfig.config?.blog?.pagesData || [])
  return articles
}

export function useCurrentPageNum() {
  return inject(currentPageNum)!
}

function resolveConfig(config: Theme.Config): Theme.Config {
  return {
    ...config,
    blog: {
      ...config?.blog,
      pagesData: config?.blog?.pagesData || [],
    },
  }
}

export function useFooterConfig() {
  return inject(footer)
}

export function useBackToTopConfig() {
  return useBlogConfig().backToTop
}
