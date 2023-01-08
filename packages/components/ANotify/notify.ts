import type { ExtractPropTypes } from 'vue'
import { CustomClassProp, CustomStyleProp, VariantProp } from '../composables'
import { CLOSE_EVENT } from '../constants'

export const notifyProps = {
  cc: CustomClassProp,
  cs: CustomStyleProp,
  variant: VariantProp,
}

export const notifyEmits = {
  [CLOSE_EVENT]: () => true,
}

export type NotifyProps = ExtractPropTypes<typeof notifyProps>
export type NotifyEmits = typeof notifyEmits
