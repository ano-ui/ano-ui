import type { UserShortcuts } from 'unocss'
import type { Theme } from 'unocss/preset-uno'

import { baseShortcuts } from './base'
import { buttonShortcuts } from './button'
import { tagShortcuts } from './tag'
import { overlayShortcuts } from './overlay'
import { notifyShortcuts } from './notify'
import { noticeBarShortcuts } from './noticeBar'
import { inputShortcuts } from './input'
import { cellShortcuts } from './cell'
import { cellGroupShortcuts } from './cellGroup'

export default [
  baseShortcuts,
  buttonShortcuts,
  tagShortcuts,
  overlayShortcuts,
  notifyShortcuts,
  noticeBarShortcuts,
  inputShortcuts,
  cellShortcuts,
  cellGroupShortcuts,
] as UserShortcuts<Theme>
