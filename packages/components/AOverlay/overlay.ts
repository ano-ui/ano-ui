import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { CLICK_EVENT } from '../constants'

export const overlayProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  show: Boolean,
  duration: {
    type: Number,
    default: 200,
  },
}

export const overlayEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export type OverlayProps = ExtractPropTypes<typeof overlayProps>
export type OverlayEmits = typeof overlayEmits
