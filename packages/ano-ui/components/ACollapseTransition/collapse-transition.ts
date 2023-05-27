import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { CLICK_EVENT } from '../constants'
import { makeNumberProp, makeStringProp } from '../utils'

export const collapseTransitionProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  show: Boolean,
  duration: makeNumberProp(200),
  timingFunction: makeStringProp('ease'),
}

export const collapseTransitionEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export type CollapseTransitionProps = ExtractPropTypes<typeof collapseTransitionProps>
export type CollapseTransitionEmits = typeof collapseTransitionEmits
