import type { ExtractPropTypes } from 'vue'
import { SizeProp, VariantProp, useBaseProps } from '../composables'
import { CLICK_EVENT, CLOSE_EVENT } from '../constants'

export const tagProps = {
  ...useBaseProps(),
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
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof MouseEvent,
  [CLOSE_EVENT]: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type TagProps = ExtractPropTypes<typeof tagProps>
export type TagEmits = typeof tagEmits
