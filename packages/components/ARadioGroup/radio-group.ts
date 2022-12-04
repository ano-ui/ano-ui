import type { ExtractPropTypes } from 'vue'
import { radioEmits } from '../ARadio/radio'
import { CustomClassProp, CustomStyleProp, SizeProp } from '../composables'

export const radioGroupProps = {
  cc: CustomClassProp,
  cs: CustomStyleProp,
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  size: SizeProp,
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
