import type { UserShortcuts } from 'unocss'
import type { Theme } from 'unocss/preset-uno'

import { baseShortcuts } from './base'
import { buttonShortcuts } from './button'

export default [
  baseShortcuts,
  buttonShortcuts,
] as UserShortcuts<Theme>
