import type { ExtractPropTypes } from 'vue'
import { SizeProp, VariantProp, useBaseProps } from '../composables'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { isBoolean, isNumber, isString } from '../utils'

export type RadioValueType = string | number | boolean

export const radioProps = {
  ...useBaseProps(),
  size: SizeProp,
  variant: VariantProp,
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
