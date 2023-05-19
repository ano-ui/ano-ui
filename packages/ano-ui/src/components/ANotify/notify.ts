import type { ExtractPropTypes, PropType } from 'vue'
import { useCustomClassProp, useCustomStyleProp, useTypeProp } from '../composables'
import { CLOSE_EVENT } from '../constants'
import { makeNumberProp } from '../utils'
import type { NotifyPositionType } from './types'
import { notifyPositionList } from './types'

export const useNotifyTypeProp = useTypeProp

export const useNotifyPositionProp = {
  type: String as PropType<NotifyPositionType>,
  validator: (value: string) =>
    notifyPositionList.includes(value as NotifyPositionType),
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
  duration: makeNumberProp(300),
  showIcon: Boolean,
  customIcon: Boolean,
  showClose: Boolean,
}

export const notifyEmits = {
  [CLOSE_EVENT]: () => true,
}

export type NotifyProps = ExtractPropTypes<typeof notifyProps>
export type NotifyEmits = typeof notifyEmits
