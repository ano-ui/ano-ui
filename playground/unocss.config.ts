import {
  defineConfig,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import {
  presetApplet,
  presetRemToRpx,
  transformerApplet,
  transformerAttributify,
} from 'unocss-applet'

import { presetAno } from 'ano-ui'

export default defineConfig({
  presets: [
    presetIcons({
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetApplet(),
    presetRemToRpx(),
    presetAttributify(),
    presetAno(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributify({ ignoreAttributes: ['block'] }),
    transformerApplet(),
  ],
})
