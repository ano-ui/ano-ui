import type { ExtractPropTypes, PropType } from 'vue'
import { CustomClassProp, CustomStyleProp, SizeProp } from '../composables'
import { BLUR_EVENT, CHANGE_EVENT, CLEAR_EVENT, CLICK_EVENT, FOCUS_EVENT, INPUT_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { isString } from '../utils'

export type InputType = 'text' | 'number' | 'digit' | 'password' | 'textarea'

export const InputTypeProp = {
  type: String as PropType<InputType>,
  default: 'text',
}

export const inputProps = {
  cc: CustomClassProp,
  ccc: CustomClassProp,
  cs: CustomStyleProp,
  ccs: CustomStyleProp,
  type: InputTypeProp,
  size: SizeProp,
  disabled: Boolean,
  focus: Boolean,
  icon: String,
  suffixIcon: String,
  showClear: Boolean,
  placeholder: String,
  modelValue: String,
  maxlength: {
    type: Number,
    default: -1,
  },
  showWordLimit: Boolean,
}

export const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
  [FOCUS_EVENT]: () => true,
  [BLUR_EVENT]: () => true,
  [INPUT_EVENT]: (value: string) => isString(value),
  [CHANGE_EVENT]: (value: string) => isString(value),
  [CLEAR_EVENT]: () => true,
}

export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputEmits = typeof inputEmits
