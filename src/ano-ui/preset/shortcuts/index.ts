import type { UserShortcuts } from 'unocss'
import type { Theme } from '@unocss/preset-mini'

import { baseShortcuts } from './base'

// basic
import { buttonShortcuts } from './button'
import { cellShortcuts } from './cell'
import { cellGroupShortcuts } from './cellGroup'
import { popupShortcuts } from './popup'
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

// display
import { tagShortcuts } from './tag'
import { noticeBarShortcuts } from './noticeBar'
import { badgeShortcuts } from './badge'

// navigation


export const shortcuts: UserShortcuts<Theme> = [
  baseShortcuts,
  // basic
  buttonShortcuts,
  cellShortcuts,
  cellGroupShortcuts,
  popupShortcuts,
  toastShortcuts,
  transitionShortcuts,
  badgeShortcuts,

  // form
  checkboxShortcuts,
  checkboxGroupShortcuts,
  fieldShortcuts,
  radioShortcuts,
  radioGroupShortcuts,
  switchShortcuts,

  // action
  actionSheetShortcuts,
  dialogShortcuts,
  overlayShortcuts,
  notifyShortcuts,

  // display
  tagShortcuts,
  noticeBarShortcuts,

  // navigation
]
