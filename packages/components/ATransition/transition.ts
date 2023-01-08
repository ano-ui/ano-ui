import type { ExtractPropTypes } from 'vue'
import { useBaseProps } from '../composables'
import { CLICK_EVENT } from '../constants'

export const transitionProps = {
  ...useBaseProps(),
  name: String,
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
