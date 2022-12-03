import type { ExtractPropTypes, InjectionKey } from 'vue'
import { BooleanProp, SizeProp } from '../composables'

export const radioGroupProps = {
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  size: SizeProp,
  disabled: BooleanProp,
}

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export interface RadioGroupContext extends RadioGroupProps {
  changeEvent: (val: RadioGroupProps['modelValue']) => void
}

export const radioGroupKey: InjectionKey<RadioGroupContext> = Symbol('radioGroupKey')

