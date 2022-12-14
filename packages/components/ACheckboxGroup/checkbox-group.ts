import type { ExtractPropTypes } from 'vue'
import type { CheckboxValueType } from '../ACheckbox/checkbox'
import { CustomClassProp, CustomStyleProp, SizeProp } from '../composables'
import { UPDATE_MODEL_EVENT } from '../constants'
import { isArray } from '../utils'

export const checkboxGroupProps = {
  cc: CustomClassProp,
  cs: CustomStyleProp,
  modelValue: {
    type: Array<CheckboxValueType>,
    default: () => [],
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

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>

export const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxValueType[]) => isArray(val),
  change: (val: CheckboxValueType[]) => isArray(val),
}

export type CheckboxGroupEmits = typeof checkboxGroupEmits
