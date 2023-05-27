import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { tabBarItemEmits } from '../ATabBarItem'
import { makeNumericProp } from '../utils'

export const tabBarProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  modelValue: makeNumericProp(''),
}

export const tabBarEmits = tabBarItemEmits

export type TabBarProps = ExtractPropTypes<typeof tabBarProps>
export type TabBarEmits = typeof tabBarEmits
