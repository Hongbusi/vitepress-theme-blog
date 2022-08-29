import path from 'path'
import type { UserConfig } from 'vitepress'
import { defineConfigWithTheme } from 'vitepress'
import baseConfig from '../../src/config/baseConfig'
import type { Config } from '../../src/types/config'

export default defineConfigWithTheme<Config>({
  extends: baseConfig as UserConfig<Config>,

  vite: {
    resolve: {
      alias: {
        'vitepress-theme-hbs': path.join(__dirname, '../../src')
      }
    }
  },

  lang: 'zh-CN',
  title: 'Hongbusi',
  description: 'Vue.js - The Progressive JavaScript Framework',

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hongbusi' },
      { icon: 'twitter', link: 'https://twitter.com/Hongbusi' }
    ],

    nav: [
      {
        text: 'Docs',
        link: '/docs/'
      },
      {
        text: 'API Reference',
        link: '/api/'
      },
      {
        text: 'Sponsor',
        link: '/sponsor/'
      }
    ]
  }
})
