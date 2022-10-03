import type { Preset } from 'unocss'
import rules from './rules'
import shortcuts from './shortcuts'
import theme from './theme'

const colors = Object.keys(theme.colors!)
const shortcutsArray = shortcuts as []

export function presetAno(): Preset {
  return {
    name: '@ano-ui/preset',
    theme,
    shortcuts,
    rules,
    safelist: [
      // common
      ...colors.map(c => `a-${c}`),

      // shortcuts
      ...shortcutsArray.map(s => Object.keys(s)).flat(),
    ],
  }
}
