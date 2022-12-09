import type { ExtractPropTypes } from 'vue'
import { CustomClassProp, CustomStyleProp } from '../composables'
import { CLOSE_EVENT } from '../constants'

export const overlayProps = {
  cc: CustomClassProp,
  cs: CustomStyleProp,
}

export const overlayEmits = {
  [CLOSE_EVENT]: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type OverlayProps = ExtractPropTypes<typeof overlayProps>
export type OverlayEmits = typeof overlayEmits
