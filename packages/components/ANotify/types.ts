import type { NotifyPositionType, ThemeType } from '../composables/useProps'

export interface NotifyOptions {
  type?: ThemeType
  position?: NotifyPositionType
  content?: string
  showIcon?: boolean
  duration?: number
  customIcon?: boolean
  showClose?: boolean
}
