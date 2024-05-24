import { defineConfigWithTheme } from 'vitepress'
import { baseConfig } from 'vitepress-theme-blog'

export default defineConfigWithTheme({
  extends: baseConfig,

  lang: 'zh-CN',
  title: 'Hongbusi',
  description: 'Vue.js - The Progressive JavaScript Framework',
})
