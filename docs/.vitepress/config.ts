import { defineConfig } from 'vitepress'

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
    [
      'meta',
      { property: 'og:url', content: 'https://github.com/ano-ui/ano-ui' },
    ],
    [
      'meta',
      { name: 'referrer', content: 'no-referrer' },
    ],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
  ],

  themeConfig: {
    logo: '/logo.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ano-ui/ano-ui' },
    ],

    footer: {
      message: 'MIT Licensed',
      copyright: '版权所有 © 2023 年-至今 Neil & Ano UI 贡献者',
    },
  },
})
