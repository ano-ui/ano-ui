import type { ExtractPropTypes, PropType } from 'vue'
import { useCustomClassProp, useCustomStyleProp, useVariantProp } from '../composables'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { isBoolean, isNumber, isString } from '../utils'
import type { RadioShape, RadioSize, RadioType } from './types'

export const useRadioTypeProp = {
  type: String as PropType<RadioType>,
  validator: (value: string) =>
    ['primary', 'success', 'info', 'warning', 'danger'].includes(value),
  default: 'primary',
}

export const useRadioSizeProp = {
  type: String as PropType<RadioSize>,
  validator: (value: string) =>
    ['mini', 'small', 'normal', 'large'].includes(value),
  default: 'normal',
}

export const useRadioShapeProp = {
  type: String as PropType<RadioShape>,
  validator: (value: string) =>
    ['square', 'round'].includes(value),
  default: 'round',
}

export type RadioValueType = string | number | boolean

export const radioProps = {
  cc: useCustomClassProp,
  ccc: useCustomClassProp,
  cs: useCustomStyleProp,
  ccs: useCustomStyleProp,
  type: useRadioTypeProp,
  size: useRadioSizeProp,
  shape: useRadioShapeProp,
  variant: useVariantProp,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  value: {
    type: [String, Number, Boolean],
    default: '',
  },
  label: String,
  icon: String,
  customIcon: Boolean,
}

export const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val: RadioValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val: RadioValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = typeof radioEmits
