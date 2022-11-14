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

const isMP = process.env.UNI_PLATFORM?.startsWith('mp-')

export default defineConfig({
  presets: [
    presetIcons({
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetApplet({ enable: isMP }),
    presetRemToRpx({ enable: isMP }),
    presetAttributify(),

    presetAno(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributify({ enable: isMP }),
    transformerApplet({ enable: isMP }),
  ],
})
