import type { ExtractPropTypes } from 'vue'
import { CLICK_EVENT } from '../constants'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { makeRequiredProp } from '../utils'

export const aCollapseItemProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  title: String,
  name: makeRequiredProp(String),
  icon: String,
  disabled: Boolean,
  value: String,
  label: String,
}

export const aCollapseItemEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export type ACollapseItemProps = ExtractPropTypes<typeof aCollapseItemProps>
export type ACollapseItemEmits = typeof aCollapseItemEmits
