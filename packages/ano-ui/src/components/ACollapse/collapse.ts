import type { ExtractPropTypes, PropType } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { isArray, isNumber, isString } from '../utils/is'
import type { CollapseModelValue } from './types'

export const collapseProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  modelValue: {
    type: [String, Number, Array] as PropType<string | number | Array<string | number>>,
  },
  accordion: Boolean,
}

export const collapseEmits = {
  [UPDATE_MODEL_EVENT]: (val: CollapseModelValue) => isString(val) || isNumber(val) || isArray(val),
  [CHANGE_EVENT]: (val: CollapseModelValue) => isString(val) || isNumber(val) || isArray(val),
}

export type CollapseProps = ExtractPropTypes<typeof collapseProps>
export type CollapseEmits = typeof collapseEmits
