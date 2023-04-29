import type { ExtractPropTypes, PropType } from 'vue'
import { CLICK_EVENT } from '../constants'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import type { AvatarSize } from './types'

export const useAvatarSizeProp = {
  type: String as PropType<AvatarSize>,
  default: 'normal',
}

export const avatarProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  size: useAvatarSizeProp,
  src: String,
  fit: {
    type: String as PropType<'fill' | 'contain' | 'cover'>,
    default: 'cover',
  },
}
export const avatarEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
export type AvatarEmits = typeof avatarEmits
