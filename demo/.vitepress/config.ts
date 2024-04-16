import { defineConfigWithTheme } from 'vitepress'
import baseConfig from '../../src/config/baseConfig'

export default defineConfigWithTheme({
  extends: baseConfig,

  lang: 'zh-CN',
  title: 'Hongbusi',
  description: 'Vue.js - The Progressive JavaScript Framework',
})
