import type { ExtractPropTypes } from 'vue'
import { TypeProp, useCustomClassProp, useCustomStyleProp, useSizeProp, useVariantProp } from '../composables'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { isBoolean, isNumber, isString } from '../utils'

export type RadioValueType = string | number | boolean

export const radioProps = {
  cc: useCustomClassProp,
  ccc: useCustomClassProp,
  cs: useCustomStyleProp,
  ccs: useCustomStyleProp,
  type: TypeProp,
  size: useSizeProp,
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
