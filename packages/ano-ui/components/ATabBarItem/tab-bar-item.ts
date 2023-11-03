import type { ExtractPropTypes } from 'vue'
import { CHANGE_EVENT, CLICK_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { isNumber, isString, makeNumericProp } from '../utils'

export const tabBarItemProps = {
  customClass: useCustomClassProp,
  customStyle: useCustomStyleProp,
  name: makeNumericProp(''),
  icon: String,
  url: String,
}

export type TabBarItemValueType = string | number

export const tabBarItemEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
  [UPDATE_MODEL_EVENT]: (val: TabBarItemValueType) =>
    isString(val) || isNumber(val),
  [CHANGE_EVENT]: (val: TabBarItemValueType) =>
    isString(val) || isNumber(val),
}

export type TabBarItemProps = ExtractPropTypes<typeof tabBarItemProps>
export type TabBarItemEmits = typeof tabBarItemEmits
