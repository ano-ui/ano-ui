import type { ExtractPropTypes } from 'vue'
import type { CheckboxValueType } from '../ACheckbox'
import { useCheckboxSizeProp } from '../ACheckbox'
import { useCustomClassProp, useCustomStyleProp, useDirectionProp } from '../composables'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { isArray, makeArrayProp, makeNumberProp } from '../utils'

export const useCheckboxGroupDirectionProp = useDirectionProp

export const checkboxGroupProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  modelValue: makeArrayProp<CheckboxValueType>(),
  size: useCheckboxSizeProp,
  direction: useCheckboxGroupDirectionProp,
  min: makeNumberProp(-1),
  max: makeNumberProp(-1),
  disabled: Boolean,
  labelDisabled: Boolean,
}

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>

export const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxValueType[]) => isArray(val),
  [CHANGE_EVENT]: (val: CheckboxValueType[]) => isArray(val),
}

export type CheckboxGroupEmits = typeof checkboxGroupEmits
