import type { ExtractPropTypes } from 'vue'
import { SizeProp, VariantProp, useBaseProps } from '../composables'
import { CLICK_EVENT } from '../constants'

export const buttonProps = {
  ...useBaseProps(),
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
  [CLICK_EVENT]: () => true,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits
