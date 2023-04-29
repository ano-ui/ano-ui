import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { CLICK_EVENT } from '../constants'

export const cellProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  title: String,
  value: String,
  label: String,
  icon: String,
  arrow: Boolean,
  clickable: Boolean,
}

export const cellEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export type CellProps = ExtractPropTypes<typeof cellProps>
export type CellEmits = typeof cellEmits
