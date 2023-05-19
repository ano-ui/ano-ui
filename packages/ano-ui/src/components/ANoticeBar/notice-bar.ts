import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp, useTypeProp, useVariantProp } from '../composables'
import { CLOSE_EVENT } from '../constants'
import { truthProp } from '../utils'

export const noticeBarProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  type: useTypeProp,
  variant: useVariantProp,
  show: truthProp,
  loop: Boolean,
  icon: String,
  showClose: Boolean,
}

export const noticeBarEmits = {
  [CLOSE_EVENT]: () => true,
}

export type NoticeBarProps = ExtractPropTypes<typeof noticeBarProps>
export type NoticeBarEmits = typeof noticeBarEmits
