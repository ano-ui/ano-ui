import type { ExtractPropTypes, PropType } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { makeRequiredProp } from '../utils'

export const collapseItemProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  title: String,
  name: {
    ...makeRequiredProp([String, Number] as PropType<string | number>),
    default: '',
  },
  icon: String,
  disabled: Boolean,
  value: String,
  label: String,
}

export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>
