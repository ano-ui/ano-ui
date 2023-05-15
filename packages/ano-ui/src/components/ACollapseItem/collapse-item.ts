import type { ExtractPropTypes, PropType } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'

export const collapseItemProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  title: String,
  name: {
    type: [String, Number] as PropType<string | number>,
    required: true,
    default: '',
  },
  icon: String,
  disabled: Boolean,
  value: String,
  label: String,
}

export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>
