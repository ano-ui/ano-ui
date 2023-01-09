import type { ExtractPropTypes } from 'vue'
import { CustomClassProp, CustomStyleProp } from '../composables'
import { CLOSE_EVENT } from '../constants'

export const toastProps = {
  cc: CustomClassProp,
  cs: CustomStyleProp,
}

export const toastEmits = {
  [CLOSE_EVENT]: () => true,
}

export type ToastProps = ExtractPropTypes<typeof toastProps>
export type ToastEmits = typeof toastEmits
