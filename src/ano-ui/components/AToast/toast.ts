import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { CLOSE_EVENT } from '../constants'
import type { ToastOptions } from './types'

export const toastProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
}

export const toastEmits = {
  [CLOSE_EVENT]: () => true,
}

export type ToastProps = ExtractPropTypes<typeof toastProps>
export type ToastEmits = typeof toastEmits

export interface ToastInst {
  show: (options?: ToastOptions) => {}
  close: () => {}
}
