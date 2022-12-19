import type { PositionType } from '../composables'

export interface PopupOptions {
  position?: PositionType
}

export interface PopupRef {
  show: (options: PopupOptions) => void
  open: () => void
  close: () => void
  opened: () => void
  closed: () => void
}
