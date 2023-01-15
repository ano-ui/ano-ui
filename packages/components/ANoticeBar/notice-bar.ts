import type { ExtractPropTypes } from 'vue'
import { TypeProp, useCustomClassProp, useCustomStyleProp, useVariantProp } from '../composables'
import { CLOSE_EVENT } from '../constants'

export const noticeBarProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  type: TypeProp,
  variant: useVariantProp,
  show: {
    type: Boolean,
    default: true,
  },
  loop: Boolean,
  icon: String,
  showClose: Boolean,
}

export const noticeBarEmits = {
  [CLOSE_EVENT]: () => true,
}

export type NoticeBarProps = ExtractPropTypes<typeof noticeBarProps>
export type NoticeBarEmits = typeof noticeBarEmits
