import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from '@uni-helper/vite-plugin-uni-components'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'

import { AnoDevResolver } from './resolvers'

export default defineConfig({
  base: '/ui/',
  root: process.cwd(),
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Components({
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
      resolvers: [AnoDevResolver(process.env.NODE_ENV === 'development' ? 'serve' : 'build')],
    }),
    UniPages({
      routeBlockLang: 'yaml',
      minify: true,
    }),
    UniManifest({ minify: true }),
    Uni(),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    UnoCSS(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'pinia', 'uni-app'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/stores'],
      vueTemplate: true,
    }),
  ],
})
