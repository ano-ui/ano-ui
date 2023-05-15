import type { InjectionKey, Ref } from 'vue'
import type { CollapseActiveName } from '../ACollapse/types'

export interface CollapseContext {
  activeNames: Ref<CollapseActiveName[]>
  handleItemClick: (name: CollapseActiveName) => void
}

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')
