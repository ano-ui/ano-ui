import type { ExtractPropTypes } from 'vue'
import { CLICK_EVENT } from '../constants'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { makeArrayProp } from '../utils'
import type { AvatarOption } from './types'

export const avatarGroupProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  max: Number,
  options: makeArrayProp<AvatarOption>(),
}
export const avatarGroupEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>
export type AvatarGroupEmits = typeof avatarGroupEmits
