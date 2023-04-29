import type { ExtractPropTypes } from 'vue'

import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { CLICK_EVENT } from '../constants'

export const transitionProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  name: {
    type: String,
    default: 'fade',
  },
  mode: String,
  show: Boolean,
  duration: {
    type: Number,
    default: 200,
  },
  timingFunction: {
    type: String,
    default: 'ease',
  },

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
