import type { ExtractPropTypes } from 'vue'
import { CustomClassProp, CustomStyleProp, SizeProp, TypeProp, VariantProp } from '../composables'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { isBoolean, isNumber, isString } from '../utils'

export type CheckboxValueType = string | number | boolean

export const checkboxProps = {
  cc: CustomClassProp,
  ccc: CustomClassProp,
  cs: CustomStyleProp,
  ccs: CustomStyleProp,
  type: TypeProp,
  size: SizeProp,
  variant: VariantProp,
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
