import type { ExtractPropTypes } from 'vue'
import { CLICK_EVENT } from '../constants'
import { useCustomClassProp, useCustomStyleProp } from '../composables'

export const aCollapseProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
}
export const aCollapseEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export type ACollapseProps = ExtractPropTypes<typeof aCollapseProps>
export type ACollapseEmits = typeof aCollapseEmits
