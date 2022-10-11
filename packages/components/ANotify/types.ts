import type { ColorType, NotifyPositionType } from '../composables/useProps'

export interface NotifyOptions {
  color?: ColorType
  position?: NotifyPositionType
  content?: string
  showIcon?: boolean
  duration?: number
  customIcon?: boolean
  showClose?: boolean
}
