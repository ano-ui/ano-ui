import type { ExtractPropTypes, PropType } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { CLOSE_EVENT } from '../constants'
import type { NotifyPositionType, NotifyType } from './types'

export const useNotifyTypeProp = {
  type: String as PropType<NotifyType>,
  validator: (value: string) =>
    ['primary', 'success', 'info', 'warning', 'danger'].includes(value),
  default: 'primary',
}

export const useNotifyPositionProp = {
  type: String as PropType<NotifyPositionType>,
  validator: (value: string) =>
    ['default', 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'].includes(value),
  default: 'default',
}

export const notifyProps = {
  cc: useCustomClassProp,
  ccc: useCustomClassProp,
  cs: useCustomStyleProp,
  ccs: useCustomStyleProp,
  type: useNotifyTypeProp,
  position: useNotifyPositionProp,
  message: String,
  duration: {
    type: Number,
    default: 3000,
  },
  showIcon: Boolean,
  customIcon: Boolean,
  showClose: Boolean,
}

export const notifyEmits = {
  [CLOSE_EVENT]: () => true,
}

export type NotifyProps = ExtractPropTypes<typeof notifyProps>
export type NotifyEmits = typeof notifyEmits
