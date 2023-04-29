import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { CLICK_EVENT } from '../constants'

export const aCollapseTransitionProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  show: Boolean,
  duration: {
    type: Number,
    default: 200,
  },
}

export type ACollapseTransitionProps = ExtractPropTypes<typeof aCollapseTransitionProps>

export const aCollapseTransitionEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export type ACollapseTransitionItemEmits = typeof aCollapseTransitionEmits
