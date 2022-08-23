const path = require('path')

/**
 * @type {() => Promise<import('vitepress').UserConfig>}
 */
module.exports = (async () => {
  return {
    vite: {
      build: {
        minify: false
      },
      resolve: {
        alias: {
          'vitepress-theme-hbs': path.join(__dirname, '../../src')
        }
      }
    },

    lang: 'en-US',
    title: 'vitepress-theme-hbs',
    description: 'Vue.js - The Progressive JavaScript Framework',

    themeConfig: {
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vue' },
        { icon: 'twitter', link: 'https://twitter.com/vuejs' },
        { icon: 'discord', link: 'https://discord.com/invite/HBherRA' }
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
  }
})()
