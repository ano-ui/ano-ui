import type { Preset, SourceCodeTransformer } from 'unocss'

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { isH5, isMp } from '@uni-helper/uni-env'

import { presetApplet, presetRemRpx, transformerApplet, transformerAttributify } from 'unocss-applet'
import { presetAno } from 'ano-ui'

const presets: Preset[] = []

const transformers: SourceCodeTransformer[] = []
const darkMode = isH5 ? 'class' : 'media'

if (isMp) {
  presets.push(presetApplet({ dark: darkMode }))
  presets.push(presetRemRpx())
  transformers.push(transformerAttributify({ ignoreAttributes: ['block', 'fixed'] }))
  transformers.push(transformerApplet())
}
else {
  presets.push(presetUno({ dark: darkMode }))
  presets.push(presetAttributify())
  presets.push(presetRemRpx({ mode: 'rpx2rem' }))
}

export default defineConfig({
  // cli: {
  //   entry: {
  //     patterns: ['components/**/*.{vue,ts}'],
  //     outFile: 'dist/styles.css',
  //   },
  // },
  presets: [
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    ...presets,
    presetAno(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup(), ...transformers],
  theme: {
    preflightRoot: isMp ? ['page,::before,::after'] : undefined,
  },
  rules: [
    [
      'p-safe',
      {
        padding:
          'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
      },
    ],
    ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
    ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
  ],
})
