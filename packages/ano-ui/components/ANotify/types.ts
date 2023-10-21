import type { Type } from '../composables'

export const notifyPositionList = ['default', 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'] as const
export type NotifyPositionType = typeof notifyPositionList[number]

export interface NotifyOptions {
  type?: Type
  position?: NotifyPositionType
  message?: string
  duration?: number
  showIcon?: boolean
  customIcon?: boolean
  showClose?: boolean
}

export interface NotifyInst {
  show: (options?: NotifyOptions) => void
  close: () => void
}
