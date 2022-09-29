import type { Preset } from 'unocss'
import rules from './rules'
import shortcuts from './shortcuts'
import theme from './theme'

const colors = Object.keys(theme.colors!)
const size = ['xs', 'sm', 'md', 'lg']

export function presetAno(): Preset {
  return {
    name: '@ano-uni/preset',
    theme,
    shortcuts,
    rules,
    safelist: [
      ...colors.map(c => `bg-${c}`),
      ...colors.map(c => `text-${c}`),
      ...colors.map(c => `border-${c}`),

      ...size.map(c => `a-button-${c}`),

    ],
  }
}
