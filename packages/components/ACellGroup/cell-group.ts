import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'

export const cellGroupProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  divider: Boolean,
  card: {
    type: Boolean,
    default: true,
  },
  disabled: Boolean,
}

export type CellGroupProps = ExtractPropTypes<typeof cellGroupProps>
