import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { CLICK_EVENT } from '../constants'
import { makeNumberProp } from '../utils'

export const overlayProps = {
  customClass: useCustomClassProp,
  customStyle: useCustomStyleProp,
  show: Boolean,
  duration: makeNumberProp(200),
}

export const overlayEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export type OverlayProps = ExtractPropTypes<typeof overlayProps>
export type OverlayEmits = typeof overlayEmits
