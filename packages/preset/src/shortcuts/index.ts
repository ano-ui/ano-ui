import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import { baseShortcuts } from './base'
import { buttonShortcuts } from './button'
import { tagShortcuts } from './tag'
import { overlayShortcuts } from './overlay'
import { notifyShortcuts } from './notify'
import { noticeBarShortcuts } from './noticeBar'
import { inputShortcuts } from './input'
import { switchShortcuts } from './switch'
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
  switchShortcuts,
  cellShortcuts,
  cellGroupShortcuts,
] as UserShortcuts<Theme>
