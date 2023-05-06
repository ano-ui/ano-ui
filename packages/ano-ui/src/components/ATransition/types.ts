import type { animations } from './use-transition'

export type TransitionName = keyof typeof animations

export interface AnoAnimation {
  enter: string
  leave: string
}

export interface AnoAnimations {
  [key: string]: AnoAnimation
}
