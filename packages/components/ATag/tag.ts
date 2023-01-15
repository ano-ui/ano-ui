import type { ExtractPropTypes } from 'vue'
import { TypeProp, useCustomClassProp, useCustomStyleProp, useSizeProp, useVariantProp } from '../composables'
import { CLICK_EVENT, CLOSE_EVENT } from '../constants'

export const tagProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  type: TypeProp,
  size: useSizeProp,
  variant: useVariantProp,
  label: String,
  disabled: Boolean,
  show: {
    type: Boolean,
    default: true,
  },
  closable: Boolean,
  icon: String,
  iconOnly: Boolean,
}

export const tagEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
  [CLOSE_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export type TagProps = ExtractPropTypes<typeof tagProps>
export type TagEmits = typeof tagEmits
