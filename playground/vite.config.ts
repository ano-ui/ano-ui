import { resolve } from 'path'
import { defineConfig } from 'vite'
import Uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    // Components({
    //   include: [/\.vue$/, /\.vue\?vue/],
    //   dts: 'src/components.d.ts',
    //   resolvers: [
    //     // #ifndef H5 || APP-PLUS
    //     {
    //       type: 'component',
    //       resolve: (name: string) => {
    //         if (name.match(/^A[A-Z]/))
    //           return { name, from: `ano-ui/components/${name}/${name}.vue` }
    //       },
    //     },
    //     // #endif
    //     // #ifdef H5 || APP-PLUS
    //     {
    //       type: 'component',
    //       resolve: (name: string) => {
    //         if (name.match(/^A[A-Z]/))
    //           return { name, from: 'ano-ui' }
    //       },
    //     },
    //     // #endif
    //   ],
    // }),
    Uni(),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    UnoCSS(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'pinia',
        'uni-app',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
      ],
      vueTemplate: true,
    }),
  ],
})
