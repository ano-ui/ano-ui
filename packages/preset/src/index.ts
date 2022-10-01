import type { Preset } from 'unocss'
import rules from './rules'
import shortcuts from './shortcuts'
import theme from './theme'

const colors = Object.keys(theme.colors!)

export function presetAno(): Preset {
  return {
    name: '@ano-ui/preset',
    theme,
    shortcuts,
    rules,
    safelist: [
      // common
      ...colors.map(c => `bg-${c}`),
      ...colors.map(c => `text-${c}`),
      ...colors.map(c => `border-${c}`),

    ],
  }
}
