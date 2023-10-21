import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'

export const cellGroupProps = {
  customClass: useCustomClassProp,
  customStyle: useCustomStyleProp,
  divider: Boolean,
  inset: Boolean,
  arrow: Boolean,
  center: Boolean,
  clickable: Boolean,
  title: String,
}

export type CellGroupProps = ExtractPropTypes<typeof cellGroupProps>
