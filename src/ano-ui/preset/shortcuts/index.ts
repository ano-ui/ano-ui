import type { UserShortcuts } from 'unocss'
import type { Theme } from '@unocss/preset-mini'

import { baseShortcuts } from './base'

// basic
import { toastShortcuts } from './toast'

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
import { navBarShortcuts } from './navBar'

export const shortcuts: UserShortcuts<Theme> = [
  baseShortcuts,
  // basic
  toastShortcuts,
  badgeShortcuts,

  // action
  actionSheetShortcuts,
  dialogShortcuts,
  overlayShortcuts,
  notifyShortcuts,

  // display
  tagShortcuts,
  noticeBarShortcuts,

  // navigation
  navBarShortcuts,
]
