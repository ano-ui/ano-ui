import type { ExtractPropTypes } from 'vue'
import { CLICK_EVENT } from '../constants'
import { useCustomClassProp, useCustomStyleProp, useSizeProp } from '../composables'
import { makeStringProp } from '../utils'

export const useAvatarSizeProp = useSizeProp

export const avatarProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  size: useAvatarSizeProp,
  src: String,
  fit: makeStringProp<'fill' | 'contain' | 'cover'>('cover'),
}
export const avatarEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
export type AvatarEmits = typeof avatarEmits
