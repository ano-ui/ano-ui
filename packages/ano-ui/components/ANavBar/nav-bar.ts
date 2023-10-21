import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { numericProp, truthProp } from '../utils'

export const navBarProps = {
  customClass: useCustomClassProp,
  customStyle: useCustomStyleProp,
  title: String,
  height: numericProp,
  fixed: Boolean,
  zIndex: numericProp,
  border: truthProp,
  leftText: String,
  rightText: String,
  leftArrow: Boolean,
  placeholder: Boolean,
  clickable: truthProp,
}

export const navBarEmits = {
  clickLeft: (evt: MouseEvent) => evt instanceof Object,
  clickRight: (evt: MouseEvent) => evt instanceof Object,
}

export type NavBarProps = ExtractPropTypes<typeof navBarProps>
export type NavBarEmits = typeof navBarEmits
