import type { ExtractPropTypes } from 'vue'
import { SizeProp, VariantProp, useBaseProps } from '../composables'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { isBoolean, isNumber, isString } from '../utils'

export type SwitchValueType = string | number | boolean

export const switchProps = {
  ...useBaseProps(),
  size: SizeProp,
  variant: VariantProp,
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
  showIcon: {
    type: Boolean,
    default: true,
  },
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
