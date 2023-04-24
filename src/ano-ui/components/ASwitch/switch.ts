import type { ExtractPropTypes, PropType } from 'vue'
import { useCustomClassProp, useCustomStyleProp, useVariantProp } from '../composables'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { isBoolean, isNumber, isString } from '../utils'
import type { SwitchShape, SwitchSize, SwitchType } from './types'

export const useSwitchTypeProp = {
  type: String as PropType<SwitchType>,
  validator: (value: string) =>
    ['primary', 'success', 'info', 'warning', 'danger'].includes(value),
  default: 'primary',
}

export const useSwitchSizeProp = {
  type: String as PropType<SwitchSize>,
  validator: (value: string) =>
    ['mini', 'small', 'normal', 'large'].includes(value),
  default: 'normal',
}

export const useSwitchShapeProp = {
  type: String as PropType<SwitchShape>,
  validator: (value: string) =>
    ['square', 'round'].includes(value),
  default: 'round',
}

export type SwitchValueType = string | number | boolean

export const switchProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
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
