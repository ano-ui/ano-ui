import type { ExtractPropTypes } from 'vue'
import { CustomClassProp, CustomStyleProp } from '../composables'
import { CLOSE_EVENT, UPDATE_SHOW_EVENT } from '../constants'
import { isBoolean } from '../utils'

export const overlayProps = {
  cc: CustomClassProp,
  cs: CustomStyleProp,
  show: Boolean,
}

export const overlayEmits = {
  [CLOSE_EVENT]: (evt: MouseEvent) => evt instanceof MouseEvent,
  [UPDATE_SHOW_EVENT]: (value: boolean) => isBoolean(value),
}

export type OverlayProps = ExtractPropTypes<typeof overlayProps>
export type OverlayEmits = typeof overlayEmits
