import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { CLICK_EVENT } from '../constants'

export const collapseTransitionProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  show: Boolean,
  duration: {
    type: Number,
    default: 200,
  },
}

export const collapseTransitionEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export type CollapseTransitionProps = ExtractPropTypes<typeof collapseTransitionProps>
export type CollapseTransitionEmits = typeof collapseTransitionEmits
