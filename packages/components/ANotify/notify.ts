import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp, useVariantProp } from '../composables'
import { CLOSE_EVENT } from '../constants'

export const notifyProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  variant: useVariantProp,
}

export const notifyEmits = {
  [CLOSE_EVENT]: () => true,
}

export type NotifyProps = ExtractPropTypes<typeof notifyProps>
export type NotifyEmits = typeof notifyEmits
