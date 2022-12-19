export interface OverlayOptions {

}

export interface OverlayRef {
  show: (options?: OverlayOptions) => void
  hide: () => void
}
