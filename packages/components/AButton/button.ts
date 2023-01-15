import type { ExtractPropTypes, PropType } from 'vue'
import { useCustomClassProp, useCustomStyleProp, useSizeProp, useVariantProp } from '../composables'
import { CLICK_EVENT } from '../constants'

export type ButtonType = 'primary' | 'success' | 'info' | 'warning' | 'danger'

export const useButtonProp = {
  type: String as PropType<ButtonType>,
  validator: (value: string) =>
    ['primary', 'success', 'info', 'warning', 'danger'].includes(value),
  default: 'primary',
}

export const buttonProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  type: useButtonProp,
  size: useSizeProp,
  variant: useVariantProp,
  disabled: Boolean,
  icon: String,
  iconOnly: Boolean,
  openType: String,
  block: Boolean,
  loading: Boolean,
}

export const buttonEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits
