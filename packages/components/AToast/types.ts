export type ToastPositionType = 'default' | 'top' | 'bottom'

export interface ToastOptions {
  position?: ToastPositionType
  message?: string
  duration?: number
}
