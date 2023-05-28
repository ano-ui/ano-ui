import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import { components, guides, navComponents } from './items'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Ano UI',
  description: '轻量级、漂亮、快速的 UnoCSS 组件库',
  lastUpdated: true,
  head: [
    ['meta', { property: 'og:title', content: 'Ano UI' }],
    [
      'meta',
      {
        property: 'og:description',
        content: '轻量级、漂亮、快速的 UnoCSS 组件库',
      },
    ],
    ['meta', { property: 'og:url', content: 'https://github.com/ano-ui/ano-ui' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
  ],

  themeConfig: {
    logo: '/logo.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', items: guides },
      { text: '组件', items: navComponents },
      {
        text: `v${version}`,
        items: [
          {
            text: '更新日志',
            link: 'https://github.com/ano-ui/ano-ui/releases',
          },
          {
            text: '贡献',
            link: 'https://github.com/ano-ui/ano-ui/blob/main/CONTRIBUTING.md',
          },
          {
            text: '行为准则',
            link: 'https://github.com/ano-ui/ano-ui/blob/main/CODE_OF_CONDUCT.md',
          },
        ],
      },
    ],

    search: {
      provider: 'local',
    },

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: guides,
        },
      ],
      '/components/': [
        {
          text: '组件',
          items: components,
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/ano-ui/ano-ui' }],

    editLink: {
      pattern: 'https://github.com/ano-ui/ano-ui/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    footer: {
      message: 'MIT Licensed',
      copyright: '版权所有 © 2023 年-至今 Neil & Ano UI 贡献者',
    },
  },

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
})
