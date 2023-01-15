import type { ExtractPropTypes } from 'vue'
import { radioEmits } from '../ARadio/radio'
import { useCustomClassProp, useCustomStyleProp, useSizeProp } from '../composables'

export const radioGroupProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  size: useSizeProp,
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
