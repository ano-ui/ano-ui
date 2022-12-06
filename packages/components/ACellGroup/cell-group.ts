import type { ExtractPropTypes } from 'vue'
import { CustomClassProp, CustomStyleProp } from '../composables'

export const cellGroupProps = {
  cc: CustomClassProp,
  cs: CustomStyleProp,
  divider: Boolean,
  card: {
    type: Boolean,
    default: true,
  },
  disabled: Boolean,
}

export type CellGroupProps = ExtractPropTypes<typeof cellGroupProps>
