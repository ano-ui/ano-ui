import type { ColorType } from '../composables/useProps'

export type NotifyPositionType = 'default' | 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right'

export interface NotifyOptions {
  color?: ColorType
  position?: NotifyPositionType
  content?: string
  showIcon?: boolean
  duration?: number
  customIcon?: boolean
  showClose?: boolean
}
