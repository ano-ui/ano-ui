import type { ExtractPropTypes } from 'vue'
import { CustomClassProp, CustomStyleProp, SizeProp, TypeProp, VariantProp } from '../composables'
import { CLICK_EVENT, CLOSE_EVENT } from '../constants'

export const tagProps = {
  cc: CustomClassProp,
  cs: CustomStyleProp,
  type: TypeProp,
  size: SizeProp,
  variant: VariantProp,
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
