import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp, useSizeProp, useTypeProp, useVariantProp } from '../composables'
import { CLICK_EVENT, CLOSE_EVENT } from '../constants'
import { truthProp } from '../utils'

export const useTagTypeProp = useTypeProp

export const useTagSizeProp = useSizeProp

export const tagProps = {
  customClass: useCustomClassProp,
  customStyle: useCustomStyleProp,
  type: useTagTypeProp,
  size: useTagSizeProp,
  variant: useVariantProp,
  label: String,
  disabled: Boolean,
  show: truthProp,
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
