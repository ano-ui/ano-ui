import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { CANCEL_EVENT, CLOSED_EVENT, CLOSE_EVENT, OPENED_EVENT, OPEN_EVENT, UPDATE_SHOW_EVENT } from '../constants'
import { isBoolean, makeArrayProp, makeNumberProp, truthProp } from '../utils'
import type { ActionSheetAction } from './types'

export const actionSheetProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  ccc: useCustomClassProp,
  ccs: useCustomStyleProp,
  show: Boolean,
  actions: makeArrayProp<ActionSheetAction>(),
  title: String,
  cancelText: String,
  description: String,
  closeable: truthProp,
  duration: makeNumberProp(300),
  round: truthProp,
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
