import type { ExtractPropTypes } from 'vue'
import { CustomClassProp, CustomStyleProp } from '../composables'
import { CLICK_EVENT } from '../constants'

export const cellProps = {
  cc: CustomClassProp,
  cs: CustomStyleProp,
  title: String,
  content: String,
  description: String,
  disabled: Boolean,
  icon: String,
  arrow: Boolean,
}

export const cellEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export type CellProps = ExtractPropTypes<typeof cellProps>
export type CellEmits = typeof cellEmits
