import type { ColorType } from '../composables/useProps'

export type NotifyPositionType = 'default' | 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right'

export interface Options {
  color: ColorType
  position: NotifyPositionType
  content: string
  duration: number
  showIcon?: boolean
  customIcon?: boolean
  showClose?: boolean
}

export type NotifyOptions = Partial<Options>
