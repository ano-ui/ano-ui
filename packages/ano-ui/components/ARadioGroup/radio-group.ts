import type { ExtractPropTypes } from 'vue'
import { radioEmits, useRadioSizeProp } from '../ARadio'
import { useCustomClassProp, useCustomStyleProp, useDirectionProp } from '../composables'
import { makeNumberProp } from '../utils'

export const useRadioGroupDirectionProp = useDirectionProp
export const radioGroupProps = {
  customClass: useCustomClassProp,
  customStyle: useCustomStyleProp,
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  size: useRadioSizeProp,
  direction: useRadioGroupDirectionProp,
  min: makeNumberProp(-1),
  max: makeNumberProp(-1),
  disabled: Boolean,
}

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export const radioGroupEmits = radioEmits
export type RadioGroupEmits = typeof radioGroupEmits
