import type { Component, InjectionKey, Ref } from 'vue'
import { computed, defineComponent, h, inject, provide } from 'vue'
import { useData } from 'vitepress'
import type { Config } from '../types/config'

const configSymbol: InjectionKey<Ref<Config>> = Symbol('config')

export function withConfigProvider(App: Component) {
  return defineComponent({
    name: 'ConfigProvider',
    setup(_, { slots }) {
      const { theme } = useData()
      const config = computed(() => resolveConfig(theme.value))
      provide(configSymbol, config)
      return () => h(App, null, slots)
    }
  })
}

export function useConfig() {
  return {
    config: inject(configSymbol)!
  }
}

function resolveConfig(config: Config): Config {
  return Object.assign(
    {
      appearance: true
    },
    config
  )
}
