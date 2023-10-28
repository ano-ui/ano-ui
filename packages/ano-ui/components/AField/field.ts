import type { ExtractPropTypes, PropType } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { BLUR_EVENT, CHANGE_EVENT, CLEAR_EVENT, CLICK_EVENT, FOCUS_EVENT, INPUT_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { isString, makeNumberProp } from '../utils'
import type { FieldLabelAlign, FieldType } from './types'

export const useFieldTypeProp = {
  type: String as PropType<FieldType>,
  validator: (value: string) => ['text', 'number', 'digit', 'password', 'textarea'].includes(value),
  default: 'text',
}

export const useFieldLabelAlignProp = {
  type: String as PropType<FieldLabelAlign>,
  validator: (value: string) => ['left', 'right', 'top', 'center'].includes(value),
  default: 'left',
}

export const useFieldInputAlignProp = {
  type: String as PropType<FieldLabelAlign>,
  validator: (value: string) => ['left', 'right'].includes(value),
  default: 'left',
}

export const fieldProps = {
  customClass: useCustomClassProp,
  customStyle: useCustomStyleProp,
  type: useFieldTypeProp,
  label: String,
  labelAlign: useFieldLabelAlignProp,
  inputAlign: useFieldInputAlignProp,
  disabled: Boolean,
  focus: Boolean,
  icon: String,
  suffixIcon: String,
  showClear: Boolean,
  placeholder: String,
  modelValue: String,
  maxlength: makeNumberProp(-1),
  showWordLimit: Boolean,
}

export const fieldEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
  [FOCUS_EVENT]: () => true,
  [BLUR_EVENT]: () => true,
  [INPUT_EVENT]: (value: string) => isString(value),
  [CHANGE_EVENT]: (value: string) => isString(value),
  [CLEAR_EVENT]: () => true,
}

export type FieldProps = ExtractPropTypes<typeof fieldProps>
export type FieldEmits = typeof fieldEmits
