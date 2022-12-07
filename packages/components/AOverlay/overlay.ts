import type { ExtractPropTypes } from 'vue'
import { AlignProp, CustomClassProp, CustomStyleProp } from '../composables'
import { CLOSE_EVENT } from '../constants'

export const overlayProps = {
  cc: CustomClassProp,
  cs: CustomStyleProp,
  show: Boolean,
  align: AlignProp,
}

export const overlayEmits = {
  [CLOSE_EVENT]: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type OverlayProps = ExtractPropTypes<typeof overlayProps>
export type OverlayEmits = typeof overlayEmits
