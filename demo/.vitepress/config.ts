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
    nav: [
      {
        text: 'Docs',
        icon: 'Twitter',
        link: '/docs/'
      },
      {
        text: 'API Reference',
        icon: 'twitter',
        link: '/api/'
      },
      {
        text: 'Sponsor',
        icon: 'twitter',
        link: '/sponsor/'
      },
      {
        text: 'Online',
        items: [
          {
            text: 'Twitter',
            icon: 'twitter',
            link: 'https://twitter.com/Hongbusi'
          },
          {
            text: 'GitHub',
            icon: 'github',
            link: 'https://github.com/Hongbusi'
          }
        ]
      }
    ]
  }
})
