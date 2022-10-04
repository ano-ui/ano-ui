import type { UserShortcuts } from 'unocss'
import type { Theme } from 'unocss/preset-uno'

import { baseShortcuts } from './base'
import { buttonShortcuts } from './button'
import { tagShortcuts } from './tag'
import { overlayShortcuts } from './overlay'
import { notifyShortcuts } from './notify'

export default [
  baseShortcuts,
  buttonShortcuts,
  tagShortcuts,
  overlayShortcuts,
  notifyShortcuts,
] as UserShortcuts<Theme>
