/**
 * This file is intended to be required from VitePress
 * consuming project's config file.
 *
 * It runs in Node.js.
 */

import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import { presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

// for local-linked development
const deps = ['vitepress-theme-blog']

export default defineConfig({
  vite: {
    ssr: {
      noExternal: deps,
    },
    optimizeDeps: {
      exclude: deps,
    },
    resolve: {
      alias: [
        {
          find: /^.*\/VPHome\.vue$/,
          replacement: fileURLToPath(
            new URL('../components/HomePage.vue', import.meta.url),
          ),
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('../components/Footer.vue', import.meta.url),
          ),
        },
      ],
    },
    plugins: [
      Unocss({
        shortcuts: {
          'bg-base': 'bg-[var(--vp-c-bg-soft)]',
          'base-card': 'p-6 bg-[var(--vp-c-bg-soft)] border border-[var(--vp-c-bg-soft)] rounded-lg transition',
        },
        presets: [
          presetUno(),
        ],
        transformers: [
          transformerDirectives(),
          transformerVariantGroup(),
        ],
      }),
    ],
  },
  themeConfig: {
    search: {
      provider: 'local',
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '标签', link: '/tags' },
      { text: '分类', link: '/categories' },
      { text: '友链', link: '/friends' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hongbusi' },
      { icon: 'twitter', link: 'https://x.com/Hongbusi' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present Hongbusi',
    },
  },
})
