import type { ExtractPropTypes } from 'vue'
import { CustomClassProp, CustomStyleProp } from '../composables'
import { CLICK_EVENT } from '../constants'

export const overlayProps = {
  cc: CustomClassProp,
  cs: CustomStyleProp,
  show: Boolean,
}

export const overlayEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type OverlayProps = ExtractPropTypes<typeof overlayProps>
export type OverlayEmits = typeof overlayEmits
