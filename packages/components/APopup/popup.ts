import type { ExtractPropTypes } from 'vue'
import { CustomClassProp, CustomStyleProp, PositionProp } from '../composables'
import { CLOSED_EVENT, CLOSE_EVENT, OPENED_EVENT, OPEN_EVENT, UPDATE_SHOW_EVENT } from '../constants'
import { isBoolean } from '../utils'

export const popupProps = {
  cc: CustomClassProp,
  cs: CustomStyleProp,
  show: Boolean,
  position: PositionProp,
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
