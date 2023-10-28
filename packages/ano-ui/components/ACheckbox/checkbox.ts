import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp, useSizeProp, useTypeProp, useVariantProp } from '../composables'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { isBoolean, isNumber, isString } from '../utils'

export const useCheckboxTypeProp = useTypeProp

export const useCheckboxSizeProp = useSizeProp

export type CheckboxValueType = string | number | boolean

export const checkboxProps = {
  customClass: useCustomClassProp,
  customStyle: useCustomStyleProp,
  type: useCheckboxTypeProp,
  size: useCheckboxSizeProp,
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
  labelDisabled: Boolean,
}

export const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmits = typeof checkboxEmits
