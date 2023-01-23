import type { ExtractPropTypes, PropType } from 'vue'
import { useCustomClassProp, useCustomStyleProp, useVariantProp } from '../composables'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { isBoolean, isNumber, isString } from '../utils'
import type { CheckboxShape, CheckboxSize, CheckboxType } from './types'

export const useCheckboxTypeProp = {
  type: String as PropType<CheckboxType>,
  validator: (value: string) =>
    ['primary', 'success', 'info', 'warning', 'danger'].includes(value),
  default: 'primary',
}

export const useCheckboxSizeProp = {
  type: String as PropType<CheckboxSize>,
  validator: (value: string) =>
    ['mini', 'small', 'normal', 'large'].includes(value),
  default: 'normal',
}

export const useCheckboxShapeProp = {
  type: String as PropType<CheckboxShape>,
  validator: (value: string) =>
    ['default', 'square', 'round'].includes(value),
  default: 'default',
}

export type CheckboxValueType = string | number | boolean

export const checkboxProps = {
  cc: useCustomClassProp,
  ccc: useCustomClassProp,
  cs: useCustomStyleProp,
  ccs: useCustomStyleProp,
  type: useCheckboxTypeProp,
  size: useCheckboxSizeProp,
  shape: useCheckboxShapeProp,
  variant: useVariantProp,
  disabled: Boolean,
  modelValue: {
    type: [Number, String, Boolean],
    default: undefined,
  },
  value: {
    type: [String, Number, Boolean],
    default: '',
  },
  label: String,
  icon: String,
  customIcon: Boolean,
}

export const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmits = typeof checkboxEmits
