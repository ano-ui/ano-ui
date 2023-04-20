import { resolve } from 'node:path'
import fs from 'node:fs'
import { defineConfig } from 'vite'
import Uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from '@uni-helper/vite-plugin-uni-components'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import { isCI } from 'std-env'

if (!fs.existsSync('./src/ano-ui') && !isCI) {
  try {
    fs.symlinkSync('../../packages/ano-ui/components', './ano-ui')
  }
  catch (error: any) {
    console.error('ano-ui: Create symlink error, Please manually create and restart to obtain HMR')
    console.error(`\n\tcd ${resolve(__dirname, 'src')}\n\tnode -e "fs.symlinkSync(\'../../packages/ano-ui/components\', \'./ano-ui\')"\n`)
    console.error(`${error.message}\n`)
  }
}

// https://vitejs.dev/config/
export default defineConfig({
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
      dirs: ['src/components', isCI ? '../packages/ano-ui/src/components' : 'src/ano-ui'],
    }),
    UniPages({ routeBlockLang: 'yaml' }),
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
