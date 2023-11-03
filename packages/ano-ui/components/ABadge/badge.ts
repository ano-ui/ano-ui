import type { ExtractPropTypes, PropType } from 'vue'
import { useCustomClassProp, useCustomStyleProp, useTypeProp } from '../composables'
import { numericProp, truthProp } from '../utils'

export const useBadgeProp = useTypeProp

export const useBadgeOffsetProp = {
  type: Array as unknown as PropType<[string | number, string | number]>,
}

export const badgeProps = {
  customClass: useCustomClassProp,
  customStyle: useCustomStyleProp,
  type: useBadgeProp,
  color: String,
  dot: Boolean,
  offset: useBadgeOffsetProp,
  showZero: truthProp,
  max: Number,
  value: numericProp,
  processing: Boolean,
}

export type BadgeProps = ExtractPropTypes<typeof badgeProps>
