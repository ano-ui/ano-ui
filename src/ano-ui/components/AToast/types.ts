export type ToastPositionType = 'default' | 'top' | 'bottom'

export type ToastType = | 'success' | 'warning' | 'danger' | 'loading'
export interface ToastOptions {
  type?: ToastType
  position?: ToastPositionType
  message?: string
  duration?: number | false
}
