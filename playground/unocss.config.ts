import {
  defineConfig,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import {
  presetApplet,
  presetRemRpx,
  transformerApplet,
  transformerAttributify,
} from 'unocss-applet'

import { presetAno } from 'ano-ui'

const isApplet = process.env?.UNI_PLATFORM?.startsWith('mp') ?? false

export default defineConfig({
  presets: [
    presetIcons({
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetApplet({ enable: isApplet }),
    presetRemRpx({ mode: isApplet ? 'rem2rpx' : 'rpx2rem' }),
    presetAttributify(),
    presetAno(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributify({ enable: isApplet, ignoreAttributes: ['block'] }),
    transformerApplet({ enable: isApplet }),
  ],
})
