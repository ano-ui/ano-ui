import type { ExtractPropTypes, PropType } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { CANCEL_EVENT, CLOSED_EVENT, CLOSE_EVENT, OPENED_EVENT, OPEN_EVENT, UPDATE_SHOW_EVENT } from '../constants'
import { isBoolean } from '../utils'
import type { ActionSheetAction } from './types'

export const useActionsProp = {
  type: Array as PropType<ActionSheetAction[]>,
  default: () => [],
}

export const actionSheetProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  ccc: useCustomClassProp,
  ccs: useCustomStyleProp,
  show: Boolean,
  actions: useActionsProp,
  title: String,
  cancelText: String,
  description: String,
  closeable: {
    type: Boolean,
    default: true,
  },
  duration: {
    type: Number,
    default: 300,
  },
  round: {
    type: Boolean,
    default: true,
  },
}

export const actionSheetEmits = {
  [UPDATE_SHOW_EVENT]: (value: boolean) => isBoolean(value),
  [OPEN_EVENT]: () => true,
  [CLOSE_EVENT]: () => true,
  [OPENED_EVENT]: () => true,
  [CLOSED_EVENT]: () => true,
  [CANCEL_EVENT]: () => true,
}

export type ActionSheetProps = ExtractPropTypes<typeof actionSheetProps>
export type ActionSheetEmits = typeof actionSheetEmits
