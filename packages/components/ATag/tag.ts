import type { ExtractPropTypes, PropType } from 'vue'
import { useCustomClassProp, useCustomStyleProp, useVariantProp } from '../composables'
import { CLICK_EVENT, CLOSE_EVENT } from '../constants'
import type { TagSize, TagType } from './types'

export const useTagTypeProp = {
  type: String as PropType<TagType>,
  validator: (value: string) =>
    ['primary', 'success', 'info', 'warning', 'danger'].includes(value),
  default: 'primary',
}
export const useTagSizeProp = {
  type: String as PropType<TagSize>,
  validator: (value: string) =>
    ['mini', 'small', 'normal', 'large'].includes(value),
  default: 'normal',
}

export const tagProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  type: useTagTypeProp,
  size: useTagSizeProp,
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
