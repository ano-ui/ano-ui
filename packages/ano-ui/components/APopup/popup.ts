import type { ExtractPropTypes } from 'vue'
import { PositionProp, useCustomClassProp, useCustomStyleProp } from '../composables'
import { CLOSED_EVENT, CLOSE_EVENT, OPENED_EVENT, OPEN_EVENT, UPDATE_SHOW_EVENT } from '../constants'
import { isBoolean, makeNumberProp } from '../utils'

export const popupProps = {
  customClass: useCustomClassProp,
  customStyle: useCustomStyleProp,
  ccc: useCustomClassProp,
  ccs: useCustomStyleProp,
  show: Boolean,
  position: PositionProp,
  duration: makeNumberProp(200),
}

export const popupEmits = {
  [UPDATE_SHOW_EVENT]: (value: boolean) => isBoolean(value),
  [OPEN_EVENT]: () => true,
  [CLOSE_EVENT]: () => true,
  [OPENED_EVENT]: () => true,
  [CLOSED_EVENT]: () => true,
}

export type PopupProps = ExtractPropTypes<typeof popupProps>
export type PopupEmits = typeof popupEmits
