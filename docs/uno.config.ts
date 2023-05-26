import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

import { presetAno } from 'ano-ui'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetAttributify(),
    presetAno(),
  ],
})
