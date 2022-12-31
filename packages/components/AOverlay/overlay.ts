import type { ExtractPropTypes } from 'vue'
import { CustomClassProp, CustomStyleProp } from '../composables'
import { CLOSE_EVENT, OPEN_EVENT, UPDATE_SHOW_EVENT } from '../constants'
import { isBoolean } from '../utils'

export const overlayProps = {
  cc: CustomClassProp,
  cs: CustomStyleProp,
  show: Boolean,
  duration: {
    type: Number,
    default: 200,
  },
}

export const overlayEmits = {
  [UPDATE_SHOW_EVENT]: (value: boolean) => isBoolean(value),
  [OPEN_EVENT]: () => true,
  [CLOSE_EVENT]: () => true,
}

export type OverlayProps = ExtractPropTypes<typeof overlayProps>
export type OverlayEmits = typeof overlayEmits
