import type { ExtractPropTypes } from 'vue'
import { CustomClassProp, CustomStyleProp } from '../composables'
import { isBoolean } from '../utils'

export const dialogProps = {
  cc: CustomClassProp,
  cs: CustomStyleProp,
  show: Boolean,
  title: String,
  message: String,
  confirmText: String,
  cancelText: String,
}

export const dialogEmits = {
  'confirm': () => true,
  'cancel': () => true,
  'update:show': (value: boolean) => isBoolean(value),
}

export type DialogProps = ExtractPropTypes<typeof dialogProps>
export type DialogEmits = typeof dialogEmits
