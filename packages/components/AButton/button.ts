import type { ExtractPropTypes } from 'vue'
import { CustomClassProp, CustomStyleProp, SizeProp, TypeProp, VariantProp } from '../composables'
import { CLICK_EVENT } from '../constants'

export const buttonProps = {
  cc: CustomClassProp,
  cs: CustomStyleProp,
  type: TypeProp,
  size: SizeProp,
  variant: VariantProp,
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
