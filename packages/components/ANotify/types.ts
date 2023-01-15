export type NotifyPositionType = 'default' | 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right'

export type NotifyType = 'primary' | 'success' | 'info' | 'warning' | 'danger'

export interface NotifyOptions {
  type?: NotifyType
  position?: NotifyPositionType
  message?: string
  duration?: number
  showIcon?: boolean
  customIcon?: boolean
  showClose?: boolean
}
