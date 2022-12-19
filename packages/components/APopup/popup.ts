import type { ExtractPropTypes } from 'vue'
import { CustomClassProp, CustomStyleProp, PositionProp } from '../composables'
import { CLOSED_EVENT, CLOSE_EVENT, OPENED_EVENT, OPEN_EVENT } from '../constants'

export const popupProps = {
  cc: CustomClassProp,
  cs: CustomStyleProp,
  show: Boolean,
  position: PositionProp,
}

export const popupEmits = {
  [OPEN_EVENT]: () => true,
  [CLOSE_EVENT]: () => true,
  [OPENED_EVENT]: () => true,
  [CLOSED_EVENT]: () => true,
}

export type PopupProps = ExtractPropTypes<typeof popupProps>
export type PopupEmits = typeof popupEmits
