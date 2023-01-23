import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import { baseShortcuts } from './base'
// basic
import { buttonShortcuts } from './button'
import { cellShortcuts } from './cell'
import { cellGroupShortcuts } from './cellGroup'
import { popupShortcuts } from './popup'
import { tagShortcuts } from './tag'
import { toastShortcuts } from './toast'
import { transitionShortcuts } from './transition'

// form
import { checkboxShortcuts } from './checkbox'
import { checkboxGroupShortcuts } from './checkboxGroup'
import { fieldShortcuts } from './field'
import { radioShortcuts } from './radio'
import { radioGroupShortcuts } from './radioGroup'
import { switchShortcuts } from './switch'

// action
import { actionSheetShortcuts } from './actionSheet'
import { dialogShortcuts } from './dialog'
import { overlayShortcuts } from './overlay'
import { notifyShortcuts } from './notify'
import { noticeBarShortcuts } from './noticeBar'

export default [
  baseShortcuts,
  buttonShortcuts,
  cellShortcuts,
  cellGroupShortcuts,
  popupShortcuts,
  tagShortcuts,
  toastShortcuts,
  transitionShortcuts,

  checkboxShortcuts,
  checkboxGroupShortcuts,
  fieldShortcuts,
  radioShortcuts,
  radioGroupShortcuts,
  switchShortcuts,

  actionSheetShortcuts,
  dialogShortcuts,
  overlayShortcuts,
  notifyShortcuts,
  noticeBarShortcuts,
] as UserShortcuts<Theme>
