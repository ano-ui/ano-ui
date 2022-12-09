import type { AlignType } from '../composables'

export interface OverlayOptions {
  align?: AlignType
}

export interface OverlayRef {
  show: (options: OverlayOptions) => void
  close: (evt: MouseEvent) => void
}
