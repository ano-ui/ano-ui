import type { ExtractPropTypes, PropType } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import type { BadgeType } from './types'

export const useBadgeProp = {
  type: String as PropType<BadgeType>,
  validator: (value: string) =>
    ['primary', 'success', 'info', 'warning', 'danger'].includes(value),
  default: 'primary',
}

export const useBadgeOffsetProp = {
  type: Array as unknown as PropType<[string | number, string | number]>,
}

export const badgeProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  type: useBadgeProp,
  color: String,
  dot: Boolean,
  offset: useBadgeOffsetProp,
  showZero: {
    type: Boolean,
    default: true,
  },
  max: Number,
  value: [String, Number],
  processing: Boolean,
}

export type BadgeProps = ExtractPropTypes<typeof badgeProps>
