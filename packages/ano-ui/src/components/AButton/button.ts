import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp, useSizeProp, useTypeProp, useVariantProp } from '../composables'
import { CLICK_EVENT } from '../constants'

export const useButtonTypeProp = useTypeProp

export const useButtonSizeProp = useSizeProp

export const buttonProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  type: useButtonTypeProp,
  size: useButtonSizeProp,
  variant: useVariantProp,
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
