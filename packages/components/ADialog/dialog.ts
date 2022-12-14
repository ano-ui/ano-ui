import type { ExtractPropTypes } from 'vue'
import { CustomClassProp, CustomStyleProp } from '../composables'
import { CANCEL_EVENT, CONFIRM_EVENT } from '../constants'

export const dialogProps = {
  cc: CustomClassProp,
  cs: CustomStyleProp,
  show: Boolean,
  title: String,
  message: String,
  showConfirmButton: Boolean,
  showCancelButton: Boolean,
  confirmButtonText: String,
  cancelButtonText: String,
}

export const dialogEmits = {
  [CONFIRM_EVENT]: () => true,
  [CANCEL_EVENT]: () => true,
}

export type DialogProps = ExtractPropTypes<typeof dialogProps>
export type DialogEmits = typeof dialogEmits
