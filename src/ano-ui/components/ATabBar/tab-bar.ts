import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { tabBarItemEmits } from '../ATabBarItem'

export const tabBarProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  modelValue: {
    type: [String, Number],
    default: '',
  },
}

export const tabBarEmits = tabBarItemEmits

export type TabBarProps = ExtractPropTypes<typeof tabBarProps>
export type TabBarEmits = typeof tabBarEmits
