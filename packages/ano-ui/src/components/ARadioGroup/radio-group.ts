import type { ExtractPropTypes, PropType } from 'vue'
import { radioEmits, useRadioSizeProp } from '../ARadio'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import type { RadioGroupDirection } from './types'

export const useRadioGroupDirectionProp = {
  type: String as PropType<RadioGroupDirection>,
  validator: (value: string) => ['vertical', 'horizontal'].includes(value),
  default: 'vertical',
}

export const radioGroupProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  size: useRadioSizeProp,
  direction: useRadioGroupDirectionProp,
  min: {
    type: Number,
    default: -1,
  },
  max: {
    type: Number,
    default: -1,
  },
  disabled: Boolean,
}

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export const radioGroupEmits = radioEmits
export type RadioGroupEmits = typeof radioGroupEmits
