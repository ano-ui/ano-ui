import type { ExtractPropTypes, PropType } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { CLICK_EVENT } from '../constants'

export const cellProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  title: String,
  value: String,
  label: String,
  icon: String,
  arrow: {
    type: [Boolean, String] as PropType<boolean | 'right' | 'bottom'>,
  },
  center: Boolean,
  clickable: Boolean,
  disabled: Boolean,
  titleClass: useCustomClassProp,
  titleStyle: useCustomStyleProp,
  valueClass: useCustomClassProp,
  valueStyle: useCustomStyleProp,
  labelClass: useCustomClassProp,
  labelStyle: useCustomStyleProp,
}

export const cellEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export type CellProps = ExtractPropTypes<typeof cellProps>
export type CellEmits = typeof cellEmits
