import type { ExtractPropTypes, PropType } from 'vue'
import type { CheckboxValueType } from '../ACheckbox/checkbox'
import { useCheckboxSizeProp } from '../ACheckbox/checkbox'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { UPDATE_MODEL_EVENT } from '../constants'
import { isArray } from '../utils'
import type { CheckboxGroupDirection } from './types'

export const useCheckboxGroupDirectionProp = {
  type: String as PropType<CheckboxGroupDirection>,
  validator: (value: string) => ['vertical', 'horizontal'].includes(value),
  default: 'vertical',
}

export const checkboxGroupProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  modelValue: {
    type: Array<CheckboxValueType>,
    default: () => [],
  },
  size: useCheckboxSizeProp,
  direction: useCheckboxGroupDirectionProp,
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

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>

export const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxValueType[]) => isArray(val),
  change: (val: CheckboxValueType[]) => isArray(val),
}

export type CheckboxGroupEmits = typeof checkboxGroupEmits
