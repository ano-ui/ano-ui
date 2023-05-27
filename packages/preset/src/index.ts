import type { Preset } from 'unocss'
import type { Theme } from '@unocss/preset-mini'
import { rules } from './rules'
import { shortcuts } from './shortcuts'
import { theme } from './theme'

export const colors = Object.keys(theme.colors!)

export function presetAno(): Preset<Theme> {
  return {
    name: '@ano-ui/preset',
    theme,
    shortcuts,
    rules,
    safelist: [
      // common
      ...colors.map(c => `a-${c}`),
      ...colors.map(c => `!a-${c}`),

      // shortcuts
      ...Object.keys(shortcuts),
    ],
  }
}
