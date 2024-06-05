import type { UserConfig } from 'vitepress'
import type { Theme } from './composables/config/index'
import { getVitePlugins, registerVitePlugins } from './utils/node/vitePlugins'
import { getArticles } from './utils/node/theme'

/**
 * 获取主题的配置
 * @param config 主题配置
 */
export function getThemeConfig(config?: Partial<Theme.BlogConfig>) {
  // 文章数据
  const pagesData = getArticles(config)

  const extraConfig: any = {}

  // 获取要加载的 vite 插件
  const vitePlugins = getVitePlugins()
  // 注册 vite 插件
  registerVitePlugins(extraConfig, vitePlugins)

  return {
    themeConfig: {
      blog: {
        pagesData,
        ...config,
      },
    },
    ...extraConfig,
  }
}

/**
 * defineConfig Helper
 */
export function defineConfig(config: UserConfig<Theme.Config>) {
  return config
}
