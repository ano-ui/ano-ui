import type { ExtractPropTypes } from 'vue'

import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { CLICK_EVENT } from '../constants'
import { makeNumberProp, makeStringProp } from '../utils'

export const transitionProps = {
  customClass: useCustomClassProp,
  customStyle: useCustomStyleProp,
  name: makeStringProp('fade'),
  mode: String,
  show: Boolean,
  duration: makeNumberProp(200),
  timingFunction: makeStringProp('ease'),

  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
}

export const transitionEmits = {
  beforeEnter: () => true,
  enter: () => true,
  afterEnter: () => true,
  beforeLeave: () => true,
  leave: () => true,
  afterLeave: () => true,
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export type TransitionProps = ExtractPropTypes<typeof transitionProps>
export type TransitionEmits = typeof transitionEmits
