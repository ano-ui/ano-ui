import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-plugin'

export default antfu(
  {
    ignores: [
      '**/manifest.json',
      '**/pages.json',
    ],
  },
  unocss.configs.flat,
)
