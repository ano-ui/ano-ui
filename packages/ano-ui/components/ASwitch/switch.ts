import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp, useSizeProp, useTypeProp, useVariantProp } from '../composables'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { isBoolean, isNumber, isString, truthProp } from '../utils'

export const useSwitchTypeProp = useTypeProp

export const useSwitchSizeProp = useSizeProp

export type SwitchValueType = string | number | boolean

export const switchProps = {
  customClass: useCustomClassProp,
  customStyle: useCustomStyleProp,
  type: useSwitchTypeProp,
  size: useSwitchSizeProp,
  variant: useVariantProp,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: false,
  },
  activeValue: {
    type: [String, Number, Boolean],
    default: true,
  },
  activeLabel: String,
  inactiveValue: {
    type: [String, Number, Boolean],
    default: false,
  },
  inactiveLabel: String,
  showIcon: truthProp,
  icon: String,
  loading: Boolean,
  customIcon: Boolean,
}

export const switchEmits = {
  [UPDATE_MODEL_EVENT]: (val: SwitchValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val: SwitchValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

export type SwitchProps = ExtractPropTypes<typeof switchProps>
export type SwitchEmits = typeof switchEmits
