import type { ExtractPropTypes } from 'vue'
import { CustomClassProp, CustomStyleProp, TypeProp, VariantProp } from '../composables'
import { CLOSE_EVENT } from '../constants'

export const noticeBarProps = {
  cc: CustomClassProp,
  cs: CustomStyleProp,
  type: TypeProp,
  variant: VariantProp,
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
