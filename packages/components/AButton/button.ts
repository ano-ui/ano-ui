import type { ExtractPropTypes, PropType } from 'vue'
import { useCustomClassProp, useCustomStyleProp, useVariantProp } from '../composables'
import { CLICK_EVENT } from '../constants'
import type { ButtonType } from './types'

export const useButtonProp = {
  type: String as PropType<ButtonType>,
  validator: (value: string) =>
    ['primary', 'success', 'info', 'warning', 'danger'].includes(value),
  default: 'primary',
}

export const useButtonSizeProp = {
  type: String as PropType<ButtonType>,
  validator: (value: string) =>
    ['mini', 'small', 'normal', 'large'].includes(value),
  default: 'normal',
}

export const buttonProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  type: useButtonProp,
  size: useButtonSizeProp,
  variant: useVariantProp,
  square: Boolean,
  round: Boolean,
  disabled: Boolean,
  icon: String,
  openType: String,
  block: Boolean,
  loading: Boolean,
}

export const buttonEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits
