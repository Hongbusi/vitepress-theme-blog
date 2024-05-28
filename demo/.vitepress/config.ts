import { defineConfigWithTheme } from 'vitepress'
import baseConfig from 'vitepress-theme-blog/config'

export default defineConfigWithTheme({
  extends: baseConfig,

  lang: 'zh-CN',
  title: 'Vitepress Theme Blog Demo',
  description: 'A vitepress theme for blogs.',
})
