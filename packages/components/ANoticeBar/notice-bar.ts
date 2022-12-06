import type { ExtractPropTypes } from 'vue'
import { VariantProp, useBaseProps } from '../composables'
import { CLOSE_EVENT } from '../constants'

export const noticeBarProps = {
  ...useBaseProps(),
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
  [CLOSE_EVENT]: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type NoticeBarProps = ExtractPropTypes<typeof noticeBarProps>
export type NoticeBarEmits = typeof noticeBarEmits
